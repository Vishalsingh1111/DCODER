import React from "react";

export default function Skeleton1() {
    return (
        <section className="pt-10 dark:bg-dark">
            <div className="container">
                <div className="mx-auto w-full max-w-[570px] space-y-4">
                    <div className="h-3 w-full rounded-full bg-gray-300 "></div>
                    <div className="h-3 w-4/6 rounded-full bg-gray-300 "></div>
                    <div className="h-3 w-5/6 rounded-full bg-gray-300 "></div>
                    <div className="h-3 w-full rounded-full bg-gary-300 "></div>
                </div>
            </div>
        </section>
    );
}
