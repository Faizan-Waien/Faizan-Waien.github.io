import skill from "./sk"

const Skills = () => {

    return (

        <div className="skmain">
            <h1 className="heading">My Skills</h1>

            <div className="skills">
                {skill.map((skill) => {
                    return (
                        <div className="sk1" key={skill.id}>
                            <img src={skill.image} />
                            <span>{skill.title}</span>
                        </div>
                    )
                })
                }
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