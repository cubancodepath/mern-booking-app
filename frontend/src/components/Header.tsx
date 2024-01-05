import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <Link to="/">
          <span className="text-3xl text-white font-bold tracking-tight">
            MernHolidays.com
          </span>
        </Link>
        <span className="flex space-x-2">
          <Link
            to="/sing-in"
            className="bg-white flex items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
          >
            Sing In
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
