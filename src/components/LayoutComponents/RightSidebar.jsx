import FindUs from "../FindUs";
import Login from "../Login";

const RightSidebar = () => {
    return (
        <div>
            <Login>
                <h2 className="font-medium">Login With</h2>
            </Login>
            <FindUs></FindUs>
        </div>
    );
};

export default RightSidebar;
