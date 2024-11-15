import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightSidebar from "../components/LayoutComponents/RightSidebar";
import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {
    const {data} = useLoaderData();
    const news = data[0];
    console.log(news);
    return (
        <>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-8 my-12">
                <section className="col-span-9">
                    <h2 className="font-medium text-lg mb-4">Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className="col-span-3">
                    <RightSidebar></RightSidebar>
                </aside>
            </main>
        </>
    );
};

export default NewsDetails;