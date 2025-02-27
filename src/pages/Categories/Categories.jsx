import React, { useEffect, useState } from "react";
import { changeCategoryActiveStatus, fetchCategories } from "../../services/mockApi";
import CategoryCard from "../../components/CategoryCard";
import styles from "./styles.module.css"

export default function Categories() {
    const [categories, setCategories] = useState([]); // Estado de las categorías
    const [searchText, setSearchText] = useState(""); // Estado de input de texto
    const [showActive, setShowActive] = useState(false); // Estado del checkbox

    // Carga todas las categorías
    useEffect(() => {
        fetchCategories().then(setCategories);
    }, []);

    // Crear función que maneje el estado del filtro de texto y checkbox
    const filteredCategories = categories.filter((category) => { // Filtran categorías en función del texto del input
        const matchesSearch = category.pageTitle
            .toLowerCase()
            .includes(searchText.toLowerCase());

        const matchesActive = showActive ? category.isActive : true; // Se miran categorías activas

        return matchesSearch && matchesActive; // Devolución de ambos resultados
    });

    // Función que actualiza "isActive en una categoría"
    const handleToggle = (id) => {
        // los ... lo que hacen es recoger una copia del objeto actual y luego seteo su campo, si no va bien devuelvo la misma categoría
        setCategories((categories) =>
            categories.map((category) =>
                category.id === id ? { ...category, isActive: !category.isActive } : category
            )
        );

        // Actualizar el estado de la categoría modificada
        changeCategoryActiveStatus(id).then(response => console.log(response)); // Llamada a la API para cambiar el valor
    }

    return (
        <>
            <header className={styles.header}>
                <input
                    type="text"
                    placeholder="Search a category by title"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <div>
                    <input
                        type="checkbox"
                        checked={showActive}
                        onChange={(e) => setShowActive(e.target.checked)}
                    />
                    <label>Filter Active Categories</label>
                </div>
            </header>

            <main>
                {filteredCategories.length == 0 && (
                    <p>Ops! No results were found</p>
                )}
                {filteredCategories.map((category) => (
                    <CategoryCard key={category.id} category={category} onToggle={handleToggle}/>
                ))}
            </main>
        </>
    );
}