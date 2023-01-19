import { IKImage } from "imagekitio-react";
import { ProfileTwo } from "../components/Profile";
import { TransactionTwo } from "./Transaction";

import { useProducts, useDeleteProduct, useChangeQuantity } from "../hooks/useCartHooks.mjs";

export default function Cart() {
    const {data, isFetching, isError, error, refetch} = useProducts();

    if (isError) {
        console.error(error);
    }

    return (
        <main>
            <ProfileTwo title="Cart"/>

            <section className={`main-container`}>
                {CheckoutProducts()}
                <TransactionTwo />
            </section>    
        </main>
    );

    function CheckoutProducts() {
        const { mutate } = useDeleteProduct();
        const {mutate: changeQuantity} = useChangeQuantity();

        if (isFetching) {
            return <span className="loader"></span>
        }

        if (data === undefined || data?.length === 0) {
            return (
                <section className="status-product-empty">
                    <h1>You haven't added any products yet</h1>
                </section>
            );
        }

        if (data?.length > 0) {
            return (
                <section className="checkout-container">
                    {data.map(product => {
                        return (
                            <article className="checkout" key={`${product.id} ${product.name}`}>
                                <img src={product.image} className="checkout-image" />
    
                                <section className="checkout-info">
                                    <section className="checkout-detail">
                                        <span>
                                            <h3 className="checkout-name">{product.name}</h3>
                                            <h3 className="checkout-price">Rp.{product.price}</h3>
                                        </span>

                                        <IKImage path="remove-product.svg" onClick={removeProduct.bind(this)}
                                                 className="remove-product" productid={product.id} />
                                    </section>
    
                                    <span className="checkout-quantity">
                                        <IKImage path="minus.svg" onClick={decreaseQuantity.bind(this)}
                                                 className="btn-quantity" />

                                        <input className="product-quantity" min="1" max="10" onChange={refetch} 
                                               defaultValue={product.quantity} type="tel" productid={product.id} />

                                        <IKImage path="plus.svg" onClick={increaseQuantity.bind(this)} 
                                                 className="btn-quantity"/>
                                    </span>
                                </section>
                            </article>
                        );
                    })}
                </section>
            );
        }

        function removeProduct(element) {
            const id = Number.parseInt(element.target.attributes[2].value);
            mutate(id);
            setTimeout(func => refetch(), 100);
        }

        function increaseQuantity(element) {
            const id = Number.parseInt(element.target.previousSibling.attributes[4].value);
            let elementInput = Number.parseInt(element.target.previousSibling.value);
            const dataQuantity = {
                id: id,
                value: elementInput += 1
            }

            if (elementInput < 11) {
                changeQuantity(dataQuantity);
                setTimeout(func => refetch(), 100);
            }
        }

        function decreaseQuantity(element) {
            const id = Number.parseInt(element.target.nextSibling.attributes[4].value);
            let elementInput = Number.parseInt(element.target.nextSibling.value);
            const dataQuantity = {
                id: id,
                value: elementInput -= 1
            }

            if (elementInput > 0) {
                changeQuantity(dataQuantity);
                setTimeout(func => refetch(), 100);
            }
        }
    }
}