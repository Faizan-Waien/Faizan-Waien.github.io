import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()

    return (
        <div>

            <div className='left'>
                <img src='/src/images/urdu2.png' onClick={() => navigate('/')} />
            </div>

        </div>
    )
}

export default Header