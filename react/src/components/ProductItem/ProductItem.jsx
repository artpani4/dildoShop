import React from "react";
import cl from "./ProductItem.module.css";
import Button from "../button/Button";
const ProductItem = ({ product, className, onAdd }) => {
    const onAddHandler = () => {
        onAdd(product);
    };
    // console.log(cl["add-btn"]);
    return (
        <div className={cl.product + " " + className}>
            <img src={product.image} alt="" className={cl.img} />
            <div className={"title"}>{product.title}</div>
            <div className={cl.description}>{product.description}</div>
            <div className={"price"}>
                <span>
                    Стоимость: <b>{product.price}</b>
                </span>
            </div>
            <Button className={cl.addBtn} onClick={onAddHandler}>
                Добавить в корзнину
            </Button>
            <div></div>
            <div></div>
        </div>
    );
};

export default ProductItem;
