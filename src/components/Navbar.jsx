import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-3">
            <div></div>
            <div>
                <ul className="flex justify-center items-end gap-3 *:text-gray-500 hover:*:text-gray-700 *:font-medium">
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
                <Link to="/auth/login" className="btn btn-neutral rounded-none px-8">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
