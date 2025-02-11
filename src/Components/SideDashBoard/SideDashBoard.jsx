import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

//Sidebar in the results page.
const SideDashBoard = (props) => {
  let userName = props.userName;
  let userMailId = props.userMailId;
  const navigate = useNavigate();
  return (

    <div
      className={`fixed z-50 border-r-4 border-t-4  bg-white shadow-[#dce7ff] mt-20  text-black flex flex-col pt-12 pb-20 items-center w-72  duration-300 left-0 top-0 bottom-0 h-screen justify-between ${props.className} `}
    >
      <div className="flex flex-col items-center  ">
        <img
          src={props.ProfilePic}
          alt="profile image"
          className="h-28 w-28 rounded-full object-cover "
        />
        <h2 className="pt-5 font-semibold text-2xl">{userName}</h2>
        <h2 className="text-sm">{userMailId}</h2>
      </div>

      <div className="flex flex-col items-center pt-2 font-semibold mb-10 text-lg ">
        <ul className="space-y-5 ">
          <button className="flex items-baseline gap-2 hover:bg-primary rounded-md px-3 hover:text-white ">
            <FontAwesomeIcon icon="fa-solid fa-chart-line" size="sm" />
            <h2>Dashboard</h2>
          </button>
          <button
            className="flex items-baseline gap-2 hover:bg-primary rounded-md px-3 hover:text-white "
            onClick={() => navigate("/")}
          >
            <FontAwesomeIcon icon="fa-solid fa-house " size="sm" />
            <h2>Home</h2>
          </button>
          <button className="flex items-baseline gap-1 hover:bg-primary rounded-md px-3 hover:text-white ">
            <FontAwesomeIcon icon="fa-solid fa-graduation-cap" size="sm" />
            <h2>Tests</h2>
          </button>
        </ul>
      </div>

      <div className="pb-16 text-lg font-semibold pr-10">

        <button className="flex items-baseline  gap-1 py-1 bg-red-500 hover:bg-red-600 rounded-md mt-5 px-3 text-white ">
          <FontAwesomeIcon icon="fa-solid fa-lock" size="sm" />
          <h2>Log Out</h2>
        </button>
      </div>
    </div>
  );
};

export default SideDashBoard;
