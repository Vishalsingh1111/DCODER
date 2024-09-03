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
                <div className="flex flex-wrap justify-center max-w-screen-2xl mx-auto md:px-20 px-4 py-5 pt-10">
                    {data.map(item => (
                        <Projectcard key={item.id} item={item} onClick={() => handleCardClick(item.id)} />
                    ))}
                </div>
            )}
        </>
    );
};

export default Projectpage;
