import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";

const NewsFeed = () => {
    const { data:news } = useLoaderData();
    
    return (
        <div>
            <h2 className="font-medium">Dragon News Home ({news.length})</h2>
            <div className="mt-6 space-y-4">
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default NewsFeed;
