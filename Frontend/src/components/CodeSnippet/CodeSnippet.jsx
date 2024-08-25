import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', javascript);

const CodeSnippet = ({ codeString }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeString).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1500);
        });
    };

    return (
        <div className=" width-auto bg-black rounded-lg relative overflow-auto-scroll p-4 my-3 ">
            <div className='flex items-center justify-between px-1 py-2  '>
                <span className='text-gray-300'></span>
                <button
                    onClick={copyToClipboard}
                    className="bg-gray-800 text-gray-300 px-2 py-1 rounded hover:bg-gray-700">
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>

            <div className='width-auto'>
                <SyntaxHighlighter language="javascript" style={tomorrowNight}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeSnippet;
