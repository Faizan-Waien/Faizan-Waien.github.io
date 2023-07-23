import { Routes, Route, Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Navbar from "./Navbar"
import Cont from "./Cont"
import Home from "./Home"

const Pages = () => {

    return (
        <div>
            <Routes>

                <Route element={
                    <div>
                        <Header />
                        <Navbar />
                        <Outlet />
                        <Footer />
                    </div>
                }>

                    <Route exact path='/' Component={Home} />
                    <Route exact path='/about' Component={About} />
                    <Route exact path='/skills' Component={Skills} />
                    <Route exact path='/projects' Component={Projects} />
                    <Route exact path='/contact' Component={Cont} />

                </Route>

            </Routes>

        </div>
    )
}

export default Pages