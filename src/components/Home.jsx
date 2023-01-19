import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Product from "./Product";
import { ProfileOne } from "./Profile";

export default function Home() {
    return (
        <main>
            <ProfileOne/>

            <section className={`main-container`}>
                {search()}
                <Product />
                <Navbar />
            </section>    
        </main>
    );

    function search() {
        return (
            <Link to="search" className="link-field">
                <IKImage path="search.svg" className="search-icon" />

                <input type="text" placeholder="Ikan bakar bekasi" className="link-search" />
            </Link>
        );
    }
}