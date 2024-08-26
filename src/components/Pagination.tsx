import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage > totalPages - 3) {
        pageNumbers.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <Flex justifyContent="center" paddingX={{ base: 4, md: 0 }}>
      <HStack spacing={{ base: 1, md: 2 }}>
        <IconButton
          icon={<ChevronLeftIcon boxSize={{ base: 4, md: 6 }} />}
          onClick={() => onPageChange(currentPage - 1)}
          isDisabled={currentPage === 1}
          aria-label="Previous Page"
          variant="outline"
          borderColor="gray.300"
          w={{ base: 8, md: 10 }}
          h={{ base: 8, md: 10 }}
        />
        {pageNumbers.map((page, index) =>
          typeof page === "number" ? (
            <Button
              w={{ base: 8, md: 10 }}
              h={{ base: 8, md: 10 }}
              key={index}
              onClick={() => onPageChange(page)}
              variant={currentPage === page ? "solid" : "outline"}
              colorScheme={currentPage === page ? "blue" : "gray"}
              borderColor={currentPage === page ? "transparent" : "gray.300"}
              borderWidth="1px"
              fontSize={{ base: "sm", md: "md" }}
            >
              {page}
            </Button>
          ) : (
            <Box
              key={index}
              w={{ base: 8, md: 10 }}
              h={{ base: 8, md: 10 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize={{ base: "md", md: "xl" }}>...</Text>
            </Box>
          )
        )}
        <IconButton
          icon={<ChevronRightIcon boxSize={{ base: 4, md: 6 }} />}
          onClick={() => onPageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages}
          aria-label="Next Page"
          variant="outline"
          borderColor="gray.300"
          w={{ base: 8, md: 10 }}
          h={{ base: 8, md: 10 }}
        />
      </HStack>
    </Flex>
  );
};

export default Pagination;
