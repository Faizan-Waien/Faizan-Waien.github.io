import { useNavigate } from 'react-router-dom';
import image from '/src/assets/images/urdu2.png'

const Header = () => {

    const navigate = useNavigate()

    return (
        <div className='header'>
            <div className='left'>
                <img src={image} onClick={() => navigate('/')} />
            </div>
        </div>
    )
}

export default Header