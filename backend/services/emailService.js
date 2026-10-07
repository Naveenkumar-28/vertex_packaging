const { Resend } = require("resend");

const isEnabled = () => {
  return Boolean(
    process.env.RESEND_API_KEY &&
    process.env.EMAIL_TO
  );
};

const getResend = () => {
  return new Resend(process.env.RESEND_API_KEY);
};

const row = (label, value) => {
  if (!value) {
    return "";
  }

  return `
    <tr>
      <td style="padding:8px 0;color:#6b7280;font-size:13px;width:140px;">
        ${label}
      </td>
      <td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;">
        ${value}
      </td>
    </tr>
  `;
};

const buildHtml = (submission) => {
  const typeLabel = (
    submission.type || "submission"
  ).toUpperCase();

  const rows = [
    row("Name", submission.name),
    row("Company", submission.company),
    row("Email", submission.email),
    row("Phone", submission.phone),
    row("Product", submission.product_type),
    row("Quantity", submission.quantity),
  ].join("");

  const bodyText =
    submission.requirement ||
    submission.message ||
    "";

  const bodyHtml = bodyText
    ? `
      <div style="
        margin-top:24px;
        padding:16px;
        background:#f9fafb;
        border-left:3px solid #ff6b00;
        color:#0f172a;
        font-size:14px;
        line-height:1.6;
      ">
        ${bodyText}
      </div>
    `
    : "";

  return `
    <div style="
      font-family:Arial,Helvetica,sans-serif;
      max-width:600px;
      margin:0 auto;
      background:#ffffff;
    ">

      <div style="
        background:#050816;
        padding:24px;
        color:#ffffff;
      ">
        <div style="
          font-size:11px;
          letter-spacing:2px;
          color:#ff6b00;
          text-transform:uppercase;
        ">
          New ${typeLabel}
        </div>

        <div style="
          font-size:22px;
          font-weight:700;
          margin-top:6px;
        ">
          Vertex Packaging
        </div>
      </div>

      <div style="padding:24px;">

        <table style="
          width:100%;
          border-collapse:collapse;
        ">
          ${rows}
        </table>

        ${bodyHtml}

        <p style="
          margin-top:28px;
          color:#6b7280;
          font-size:12px;
        ">
          Sent automatically from ${process.env.DOMIN_NAME} —
          reply directly to respond to the lead.
        </p>

      </div>
    </div>
  `;
};

const sendSubmissionEmail = async (submission) => {
  if (!isEnabled()) {
    console.log(
      "Resend skipped: RESEND_API_KEY or TO_EMAIL not configured."
    );

    return null;
  }

  try {
    const resend = getResend();

    const typeLabel = (
      submission.type || "submission"
    ).charAt(0).toUpperCase() +
      (submission.type || "submission").slice(1);

    const subjectWho =
      submission.name ||
      submission.email ||
      "Anonymous";

    const emailData = {
      from:
        process.env.EMAIL_FROM ||
        "onboarding@resend.dev",

      to: [process.env.EMAIL_TO],

      subject:
        `New ${typeLabel} from ${subjectWho}`,

      html: buildHtml(submission),
    };

    // Only add replyTo when customer email exists
    if (submission.email) {
      emailData.replyTo = submission.email;
    }

    const result = await resend.emails.send(emailData);

    const emailId = result?.data?.id || null;

    console.log(
      `Resend OK · id=${emailId} · type=${submission.type}`
    );

    return emailId;
  } catch (error) {
    console.error(
      "Resend failed:",
      error?.message || error
    );

    return null;
  }
};

module.exports = {
  sendSubmissionEmail,
};
