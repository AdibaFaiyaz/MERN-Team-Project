import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 text-slate-100">
      <div className="flex flex-wrap items-center justify-between mx-10 p-2">
        <Link to="/" className=" font-bold text-4xl ">
          Dine
        </Link>
        <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <Link
            to="/"
            className="block py-2 pl-3 pr-4  font-semibold text-xl  rounded md:bg-transparent"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 pl-3 pr-4 font-semibold text-xl rounded md:bg-transparent"
          >
            About
          </Link>
          <Link
            to="/login"
            className="block py-2 pl-3 pr-4 font-semibold text-xl rounded md:bg-transparent"
          >
            Login
          </Link>
          <Link
            to="/reserve"
            className="block py-2 pl-3 pr-4 font-semibold text-xl rounded md:bg-transparent"
          >
            Restaurants
          </Link>
          <Link
            to="/contact"
            className="block py-2 pl-3 pr-4 font-semibold text-xl rounded md:bg-transparent"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
