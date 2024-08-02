import React from "react";
import ShowAdminDetail from "./Usersdetail/Showadmindetail";
import Newlattersubsciber from "./Newlattersubscriber";


function DashboardCompo() {
    return (
        <div className="p-4 ">
            {/* Card Overview */}
            <div className="flex sm:flex-rows justify-center space-x-5">
                <div className="content-center bg-gray-500  h-[100px] text-white rounded p-4 border-t w-1/3">
                    <div className="text-xl font-bold">Languages</div>
                    {/* <div className="text-gray-500 py-1.5">C, C++, Java, Python & DSA</div>
                    <div className="text-blue-400 text-sm">Basic - Advanced</div> */}
                </div>
                <div className="content-center h-[100px] bg-gray-500 text-white shadow rounded p-4 border-t w-1/3">
                    <div className="text-xl font-bold">Striver's SDE DSA Sheet</div>
                    {/* <div className="text-gray-500 py-1.5">Total Problems : 120</div>
                    <div className="text-blue-400 text-sm">Easy-Medium-Hard</div> */}
                </div>
                <div className="content-center h-[100px] bg-gray-500 text-white shadow rounded p-4 border-t w-1/3">
                    <div className="text-xl font-bold">Technical Blogs</div>
                    {/* <div className="text-gray-500 py-1.5">Total Blogs : 30</div>
                    <div className="text-blue-400 text-sm">Technical Concept</div> */}
                </div>

            </div>
            <div className="flex justify-between space-x-6  mt-8">
                <div className="content-center h-[100px] bg-gray-500 text-white shadow rounded p-4 border-t w-1/3">
                    <div className="text-xl font-bold">Projects</div>
                    {/* <div className="text-gray-500 py-py-1.5">Total : 10</div>
                    <div className="text-blue-400 text-sm">Frontend-Backend</div> */}
                </div>
                <div className="content-center h-[100px] bg-gray-500 text-white shadow rounded p-4 border-t w-1/3">
                    <div className="text-xl font-bold">Messages</div>
                    {/* <div className="text-gray-500 py-py-1.5">Total : 10</div>
                    <div className="text-blue-400 text-sm">Frontend-Backend</div> */}
                </div>
                <div className="content-center h-[100px] bg-gray-500 text-white shadow rounded p-4 border-t w-1/3">
                    <div className="text-xl font-bold">Subscribers</div>
                    {/* <div className="text-gray-500 py-py-1.5">Total : 10</div>
                    <div className="text-blue-400 text-sm">Frontend-Backend</div> */}
                </div>

            </div>


            <div className="flex space-x-5">
                <div className="bg-white w-3/5 shadow rounded border-t mt-10 ">
                    <ShowAdminDetail />

                </div>

                <div className="bg-white w-2/5 shadow rounded border-t mt-10 ">
                    <Newlattersubsciber />
                </div>
            </div>
        </div>
    );
}

export default DashboardCompo;
