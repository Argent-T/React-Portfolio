import React from "react";

function Home() {
    return (
        <>
            <br />
            <br />
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-11 " id="tile">
                <div className="tile is-parent">
                <article className="tile is-child notification is-dark">
                <p className="title" id="about_me">About Me</p>
                <p className="subtitle">
                    I am a Full Stack Web Developer with a background in education
                    and experience in data analysis to build intuitive tools,
                    track their metrics, and use that data to create even better tools.
                    Recently earned a certificate in Full Stack Development from UNC Charlotte,
                    taking skills developed on the job to a new level, including but not limited
                    to JavaScript, databases, responsive web design, Node.js, and React.js.
                    Reputation for thinking quickly on my feet in hectic environments and delivering new tools and solutions to solve both long and short term problems. </p>
                <p className="subtitle">I am passionate about ever adding more tools to my toolkit by taking classNamees and self teaching programming languages as they are needed. I applied these aspects and skills to create an application that sorts and serves training video content along with related materials and media for use in Amazon.com’s internal Learning Operations program. I am excited to work on a team to build responsive, data driven websites and PWAs. </p>
                <br />
                <p className="title">Contact Information</p>
                <a href="mailto: tfargent@gmail.com" rel="noopener noreferrer" target="_blank">
                    <p className="subtitle has-text-centered"  id="external-links">Email: tfargent@gmail.com</p>
                </a>
                <p className="subtitle has-text-centered">
                    Phone: 704-460-6266
                </p>
                <br />
                <p className="title">External Links</p>
                <section>
                    <div className="tile is-ancestor">
                        <div className="tile is-parent">
                            <article className="tile is-child box notification is-light">
                                <a href="https://www.linkedin.com/in/thomas-argent-78181569/" rel="noopener noreferrer" id="external-links" target="_blank">
                                    <p className="subtitle has-text-centered">
                                    <i className="fab fa-linkedin fa-7x"></i>
                                    <br />LinkedIn </p>
                                </a>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box notification is-light">
                                <a href="https://github.com/Argent-T" rel="noopener noreferrer" id="external-links" target="_blank">
                                    <p className="subtitle has-text-centered">
                                    <i className="fab fa-github-square fa-7x"></i><br />GitHub</p>
                                </a>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box notification is-light">
                                <a href="assets/images/ThomasArgentResume.pdf" rel="noopener noreferrer" id="external-links" target="_blank">
                                    <p className="subtitle has-text-centered">
                                    <i className="fas fa-file-alt fa-7x"></i><br />Resume</p>
                                </a>
                            </article>
                        </div>
                    </div>
                </section>
          <br/>
          <div className="content">
            <p className="title">My Skill Set</p>
            <i className="fab fa-html5 fa-7x" id="icon"></i>
            <i className="fab fa-css3-alt fa-7x" id="icon"></i>
            <i className="fab fa-js fa-7x" id="icon"></i>
            <img src="assets/images/icons/jquery.png" alt=""/>
            <img src="assets/images/icons/mysql.png" alt=""/>
            <img src="assets/images/icons/mongodb.png" alt=""/>
            <i className="fab fa-node-js fa-7x" id="icon"></i>
            <i className="fab fa-react fa-7x" id="icon"></i>
            <img src="assets/images/icons/heroku.png" alt=""/>
            <i className="fab fa-github-square fa-7x" id="icon"></i>
            <img src="assets/images/icons/adobe-photoshop.png" alt=""/>
          </div>



        </article>
        </div>
        </div>
        </div>

        </>
    )
}

export default Home;