import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="bg-base-200 p-2 w-11/12 mx-auto flex gap-3">
            <p className="px-3 py-1 bg-[#D72050] text-base-100">Latest</p>            
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo assumenda ipsam labore qui, illo voluptatum! Quasi molestias ex delectus!</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo assumenda ipsam labore qui, illo voluptatum! Quasi molestias ex delectus!</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo assumenda ipsam labore qui, illo voluptatum! Quasi molestias ex delectus!</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;