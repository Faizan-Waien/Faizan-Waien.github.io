import Banner from "./Banner"

const About = () => {

  return (
    <div style={{ background: 'linear-gradient(120deg, gainsboro 50.5%, whitesmoke 51.5%)' }}>

      <Banner />

      <div id='hide' className='about'>

        <div className='ab1'>

          <h1 className="heading"><span>About</span></h1>

          <p>
            <b>Web Developer with a Passion for Crafting Engaging Digital Experiences</b>
            <br /><br />
            Welcome to my portfolio! I'm Faizan Waien, a dedicated and innovative web developer. I am driven by a deep passion for technology
            and a genuine enthusiasm for building seamless, user-centric websites and applications.
            <br /><br />
            I have honed my skills in a wide range of web development technologies and
            frameworks, including HTMLS, CSS3, JavaScript, React.js, and Node.js.
            <br /><br />
            What sets me apart as a web developer is my ability to understand the unique needs of each project and
            translate them into visually stunning and highly functional websites. I have a keen eye for detail and an
            unwavering commitment to delivering top-notch results_ From concept to execution, I enjoy being
            involved in every stage of the development process, collaborating closely with clients and designers to
            transform ideas into reality.
            <br /><br />
            In addition to my technical skills, I possess a strong understanding of user experience UX principles. I
            believe that a website should not only look great but also provide a seamless and intuitive experience
            for its users.
            <br /><br />
            Feel free to explore my portfolio to discover examples of my work and projects I've been involved in.
            Whether you're looking to revamp your existing website or build a new digital presence from scratch, I
            am confident in my ability to deliver exceptional results. If you're interested in working together or have
            any questions, please don't hesitate to get in touch.
            <br /><br />
            Thank you for visiting, and I look forward to the opportunity to collaborate and bring your web development goals to life!
          </p>

          <div className="wheel">
            <h1>&#10068;</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About