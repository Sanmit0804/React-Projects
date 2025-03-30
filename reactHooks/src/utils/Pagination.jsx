import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

const fetchProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products')
        // console.log("res--", response.json());
        return response.json();
    } catch (error) {
        console.log("Error----", error);
    }
}

const Pagination = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    if (isLoading) return <div>Loading....</div>
    if (error) return <div>Error !!!</div>

    console.log("data---", data.products);
    const products = data?.products || [];

    const [ itemPerPage, setItemPerPage ] = useState(5);
     

    return (
        <>
            <div className="container my-5 w-50">
                <div className="card">
                    <div className="card-header">Products</div>
                    <div className="card-body">
                        <ul>
                            {products.map((item, index) => {
                                return (
                                    <li key={index}>{item.title}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pagination