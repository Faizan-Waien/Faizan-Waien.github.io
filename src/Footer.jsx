import { useContext } from "react";
import Contact from "./Contact"
import { SliderContext } from "./SliderContext";

const Footer = () => {

    const { slider, setSlider } = useContext(SliderContext)

    const ScrDOWN = () => {
        // document.getElementById('banner').style.height = '583px';
        // document.getElementById('header').style.width = '100%';
        document.getElementById('content').style.display = 'block';
        setTimeout(() => { document.getElementById('contactBox').style.display = 'none';},400)
        document.getElementById('navbar').style.right = '-315px';
        setSlider(false)
    }

    return (
        <div className={slider ? 'slider' : 'close'}>

            <div className='footer'>

                <div className='foot1'>

                    <div id='contactBox' style={{ display: "none" }}>
                        <Contact />
                    </div>

                    <div className='foot1a'>
                        <span>© Copyright 2023 - Faizan Waien</span>
                    </div>

                </div>

                <div className='scroll' >
                    {slider ?
                        <h1 onClick={ScrDOWN}>{/* &#11167; */} &#10095;</h1>
                        : <h1 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{/* &#11165; */}&#10094;</h1>
                    }
                </div>

            </div>
        </div>
    )
}

export default Footer