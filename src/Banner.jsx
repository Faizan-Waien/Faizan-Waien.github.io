import MyImage from "/src/assets/images/pic.png"
import { SliderContext } from "./SliderContext"
import { useContext } from "react"

const Banner = () => {

    const { SlideUP } = useContext(SliderContext)

    return (
        <div id='banner' className="banner">

            <div className="bio">

                <div className="bio1">
                    <p>Hi, my name is</p>
                    <h1>Faizan Waien</h1>
                    <p> &lt; Web Developer &#47; &gt;</p>

                    <button onClick={SlideUP}>GET IN TOUCH</button>
                </div>

                <img src={MyImage} />

            </div>

        </div>
    )
}

export default Banner