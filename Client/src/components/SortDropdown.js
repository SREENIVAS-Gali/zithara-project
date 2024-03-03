import React from "react";
import { CiFilter } from "react-icons/ci";
import Form from 'react-bootstrap/Form';

const SortDropdown = ({ sortBy, setSortBy, filterType, setFilterType }) => {

  const renderSortOrderOptions = () => {
    if (sortBy === "TIME" || sortBy === "DATE") {
      return (
        <>
          <option value="ASC">Latest</option>
          <option value="DESC">Oldest</option>
        </>
      );
    } else {
      // If sortBy is not TIME or DATE, hide the options
      return null;
    }
  };
  return (
    <div className="filter-container">
      {/* Sorting dropdown */}
      <div className="sort-dropdown filter-container">
        <Form.Select className="selectEl" aria-label="Sort By" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="TIME">Time</option>
          <option value="DATE">Date</option>
        </Form.Select>
        <CiFilter />
      </div>

      <div className="sort-order-dropdown">
        <Form.Select className={`selectEl ${filterType ? 'active' : ''}`} aria-label="Sort Order" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="">Sort Order</option>
          {renderSortOrderOptions()}
        </Form.Select>
      </div>
    </div>
  );
};

export default SortDropdown;
