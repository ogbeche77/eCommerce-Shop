import React from "react";
import {
  PaginationBtn,
  PaginationContainer,
  PaginationInfo,
  PaginationRange,
} from "./Pagination.styles";

interface PaginationProps {
  page: number;
  totalPages: number;
  startIdx: number;
  endIdx: number;
  totalCount: number;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  startIdx,
  endIdx,
  totalCount,
  onPrev,
  onNext,
}) => (
  <PaginationContainer>
    <PaginationBtn onClick={onPrev} disabled={page === 1}>
      Prev
    </PaginationBtn>
    <PaginationInfo>
      Page {page} of {totalPages}
    </PaginationInfo>
    <PaginationBtn onClick={onNext} disabled={page === totalPages}>
      Next
    </PaginationBtn>
    <PaginationRange>
      Showing {startIdx}-{endIdx} of {totalCount}
    </PaginationRange>
  </PaginationContainer>
);

export default Pagination;
