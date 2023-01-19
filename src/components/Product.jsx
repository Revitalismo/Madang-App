import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProductHooks.mjs"

export default function Product() {
    const {isFetching, isError, data, error} = useProducts();
    
    if (isFetching) {
        return <span className="loader"></span>
    }

    if (data) {
        return (
            <section className="category-container">
                <section className="category">
                    <h1 className="category-title">Favorites</h1>
    
                    <section className="product-container">
                        {data.favorites.map(product => {
                            return (
                                <article className={`product`} key={product.id}>
                                        
                                    <section className={`product-image`} style={{backgroundImage: `url(${product.image})`}}>
                                        <span className={`product-rating`}>
                                            <IKImage path="star.svg" />
                                            <h5>{product.rating}</h5>
                                        </span>
                                    </section>
            
                                    <Link className={`product-detail`} to={`product/${product.id}`}>
                                        <h2 className={`product-name`}>{product.name}</h2>
                                        <h3 className={`product-price`}>Rp.{product.price}</h3>
                                    </Link>
                                </article>
                            );
                        })}
    
                    </section>
                </section>
                
                <section className={`category`}>
                    <h1 className={`category-title`}>Cheapes</h1>
    
                    <section className={`product-container`}>
                        {data.cheapes.map(product => {
                            return (
                                <article className={`product`} key={product.id}>
                                
                                    <section className={`product-image`} style={{backgroundImage: `url(${product.image})`}}>
                                        <span className={`product-rating`}>
                                            <IKImage path="star.svg" />
                                            <h5>{product.rating}</h5>
                                        </span>
                                    </section>
            
                                    <Link className={`product-detail`} to={`product/${product.id}`}>
                                        <h2 className={`product-name`}>{product.name}</h2>
                                        <h3 className={`product-price`}>Rp.{product.price}</h3>
                                    </Link>
                                </article>
                            );
                        })}  
                    </section>
                </section>
            </section>
        );
    }
    
    if (isError) {
        console.error(error);
    }
}