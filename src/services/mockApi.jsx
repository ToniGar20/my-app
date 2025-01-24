import data from "../data/data.json";

export function fetchCategories (){ // Recuperar todas las categorías
    return new Promise((resolve) => setTimeout(() => resolve(data), 500));
}

export function fetchCategory(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const category = data.find((item) => item.id === parseInt(id)); // Revisa el id de la categoría con el del parámetro
            if (category) {
                resolve(category); // Devuelve la categoría si se encuentra
            } else {
                reject(new Error("Category not found")); // Lanza un error si no existe
            }
        }, 500); // Simula un retraso de 500ms
    });
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