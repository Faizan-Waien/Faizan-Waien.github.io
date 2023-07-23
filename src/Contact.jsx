import img1 from "/src/assets/images/mail.png"
import img2 from "/src/assets/images/phone-call.png"
import img3 from "/src/assets/images/location.png"

const Contact = () => {

    return (

        <div className='contact'>

            <h1 className='heading'>Contact Me</h1>

            <div className="con1">

                <div className="con1a">

                    <div className="co">
                        <img src={img1} style={{ width: 40 }} />
                        <h3>faizan.waien@gmail.com</h3>
                    </div>

                    <div className="co">
                        <img src={img2} style={{ width: 40 }} />
                        <h3>+923345364196</h3>
                    </div>

                    <div className="co">
                        <img src={img3} style={{ width: 40 }} />
                        <h3>Islamabad,Pakistan</h3>
                    </div>

                </div>

                <div className="con1b">

                    <div>
                        <input placeholder="Name" />

                        <input placeholder="Email Address" />
                    </div>

                    <div>
                        <textarea placeholder="Enter you message" />
                    </div>

                    <button>Send Email</button>

                </div>

            </div>
        </div>
    )
}

export default Contact