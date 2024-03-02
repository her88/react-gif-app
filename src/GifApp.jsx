import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {

    const [categories, setCategories] = useState(['Pokemon']);

    const onAddCategory = (newCategory) => {
        if (findCategory(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // setCategories([...categories, 'Digimon']);
        // setCategories( cat => [...cat, 'Power Rangers'])
    }

    const findCategory = (newCategory) => {
        return categories.map(c => c.toUpperCase()).includes(newCategory.toUpperCase());
    }

    return (
        <>
            <h1>Gif App</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
