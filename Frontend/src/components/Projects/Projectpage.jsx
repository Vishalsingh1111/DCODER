import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Projectcard from './Projectcard';
import Breadcrumb from '../Breadcrumb';
import { baseUrl } from "../../Baseurl";
import Skeleton1 from "../Skeleton";

const Projectpage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getProjects = async () => {
            try {
                const res = await axios.get(`${baseUrl}/project`);
                // const filteredData = res.data.filter(item => item.category === "Frontend");
                setData(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        getProjects();
    }, []);

    const handleCardClick = (id) => {
        navigate(`/projectdetail/${id}`);
    };

    return (
        <>
            <Breadcrumb />
            {loading ? (
                <Skeleton1 />
            ) : (
                <div className="my-20 mx-auto max-w-full lg:max-w-screen-xl  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-[120px]">
                    {data.map(item => (
                        <Projectcard key={item.id} item={item} onClick={() => handleCardClick(item.id)} />
                    ))}
                </div>

            )}
        </>
    );
};

export default Projectpage;
