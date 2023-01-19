import { IKImage } from "imagekitio-react";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProductHooks.mjs";

import { ProfileTwo } from "./Profile";
import { TransactionOne } from "./Transaction";

export default function ProductDetail() {
    const param = useParams();
    const {isFetching, data: product, isError, error} = useProduct(param.id);

    if (isError) {
        console.error(error)
    }

    return (
        <main>
            <ProfileTwo title="Product Detail"/>

            <section className={`main-container-detail`}>
                <Product />
                {isFetching ? <span className="loader"></span> : null}
                <TransactionOne productId={param.id} />
            </section>    
        </main>
    );

    function Product() {
        if (product) {
            return (
                <article className="product-detail-container">
                    <ProductImage />
    
                    <section className="detail">
                        <span className="detail-name-price">
                            <h1 className="detail-name">{product.name}</h1>
                            <h2 className="detail-price">Rp. {product.price}</h2>
                        </span>
    
                        <span className="detail-rating">
                            <IKImage path="star.svg" className="max-w-[15px]" />
                            <h4 className="rating-point">{product.rating}</h4>
                        </span>
                    </section>
    
                    <p className="detail-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium enim nulla ipsam dignissimos. Quod harum repudiandae commodi ipsam perspiciatis illum consequuntur ullam repellendus vero saepe? Aliquam, sequi, quisquam quo cum consectetur temporibus eveniet fugit quidem veritatis magnam, voluptate sit. Tempore placeat voluptates labore. Molestias aperiam iste natus dolores, totam illum.</p>
                </article>
            );
        }
    }

    function ProductImage() {
        return (
            <section className="detail-image"
                     style={{backgroundImage: `url(${product.image})`}} />
        );
    }

}