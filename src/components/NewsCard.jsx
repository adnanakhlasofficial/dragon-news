import { FaEye, FaShareAlt } from "react-icons/fa";
import ReactStars from "react-stars";

const NewsCard = (props = {}) => {
    const { singleNews } = props || {};
    return (
        <div className="rounded overflow-hidden shadow-lg bg-white border border-gray-200 grid place-content-center divide-y-[1px] *:p-4 ">
            {/* Header */}
            <div className="flex items-center w-full bg-[#F3F3F3]">
                <img
                    className="w-10 h-10 rounded-full"
                    src={singleNews.author.img}
                    alt={singleNews.author.name}
                />
                <div className="ml-3">
                    <p className="text-gray-900 font-semibold">
                        {singleNews.author.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                        {new Date(
                            singleNews.author.published_date
                        ).toLocaleDateString()}
                    </p>
                </div>
                <div className="ml-auto">
                    <button className="text-gray-500 hover:text-gray-700">
                        <FaShareAlt />
                    </button>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
                {singleNews.title}
            </h3>

            {/* Image */}
            <div>
                <img
                    className="w-full h-96 object-contain rounded-md"
                    src={singleNews.thumbnail_url}
                    alt="Article thumbnail"
                />
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm">
                {singleNews.details.slice(0, 100)}...
                <span className="text-blue-600 font-medium cursor-pointer">
                    {" "}
                    Read More
                </span>
            </p>

            {/* Rating and Views */}
            <div className="flex items-center justify-between text-gray-500">
                <div className="flex items-center">
                    <ReactStars
                        value={singleNews.rating.number}
                        count={5}
                        size={24}
                        color2={"#FF8C47"}
                        edit={false}
                    />
                    <span className="font-semibold">
                        {singleNews.rating.number}
                    </span>
                    <span className="ml-1">({singleNews.rating.badge})</span>
                </div>
                <div className="flex items-center">
                    <FaEye className="mr-1" />
                    <span>{singleNews.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
