import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { SliderContext } from './SliderContext';

const Navbar = () => {

    const { SlideUP } = useContext(SliderContext)

    const navigate = useNavigate()

    return (
        // <div id='navbar' className='right'>
        //     <li style={{color:'white'}} onClick={() => navigate('/')}>Home</li>
        //     <li onClick={() => { navigate('/about'); setTimeout(() => { window.scrollTo({ top: 750, behavior: 'smooth' }) }, 50)}}>ABOUT</li>
        //     <li onClick={() => { navigate('/skills'); setTimeout(() => { window.scrollTo({ top: 750, behavior: 'smooth' }) }, 50)}}>SKILLS</li>
        //     <li onClick={() => navigate('/projects')}>PROJECTS</li>
        //     {/* <li onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>CONTACT</li> */}
        //     <li onClick={SlideUP}>CONTACT</li>
        // </div>

        <div id='navbar' className='right'>

            <nav>
                <NavLink to="/"
                    style={({ isActive, isPending }) => {
                        return {
                            textDecoration: isActive ? "line-through" : "none",
                            color: isActive ? "maroon" : "white",
                        };
                    }}>
                    <span>Home</span>
                </NavLink>
            </nav>

            <nav>
                <NavLink to="/about"
                    style={({ isActive, isPending }) => {
                        return {
                            textDecoration: isActive ? "line-through" : "none",
                            color: isActive ? "maroon" : "black",
                        };
                    }}>
                    <span onClick={() => setTimeout(() => { window.scrollTo({ top: 800, behavior: 'smooth' }) }, 50)}>ABOUT</span>
                </NavLink>
            </nav>

            <nav>
                <NavLink to="/skills"
                    style={({ isActive, isPending }) => {
                        return {
                            textDecoration: isActive ? "line-through" : "none",
                            color: isActive ? "maroon" : "black",
                        };
                    }}>
                    <span onClick={() => setTimeout(() => { window.scrollTo({ top: 800, behavior: 'smooth' }) }, 50)}>SKILLS</span>
                </NavLink>
            </nav>

            <nav>
                <NavLink to="/projects"
                    style={({ isActive, isPending }) => {
                        return {
                            textDecoration: isActive ? "line-through" : "none",
                            color: isActive ? "maroon" : "black",
                        };
                    }}>
                    <span>PROJECTS</span>
                </NavLink>
            </nav>

            <nav>
                <a><span onClick={SlideUP}>CONTACT</span></a>
            </nav>

        </div>
    )
}

export default Navbar