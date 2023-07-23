const Footer = () => {
    return (
        <div className='footer'>

            <div className='foot1'>

                <div className='foot1a'>
                    <p>© Copyright 2023 - Faizan Waien</p>
                </div>

                {/* <div className='foot1b'>
                <li onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>ABOUT</li>
                <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>SKILLS</li>
                <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>PROJECTS</li>
                <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>CONTACT</li>
                </div> */}

            </div>

            <div className='scroll' onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <h1>&#10094;</h1>
            </div>

        </div>
    )
}

export default Footer