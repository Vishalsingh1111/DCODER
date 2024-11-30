
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../Baseurl";
import Skeleton1 from "./Skeleton";

function HomeVideo() {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getContestData = async () => {
            try {
                const res = await axios.get(`${baseUrl}/contestsol`);
                if (res.data && res.data.length > 0) {
                    const randomItem = res.data[Math.floor(Math.random() * res.data.length)];
                    setItem(randomItem);
                } else {
                    console.error("No data available");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        getContestData();
    }, []);

    return (
        <>
            <div className="mt-10 lg:mt-20 px-4 mb-20">
                <div className="pb-10 text-center">
                    <h1
                        className="font-semibold dark:text-white text-4xl pb-2"
                        id="homecontentcard"
                    >
                        Get Free Youtube Tutorial Video
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Get free YouTube video tutorials of Codes and Problems
                    </p>
                </div>

                <div className="lg:space-x-8 flex flex-col sm:mx-4 mx-auto justify-center items-center">
                    {loading ? (
                        <iframe
                            width="100%"
                            height="auto"
                            src="https://www.youtube.com/embed/i2M87L2U028"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube Project Tutorial"
                            aria-label="YouTube Project Tutorial Video"
                            className="w-full lg:w-[600px] h-[240px] lg:h-[380px] p-5 lg:p-8 mb-5 dark:bg-slate-800 dark:border-gray-600 bg-white dark:border shadow shadow-black/40 rounded-lg"
                        ></iframe>
                    ) : item ? (
                        <iframe
                            width="100%"
                            height="auto"
                            src={item.image}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube Project Tutorial"
                            aria-label="YouTube Project Tutorial Video"
                            className="w-full lg:w-[600px] h-[240px] lg:h-[380px] p-5 lg:p-8 mb-5 dark:bg-slate-800 dark:border-gray-600 bg-white dark:border shadow shadow-black/40 rounded-lg"
                        ></iframe>
                    ) : (
                        <p className="text-red-500">No video available.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default HomeVideo;
