import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className="flex justify-center items-center gap-2 flex-col py-2">
            <div className="logo">
                <img className="w-80" src={logo} alt="Logo" />
            </div>
            <h2 className="text-gray-500">Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;
