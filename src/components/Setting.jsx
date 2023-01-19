import { ProfileOne } from "./Profile";
import Navbar from "../navigation/Navbar";
import { IKImage } from "imagekitio-react";

export default function Setting() {
    return (
        <main>
            <ProfileOne/>

            <section className={`main-container`}>
                {Settings()}
                <Navbar />
            </section>
        </main>
    );

    function Settings() {
        return (
            <section className="setting-container">
                
                <article className="setting">
                    <IKImage path="account.svg" className="setting-icon" />

                    <span className="setting-detail">
                        <h3 className="setting-name">Account Settings</h3>
                        <IKImage path="open.svg" className="open-icon" />
                    </span>
                </article>
                
                <article className="setting">
                    <IKImage path="theme.svg" className="setting-icon" />

                    <span className="setting-detail">
                        <h3 className="setting-name">Theme</h3>
                        <IKImage path="open.svg" className="open-icon" />
                    </span>
                </article>
                
                <article className="setting">
                    <IKImage path="lock.svg" className="setting-icon" />

                    <span className="setting-detail">
                        <h3 className="setting-name">Privacy and Safety</h3>
                        <IKImage path="open.svg" className="open-icon" />
                    </span>
                </article>
                
                <article className="setting">
                    <IKImage path="support.svg" className="setting-icon" />

                    <span className="setting-detail">
                        <h3 className="setting-name">Help and Support</h3>
                        <IKImage path="open.svg" className="open-icon" />
                    </span>
                </article>
                
                <article className="setting">
                    <IKImage path="about.svg" className="setting-icon" />

                    <span className="setting-detail">
                        <h3 className="setting-name">About</h3>
                        <IKImage path="open.svg" className="open-icon" />
                    </span>
                </article>
            </section>
        );
    }
}