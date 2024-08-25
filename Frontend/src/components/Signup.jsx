import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import { EyeSlashIcon } from '@heroicons/react/24/outline';
import { baseUrl } from '../Baseurl';

const SignupPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleClose = (e) => {
        e.preventDefault();
        navigate('/');
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        const userInfo = {
            firstName,
            lastName,
            email,
            phone,
            password,
        };

        try {
            const res = await axios.post(`${baseUrl}/user/signup`, userInfo);
            if (res.data) {
                toast.success('Registered Successfully');
                localStorage.setItem('Users', JSON.stringify(res.data.user));
                navigate('/', { replace: true });
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        } catch (err) {
            if (err.response) {
                console.error(err);
                toast.error('Error: ' + err.response.data.message);
            }
        }
    };
    const handleGoogleLogin = () => {
        window.location.href = `${baseUrl}/auth/google`;
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-xl bg-white p-8 mt-7 shadow-lg rounded-lg">
                <Toaster />
                <h2 className="text-2xl font-semibold pb-4 text-center">Signup</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4 flex justify-between space-x-4">
                        <div className='w-full'>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className='w-full'>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type={passwordVisible ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="absolute inset-y-0 right-0 flex items-center px-3 pt-8"
                        >
                            {passwordVisible ? (
                                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                            ) : (
                                <FaEye className="h-5 w-5 text-gray-500" />
                            )}
                        </button>
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type={confirmPasswordVisible ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                            className="absolute inset-y-0 right-0 flex items-center px-3 pt-8"
                        >
                            {confirmPasswordVisible ? (
                                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                            ) : (
                                <FaEye className="h-5 w-5 text-gray-500" />
                            )}
                        </button>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <div className="my-4 flex items-center justify-center">
                    <hr className="flex-grow border-blue-900" />
                    <span className="px-2 text-blue-900">OR</span>
                    <hr className="flex-grow border-blue-900" />
                </div>

                <div className="flex justify-center">
                    <button onClick={handleGoogleLogin} className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline">
                        <img src="./images/google.png" alt="Google" className="h-5 w-5 mr-2" />
                        Login with Google
                    </button>
                </div>
                <div className="mt-4 flex justify-between">
                    <a
                        className="inline-block align-baseline font-bold text-sm text-red-500 hover:underline"
                        href="/"
                        onClick={handleClose}
                    >
                        Cancel
                    </a>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:underline" href="/Login">
                        Already a user? Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
