import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import avatar1 from '/avatar.avif';
import avatar2 from '/avatar1.avif';
import avatar3 from '/avatar2.avif';

const ContactSection = () => {
    return (
        <section className="py-20 dark:bg-slate-900 text-center mx-5 ">
            <div className="container mx-auto p-8 lg:max-w-[73%] md:max-w-[80%] bg-white border border-gray-300 dark:border-none rounded-xl dark:bg-slate-800 dark:border-none">
                <div className="flex justify-center mb-4">

                    <img
                        className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 -ml-4 first:ml-0"
                        src={avatar1}
                        alt="Avatar 1"
                    />
                    <img
                        className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 -ml-4"
                        src={avatar2}
                        alt="Avatar 2"
                    />
                    <img
                        className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 -ml-4"
                        src={avatar3}
                        alt="Avatar 3"
                    />
                </div>
                <h2 className="text-xl font-semibold text-blue-900 dark:text-white mb-2">Still have questions?</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                <a href="/Contactform" className="inline-block bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300">
                    Get in Touch
                </a>
            </div>
        </section>
    );
};

export default ContactSection;
