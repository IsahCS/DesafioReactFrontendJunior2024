import React from "react";
import { Link } from "react-router-dom";

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
      <Link
        className={selectedFilter === filterValue ? "selected" : ""}
        to={`#/${filterValue.toLowerCase()}`}
        onClick={() => {
          setCurrentFilter(filterValue);
          setSelectedFilter(filterValue);
        }}
      >
        {filterValue.charAt(0).toUpperCase() +
          filterValue.slice(1).toLowerCase()}
      </Link>
    </li>
  );
};
