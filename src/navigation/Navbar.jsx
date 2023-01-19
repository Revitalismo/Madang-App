import { IKImage } from "imagekitio-react";
import { Link, useLocation } from "react-router-dom"; 

export default function Navbar() {
    const location = useLocation();
    let homeIcon = location.pathname === "/" ? "active/home.svg" : "default/home.svg";
    let messageIcon = location.pathname === "/message" ? "active/message.svg" : "default/message.svg";
    let notificationIcon = location.pathname === "/notification" ? "active/notification.svg" : "default/notification.svg";
    let settingIcon = location.pathname === "/setting" ? "active/setting.svg" : "default/setting.svg";

    return (
        <nav className="navbar-container">
            <section className="navbar-link">
                <Link to="/" className="link-menu">
                    <IKImage path={homeIcon} className={`menu-icon`} />
                </Link>

                <Link to="../message" className="link-menu">
                    <IKImage path={messageIcon} className={`menu-icon`} />
                </Link>

                <Link to="../notification" className="link-menu">
                    <IKImage path={notificationIcon} className={`menu-icon`} />
                </Link>

                <Link to="../setting" className="link-menu">
                    <IKImage path={settingIcon} className={`menu-icon`} />
                </Link>
            </section>
        </nav>
    );
}