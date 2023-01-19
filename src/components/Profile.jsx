import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";

export function ProfileOne() {
    return (
        <header className={`profile-container`}>
            <section className="profile-box">
                <section className={`profile`}>
                    <IKImage path="profile-user.svg" className={`profile-image`} />

                    <span className={`profile-detail`}>
                        <h3 className={`profile-name`}>Achmad Julian</h3>
                        <h4 className={`profile-balance`}>Rp. 137000</h4>
                    </span>
                </section>

                <Link to="../cart">
                    <IKImage path="cart.svg" className={`cart`} />
                </Link>
            </section>
        </header>
    );
}

export function ProfileTwo(props) {
    return (
        <header className={`profile-container profile-container-two`}>
            <section className="profile-box">
                <Link to="..">
                    <IKImage path="back.svg" className={`profile-image`} />
                </Link>

                <span className="h-[40px] flex items-center">
                    <h3 className="profile-detail profile-name">{props.title}</h3>
                </span>

                <IKImage path="profile-user.svg"/>
            </section>
        </header>
    );
}

export function ProfileSeller() {
    return (
    <header className={`profile-container`}>
        <section className="profile-box">
            <section className={`profile`}>
                <IKImage path="profile-seller.svg" className={`profile-image`} />

                <span className={`profile-detail`}>
                    <h3 className={`profile-name`}>Penjual rasa</h3>
                    <h4 className={`profile-balance`}>online</h4>
                </span>
            </section>

            <Link to="../cart">
                    <IKImage path="cart.svg" className={`cart`} />
            </Link>
        </section>
    </header>
    );
}