import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import Search from "../components/Search";
import Message from "../components/Message";
import Notification from "../components/Notification";
import Setting from "../components/Setting";
import Cart from "../components/Cart";
import ProductDetail from "../components/ProductDetail";

export default function RouteLayout() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/message" element={<Message />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="setting" element={<Setting />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
}