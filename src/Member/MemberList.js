import React, { useEffect } from "react";
import TableComponent from "../Table/TableComponent";

//We need to pass from this file
const tableHead = [
  {
    id: "operationalMember",
    disablePadding: true,
    label: "Operational Member",
  },
  {
    id: "emailId",
    disablePadding: false,
    label: "Email Id",
  },
  {
    id: "assessments",
    disablePadding: false,
    label: "Assessments",
  },
  {
    id: "createdOn",
    disablePadding: false,
    label: "Created On",
  },
  {
    id: "status",
    disablePadding: false,
    label: "Status",
  },
  {
    id: "action",
    disablePadding: false,
    label: "Action",
  }
];
//Array of Object (idealy we will get this data from backend)
const rows = [
  {
    id: '1',
    operationalMember: "jeff Hall rd Meaning rd Meaning rd Meaning rd Meaning rd Meaning rd Meaningrd Meaning rd Meaningrd Meaningvrd Meaning",
    emailId: "jeffbezoz@gmail.com",
    assessments: "internal",
    createdOn: new Date().toLocaleDateString('en-GB'),
    status: "active",
    createdBy: 'rajkumar',
    updatedAt: new Date().toLocaleDateString('en-GB')
  },
  {
    id: '2',
    operationalMember: "Edward Meaning",
    emailId: "EdwardMeaning53@gmail.com",
    assessments: "internal",
    createdOn: new Date().toLocaleDateString('en-GB'),
    status: "inactive",
    createdBy: 'rajkumar',
    updatedAt: new Date().toLocaleDateString('en-GB')
  },
  {
    id: '3',
    operationalMember: "William Johnsan bhai",
    emailId: "WillianJohnbhai4509@gmail.com",
    assessments: "External",
    createdOn: new Date().toLocaleDateString('en-GB'),
    status: "active",
    createdBy: 'rajkumar',
    updatedAt: new Date().toLocaleDateString('en-GB')
  },
  {
    id: '4',
    operationalMember: "harry robot son",
    emailId: "harrykakaji3209@zero.com",
    assessments: "External",
    createdOn: new Date().toLocaleDateString('en-GB'),
    status: "active",
    createdBy: 'rajkumar',
    updatedAt: new Date().toLocaleDateString('en-GB')
  },
  {
    id: '5',
    operationalMember: "joe biden",
    emailId: "joeBidenladen@gmail.com",
    assessments: "internal",
    createdOn: new Date().toLocaleDateString('en-GB'),
    status: "Inactive",
    createdBy: 'rajkumar',
    updatedAt: new Date().toLocaleDateString('en-GB')
  }
];
const MemberList = () => {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selected, setSelected] = React.useState([]);
  const [orderBy, setOrderBy] = React.useState("operationalMember");

  const handleMemberListPageChange = (newPage) => {
    console.log("new Page",newPage)
    setPage(newPage);
  };
  
  const handleMemberListRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    console.log("rows per page",rowsPerPage)
    setPage(1);
  };
  const onClickVisibilityIconHandler = (id) => {
    console.log("id",id)
  }

  const onClickDeleteIconHandler = (id) => {
    console.log("member on Delete click",id)
  }
  let records = rows.slice((page-1) * rowsPerPage , page * rowsPerPage )
  const tempRows = [...records]

tempRows.forEach(object => {
  delete object['createdBy']
  delete object['updatedAt']
})
  return (
    <div>
      <TableComponent
        tableHead={tableHead}
        records={records}
        handleChangePage1={handleMemberListPageChange}
        handleChangeRowsPerPage1={handleMemberListRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        totalRecords = {rows.length}
        orderBy={orderBy}
        icons = {["visibility"]}
        onClickVisibilityIconHandler1={onClickVisibilityIconHandler}
        onClickDeleteIconHandler1={onClickDeleteIconHandler}
        setOrderBy={setOrderBy}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default MemberList;
