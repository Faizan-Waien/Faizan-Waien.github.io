const Footer = () => {
    return (
        <div className='footer'>

            <div className='foot1'>

                <div className='foot1a'>
                    <p>© Copyright 2023 - Faizan Waien</p>
                </div>

            </div>

            <div className='scroll' onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <h1>&#10094;</h1>
            </div>

        </div>
    )
}

export default Footer