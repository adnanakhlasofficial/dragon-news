import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";

const NewsCard = (props = {}) => {
    const { singleNews } = props || {};
    return (
        <div className="rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-4">
            {/* Header */}
            <div className="flex items-center mb-4">
                <img
                    className="w-10 rounded-full"
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
            <div className="my-3">
                <img
                    className="w-full h-48 object-cover rounded-md"
                    src={singleNews.thumbnail_url}
                    alt="Article thumbnail"
                />
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-3">
                {singleNews.details.slice(0, 100)}...
                <span className="text-blue-600 font-medium cursor-pointer">
                    {" "}
                    Read More
                </span>
            </p>

            {/* Rating and Views */}
            <div className="flex items-center justify-between text-gray-500">
                <div className="flex items-center">
                    <FaStar className="text-yellow-500 mr-1" />
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
