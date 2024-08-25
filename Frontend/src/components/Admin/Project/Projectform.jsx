import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../Baseurl";

const FormElementInput = () => {
    const [formData, setFormData] = useState({
        id: "",
        header: "",
        text: "",
        statement: "",
        substatement1: "",
        substatement2: "",
        substatement3: "",
        code1: "",
        code2: "",
        code3: "",
        code4: "",
        statement2: "",
        feature: "",
        explain: "",
        note: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        category: "",
        figtitle: "",
        link1: "",
        link2: "",
    });

    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const requiredFields = ["id", "header", "category", "code1"];
        let errors = {};
        for (let field of requiredFields) {
            if (!formData[field]) {
                errors[field] = `${field} is required`;
            }
        }
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            await axios.post(`${baseUrl}/project`, formData, {
                headers: { "Content-Type": "application/json" }
            });
            alert("Content Uploaded Successfully!");
            setFormData({
                id: "",
                header: "",
                text: "",
                statement: "",
                substatement1: "",
                substatement2: "",
                substatement3: "",
                code1: "",
                code2: "",
                code3: "",
                code4: "",
                statement2: "",
                feature: "",
                explain: "",
                note: "",
                image1: "",
                image2: "",
                image3: "",
                image4: "",
                category: "",
                figtitle: "",
                link1: "",
                link2: "",
            });
            setValidationErrors({});
        } catch (error) {
            console.error("Error submitting note:", error);
            alert("Error, Fill Required Details");
        }
    };

    return (
        <section className="mx-5 dark:bg-gray-800">
            <div className="mb-10">
                <h1 className="text-center text-3xl text-slate-500">Enter Required Details</h1>
            </div>
            <div className="container mx-auto p-10 border-2 rounded-xl text-left">
                <form onSubmit={handleSubmit} className="flex flex-wrap -mx-4">
                    {Object.keys(formData).map((key) => (
                        <DefaultColumn key={key}>
                            <DefaultInput
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                label={key.charAt(0).toUpperCase() + key.slice(1)}
                                error={validationErrors[key]}
                            />
                        </DefaultColumn>
                    ))}
                    <div className="w-full px-4 text-center">
                        <button type="submit" className="bg-red-500 text-white py-3 px-10 rounded-md">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

const DefaultColumn = ({ children }) => {
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-8">{children}</div>
        </div>
    );
};

const DefaultInput = ({ name, value, onChange, label, error }) => {
    const isRequired = name === "id" || name === "header" || name === "category" || name === "code1";
    const isTextarea = !["links", "images", "id"].includes(name.toLowerCase());

    return (
        <>
            <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                {label}{isRequired && <span className="text-red-500">*</span>}
            </label>
            {isTextarea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={`Enter ${label.toLowerCase()}`}
                    rows={3} // Adjust rows as needed
                    className="w-full bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 py-3 px-4 text-gray-700 dark:text-gray-300 outline-none transition duration-150 ease-in-out focus:border-blue-500 dark:focus:border-blue-400 focus:ring focus:ring-blue-200 dark:focus:ring-blue-900 resize-none"
                />
            ) : (
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className="w-full bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 py-3 px-4 text-gray-700 dark:text-gray-300 outline-none transition duration-150 ease-in-out focus:border-blue-500 dark:focus:border-blue-400 focus:ring focus:ring-blue-200 dark:focus:ring-blue-900"
                />
            )}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </>
    );
};

export default FormElementInput;
