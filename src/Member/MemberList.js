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
  },
];
//Array of Object (idealy we will get this data from backend)
const rows = [
  {
    id: '1',
    operationalMember: "jeff Hall",
    emailId: "jeffbezoz@gmail.com",
    assessments: "internal",
    createdOn: Date.now(),
    status: "Active",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '2',
    operationalMember: "Edward Meaning",
    emailId: "EdwardMeaning53@gmail.com",
    assessments: "internal",
    createdOn: Date.now(),
    status: "Access Denaid",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '3',
    operationalMember: "William Johnsan bhai",
    emailId: "WillianJohnbhai4509@gmail.com",
    assessments: "External",
    createdOn: Date.now(),
    status: "Active",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '4',
    operationalMember: "harry robot son",
    emailId: "harrykakaji3209@zero.com",
    assessments: "External",
    createdOn: Date.now(),
    status: "Active",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '5',
    operationalMember: "joe biden",
    emailId: "joeBidenladen@gmail.com",
    assessments: "internal",
    createdOn: Date.now(),
    status: "Inactive",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '6',
    operationalMember: "Vladimir Putin",
    emailId: "vladputin007@gmail.com",
    assessments: "External",
    createdOn: Date.now(),
    status: "Active",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '7',
    operationalMember: "Anderson James",
    emailId: "Andersonvirat65@gmail.com",
    assessments: "internal",
    createdOn: Date.now(),
    status: "Active",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '8',
    operationalMember: "Virat Kohli",
    emailId: "ViratRunMachicne@icc.com",
    assessments: "internal",
    createdOn: Date.now(),
    status: "Active",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '9',
    operationalMember: "Sachin Tendulkar",
    emailId: "SachinMumbaikar123@gmail.com",
    assessments: "internal",
    createdOn: Date.now(),
    status: "Inactive",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '10',
    operationalMember: "Mahendra Singh Dhoni",
    emailId: "Mahikmatvalie@csk.com",
    assessments: "external",
    createdOn: Date.now(),
    status: "Active",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '11',
    operationalMember: "SRK",
    emailId: "srkverse@gmail.com",
    assessments: "internal",
    createdOn: Date.now(),
    status: "Inactive",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '12',
    operationalMember: "salman khan",
    emailId: "blackbug123@gmail.com",
    assessments: "internal",
    createdOn: Date.now(),
    status: "Active",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '13',
    operationalMember: "Rishabh Pant",
    emailId: "rishabhPant234@gmail.com",
    assessments: "External",
    createdOn: Date.now(),
    status: "Active",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '14',
    operationalMember: "Jasprit Bumrah",
    emailId: "yorkerking007@gmail.com",
    assessments: "internal",
    createdOn: Date.now(),
    status: "Active",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '15',
    operationalMember: "Mohammad Shami",
    emailId: "mohammadshami002@gmail.com",
    assessments: "internal",
    createdOn: Date.now(),
    status: "Active",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '16',
    operationalMember: "Rohit Sharma",
    emailId: "rosuperhitsharma234@gmail.com",
    assessments: "External",
    createdOn: Date.now(),
    status: "Inactive",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
  {
    id: '17',
    operationalMember: "Ravindra Jadeja",
    emailId: "sirjadeja123@gmail.com",
    assessments: "internal",
    createdOn: Date.now(),
    status: "Active",
    createdBy: 'rajkumar',
    updatedAt: Date.now()
  },
];
const MemberList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [orderBy, setOrderBy] = React.useState("operationalMember");

  const handleMemberListPageChange = (newPage) => {
    console.log("new Page",newPage)
    setPage(newPage);
  };
  
  const handleMemberListRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  let records = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  const tempRows = [...records]

tempRows.forEach(object => {
  delete object['createdBy']
  delete object['updatedAt']
})
console.log('tempRows',tempRows)
  React.useEffect(()=>{
    console.log('page no',page)
    // records = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    console.log("useEffect",records)
  },[page,rowsPerPage])
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
        setOrderBy={setOrderBy}
      />
    </div>
  );
};

export default MemberList;
