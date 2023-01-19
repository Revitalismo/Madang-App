import { useProduct } from "../hooks/useProductHooks.mjs";
import { useAddProduct, useProducts } from "../hooks/useCartHooks.mjs";

export function TransactionOne(props) {
    return (
        <section className="transaction-container transaction-one">
            <section className="transactions-one">
                <CartButton class="btn-secondary" text="cart" productId={props.productId} />
                <BuyButton class="btn-primary" text="buy now" />
            </section>
        </section>
    );
}

export function TransactionTwo() {
    let total = 0;

    const { data: productsData,
            isError: isProductsError,
            error: productsError } = useProducts();

    if (productsData?.length > 0) {
        productsData.forEach(product => {
            total += (product.price * product.quantity);
        });
    }

    return (
        <section className="transaction-container transaction-two">
            <section className="transactions-two">
                <span className="transaction-detail">
                    <h1 className="transaction-title">Total</h1>
                    <h3 className="transaction-price">Rp.{total}</h3>
                </span>

                <BuyButton class="btn-primary" text="buy" />
            </section>
        </section>
    );
}

function BuyButton(props) {
    return (
        <button type="button" className={props.class}>{props.text}</button>
    )
}


function CartButton(props) {
    const { data: productData, 
            isError: isProductError, 
            error: productError } = useProduct(props.productId);

    const { refetch } = useAddProduct(productData);

    return (
        <button type="button" className={props.class}
                onClick={refetch}>
        {props.text}</button>
    )
}