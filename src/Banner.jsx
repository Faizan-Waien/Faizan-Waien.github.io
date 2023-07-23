import { useNavigate } from "react-router-dom"
import MyImage from "/src/assets/images/picx.png"

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

                <img src={MyImage} />

            </div>

        </div>
    )
}

export default Banner