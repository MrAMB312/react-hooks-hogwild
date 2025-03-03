import React, { useState } from "react";

function NewHogForm({ onAddHog }) {
    const [newHog, setNewHog] = useState({
        name: "",
        specialty: "",
        weight: "",
        greased: false,
        "highest medal achieved": "",
        image: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNewHog((prevHog) => ({
            ...prevHog,
            [name]: name === "greased" ? value === "true" : value,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        onAddHog(newHog);

        setNewHog({
            name: "",
            specialty: "",
            weight: "",
            greased: false,
            "highest medal achieved": "",
            image: "",
        });
    }

    return (
        <form className="new-hog-form" onSubmit={handleSubmit}>
            <h3>Add a new hog to our database here!</h3>
            <label>
                Name:
                <input type="text" name="name" value={newHog.name} onChange={handleChange} required />
            </label>
            <label>
                Specialty:
                <input type="text" name="specialty" value={newHog.specialty} onChange={handleChange} required />
            </label>
            <label>
                Weight:
                <input type="text" name="weight" value={newHog.weight} onChange={handleChange} required />
            </label>
            <label>
                Greased?
                <select name="greased" value={newHog.greased} onChange={handleChange}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </label>
            <label>
                Highest Medal Achieved:
                <input type="text" name="highest medal achieved" value={newHog["highest medal achieved"]} onChange={handleChange} required />
            </label>
            <label>
                Image URL:
                <input type="text" name="image" value={newHog.image} onChange={handleChange} required />
            </label>
            <input type="submit" value="Add New Hog" />
        </form>
    )
}

export default NewHogForm;