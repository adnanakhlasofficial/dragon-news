import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftSidebar from "../components/LayoutComponents/LeftSidebar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-8 my-12">
                <aside className="col-span-3">
                    <LeftSidebar></LeftSidebar>
                </aside>
                <section className="col-span-6">newsportal</section>
                <aside className="col-span-3">right sidebar</aside>
            </main>
        </div>
    );
};

export default HomeLayout;