import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"



const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="container flex mt-[-20px] items-center justify-center flex-col min-hd-screen rounded-md">
                <div className="max-w-[800px] w-full shadow-2xl p-8 rounded-md">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Dashboard