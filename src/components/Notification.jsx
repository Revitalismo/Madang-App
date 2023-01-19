import { ProfileOne } from "./Profile";
import Navbar from "../navigation/Navbar";
import { IKImage } from "imagekitio-react";

export default function Notification() {
    return (
        <main>
            <ProfileOne/>

            <section className={`main-container`}>
                {Nofif()}
                <Navbar />
            </section>
        </main>
    );

    function Nofif() {
        return (
            <section className="notif-container">
                <article className="notif">
                    <IKImage path="order.svg" className="notif-icon" />

                    <span className="notif-detail">
                        <h4 className="notif-name">Ikan bakar dan Es jeruk mu sudah dipesan</h4>
                        <h5 className="notif-date">21 Dec 2021 19.00</h5>
                    </span>
                </article>
            
                <article className="notif">
                    <IKImage path="cooked.svg" className="notif-icon" />

                    <span className="notif-detail">
                        <h4 className="notif-name">Ikan bakar dan Es jeruk mu sudah siap</h4>
                        <h5 className="notif-date">21 Dec 2021 19.12</h5>
                    </span>
                </article>
            
                <article className="notif">
                    <IKImage path="delivery.svg" className="notif-icon" />

                    <span className="notif-detail">
                        <h4 className="notif-name">Ikan bakar dan Es jeruk segera dihantar</h4>
                        <h5 className="notif-date">21 Dec 2021 19.13</h5>
                    </span>
                </article>
            </section>
        );
    }
}