import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
};

const Pagination = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const products = data?.products || [];
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const displayedProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="container d-flex flex-column min-vh-100">
            <div className="card flex-grow-1 m-5">
                <h2 className="card-header">Product List</h2>
                <div className="card-body">
                    <ul>
                        {displayedProducts.map((product) => (
                            <li key={product.id}>{product.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3 py-3">
                <button
                    className="btn btn-sm btn-secondary shadow-none"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                    Previous
                </button>
                <span className="user-select-none d-flex gap-2">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <span
                            key={index + 1}
                            className={`border border-1 p-1 px-2 cursor-pointer ${currentPage === index + 1 ? "bg-secondary text-white" : ""
                                }`}
                            onClick={() => setCurrentPage(index + 1)}
                            style={{ cursor: "pointer" }}
                        >
                            {index + 1}
                        </span>
                    ))}
                </span>
                <button
                    className="btn btn-sm btn-secondary shadow-none"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
