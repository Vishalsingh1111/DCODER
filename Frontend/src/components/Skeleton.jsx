
import React from "react";

export default function Skeleton1() {
    return (
        <section className="flex items-center justify-center my-32 ">
            <div className="w-full max-w-[770px] space-y-6">
                <div className="h-3 w-full rounded-full bg-gray-300 dark:bg-slate-700 animate-pulseOpacity"></div>
                <div className="h-3 w-5/6 rounded-full bg-gray-300 dark:bg-slate-700 animate-pulseOpacity"></div>
                <div className="h-3 w-4/6 rounded-full bg-gray-300 dark:bg-slate-700 animate-pulseOpacity"></div>
                <div className="h-3 w-3/6 rounded-full bg-gray-300 dark:bg-slate-700 animate-pulseOpacity"></div>
                <div className="h-3 w-4/6 rounded-full bg-gray-300 dark:bg-slate-700 animate-pulseOpacity"></div>
                <div className="h-3 w-5/6 rounded-full bg-gray-300 dark:bg-slate-700 animate-pulseOpacity"></div>
                <div className="h-3 w-full rounded-full bg-gray-300 dark:bg-slate-700 animate-pulseOpacity"></div>
            </div>
        </section>
    );
}
