import { ProfileSeller } from "./Profile";
import Navbar from "../navigation/Navbar";
import { IKImage } from "imagekitio-react";

export default function Chat() {
    return (
        <main>
            <ProfileSeller />

            <section className={`main-container`}>
                {Chating()}
                <Navbar />
            </section>    
        </main>
    );

    function Chating() {
        return (
            <>
                <article className="chating">
                    <h3 className="seller-chating">Abang pesen Ikan Bakar sama Es Jeruk ya?</h3>
                    <h3 className="user-chating">Iya Ikan bakar ama Es Jeruk</h3>
                    <h3 className="seller-chating">Ikan bakar nya mao pake sambel goreng atau sambel terasi Bang?</h3>
                    <h3 className="user-chating">Sambel terasi aje</h3>
                    <h3 className="seller-chating" value="Ane duduk di nomer 5">Abang duduk di nomer berapa ya?</h3>
                </article>

                <span className="message">
                    <input type="text" className="message-field" />
                    <IKImage path="send.svg" />
                </span>
            </>
        );
    }
}