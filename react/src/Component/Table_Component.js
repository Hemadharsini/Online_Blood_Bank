import React, { useEffect, useState }  from "react";
import axios from "axios";
import BootStrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Modal, Button} from "react-bootstrap";
import BloodbankService_User from '../Service/BloodbankService_User'
//import Json from 'react-Json'

const Table_Component = (props) =>
{
  //console.log(props.data+" Inside")
  console.log(JSON.stringify(props))
  //console.log(Object.keys(props)+" Inside")
  //console.log("Values")
  //console.log(Object.values(props))
  //console.log(JSON.stringify(Object.values(props)))

  const [Bloodbanks, setBloodbanks] = useState([]);

  const getBloodbankData = () =>
  {
    const data = Object.values(props)[0]
    setBloodbanks(props.data)
    console.log(Object.keys(data))
    //console.log("In  bloodbank")
    console.log(Bloodbanks)
  };
  useEffect(()=>{
    getBloodbankData();
  },[]);

  const columns = [
    {dataField: "bloodBankID", text: "Blood Bank Id"},
    {dataField: "bloodGroup", text: "Sample Group"},
    {dataField: "quantity", text: "No.of.Packs"},
    {dataField: "address", text: "Location"},
    {dataField: "mobile", text: "Mobile Number"}

  ]
  return(
    <div>
      <h1>Table</h1>
      <BootStrapTable
         keyField = "bloodBankID"
         data = {Bloodbanks}
         columns = {columns}
         //pagination = {paginationFactory()}
      />

      
    </div>
  )

};
export default Table_Component;