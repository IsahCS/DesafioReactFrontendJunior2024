import React from "react";

interface FilterButtonProps {
  selectedFilter: string;
  filterValue: string;
  setCurrentFilter: (filter: string) => void;
  setSelectedFilter: (filter: string) => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  selectedFilter,
  filterValue,
  setCurrentFilter,
  setSelectedFilter,
}) => {
  return (
    <li>
      <a
        className={selectedFilter === filterValue ? "selected" : ""}
        href={`#/${filterValue.toLowerCase()}`}
        onClick={() => {
          setCurrentFilter(filterValue);
          setSelectedFilter(filterValue);
        }}
      >
        {filterValue.charAt(0).toUpperCase() +
          filterValue.slice(1).toLowerCase()}
      </a>
    </li>
  );
};
