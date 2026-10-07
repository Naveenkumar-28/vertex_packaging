import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCurrentAdmin } from "@/lib/api";

export default function ProtectedAdmin() {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await getCurrentAdmin();

                setAuthenticated(true);
            } catch {
                setAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#050816] flex items-center justify-center text-white/60">
                Checking authentication...
            </div>
        );
    }

    if (!authenticated) {
        return (
            <Navigate
                to="/admin/login"
                replace
            />
        );
    }

    return <Outlet />;
}