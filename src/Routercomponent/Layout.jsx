import { Outlet } from "react-router-dom"
import { Navbar } from "../Header/Navbar"
import { Footer } from "../Footer/Footer"

export const Layout=()=>{
    return(<div className="w-full h-screen font-serif">
        {/* <Navbar/> */}
        <div className="w-full min-h-100vh absolute top-[52px]">
            {/* <Outlet/> */}
            <Footer/>
        </div>
        
    </div>

    )
}
