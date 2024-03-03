import React, { useState,useEffect } from "react";
import Search from "./Search";
import SortDropdown from "./SortDropdown";
import { FaArrowCircleLeft,FaArrowCircleRight } from "react-icons/fa";

// Utility function to add leading zeros to single-digit numbers
const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);

const CustomerTable = () => {
  const [customers,setCustomers] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [pageno, setPageno] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    fetchData(pageno)
  }, []);

  useEffect(() => {
    setPageno(1)
    fetchData(pageno)
}, [sortBy,filterType]);

useEffect(() => {
  fetchData(pageno)
}, [pageno]);

useEffect(() => {
  const delayTimeoutId = setTimeout(() => {
    setPageno(1)
    fetchData(pageno)
  }, 1000);

  return () => clearTimeout(delayTimeoutId);
}, [searchTerm]);

  function pagination(val) {
    if (val === 1) {
      if (pageno < pageCount) {
        setPageno(pageno+ 1);
      }
    } else {
      if (pageno > 1) {
        setPageno(pageno - 1);
      }
    }
  }

  function fetchData(pageNumber) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ offset: pageNumber,search: searchTerm,filter: sortBy,filterType:filterType})
    };
  
    fetch('http://localhost:3001/getcustomerdetailsByRange', requestOptions)
      .then(response => response.json())
      .then(data => {
        setCustomers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

      fetch('http://localhost:3001/getcustomerdetailsByFilterCount', requestOptions)
      .then(response => response.json())
      .then(data => {
        setPageCount(data[0]["count"]/20);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  }

  return (
    <div>
      <h2>Customer Data</h2>
      <div className="search-and-fiter-container">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} filterType={filterType} setFilterType={setFilterType} />
      </div>
      <table className="customer-table">
        <thead>
          <tr>
            <th rowSpan={2}>S.No</th>
            <th rowSpan={2}>Customer Name</th>
            <th rowSpan={2}>Age</th>
            <th rowSpan={2}>Phone</th>
            <th rowSpan={2}>Location</th>
            <th colSpan={2}> 
              Created At
            </th>
          </tr>
          <tr>
            <th>
              Date
            </th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{((pageno-1)*20)+index+1}</td>
              <td>{customer.customer_name}</td>
              <td>{customer.age}</td>
              <td>{customer.phone}</td>
              <td>{customer.location}</td>
              <td>
                <span>
                  {addLeadingZero(new Date(customer.created_at).getDate())}
                </span>
                /<span>&nbsp;</span>
                <span>
                  {addLeadingZero(new Date(customer.created_at).getMonth() + 1)}
                </span>
                /<span>&nbsp;</span>
                <span>{new Date(customer.created_at).getFullYear()}</span>&nbsp;
                <span>&nbsp;</span>
              </td>
              <td>
              <span>
                  {new Date(customer.created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(sortedData.length / recordsPerPage)}
        onPageChange={handlePageChange}
      /> */}

      {/* <div>
        <button onClick={() => pagination(-1)}>left </button>
        <button>{pageno}</button>
        <button onClick={() => pagination(1)}>right</button>
      </div> */}
      <div className="bottom-container">
          <div className="filter-container">
          <FaArrowCircleLeft className="left-icon "  onClick={() => pagination(-1)}/>
                                <p className="pageno-para">{pageno}</p>
                                <FaArrowCircleRight className="left-icon"  onClick={() => pagination(1)}/>
          </div>
      </div>
    </div>
  );
};

export default CustomerTable;
