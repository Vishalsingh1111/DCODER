
import React from "react";

export default function Skeleton1() {
    return (
        <section className="flex items-center flex-col justify-center my-10 px-10">
            <div className="text-center">
                <h1 className="text-5xl text-gray-800 mb-20">Loading..</h1>
            </div>
            <div className="w-full max-w-[700px] space-y-6 ">
                <div className="h-3 w-6/6 rounded-full bg-gray-400 dark:bg-slate-700 animate-pulseOpacity"></div>
                <div className="h-3 w-4/6 rounded-full bg-gray-400 dark:bg-slate-700 animate-pulseOpacity"></div>
                <div className="h-3 w-3/6 rounded-full bg-gray-400 dark:bg-slate-700 animate-pulseOpacity"></div>
                <div className="h-3 w-4/6 rounded-full bg-gray-400 dark:bg-slate-700 animate-pulseOpacity"></div>
                <div className="h-3 w-6/6 rounded-full bg-gray-400 dark:bg-slate-700 animate-pulseOpacity"></div>
            </div>
        </section>
    );
}
