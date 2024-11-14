import FindUs from "../FindUs";
import Login from "../Login";

const RightSidebar = () => {
    return (
        <div className="space-y-8">
            <Login></Login>      
            <FindUs></FindUs>   
        </div>
    );
};

export default RightSidebar;