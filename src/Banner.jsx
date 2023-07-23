import { useNavigate } from "react-router-dom"

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className="banner">

            <div className="bio">

                <div className="bio1">
                    <p>Hi, my name is</p>
                    <h1>Faizan Waien</h1>
                    <p>Web Developer</p>

                    <button onClick={() => navigate('/contact')}>GET IN TOUCH</button>

                </div>

                <img src='/src/images/picx.png' />

            </div>

        </div>
    )
}

export default Banner