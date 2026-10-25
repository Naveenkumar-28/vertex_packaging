import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

function ProductsPagination({ page, setPage, pages }) {
    return (
        <Pagination className="mt-10" data-testid="pagination">
            <PaginationContent className="gap-2">
                {/* Optional: Previous button */}
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => setPage((p) => Math.max(p - 1, 1))}
                        className={`${page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"} border border-white/10 text-white/70 hover:border-primary hover:text-white bg-transparent`}
                    />
                </PaginationItem>

                {/* Page Numbers */}
                {Array.from({ length: pages }).map((_, i) => {
                    const pageNumber = i + 1;
                    const isActive = page === pageNumber;

                    return (
                        <PaginationItem key={i}>
                            <PaginationLink
                                isActive={isActive}
                                onClick={() => setPage(pageNumber)}
                                data-testid={`page-${pageNumber}`}
                                className={`w-10 h-10 border text-sm font-semibold cursor-pointer ${isActive
                                    ? "bg-primary border-primary text-white hover:bg-primary/90"
                                    : "border-white/10 text-white/70 hover:border-primary hover:text-white bg-transparent"
                                    }`}
                            >
                                {pageNumber}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}

                {/* Optional: Next button */}
                <PaginationItem>
                    <PaginationNext
                        onClick={() => setPage((p) => Math.min(p + 1, pages))}
                        className={`${page === pages ? "pointer-events-none opacity-50" : "cursor-pointer"} border border-white/10 text-white/70 hover:border-primary hover:text-white bg-transparent`}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default ProductsPagination