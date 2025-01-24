import React, {useEffect} from "react";
import {useParams} from "react-router-dom";


import {fetchCategory} from "../../services/mockApi";

export default function Category() {
    const { id } = useParams();
    const [category, setCategory] = React.useState(null);

    useEffect(() => {
        fetchCategory(id).then((data) => {
            setCategory(data);
        })
    }, [id]);

    if (!category) {
        return <p>Loading...</p>;
    }

    return (
        <main>
            <div>
                <a href="/">Return to categories</a>
            </div>
            <div>
                <h1>{category.pageTitle}</h1>
                <p>{category.content}</p>
                <p>Status: {category.isActive ? "Active" : "Inactive"}</p>
            </div>
        </main>
    );
}