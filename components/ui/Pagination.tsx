import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

function pageHref(page: number) {
  return page === 1 ? "/articles" : `/articles/page/${page}`;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;

  // Build page number list with ellipsis
  const pages: (number | "…")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 2 && i <= currentPage + 2)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "…") {
      pages.push("…");
    }
  }

  return (
    <nav aria-label="Article pagination" className="flex items-center justify-center gap-1 mt-12">
      {/* Prev */}
      {currentPage > 1 ? (
        <Link
          href={pageHref(currentPage - 1)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-foreground-dark hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" />
          Previous
        </span>
      )}

      {/* Page numbers */}
      <div className="flex items-center gap-1 mx-2">
        {pages.map((p, i) =>
          p === "…" ? (
            <span key={`ellipsis-${i}`} className="px-2 py-2 text-sm text-gray-400">
              …
            </span>
          ) : (
            <Link
              key={p}
              href={pageHref(p)}
              aria-current={p === currentPage ? "page" : undefined}
              className={`inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                p === currentPage
                  ? "bg-[#ef436b] text-white"
                  : "text-foreground hover:text-foreground-dark hover:bg-gray-100"
              }`}
            >
              {p}
            </Link>
          )
        )}
      </div>

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={pageHref(currentPage + 1)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-foreground-dark hover:bg-gray-100 transition-colors"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 cursor-not-allowed">
          Next
          <ChevronRight className="w-4 h-4" />
        </span>
      )}
    </nav>
  );
}
