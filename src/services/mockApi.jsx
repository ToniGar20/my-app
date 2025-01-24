import data from "../data/data.json";

export function fetchCategories (){ // Recuperar todas las categorías
    return new Promise((resolve) => setTimeout(() => resolve(data), 500));
}

export function changeCategoryActiveStatus(id) {
    return new Promise(() => {
        const category = data.find((category) => category.id === id);
        if (category) {
            category.isActive = !category.isActive;
        }
        console.log(category)
    })
}