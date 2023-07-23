import ImgSlider from "./ImgSlider"
import Work from "./Work"

const Projects = () => {

    return (

        <div className="projects">

            <ImgSlider />

            <div className="projcont">

                <h1 className='heading'>My Projects</h1>

                {Work.map((proj) => {
                    return (
                        <div className="projbox" key={proj.key}>

                            <div className='projinfo'>
                                <h2 style={{ margin: 0, background: 'whitesmoke', color: "gray" }}>{proj.title}</h2>
                                <h4 style={{ margin: '10px 0px', color: "maroon" }}>{proj.tagline}</h4>
                                <p>{proj.detail}</p>
                            </div>

                            <div className="projimg">
                                <img src={proj.image} onClick={() => window.open(`${proj.image}`)} />

                                <div className="projbtn">

                                    <form action={proj?.github} method="get" target="_blank">
                                        <button type="submit">View githib Repo</button>
                                    </form>

                                    <form action={proj?.github} method="get" target="_blank">
                                        <button type="submit">View Website</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Projects