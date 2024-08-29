import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"



const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="container flex items-center justify-center flex-col min-hd-screen">

                <div className="max-w-[800px] w-full shadow-2xl p-10">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Dashboard