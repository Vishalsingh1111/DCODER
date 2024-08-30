import React from 'react';

const Card = ({ icon, title, linkUrl }) => (
    <a href={linkUrl} className="block w-full">
        <div className="p-4 sm:p-5 md:p-6 flex flex-cols rounded-2xl m-2 shadow bg-white dark:bg-slate-800 dark:text-white hover:shadow-lg transition-shadow">
            <div className="icon text-5xl mb-4 md:mb-0 md:mr-4">{icon}</div>
            <div className="content">
                <h3 className="text-lg text-blue-800 font-semibold p-2 mb-2">{title}</h3>
            </div>
        </div>
    </a>
);

const App = () => (
    <div className="dark:bg-slate-900 dark:text-white pt-32 pb-10">
        <h1 className="text-4xl text-black font-bold my-4 text-center dark:text-white">Contact Sales</h1>
        <p className="mb-8 text-center dark:text-gray-300">
            Welcome to our community !!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-screen-lg mx-auto px-4 py-5 mb-20">
            <Card
                icon="📞"
                title="Chat with us"
                linkUrl="/Contactform"
            />
            <Card
                icon="🐞"
                title="Bug Reports"
                linkUrl="/Contactform"
            />
            <Card
                icon="🖥️"
                title="Technical Support"
                linkUrl="/Contactform"
            />
            <Card
                icon="📺"
                title="Connect on Youtube"
                linkUrl="https://www.youtube.com/@d-coder1898"
            />
            <Card
                icon="✉️"
                title="Connect with Telegram"
                linkUrl="https://t.me/dcoder21575"
            />
            <Card
                icon="💬"
                title="Feedback"
                linkUrl="/Contactform"
            />
        </div>
    </div>
);

export default App;
