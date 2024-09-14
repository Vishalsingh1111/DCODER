import React from 'react';

function TechAICard() {
    return (
        <div className="hidden md:fixed md:block bottom-10 left-5">
            <a href="/AI" className="block max-w-[60px] border-2 border-blue-500 rounded-full shadow-xl">
                <img src="/robot.jpg" alt="AI Illustration" className="w-full rounded-full mx-auto" />
            </a>
        </div>
    );
}

export default TechAICard;
