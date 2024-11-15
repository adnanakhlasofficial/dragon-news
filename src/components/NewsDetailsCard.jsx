import { Link } from "react-router-dom";

const NewsDetailsCard = ({news}) => {

    const {title, details, image_url, category_id} = news;
    
    return (
        <>
            <div className="card bg-base-100 border-2 p-6 space-y-5 rounded-2xl">
                <figure>
                    <img
                        src={image_url}
                        alt="Shoes"
                        className="rounded-lg"
                    />
                </figure>
                <div className="card-body p-0 space-y-2">
                    <h2 className="card-title text-gray-800">{title}</h2>
                    <p className="text-gray-500">{details}</p>
                    <div className="card-actions">
                        <Link to={`/category/${category_id}`} className="btn btn-error text-base-300 rounded-none">All news in this category</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsDetailsCard;
