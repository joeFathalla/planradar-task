import { useMemo } from "react";

export const usePagination = ({
    totalPages,
    currentPage,
    siblingCount = 1,
}: {
    totalPages: number;
    currentPage: number;
    siblingCount?: number;
}) => {
    const DOTS = "...";

    return useMemo(() => {
        const range = (start: number, end: number) =>
            Array.from({ length: end - start + 1 }, (_, idx) => start + idx);

        if (totalPages <= 5) {
            return range(1, totalPages);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

        const showLeftDots = leftSiblingIndex > 2;
        const showRightDots = rightSiblingIndex < totalPages - 2;

        if (!showLeftDots && showRightDots) {
            return [...range(1, rightSiblingIndex), DOTS, totalPages];
        }

        if (showLeftDots && !showRightDots) {
            return [1, DOTS, ...range(leftSiblingIndex, totalPages)];
        }

        if (showLeftDots && showRightDots) {
            return [1, DOTS, ...range(leftSiblingIndex, rightSiblingIndex), DOTS, totalPages];
        }
    }, [totalPages, currentPage, siblingCount]);
};