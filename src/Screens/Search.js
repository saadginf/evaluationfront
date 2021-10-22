import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./Search.css";
const Search = () => {
  const data = [
    {
      id: 1,
      title: "Apple Opening",
      eventEdition: "Edition 3",
      bgColor: "#52C652",
      startDate: "2021-08-16",
      endDate: "2021-08-16",
      country: {
        value: 3,
        label: "USA",
      },
    },
    {
      id: 2,
      title: "Ecom Intership",
      eventEdition: "Edition 3",
      bgColor: "#52C652",
      startDate: "2021-09-16",
      endDate: "2021-09-17",
      country: {
        value: 1,
        label: "India",
      },
    },
  ];

  const columns = [
    {
      dataField: "title",
      text: "Title",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: "eventEdition",
      text: "Edition",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: "startDate",
      text: "Start Date",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: "country.label",
      text: "Country",
      align: "center",
      title: true,
      headerAlign: "center",
      filter: textFilter(),
      sort: true,
    },
  ];

  return (
    <div>
      <select className="form-control">
        <option value="#">Choose a Country</option>
        <option value="1">USA</option>
        <option value="2"> India</option>
        <option value="3">Morocco</option>
      </select>
      <div className="table-container">
        <BootstrapTable
          keyField="id"
          pagination={paginationFactory()}
          columns={columns}
          data={data}
          filter={filterFactory()}
          bordered
          headerClasses="header-class"
          noDataIndication="NO DATA"
        />
      </div>
    </div>
  );
};

export default Search;
