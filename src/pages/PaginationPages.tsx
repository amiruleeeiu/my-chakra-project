import { useState } from "react";
import Pagination from "../components/Pagination";

function PaginationPages() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Assume there are 10 pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Add logic to fetch data for the selected page
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default PaginationPages;
