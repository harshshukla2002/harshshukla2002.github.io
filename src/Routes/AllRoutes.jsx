import { Route, Routes } from "react-router-dom";
import NavBar from "../Component/Navbar";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<NavBar />} />
        </Routes>
    )
}

export default AllRoutes;