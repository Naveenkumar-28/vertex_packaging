
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

export default function Pagination({
    page,
    totalPages,
    total,
    limit = 10,
    onPageChange,
}) {
    if (!totalPages || totalPages <= 1) {
        return null;
    }

    const start = (page - 1) * limit + 1;
    const end = Math.min(page * limit, total);

    const getPages = () => {
        const pages = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }

            return pages;
        }

        pages.push(1);

        if (page > 3) {
            pages.push("...");
        }

        const startPage = Math.max(2, page - 1);
        const endPage = Math.min(
            totalPages - 1,
            page + 1
        );

        for (
            let i = startPage;
            i <= endPage;
            i++
        ) {
            pages.push(i);
        }

        if (page < totalPages - 2) {
            pages.push("...");
        }

        pages.push(totalPages);

        return pages;
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">

            {/* Result count */}
            <div className="text-sm text-white/40">
                Showing{" "}
                <span className="text-white/70">
                    {start}
                </span>{" "}
                to{" "}
                <span className="text-white/70">
                    {end}
                </span>{" "}
                of{" "}
                <span className="text-white/70">
                    {total}
                </span>
            </div>

            {/* Pagination */}
            <div className="flex items-center gap-1">

                {/* Previous */}
                <button
                    type="button"
                    onClick={() =>
                        onPageChange(page - 1)
                    }
                    disabled={page === 1}
                    className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/70 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition"
                    aria-label="Previous page"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Pages */}
                {getPages().map((item, index) =>
                    item === "..." ? (
                        <span
                            key={`dots-${index}`}
                            className="w-9 h-9 flex items-center justify-center text-white/30"
                        >
                            ...
                        </span>
                    ) : (
                        <button
                            key={item}
                            type="button"
                            onClick={() =>
                                onPageChange(item)
                            }
                            className={`w-9 h-9 flex items-center justify-center text-sm border transition ${page === item
                                ? "bg-primary border-primary text-white"
                                : "border-white/10 text-white/60 hover:border-primary hover:text-primary"
                                }`}
                        >
                            {item}
                        </button>
                    )
                )}

                {/* Next */}
                <button
                    type="button"
                    onClick={() =>
                        onPageChange(page + 1)
                    }
                    disabled={page === totalPages}
                    className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/70 hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition"
                    aria-label="Next page"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>

            </div>
        </div>
    );
}