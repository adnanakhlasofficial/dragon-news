import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);


    return (
        <div className="grid grid-cols-3 py-3 items-center">
            <div className="space-y-1">
                <h2>{user?.displayName}</h2>
                <h2>{user?.email}</h2>
            </div>
            <div>
                <ul className="flex justify-center items-end gap-3 *:text-gray-500 hover:*:text-gray-700 *:font-medium">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/career">Career</Link>
                    </li>
                </ul>
            </div>
            <div className="flex gap-3 justify-end items-center">
                {
                    user && user?.email ? <div>
                        <img className="ring-2 ring-offset-2 ring-[#1F2937] w-10 h-10 rounded-full" src={user && user?.photoURL} alt="" />
                    </div> :  <FaUserCircle size={40} />
                }
               
                {
                    user && user?.email ? <button onClick={logoutUser} className="btn btn-active rounded-none px-8">Logout</button> : <Link
                    to="/auth/login"
                    className="btn btn-neutral rounded-none px-8"
                >
                    Login
                </Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;
