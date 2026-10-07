
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "@/lib/api";

export default function AdminLogin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            await loginAdmin(email, password);

            navigate("/admin", {
                replace: true,
            });
        } catch (error) {
            setError(
                "Invalid email or password"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#050816] px-4">
            <div className="w-full max-w-md">
                <div className="glass p-8">
                    <div className="mb-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                            Vertex Packaging
                        </p>

                        <h1 className="display text-3xl font-bold text-white mt-2">
                            Admin Login
                        </h1>

                        <p className="text-white/50 text-sm mt-2">
                            Sign in to access the admin dashboard.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label className="block text-sm text-white/70 mb-2">
                                Email
                            </label>

                            <input
                                type="text"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="admin@vertex.in"
                                required
                                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white outline-none focus:border-primary"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-white/70 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                placeholder="Enter your password"
                                required
                                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white outline-none focus:border-primary"
                            />
                        </div>

                        {error && (
                            <div className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 p-3">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-primary text-white font-medium disabled:opacity-50"
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}