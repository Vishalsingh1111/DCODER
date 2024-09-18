import React from 'react';

function TechAICard() {
    return (
        <div className="hidden md:fixed md:block top-[18.5%] right-3">
            <a href="/AI" className="block max-w-[60px] border border-red-500 rounded-full shadow-xl">
                <img src="/robot.jpg" alt="AI Illustration" className="w-full rounded-full mx-auto" />
            </a>
        </div>
    );
}

export default TechAICard;
