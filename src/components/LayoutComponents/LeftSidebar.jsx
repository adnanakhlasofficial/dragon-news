import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data.data.news_category));
    }, []);

    return (
        <div className="sticky top-6">
            <h2 className="font-medium">All Category ({categories.length})</h2>
            <div className="flex flex-col gap-2 mt-6">
                {categories.map((category) => (
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "btn hover:bg-gray-800 bg-gray-500 text-base-200" : "btn hover:bg-gray-800 hover:text-base-200"
                        }
                        key={category.category_id}
                        to={`/category/${category.category_id}`}
                    >
                        {category.category_name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default LeftSidebar;
