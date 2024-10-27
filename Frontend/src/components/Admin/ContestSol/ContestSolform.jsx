// import React, { useState } from "react";
// import axios from "axios";
// import { baseUrl } from "../../../Baseurl";

// const FormElementInput = () => {
//     const [formData, setFormData] = useState({
//         id: "",
//         header: "",
//         code: "",
//         explanation: "",
//         image: "",
//         category: ""
//     });

//     const [validationErrors, setValidationErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const validateForm = () => {
//         const requiredFields = ["id", "header", "code", "image", "category"];
//         let errors = {};
//         for (let field of requiredFields) {
//             if (!formData[field]) {
//                 errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
//             }
//         }
//         setValidationErrors(errors);
//         return Object.keys(errors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!validateForm()) {
//             return;
//         }

//         try {
//             await axios.post(`${baseUrl}/contestsol`, formData, {
//                 headers: { "Content-Type": "application/json" }
//             });
//             alert("Content uploaded successfully!");
//             setFormData({
//                 id: "",
//                 header: "",
//                 code: "",
//                 explanation: "",
//                 image: "",
//                 category: ""
//             });
//             setValidationErrors({});
//         } catch (error) {
//             console.error("Error submitting content:", error);
//             alert("Error submitting content.");
//         }
//     };

//     return (
//         <section className="mx-5 dark:bg-gray-800">
//             <div className="mb-10">
//                 <h1 className="text-center text-3xl text-black">Enter Required Details</h1>
//             </div>
//             <div className="container mx-auto border-2 p-10 rounded-xl">
//                 <form onSubmit={handleSubmit} className="flex flex-wrap -mx-4">
//                     <DefaultColumn>
//                         <DefaultInput1
//                             value={formData.id}
//                             onChange={handleChange}
//                             error={validationErrors.id}
//                         />
//                     </DefaultColumn>
//                     <DefaultColumn>
//                         <DefaultInput2
//                             value={formData.header}
//                             onChange={handleChange}
//                             error={validationErrors.header}
//                         />
//                     </DefaultColumn>
//                     <DefaultColumn>
//                         <DefaultInput3
//                             value={formData.code}
//                             onChange={handleChange}
//                             error={validationErrors.code}
//                         />
//                     </DefaultColumn>
//                     <DefaultColumn>
//                         <DefaultInput4
//                             value={formData.explanation}
//                             onChange={handleChange}
//                             error={validationErrors.explanation}
//                         />
//                     </DefaultColumn>
//                     <DefaultColumn>
//                         <DefaultInput5
//                             value={formData.category}
//                             onChange={handleChange}
//                             error={validationErrors.category}
//                         />
//                     </DefaultColumn>

//                     <DefaultColumn>
//                         <DefaultInput6
//                             value={formData.image}
//                             onChange={handleChange}
//                             error={validationErrors.image}
//                         />
//                     </DefaultColumn>

//                     <div className="w-full px-4 text-center">
//                         <button type="submit" className="bg-red-500 shadow-lg hover:shadow-red-500/30 shadow-black/30  text-white py-3 px-10 rounded-md">
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </section>
//     );
// };

// const DefaultColumn = ({ children }) => {
//     return (
//         <div className="w-full px-4 md:w-1/2 lg:w-1/3">
//             <div className="mb-8">{children}</div>
//         </div>
//     );
// };

// const DefaultInput1 = ({ value, onChange, error }) => {
//     return (
//         <>
//             <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Enter Unique ID
//                 <span className="text-red-500">*</span>
//             </label>
//             <input
//                 type="number"
//                 name="id"
//                 value={value}
//                 onChange={onChange}
//                 placeholder="Enter ID"
//                 className={`w-full bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 py-3 px-4 text-gray-700 dark:text-gray-300 outline-none transition duration-150 ease-in-out focus:border-red-500 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-900 ${error ? 'border-red-500' : ''}`}
//             />
//             {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//         </>
//     );
// };

// const DefaultInput2 = ({ value, onChange, error }) => {
//     return (
//         <>
//             <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Enter Header
//                 <span className="text-red-500">*</span>
//             </label>
//             <textarea
//                 name="header"
//                 value={value}
//                 onChange={onChange}
//                 placeholder="Enter header"
//                 rows={4}
//                 className={`w-full bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 py-3 px-4 text-gray-700 dark:text-gray-300 outline-none transition duration-150 ease-in-out focus:border-red-500 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-900 resize-none ${error ? 'border-red-500' : ''}`}
//             />
//             {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//         </>
//     );
// };

// const DefaultInput3 = ({ value, onChange, error }) => {
//     return (
//         <>
//             <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Enter Code
//                 <span className="text-red-500">*</span>
//             </label>
//             <textarea
//                 name="code"
//                 value={value}
//                 onChange={onChange}
//                 placeholder="Enter code"
//                 rows={4}
//                 className={`w-full bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 py-3 px-4 text-gray-700 dark:text-gray-300 outline-none transition duration-150 ease-in-out focus:border-red-500 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-900 resize-none ${error ? 'border-red-500' : ''}`}
//             />
//             {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//         </>
//     );
// };

// const DefaultInput4 = ({ value, onChange, error }) => {
//     return (
//         <>
//             <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Enter Explanation
//             </label>
//             <textarea
//                 name="explanation"
//                 value={value}
//                 onChange={onChange}
//                 placeholder="Enter explanation"
//                 rows={4}
//                 className={`w-full bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 py-3 px-4 text-gray-700 dark:text-gray-300 outline-none transition duration-150 ease-in-out focus:border-red-500 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-900 resize-none ${error ? 'border-red-500' : ''}`}
//             />
//             {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//         </>
//     );
// };

// const DefaultInput5 = ({ value, onChange, error }) => {
//     return (
//         <>
//             <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Enter Category
//                 <span className="text-red-500">*</span>
//             </label>
//             <textarea
//                 name="category"
//                 value={value}
//                 onChange={onChange}
//                 placeholder="Enter category"
//                 rows={4}
//                 className={`w-full bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 py-3 px-4 text-gray-700 dark:text-gray-300 outline-none transition duration-150 ease-in-out focus:border-red-500 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-900 resize-none ${error ? 'border-red-500' : ''}`}
//             />
//             {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//         </>
//     );
// };

// const DefaultInput6 = ({ value, onChange, error }) => {
//     return (
//         <>
//             <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Enter Image Link
//                 <span className="text-red-500">*</span>
//             </label>
//             <textarea
//                 name="image"
//                 value={value}
//                 onChange={onChange}
//                 placeholder="Enter image link"
//                 rows={4}
//                 className={`w-full bg-white dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 py-3 px-4 text-gray-700 dark:text-gray-300 outline-none transition duration-150 ease-in-out focus:border-red-500 dark:focus:border-red-400 focus:ring focus:ring-red-200 dark:focus:ring-red-900 resize-none ${error ? 'border-red-500' : ''}`}
//             />
//             {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//         </>
//     );
// };

// export default FormElementInput;


import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../Baseurl";

const FormElementInput = () => {
    const [formData, setFormData] = useState({
        id: "",
        header: "",
        code: "",
        explanation: "",
        code2: "",
        explanation2: "",
        code3: "",
        explanation3: "",
        code4: "",
        explanation4: "",
        code5: "",
        explanation5: "",
        code6: "",
        explanation6: "",
        code7: "",
        explanation7: "",
        code8: "",
        explanation8: "",
        image: "",
        category: ""
    });

    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const requiredFields = [
            "id", "header", "code", "image", "category",
            "code2", "explanation2", "code3", "explanation3",
            "code4", "explanation4", "code5", "explanation5",
            "code6", "explanation6", "code7", "explanation7",
            "code8", "explanation8"
        ];
        let errors = {};
        for (let field of requiredFields) {
            if (!formData[field]) {
                errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
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
            await axios.post(`${baseUrl}/contestsol`, formData, {
                headers: { "Content-Type": "application/json" }
            });
            alert("Content uploaded successfully!");
            setFormData({
                id: "",
                header: "",
                code: "",
                explanation: "",
                code2: "",
                explanation2: "",
                code3: "",
                explanation3: "",
                code4: "",
                explanation4: "",
                code5: "",
                explanation5: "",
                code6: "",
                explanation6: "",
                code7: "",
                explanation7: "",
                code8: "",
                explanation8: "",
                image: "",
                category: ""
            });
            setValidationErrors({});
        } catch (error) {
            console.error("Error submitting content:", error);
            alert("Error submitting content.");
        }
    };

    return (
        <section className="mx-5 dark:bg-gray-800">
            <div className="mb-10">
                <h1 className="text-center text-3xl text-black">Enter Required Details</h1>
            </div>
            <div className="container mx-auto border-2 p-10 rounded-xl">
                <form onSubmit={handleSubmit} className="flex flex-wrap -mx-4">
                    <DefaultColumn>
                        <DefaultInput1
                            value={formData.id}
                            onChange={handleChange}
                            error={validationErrors.id}
                        />
                    </DefaultColumn>
                    <DefaultColumn>
                        <DefaultInput2
                            value={formData.header}
                            onChange={handleChange}
                            error={validationErrors.header}
                        />
                    </DefaultColumn>
                    <DefaultColumn>
                        <DefaultInput3
                            value={formData.code}
                            onChange={handleChange}
                            error={validationErrors.code}
                        />
                    </DefaultColumn>
                    <DefaultColumn>
                        <DefaultInput4
                            value={formData.explanation}
                            onChange={handleChange}
                            error={validationErrors.explanation}
                        />
                    </DefaultColumn>
                    <DefaultColumn>
                        <DefaultInput5
                            value={formData.category}
                            onChange={handleChange}
                            error={validationErrors.category}
                        />
                    </DefaultColumn>

                    <DefaultColumn>
                        <DefaultInput6
                            value={formData.image}
                            onChange={handleChange}
                            error={validationErrors.image}
                        />
                    </DefaultColumn>

                    {Array.from({ length: 8 }, (_, index) => (
                        <>
                            <DefaultColumn key={`code${index + 2}`}>
                                <DefaultInput3
                                    value={formData[`code${index + 2}`]}
                                    onChange={handleChange}
                                    error={validationErrors[`code${index + 2}`]}
                                />
                            </DefaultColumn>
                            <DefaultColumn key={`explanation${index + 2}`}>
                                <DefaultInput4
                                    value={formData[`explanation${index + 2}`]}
                                    onChange={handleChange}
                                    error={validationErrors[`explanation${index + 2}`]}
                                />
                            </DefaultColumn>
                        </>
                    ))}

                    <div className="w-full px-4 text-center">
                        <button type="submit" className="bg-red-500 shadow-lg hover:shadow-red-500/30 shadow-black/30 text-white py-3 px-10 rounded-md">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

// DefaultColumn Component
const DefaultColumn = ({ children }) => (
    <div className="w-full md:w-1/2 px-4 mb-4">
        {children}
    </div>
);

// DefaultInput Components
const DefaultInput1 = ({ value, onChange, error }) => (
    <div>
        <input
            type="text"
            name="id"
            placeholder="Enter ID"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput2 = ({ value, onChange, error }) => (
    <div>
        <input
            type="text"
            name="header"
            placeholder="Enter Header"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput3 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="code"
            placeholder="Enter Code"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput4 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="explanation"
            placeholder="Enter Explanation"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput5 = ({ value, onChange, error }) => (
    <div>
        <input
            type="text"
            name="category"
            placeholder="Enter Category"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput6 = ({ value, onChange, error }) => (
    <div>
        <input
            type="text"
            name="image"
            placeholder="Enter Image URL"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

export default FormElementInput;
