import React from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from "@/components/ui/pagination";

// Builds: [1, "...", 4, 5, 6, 7, 8, "...", 100]
function getPageRange(current, total, siblings = 1) {
    const totalNumbers = siblings * 2 + 5; // first + last + current + 2 ellipses + siblings

    // Few pages: show all
    if (total <= totalNumbers) {
        return Array.from({ length: total }, (_, i) => i + 1);
    }

    const left = Math.max(current - siblings, 1);
    const right = Math.min(current + siblings, total);

    const showLeftDots = left > 2;
    const showRightDots = right < total - 1;

    const range = (start, end) =>
        Array.from({ length: end - start + 1 }, (_, i) => start + i);

    if (!showLeftDots && showRightDots) {
        const leftCount = 3 + siblings * 2;
        return [...range(1, leftCount), "right-dots", total];
    }

    if (showLeftDots && !showRightDots) {
        const rightCount = 3 + siblings * 2;
        return [1, "left-dots", ...range(total - rightCount + 1, total)];
    }

    return [1, "left-dots", ...range(left, right), "right-dots", total];
}


function ProductsPagination({ page, setPage, pages: totalPages }) {
    const pages = getPageRange(page, totalPages);

    const navBtn =
        "border border-white/10 text-white/70 hover:border-primary hover:text-white bg-transparent";

    return (
        <Pagination className="mt-10" data-testid="pagination">
            <PaginationContent className="flex-wrap justify-center gap-1 sm:gap-2">
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => setPage((p) => Math.max(p - 1, 1))}
                        className={`${page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"} ${navBtn}`}
                    />
                </PaginationItem>

                {pages.map((item) => {
                    if (typeof item === "string") {
                        return (
                            <PaginationItem key={item}>
                                <PaginationEllipsis className="text-white/50" />
                            </PaginationItem>
                        );
                    }

                    const isActive = page === item;
                    return (
                        <PaginationItem key={item}>
                            <PaginationLink
                                isActive={isActive}
                                onClick={() => setPage(item)}
                                data-testid={`page-${item}`}
                                className={`h-9 w-9 sm:h-10 sm:w-10 border text-sm font-semibold cursor-pointer ${isActive
                                    ? "bg-primary border-primary text-white hover:bg-primary/90"
                                    : "border-white/10 text-white/70 hover:border-primary hover:text-white bg-transparent"
                                    }`}
                            >
                                {item}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}

                <PaginationItem>
                    <PaginationNext
                        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                        className={`${page === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"} ${navBtn}`}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

export default ProductsPagination;