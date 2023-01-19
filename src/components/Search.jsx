import { IKImage } from "imagekitio-react";
import { useSearchProduct } from "../hooks/useProductHooks.mjs";

import Navbar from "../navigation/Navbar";
import { ProfileTwo } from "../components/Profile";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function Search() {
    const [query, setQuery] = useState("bakso");
    const {isFetching, data, isError, error, isIdle, refetch} = useSearchProduct(query);

    if (isError) {
        console.debug(error)
    }

    return (
        <main>
            <ProfileTwo title="Search"/>

            <section className={`main-container`}>
                {search()}
                {isFetching ? <span className="loader"></span> : ProductResult()}

                {data?.length === 0 ? 
                    <h1 className="status-product-empty">The product you are looking for could not be found, please try a different keyword.</h1>
                    : null
                }
                {isIdle ? 
                    <h1 className="status-product-empty">Search anything you need</h1> : null
                }
                <Navbar />
            </section>    
        </main>
    );

    function search() {
        return (
            <form to="search" className="link-field" 
                  onSubmit={function(event) {
                    event.preventDefault();
                    refetch();
                  }}
                  onChange={function(event) {
                    setQuery(event.target.value);
                  }}>

                <IKImage path="search.svg" className="search-icon" />

                <input type="text" autoFocus placeholder="Ikan bakar bekasi"
                       className="link-search" />
            </form>
        );
    }

    function ProductResult() {
        if (data) {
            return (
                <section className="product-container">
                    {data.map(product => {
                        return (
                            <article className={`product`} key={product.id}>            
                                <section className={`product-image`} style={{backgroundImage: `url(${product.image})`}}>
                                    <span className={`product-rating`}>
                                        <IKImage path="star.svg" />
                                        <h5>{product.rating}</h5>
                                        </span>
                                </section>
                
                                <Link className={`product-detail`} to={`../product/${product.id}`}>
                                    <h2 className={`product-name`}>{product.name}</h2>
                                    <h3 className={`product-price`}>Rp.{product.price}</h3>
                                </Link>
                            </article>
                        );
                    })}
                </section>
            );
        }
    }

}