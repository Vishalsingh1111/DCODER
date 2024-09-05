import React, { useState } from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";

const GetContent = ({ item }) => {
    const [isCodeVisible, setIsCodeVisible] = useState(false);

    const toggleCodeVisibility = () => {
        setIsCodeVisible(!isCodeVisible);
    };

    const renderText = (text) => {
        const parts = text.split(/(<h1>|<\/h1>|<h2>|<\/h2>|<br\s*\/?>|<bg>|<\/bg>|<li>|<\/li>|<b>|<\/b>|<m>|<\/m>)/g).filter(Boolean);
        let isH1 = false;
        let isH2 = false;
        let isBg = false;
        let isLi = false;
        let isBold = false;
        let isM = false;
        let bgContent = [];
        let liContent = [];

        return parts.map((part, index) => {
            if (part === '<h1>') {
                isH1 = true;
                return null;
            } else if (part === '</h1>') {
                isH1 = false;
                return null;
            } else if (part === '<h2>') {
                isH2 = true;
                return null;
            } else if (part === '</h2>') {
                isH2 = false;
                return null;
            } else if (part === '<bg>') {
                isBg = true;
                bgContent = [];
                return null;
            } else if (part === '</bg>') {
                isBg = false;
                return (
                    <span key={index} className="inline-block text-blue-600 dark:text-white">
                        {bgContent}
                    </span>
                );
            } else if (part === '<li>') {
                isLi = true;
                liContent = [];
                return null;
            } else if (part === '</li>') {
                isLi = false;
                return <li key={index} className="list-disc ml-4 py-1">{liContent}</li>;
            } else if (part === '<b>') {
                isBold = true;
                return null;
            } else if (part === '</b>') {
                isBold = false;
                return null;
            } else if (part === '<m>') {
                isM = true;
                return null;
            } else if (part === '</m>') {
                isM = false;
                return null;
            } else if (part.match(/<br\s*\/?>/)) {
                return <br key={index} />;
            } else {
                const content = (
                    <span key={index} className={`${isH1 ? "text-gray-900 dark:text-white text-2xl mb-10" : isH2 ? "text-gray-700 dark:text-white text-xl" : ""} ${isBold ? "font-semibold dark:text-white text-gray-900 mr-1" : ""} ${isM ? "mt-8" : ""}`}>
                        {part.trim()}
                    </span>
                );
                if (isBg) {
                    bgContent.push(content);
                    return null;
                }
                if (isLi) {
                    liContent.push(content);
                    return null;
                }
                return content;
            }
        }).filter(Boolean);
    };

    return (
        <div className="p-4 bg-[rgb(255,255,255)] dark:bg-slate-800 dark:text-white text-gray-700 text-md">
            <div className="text-md font-[500] mb-4">
                {renderText(item.header)}
            </div>
            <div className="text-[17px] leading-relaxed text-justify ">
                {['text', 'statement', 'substatement1', 'statement2', 'substatement2', 'statement3', 'substatement3', 'statement4', 'substatement4'].map((key, index) => (
                    item[key] && (
                        <p key={index} className="py-2">
                            {renderText(item[key])}
                        </p>
                    )
                ))}
            </div>
            {item.image && (
                <div className="py-5 text-center">
                    <img src={item.image} alt="description of image" />
                    <div className="mt-2 text-sm text-red-600">
                        Fig. {item.figtitle}
                    </div>
                </div>
            )}
            {item.example && (
                <div className="my-5">
                    <div className="font-bold dark:text-white text-gray-500 mb-2">Example:</div>
                    <div>{renderText(item.example)}</div>
                </div>
            )}
            {item.code && (
                <div className="my-5">
                    <button
                        className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-lg hover:shadow-blue-500/30 shadow-black/30"
                        onClick={toggleCodeVisibility}
                    >
                        {isCodeVisible ? 'Hide Code' : 'Show Code'}
                    </button>
                    {isCodeVisible && (
                        <div className="mt-4">
                            <CodeSnippet codeString={item.code} />
                        </div>
                    )}
                </div>
            )}
            {item.explanation && (
                <div className="mt-4">
                    <div className="font-bold text-xl dark:text-white text-gray-500 mb-2">Explanation:</div>
                    <ul className="list-disc ml-4 text-md text-gray-500 text-justify">
                        {item.explanation.split('\n').map((line, index) => (
                            <li key={index} className="py-1">{line.trim()}</li>
                        ))}
                    </ul>
                </div>
            )}
            {['statement5', 'substatement5'].map((key, index) => (
                item[key] && (
                    <p key={index} className="py-3 text-justify">
                        {renderText(item[key])}
                    </p>
                )
            ))}
        </div>
    );
};

export default GetContent;
