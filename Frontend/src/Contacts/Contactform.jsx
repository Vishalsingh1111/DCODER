import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { baseUrl } from '../Baseurl';

export default function Example() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phonenumber: data.phonenumber,
            message: data.message,
        };
        await axios.post(`${baseUrl}/contact/contactInfo`, userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Message Send Successfully');
                    reset();

                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };

    const handleBackPage = () => {
        window.history.back();
    };


    return (
        <div className="dark:text-white pb-2 bg-gray-100 pt-1">
            <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="mx-auto pt-10 md:max-w-3xl max-w-xl sm:mt-10 md:p-20 p-20 md:pt-10 pt-10 bg-white shadow-lg dark:bg-slate-800 dark:border-2">
                <div className="mx-auto max-w-2xl text-center mb-10">
                    <h2 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Send a meassage</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="firstname"
                                id="first-name"
                                autoComplete="given-name"
                                {...register("firstname")}
                                className="dark:bg-slate-900 dark:text-white block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="lastname"
                                id="last-name"
                                autoComplete="family-name"
                                {...register("lastname")}
                                className="block w-full dark:bg-slate-900 dark:text-white rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                {...register("email")}
                                className="block w-full dark:bg-slate-900 dark:text-white rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            Phone number
                        </label>
                        <div className="relative mt-2.5">
                            <input
                                type="tel"
                                name="phonenumber"
                                id="phone-number"
                                autoComplete="tel"
                                {...register("phonenumber")}
                                className="block w-full dark:bg-slate-900 dark:text-white rounded-md border-0 px-3.5 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                {...register("message")}
                                className="block w-full dark:bg-slate-900 dark:text-white rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex justify-center space-x-5">
                    <button
                        type="submit"
                        className="block w-auto rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={handleBackPage}
                        className="block w-auto rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
}
