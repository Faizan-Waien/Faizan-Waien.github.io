import ImgSlider from "./ImgSlider"
import Work from "./Work"
import link from "/src/assets/images/link.png"
import github from "/src/assets/images/skills/github.png"

const Projects = () => {

    return (
        <div className="projects">

            <ImgSlider />

            <div id='content' className="projdiv">

                <div className="projcont">

                    <h1 className='heading'><span>Projects</span></h1>

                    {Work.map((proj) => {
                        return (
                            <div className="projbox" key={proj.id}>

                                <div className='projinfo'>
                                    <h2 style={{ margin: 0, background: '#141414', color: "white", padding: '0px 10px', borderRadius: '10px' }}>{proj.title}</h2>
                                    <h4 style={{ margin: 0, color: "maroon" }}>{proj.tagline}</h4>
                                    <p>{proj.detail}</p>

                                    <div className="projbtn">

                                        <form action={proj?.github} method="get" target="_blank">
                                            <button type="submit">
                                                <img src={github} />
                                                <span>View Repository</span>
                                            </button>
                                        </form>

                                        {proj?.link &&
                                            <form action={proj?.link} method="get" target="_blank">
                                                <button type="submit">
                                                    <img src={link} />
                                                    <span>View Website</span>
                                                </button>
                                            </form>
                                        }

                                    </div>
                                </div>

                                <div className="projimg">
                                    <img src={proj.image} onClick={() => window.open(`${proj.image}`)} />
                                    <img src={proj.lang} style={{ height: 30, width: 'fit-content', cursor: 'default' }} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
        </div>
    )
}

export default Projects