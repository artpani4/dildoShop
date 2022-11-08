import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useFetching } from "../../hooks/useFetching.js";
import ProductService from "../../API/ProductService.js";
import Loader from "../loader/Loader.jsx";
import "./ProductList.css";
import { useTelegram } from "../../hooks/useTelegram";
const ProductList = () => {
    const { tg } = useTelegram();
    const [products, setProducts] = useState([]);
    const [addedItems, setAddedItems] = useState([]);
    const [fetchProducts, isLoading] = useFetching(async () => {
        const products = await ProductService.getAll();
        setProducts(products);
    });

    const totalSum = () => {
        return addedItems.reduce((acc, item) => {
            return acc + parseFloat(item.price);
        }, 0);
    };
    const onAdd = (product) => {
        const alreadyFound = addedItems.find((item) => item.id === product.id);
        let newAdded = [];
        if (alreadyFound) {
            newAdded = addedItems.filter((item) => item.id !== product.id);
        } else {
            newAdded = [...addedItems, product];
        }
        setAddedItems(newAdded);

        if (addedItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить (всего ${totalSum()})`,
            });
        }
    };

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
                    key={product.id}
                ></ProductItem>
            ))}
        </div>
    );
};

export default ProductList;
