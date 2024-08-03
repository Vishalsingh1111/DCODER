import React, { useState } from "react";
import CodeSnippet from "../CodeSnippet/CodeSnippet";

const Accordion = ({ item }) => {
    const [active, setActive] = useState(false);

    const handleToggle = (event) => {
        event.preventDefault();
        setActive(!active);
    };

    const renderText = (text) => {
        const parts = text.split(/(<red>|<\/red>|<br\s*\/?>|<bg>|<\/bg>|<li>|<\/li>)/g).filter(Boolean);
        let isRed = false;
        let isBg = false;
        let isLi = false;
        let bgContent = [];
        let liContent = [];

        return parts.map((part, index) => {
            if (part === '<red>') {
                isRed = true;
                return null; // Skip the tag itself
            } else if (part === '</red>') {
                isRed = false;
                return null; // Skip the tag itself
            } else if (part === '<bg>') {
                isBg = true;
                bgContent = [];
                return null; // Skip the tag itself
            } else if (part === '</bg>') {
                isBg = false;
                return (
                    <span key={index} className="inline-block bg-red-200 rounded py-1 px-2  dark:bg-slate-700 dark-text-white">
                        {bgContent}
                    </span>
                );
            } else if (part === '<li>') {
                isLi = true;
                liContent = [];
                return null; // Skip the tag itself
            } else if (part === '</li>') {
                isLi = false;
                return <li key={index} className="list-disc ml-4 py-1">{liContent}</li>;
            } else if (part.match(/<br\s*\/?>/)) {
                return <br key={index} />;
            } else {
                const content = (
                    <span key={index} className={isRed ? "text-red-500" : ""}>
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
        }).filter(Boolean); // Remove null values
    };

    return (
        <div className="p-4 dark:bg-slate-800 dark:text-white sm:p-4 lg:px-6 xl:px-8 dark:border-b">
            <button className="faq-btn flex w-full text-left" onClick={handleToggle}>
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-red-500/5 text-red dark:bg-white/5">
                    <svg
                        className={`fill-red-500 stroke-red-500 duration-200 ease-in-out ${active ? "rotate-180" : ""}`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill=""
                            stroke=""
                        />
                    </svg>
                </div>

                <div className="w-full">
                    <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
                        {item.header}
                    </h4>
                </div>
            </button>

            <div className={`px-[6px] duration-200 text-justify ease-in-out ${active ? "block" : "hidden"}`}>
                {['text', 'statement', 'substatement1', 'statement2', 'substatement2', 'statement3', 'substatement3', 'statement4', 'substatement4'].map((key, index) => (
                    item[key] && (
                        <p key={index} className="text-base py-5 leading-relaxed text-body-color dark:text-dark-6">
                            {renderText(item[key])}
                        </p>
                    )
                ))}

                {item.image && (
                    <div className="py-5 md:px-10 text-center width-auto">
                        <img src={item.image} alt="description of image" />
                        <div className="mt-5">
                            <span className="text-sm text-red-600">Fig. {item.figtitle}</span>
                        </div>
                    </div>
                )}

                {item.example && (
                    <div>
                        <div className="my-5">
                            <span className="font-bold mb-2 text-red-500">Example</span><br />
                            <span className="my-3">{renderText(item.example)}</span>
                        </div>
                    </div>
                )}

                {item.code && (
                    <div className="my-5 mx-auto text-left content-left">
                        <span className="mb-2">Code:</span><br />
                        <CodeSnippet codeString={item.code} />
                    </div>
                )}

                {item.explanation && (
                    <div className="mt-4">
                        <span className="mb-2 text-bold text-red-500">Explanation:</span><br />
                        <ul className="py-2 list-disc ml-4">
                            {item.explanation.split('\n').map((line, index) => (
                                <li className="py-1" key={index}>{line.trim()}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {['statement5', 'substatement5'].map((key, index) => (
                    item[key] && (
                        <p key={index} className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                            {renderText(item[key])}
                        </p>
                    )
                ))}
            </div>
        </div>
    );
};

export default Accordion;
