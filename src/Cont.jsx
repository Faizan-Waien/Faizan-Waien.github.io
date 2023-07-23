import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Cont = () => {

    const [show, setShow] = useState(true)

    const navigate = useNavigate()

    return (
        <div className='contct'>

            <img src='/src/images/nbv2.png' style={{ zIndex: 2, width: '100%', height: '100%' }} />

            <div style={{ zIndex: 1, height: '41%', width: '37%', background: 'black', border: '1px solid black', position: 'absolute', top: 28, left: '31%' }}></div>

            {show &&
                <div className='win' id='win'>

                    <div style={{ display: 'flex' }}>
                        <img src='/src/images/br1.jpg' style={{ width: '100%' }} />
                    </div>

                    <div style={{ display: 'block', padding: '5px 10px', background: '#242424' }}>
                        <img src='/src/images/urdu2.png' style={{ width: '50px' }} />
                    </div>

                    <div style={{ display: 'block', padding: '0px 10px', borderBottom: '1px solid black' }}>
                        <h3 style={{ margin: 0 }}>Contact</h3>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', fontSize: 'small', padding: '0px 10px' }}>
                        <span>Name:</span><input style={{ background: 'transparent', margin: '5px', width: '100%', color: 'black' }} />
                        <span>Email:</span><input style={{ background: 'transparent', margin: '5px', width: '100%', color: 'black' }} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'baseline', fontSize: 'small', padding: '0px 10px' }}>
                        <span>Message</span>
                        <textarea placeholder="Enter you message" style={{ background: 'transparent', margin: '0px 5px', width: '100%', height: '90px', color: 'black', resize: 'none' }} />
                    </div>

                    <div style={{ display: 'block', padding: '5px 15px' }}>
                        <button style={{ width: '65px', float: 'right', fontSize: 'x-small', background: '#3d1c1b', border: 'transparent', cursor: 'pointer' }}>Send Email</button>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <img src='/src/images/br.jpg' style={{ width: '100%' }} />
                    </div>

                </div>
            }

            <button style={{ zIndex: 2, background: 'transparent', borderColor: 'yellow', cursor: 'pointer', width: 32, height: 14, position: 'absolute', top: '48.3%', left: '63.6%' }} onClick={() => setShow(!show)}></button>

            <div style={{ display: 'flex', flexDirection: "column", zIndex: 2, wordBreak: 'break-word', gap: 10, margin: '20px 15px', fontSize: '0.9vw', fontFamily: 'Rajdhani', fontWeight: 600, position: 'absolute', top: '46%', left: '78%', transform: 'rotate(-3deg)', width: '11%', height: '25%' }}>
                <span>Email: <br /> faizan.waien@gmail.com</span>
                <span>Contact no: <br /> +923345364196</span>
                <span>Location: <br /> Rawalpindi,Islamabad</span>
            </div>

            <div style={{ display: 'block', zIndex: 2,cursor:"pointer", position: 'absolute', top: '60%', left: '13.5%' }} onClick={() => navigate('/projects')}>
                <h1 style={{ fontSize: '2.5vw', fontFamily: 'fantasy', color:'#c07651' }}>PORTFOLIO</h1>
            </div>

        </div>
    )
}

export default Cont