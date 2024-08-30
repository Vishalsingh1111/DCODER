import React from 'react'
function Card({ item }) {

    return (
        <>
            <div>
                <a href={item.link}>
                    <div className="card w-72 h-92 rounded-xl bg-white border border-gray-400 m-5 hover:shadow-lg cursor-pointer transition-transform duration-300 group dark:bg-slate-900 dark:text-white dark:border " >
                        <figure className='dark:bg-slate-800 dark:text-white bg-[#efefef]'>
                            <img src={item.image} alt="Course Img" className='px-10 py-4 w-64' />
                        </figure>
                        <div className="card-body pt-4 px-8">
                            <div >
                                <h2 className="card-title text-blue-900">{item.name}</h2>
                            </div>
                            <p>{item.title}</p>
                            <div className="card-actions justify-between">
                                <div className="badge rounded-lg border-none  badge-outline dark:bg-slate-800 dark:text-white  p-3.5 bg-gray-700 text-white">Price: ${item.price}</div>
                                <div className="badge rounded-lg bg-red-500 p-3.5 text-white border-none">{item.category}</div>
                            </div>
                        </div>
                    </div></a>
            </div>
        </>
    )
}

export default Card