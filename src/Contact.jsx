import gh from '/src/assets/images/skills/github.png'
import lin from '/src/assets/images/linkedin.png'

const Contact = () => {

    return (

        <div className='contact'>


            <div className="cont1">

                <div className="con1a">

                    <h1>Contact.</h1>

                    <h3>Get in touch with me via social media or email.</h3>
                    <div>
                        <img src={gh} />
                        <img src={lin} />
                    </div>
                </div>

                {/* ------------------------------------- */}

                <div className="con1b">
                    <h2>Contact Via.</h2>
                    <p><span>E-mail:</span> faizan.waien@gmail.com</p>
                    <p><span>Contact no:</span> +923345364196</p>
                    <p><span>Location:</span> Islamabad, Pakistan</p>
                </div>

                {/* ------------------------------------- */}

                <div className="con1c">

                    <h2>Send Email.</h2>

                    <div className="form">

                        <div>
                            <input placeholder="Name" />

                            <input placeholder="Email Address" />

                            <input placeholder="Subject" />

                            <button>Send Email</button>
                        </div>

                        <textarea placeholder="Enter you message" />

                    </div>
                </div>

            </div>
        </div >
    )
}

export default Contact