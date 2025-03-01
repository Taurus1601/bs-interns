import { BsGlobe2 } from "react-icons/bs";
import branchselector_logo from "../../assets/branchselector_logo.png";
import NortonLogo from "../../assets/NortonLogo.svg"
import { Link } from "react-router-dom";

export default () => {
  const footerNavs = [
    {
      label: "Resources",
      items: [
        {
          href: "contactus",
          name: "Contact Us",
        },
        {
          href: "booking",
          name: "Book Appointment",
        },
        {
          href: "ebook",
          name: "Ebooks",
        },
        {
          href: "blog",
          name: "Blogs",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "disclaimer",
          name: "Disclaimer ",
        },
        {
          href: "terms",
          name: "Terms of Service",
        },
        {
          href: "privacy",
          name: "Privacy Policy",
        },
        {
          href: "refund",
          name: "Refund Policy"
        },
      ],
    },
  ];

  return (
    <footer className="text-white bg-gray-800 ">
      <div className=" max-w-screen-xl px-4 py-5  mx-auto md:px-8">
        <div className="gap-6 justify-between md:flex">
          <div className="flex-1">
            <div className="max-w-xs">
              <img
                src={branchselector_logo}
                alt="branchselector logo"
                className="w-24"
              />
              <p className="leading-relaxed mt-2 text-[15px] font-poppins">
                Join BranchSelector to take your future in your hands!
              </p>

              <div className="my-5 p-2 bg-gray-200 rounded-sm inline-flex items-center max-w-full">
                <p className="text-black font-bold font-poppins mr-1 text-xs">Site Secured by</p>
                <img className="w-14" src={NortonLogo} alt="Norton Secured Logo" />
              </div>

            </div>
          </div>
          <div className="flex-1 mt-10 space-y-6 justify-end  sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4 mr-20" key={idx}>
                <h4 className="text-primary font-medium">{item.label}</h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <Link
                      to={el.href}
                      className="hover:underline hover:text-indigo-600"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            &copy; 2011 - 2024 BranchSelector. All rights reserved.<br/> BranchSelector is operated by <a href = 'https:\\www.thesurepass.com'>Sure Pass Academy</a>
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a
                  href="https://twitter.com/EducatorAnanth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    class="svg-icon w-6 h-6 text-blue-400"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="none"
                      d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"
                    ></path>
                  </svg>
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a
                  href="https://www.facebook.com/educatorananth/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    class="svg-icon w-6 h-6 text-blue-700"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="none"
                      d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                    ></path>
                  </svg>
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a
                  href="https://ananthprabhu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGlobe2 />
                </a>
              </li>

              {/* <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="javascript:void()">
                  <svg
                    class="svg-icon w-6 h-6 text-red-600"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="none"
                      d="M9.797,2.214C9.466,2.256,9.134,2.297,8.802,2.338C8.178,2.493,7.498,2.64,6.993,2.935C5.646,3.723,4.712,4.643,4.087,6.139C3.985,6.381,3.982,6.615,3.909,6.884c-0.48,1.744,0.37,3.548,1.402,4.173c0.198,0.119,0.649,0.332,0.815,0.049c0.092-0.156,0.071-0.364,0.128-0.546c0.037-0.12,0.154-0.347,0.127-0.496c-0.046-0.255-0.319-0.416-0.434-0.62C5.715,9.027,5.703,8.658,5.59,8.101c0.009-0.075,0.017-0.149,0.026-0.224C5.65,7.254,5.755,6.805,5.948,6.362c0.564-1.301,1.47-2.025,2.931-2.458c0.327-0.097,1.25-0.252,1.734-0.149c0.289,0.05,0.577,0.099,0.866,0.149c1.048,0.33,1.811,0.938,2.218,1.888c0.256,0.591,0.33,1.725,0.154,2.483c-0.085,0.36-0.072,0.667-0.179,0.993c-0.397,1.206-0.979,2.323-2.295,2.633c-0.868,0.205-1.519-0.324-1.733-0.869c-0.06-0.151-0.161-0.418-0.101-0.671c0.229-0.978,0.56-1.854,0.815-2.831c0.243-0.931-0.218-1.665-0.943-1.837C8.513,5.478,7.816,6.312,7.579,6.858C7.39,7.292,7.276,8.093,7.426,8.672c0.047,0.183,0.269,0.674,0.23,0.844c-0.174,0.755-0.372,1.568-0.587,2.31c-0.223,0.771-0.344,1.562-0.56,2.311c-0.1,0.342-0.096,0.709-0.179,1.066v0.521c-0.075,0.33-0.019,0.916,0.051,1.242c0.045,0.209-0.027,0.467,0.076,0.621c0.002,0.111,0.017,0.135,0.052,0.199c0.319-0.01,0.758-0.848,0.917-1.094c0.304-0.467,0.584-0.967,0.816-1.514c0.208-0.494,0.241-1.039,0.408-1.566c0.12-0.379,0.292-0.824,0.331-1.24h0.025c0.066,0.229,0.306,0.395,0.485,0.52c0.56,0.4,1.525,0.77,2.573,0.523c1.188-0.281,2.133-0.838,2.755-1.664c0.457-0.609,0.804-1.313,1.07-2.112c0.131-0.392,0.158-0.826,0.256-1.241c0.241-1.043-0.082-2.298-0.384-2.981C14.847,3.35,12.902,2.17,9.797,2.214"
                    ></path>
                  </svg>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <style jsx>{`
          .svg-icon path,
          .svg-icon polygon,
          .svg-icon rect {
            fill: currentColor;
          }
        `}</style>
      </div>
    </footer>
  );
};
