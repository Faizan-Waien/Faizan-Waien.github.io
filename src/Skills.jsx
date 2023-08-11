import Banner from "./Banner"
import skill from "./sk"

const Skills = () => {

    return (

        <div style={{ background: 'linear-gradient(120deg, gainsboro 50.5%, whitesmoke 51.5%)' }}>

            <Banner />

            <div id='hide' className="skills">

                <div className="skmain">

                    <h1 className="heading"><span>Skills</span></h1>

                    <div className="skmap">

                        {skill.map((skill) => {
                            return (
                                <div className="sk1" key={skill.id}>
                                    <img src={skill.image} />
                                    <label>{skill.title}</label>
                                </div>
                            )
                        })
                        }
                    </div>

                    <div className="wheel">
                    <img src='/src/assets/images/skiil.png'/>
                        {/*<h1>  &#128295;  </h1>*/}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills

{/* <img src='/src/images/skills/css3.png' />
<img src='/src/images/skills/javascript.png' />
<img src='/src/images/skills/html.png' />
<img src='/src/images/skills/React.png' />
<img src='/src/images/skills/expressJS.png' />
<img src='/src/images/skills/git.png' />
<img src='/src/images/skills/github.png' />
<img src='/src/images/skills/pgSQL.png' />
<img src='/src/images/skills/rest-api.png' />
<img src='/src/images/skills/sockets.png' />
<img src='/src/images/skills/vs-code.png' />
<img src='/src/images/skills/Responsive.png' /> */}