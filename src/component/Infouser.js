import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  useParams, useSearchParams,} from "react-router-dom";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { createSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { addUser } from "./store/slice/UserInfoSlice";
function Infouser() {
    // const uerInfo = useSelector((state) => state.userInfo.users);
  
  const [searchParams] = useSearchParams();
 
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const body = searchParams.get("body");
  


  const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname, params) =>
      navigate({ pathname, search: `?${createSearchParams(params)}` });
  };

  const navigateSearch = useNavigateSearch();

 

//   const handleNavigate = (data) => {
//     console.log();
//     navigateSearch("/infouser"
//     , {
//       id: data.id + 1,
//       name: data.name,
//       age: data.age,
//       classm: data.classm,
//       subject: data.subject,
//       school: data.school,
//     }
//     );
//   };

  return (
    <div className="App">
 <h1>This is About </h1>
     <h1>   id= {id} </h1> 

     <h1>    title= {title} </h1> 
     <h1>    body= {body} </h1> 
    
     {/* <button type="button" onClick={handleback}>back</button>
     <button type="button" onClick={handlehome}>Home Page</button> */}
    </div>
  );
}

export default Infouser;
