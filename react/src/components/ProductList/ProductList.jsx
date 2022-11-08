import React, { useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useFetching } from "../../hooks/useFetching.js";
import ProductService from "../../API/ProductService.js";
import Loader from "../loader/Loader.jsx";

const ProductList = () => {
    const onAdd = () => {};

    const [products, setProducts] = useState([]);
    const [fetchProducts, isLoading, isError] = useFetching(async () => {
        const products = await ProductService.getAll();
    });
    return (
        <div className={"list"}>
            {isLoading && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Loader />
                </div>
            )}
            {products.map((product) => (
                <ProductItem
                    product={product}
                    className={"item"}
                    onAdd={onAdd}
                ></ProductItem>
            ))}
        </div>
    );
};

export default ProductList;
