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
            "id", "header", "category",
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

                    <DefaultColumn>
                        <DefaultInput7
                            value={formData.code2}
                            onChange={handleChange}
                            error={validationErrors.code2}
                        />
                    </DefaultColumn>
                    <DefaultColumn>
                        <DefaultInput8
                            value={formData.explanation2}
                            onChange={handleChange}
                            error={validationErrors.explanation2}
                        />
                    </DefaultColumn>

                    <DefaultColumn>
                        <DefaultInput9
                            value={formData.code3}
                            onChange={handleChange}
                            error={validationErrors.code3}
                        />
                    </DefaultColumn>
                    <DefaultColumn>
                        <DefaultInput10
                            value={formData.explanation3}
                            onChange={handleChange}
                            error={validationErrors.explanation3}
                        />
                    </DefaultColumn>

                    <DefaultColumn>
                        <DefaultInput11
                            value={formData.code4}
                            onChange={handleChange}
                            error={validationErrors.code4}
                        />
                    </DefaultColumn>
                    <DefaultColumn>
                        <DefaultInput12
                            value={formData.explanation4}
                            onChange={handleChange}
                            error={validationErrors.explanation4}
                        />
                    </DefaultColumn>

                    <DefaultColumn>
                        <DefaultInput13
                            value={formData.code5}
                            onChange={handleChange}
                            error={validationErrors.code5}
                        />
                    </DefaultColumn>
                    <DefaultColumn>
                        <DefaultInput14
                            value={formData.explanation5}
                            onChange={handleChange}
                            error={validationErrors.explanation5}
                        />
                    </DefaultColumn>

                    <DefaultColumn>
                        <DefaultInput15
                            value={formData.code6}
                            onChange={handleChange}
                            error={validationErrors.code6}
                        />
                    </DefaultColumn>
                    <DefaultColumn>
                        <DefaultInput16
                            value={formData.explanation6}
                            onChange={handleChange}
                            error={validationErrors.explanation6}
                        />
                    </DefaultColumn>

                    <DefaultColumn>
                        <DefaultInput17
                            value={formData.code7}
                            onChange={handleChange}
                            error={validationErrors.code7}
                        />
                    </DefaultColumn>
                    <DefaultColumn>
                        <DefaultInput18
                            value={formData.explanation7}
                            onChange={handleChange}
                            error={validationErrors.explanation7}
                        />
                    </DefaultColumn>

                    <DefaultColumn>
                        <DefaultInput19
                            value={formData.code8}
                            onChange={handleChange}
                            error={validationErrors.code8}
                        />
                    </DefaultColumn>
                    <DefaultColumn>
                        <DefaultInput20
                            value={formData.explanation8}
                            onChange={handleChange}
                            error={validationErrors.explanation8}
                        />
                    </DefaultColumn>

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

const DefaultInput7 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="code2"
            placeholder="Enter Code"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput8 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="explanation2"
            placeholder="Enter Explanation"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput9 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="code3"
            placeholder="Enter Code"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput10 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="explanation3"
            placeholder="Enter Explanation"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput11 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="code4"
            placeholder="Enter Code"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput12 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="explanation4"
            placeholder="Enter Explanation"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput13 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="code5"
            placeholder="Enter Code"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput14 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="explanation5"
            placeholder="Enter Explanation"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput15 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="code6"
            placeholder="Enter Code"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput16 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="explanation6"
            placeholder="Enter Explanation"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput17 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="code7"
            placeholder="Enter Code"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput18 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="explanation7"
            placeholder="Enter Explanation"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput19 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="code8"
            placeholder="Enter Code"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

const DefaultInput20 = ({ value, onChange, error }) => (
    <div>
        <textarea
            name="explanation8"
            placeholder="Enter Explanation"
            value={value}
            onChange={onChange}
            className="w-full border p-2 rounded h-24"
        />
        {error && <p className="text-red-500">{error}</p>}
    </div>
);

export default FormElementInput;
