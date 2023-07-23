import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className='right'>

            <li style={{color:'white'}} onClick={() => navigate('/')}>Home</li>
            <li onClick={() => { navigate('/'); setTimeout(() => { window.scrollTo({ top: 750, behavior: 'smooth' }) }, 50) }}>ABOUT</li>
            <li onClick={() => { navigate('/'); setTimeout(() => { window.scrollTo({ top: 1400, behavior: 'smooth' }) }, 50) }}>SKILLS</li>
            <li onClick={() => navigate('/projects')}>PROJECTS</li>
            <li onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>CONTACT</li>

        </div>
    )
}

export default Navbar