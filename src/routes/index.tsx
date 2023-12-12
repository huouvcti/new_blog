import { Routes, Route } from "react-router-dom";

import Home from "@pages/home";

import Header from "@components/header";
import Footer from "@components/footer";

const RootRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
            <Footer/>
        </>
    )

}


export default RootRoutes;