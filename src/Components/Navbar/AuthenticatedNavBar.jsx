import React from "react";
import { useState, useRef, useEffect } from "react";
import branchselector_logo from "../../assets/branchselector_logo.png";
import { NavLink, Link } from "react-router-dom";
import { getCurrentUser, logout } from "../../services/authService";
import { toast } from "react-toastify";

const ProfileDropDown = ({ profile, className, setMenuState }) => {
  const [state, setState] = useState(false);
  //const [menuState, setMenuState] = useState(false);
  const profileRef = useRef();

  const navigation = [
    { id: 1, title: "Dashboard", path: "/dashboard" },
    { id: 2, title: "Log out", path: "/" },
  ];

  const logoutListener = async () => {
    const toastId = toast.loading("Signing out...", {
      autoClose: false,
      draggable: true,
    });

    await logout();

    toast.update(toastId, {
    render: `Logged out successfully!`,
    type: "success",
    isLoading: false,
    autoClose: 3000,
    draggable: true,
    });
  };

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={`relative left-0 ${className}`}>
      <div className="flex items-center space-x-4">
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
          onClick={() => setState(!state)}
        >
          <img
            src={
              profile.photoURL
                ? profile.photoURL.toString()
                : "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
            }
            className="w-full h-full rounded-full"
            alt="user profile image"
          />
        </button>
        <div className="lg:hidden">
          <span className="block">
            {profile.displayName ? profile.displayName.toString() : "User"}
          </span>
          <span className="block text-sm text-gray-500">
            {profile.email.toString()}
          </span>
        </div>
      </div>
      <ul
        className={`bg-white z-50 top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setState(false);
              setMenuState(false);
            }}
          >
            {item.title === "Log out" ? (
              <button
                className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5 w-full text-left"
                onClick={logoutListener}
              >
                {item.title}
              </button>
            ) : (
              <Link
                className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
                to={item.path}
                onClick={() => {
                  //setMenuState(!menuState);
                  setState(false);
                }}
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AuthenticatedNavBar = (props) => {
  const [menuState, setMenuState] = useState(false);

  // Replace javascript:void(0) path with your path

  const [state, setState] = useState(false);
  const navRef = useRef();

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Tests", path: "tests" },
    { title: "Ebook", path: "/ebook" },
    { title: "Blog", path: "/blog" },
    { title: "Pricing", path:"pricing"},
    { title: "Appointment", path: "booking" },
    { title: "Contact Us", path: "contactus" },

  ];

  useEffect(() => {
    const body = document.body;

    // Disable scrolling
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    // Enable scrolling
    else body.classList.remove(...customBodyStyle);

    // Sticky strick
    const customStyle = ["sticky-nav", "fixed", "border-b"];
    window.onscroll = () => {
      if (window.scrollY > 80) navRef.current.classList.add(...customStyle);
      else navRef.current.classList.remove(...customStyle);
    };
  }, [state]);

  return (
    <nav ref={navRef} className="bg-white w-full top-0 z-20 font-poppins ">
      <div className="flex items-center space-x-8 justify-between  px-4   max-w-screen-xl mx-auto md:px-8">
        <div className="flex  items-center justify-center ">
          <NavLink to="/" className="flex  items-center  text-xl font-medium  ">
            <img
              src={branchselector_logo}
              className=" md:w-16 w-16 "
              alt="branchselector logo"
            />
            <h2 className=" ">BranchSelector</h2>
          </NavLink>
        </div>

        <div
          className={`bg-white lg:bg-inherit w-full  absolute z-20 right-0 top-16  p-4 lg:static  lg:block lg:border-none ${
            menuState ? "" : "hidden"
          }`}
        >
          <ul className="justify-center relative lg:right-12    items-start space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-600 hover:text-indigo-600"
                  onClick={() => setMenuState(!menuState)}
                >
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              );
            })}
          </ul>
          <ProfileDropDown
            className="mt-5 pt-5 border-t lg:hidden "
            profile={props.user}
            setMenuState={setMenuState}
            //menuState={menuState}
          />
        </div>

        <div className=" flex items-center  space-x-2 sm:space-x-6">
          <ProfileDropDown
            className="hidden lg:block "
            profile={props.user}
            setMenuState={setMenuState}
            //menuState={menuState}
          />

          <button
            className="outline-none p-2 text-gray-400 block lg:hidden"
            onClick={() => setMenuState(!menuState)}
          >
            {menuState ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AuthenticatedNavBar;
