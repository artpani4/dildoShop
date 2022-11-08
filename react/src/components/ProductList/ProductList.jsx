import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useFetching } from "../../hooks/useFetching.js";
import ProductService from "../../API/ProductService.js";
import Loader from "../loader/Loader.jsx";

const ProductList = () => {
    const onAdd = () => {};

    const [products, setProducts] = useState([]);
    const [fetchProducts, isLoading] = useFetching(async () => {
        const products = await ProductService.getAll();
        console.table(products);
        setProducts(products);
    });

    useEffect(() => {
        fetchProducts().then();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
