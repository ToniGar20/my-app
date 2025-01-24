import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function CategoryItem({ category, onToggle }) {
    return (
        <div className={styles.categoryContainer} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <h3>{category.pageTitle}</h3>
            <p>{category.content}</p>
            <p>Status: {category.isActive ? "Active" : "Inactive"}</p>
            <div className={styles.linksContainer}>
                <Link to={`/category/${category.id}`}>View Details</Link>
                <button onClick={() => onToggle(category.id)}>Change to {!category.isActive ? "Active" : "Inactive"}</button>
            </div>
        </div>
    );
}