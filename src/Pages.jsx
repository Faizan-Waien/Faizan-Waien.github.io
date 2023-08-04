import { Routes, Route, Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Navbar from "./Navbar"
import Home from "./Home"
import { ContextProvider } from "./SliderContext"

const Pages = () => {

    return (
        <div>
            <Routes>

                <Route element={
                    <div>
                        <ContextProvider>
                            <Header />
                            <Navbar />
                            <Outlet />
                            <Footer />
                        </ContextProvider>
                    </div>
                }>

                    <Route exact path='/' Component={Home} />
                    <Route exact path='/about' Component={About} />
                    <Route exact path='/skills' Component={Skills} />
                    <Route exact path='/projects' Component={Projects} />
               
                </Route>

            </Routes>

        </div>
    )
}

export default Pages