import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { baseUrl } from '../Baseurl';

const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phonenumber: data.phonenumber,
            message: data.message,
        };
        try {
            const response = await axios.post(`${baseUrl}/contact/contactInfo`, userInfo);
            if (response.data) {
                toast.success('Message Sent Successfully');
                reset();
            }
        } catch (err) {
            if (err.response) {
                toast.error(`Error: ${err.response.data.message}`);
            } else {
                toast.error('An error occurred. Please try again.');
            }
        }
    };

    return (
        <>
            <div className="py-16 px-8 ">
                <Toaster />
                <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:pt-20">
                        {/* Contact Info */}
                        <div>
                            <h2 className="md:text-6xl text-4xl font-semibold text-gray-800 mb-8 dark:text-white">Get In Touch</h2>
                            <p className="text-gray-600 mb-6 dark:text-white">
                                If you have any query, You can contact us.
                            </p>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-center space-x-3">
                                    <span className="text-gray-900"><i className="fas fa-map-marker-alt"></i></span>
                                    <span className='dark:text-white'>Patna, Bihar, India</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-gray-900"><i className="fas fa-envelope"></i></span>
                                    <span className='dark:text-white'>dcoder@gmail.com</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-gray-900"><i className="fas fa-phone"></i></span>
                                    <span className='dark:text-white'>+91 1020304050</span>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            {...register("firstname", { required: "First name is required" })}
                                            className="w-full p-3 border border-gray-300 rounded-md dark:text-white dark:bg-slate-800 dark:border-none"
                                        />
                                        {errors.firstname && <p className="text-red-600 text-sm">{errors.firstname.message}</p>}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            {...register("lastname", { required: "Last name is required" })}
                                            className="w-full p-3 border border-gray-300 rounded-md dark:text-white dark:bg-slate-800 dark:border-none"
                                        />
                                        {errors.lastname && <p className="text-red-600 text-sm">{errors.lastname.message}</p>}
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                                        className="w-full p-3 border border-gray-300 rounded-md dark:text-white dark:bg-slate-800 dark:border-none"
                                    />
                                    {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        {...register("phonenumber", { required: "Phone number is required" })}
                                        className="w-full p-3 border border-gray-300 rounded-md dark:text-white dark:bg-slate-800 dark:border-none"
                                    />
                                    {errors.phonenumber && <p className="text-red-600 text-sm">{errors.phonenumber.message}</p>}
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Message"
                                        {...register("message", { required: "Message is required" })}
                                        className="w-full p-3 border border-gray-300 rounded-md h-32 dark:text-white dark:bg-slate-800 dark:border-none"
                                    ></textarea>
                                    {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full p-3 bg-red-600 text-white shadow-lg rounded hover:shadow-red-500/30 shadow-black/30 "
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
