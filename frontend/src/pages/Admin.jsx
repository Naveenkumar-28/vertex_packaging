import { useEffect, useState } from "react";
import { fetchSubmissions, fetchSubmissionStats, logoutAdmin } from "@/lib/api";
import { Mail, Building2, Phone, MessageSquare, Inbox, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Pagination from "@/components/Pagination";

const TYPES = ["all", "quote", "contact", "enquiry"];

const LIMIT = 5;

export default function Admin() {
  const [type, setType] = useState("all");
  const [items, setItems] = useState({
    all: { type: 'all', data: [] },
    quote: { type: 'quote', data: [] },
    contact: { type: 'contact', data: [] },
    enquiry: { type: 'enquiry', data: [] }
  })
  const [stats, setStats] = useState({ total: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  // const [pagination, setPagination] = useState({ page: 1, limit: LIMIT, total: 35, totalPages: 35 / LIMIT, });

  // Fetch stats only once
  useEffect(() => {
    const loadStats = async () => {
      try {
        const response = await fetchSubmissionStats();

        if (response?.success) {
          setStats(response.data);
        }
      } catch (error) {
        console.error("Stats error:", error);

        if (error?.response?.status === 401) {
          toast.error("Your session has expired");
          navigate("/admin/login", { replace: true });
          return;
        }
        toast.error("Failed to load statistics");
      }
    };

    loadStats();
  }, [navigate]);

  // Fetch submissions whenever type or page changes
  useEffect(() => {
    const loadSubmissions = async () => {
      try {
        setLoading(true);

        const response = await fetchSubmissions(type === "all" ? undefined : type)
        console.log(response);

        if (response?.success) {
          setItems((prev) => {
            if (prev[type]?.type === type) {
              return {
                ...prev,
                [type]: {
                  ...prev[type],
                  type: type,
                  data: response.data,
                },
              };
            }
            return prev;
          });
        } else {
          toast.error(
            response?.message || "Failed to load submissions"
          );
        }
      } catch (error) {
        console.error("Submissions error:", error);

        if (error?.response?.status === 401) {
          toast.error("Your session has expired");
          navigate("/admin/login", { replace: true });
          return;
        }
        toast.error("Network error - try again later");
      } finally {
        setLoading(false);
      }
    };

    loadSubmissions();
  }, [type, navigate]);

  const handleLogout = async () => {
    try {
      await logoutAdmin();
    }
    catch (error) {
      console.error("Logout error:", error);
      toast.error("Network error - try again later");
    } finally {
      navigate("/admin/login", {
        replace: true,
      });
    }
  };

  return (
    <div data-testid="admin-page" className="pt-12 pb-24">
      <section className="container-pad pt-12">
        <div className="flex items-center justify-between ">
          <SectionHeader eyebrow="Vertex Packaging · Admin" title="Submissions inbox." subtitle="All quote requests, contact messages and enquiries — in one place." />
          <button disabled={loading} onClick={handleLogout} data-testid="admin-logout-btn" className="btn-primary cursor-pointer">
            {!loading && <ArrowUpRight className="w-4 h-4" />}
            {loading ? "Logout..." : "Logout"}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            ["Total", stats.total],
            ["Quote", stats.quote || 0],
            ["Contact", stats.contact || 0],
            ["Enquiry", stats.enquiry || 0],
          ].map(([l, v]) => (
            <div key={l} className="glass p-5" data-testid={`stat-${l.toLowerCase()}`}>
              <div className="text-xs uppercase tracking-widest text-white/40">{l}</div>
              <div className="display text-3xl font-bold text-primary mt-2">{v}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-6">
          {TYPES.map((t) => (
            <button key={t} onClick={() => setType(t)} data-testid={`admin-tab-${t}`} className={`text-sm px-4 py-2 border ${type === t ? "bg-primary border-primary text-white" : "border-white/10 text-white/70"}`}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="glass p-12 text-center text-white/60">Loading…</div>
        ) : items[type].data.length === 0 ? (
          <div className="glass p-12 text-center text-white/60 flex flex-col items-center gap-3" data-testid="admin-empty">
            <Inbox className="w-10 h-10 text-white/30" />
            No submissions yet.
          </div>
        ) : (
          <div className="space-y-3" data-testid="admin-list">
            {items[type].data.map((it) => (
              <div key={it.id} className="glass p-5" data-testid={`admin-item-${it.id}`}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-widest px-2 py-1 bg-primary text-white">{it.type}</span>
                  <span className="text-xs text-white/40">{new Date(it.createdAt).toLocaleString()}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  {it.name && <Row icon={Building2} label={it.name + (it.company ? ` · ${it.company}` : "")} />}
                  {it.email && <Row icon={Mail} label={it.email} />}
                  {it.phone && <Row icon={Phone} label={it.phone} />}
                  {it.product_type && <Row icon={MessageSquare} label={`Product: ${it.product_type}`} />}
                  {it.quantity && <Row icon={MessageSquare} label={`Qty: ${it.quantity}`} />}
                </div>
                {(it.message || it.requirement) && (
                  <p className="text-sm text-white/65 mt-4 pt-4 border-t border-white/[0.06]">
                    {it.message || it.requirement}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
        {/* <Pagination
          page={pagination.page}
          totalPages={pagination.totalPages}
          total={pagination.total}
          limit={pagination.limit}
          onPageChange={(newPage) =>
            setPagination((prev) => ({
              ...prev,
              page: newPage,
            }))
          }
        /> */}
      </section>
    </div>
  );
}

function Row({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 text-white/75">
      <Icon className="w-3.5 h-3.5 text-primary" /> {label}
    </div>
  );
}
