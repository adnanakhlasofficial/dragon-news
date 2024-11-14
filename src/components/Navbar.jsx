import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center my-3">
            <div></div>
            <div>
                <ul className="flex justify-center items-end gap-3 text-gray-500">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Career</Link>
                    </li>
                </ul>
            </div>
            <div className="flex gap-3 justify-end items-center">
                <FaUserCircle size={40} />
                <button className="btn rounded-none bg-[#403F3F] text-base-200 px-8">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
