import React from "react";

function Home() {
    return (
        <>
            <br />
            <br />
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-11 " id="tile">
                <div class="tile is-parent">
                <article class="tile is-child notification is-dark">
                <p class="title" id="about_me">About Me</p>
                <p class="subtitle">
                    I am a Full Stack Web Developer with a background in education
                    and experience in data analysis to build intuitive tools,
                    track their metrics, and use that data to create even better tools.
                    Recently earned a certificate in Full Stack Development from UNC Charlotte,
                    taking skills developed on the job to a new level, including but not limited
                    to JavaScript, databases, responsive web design, Node.js, and React.js.
                    Reputation for thinking quickly on my feet in hectic environments and delivering new tools and solutions to solve both long and short term problems. </p>
                <p class="subtitle">I am passionate about ever adding more tools to my toolkit by taking classes and self teaching programming languages as they are needed. I applied these aspects and skills to create an application that sorts and serves training video content along with related materials and media for use in Amazon.com’s internal Learning Operations program. I am excited to work on a team to build responsive, data driven websites and PWAs. </p>
                <br />
                <p class="title">Contact Information</p>
                <a href="mailto: tfargent@gmail.com" rel="noopener noreferrer" target="_blank">
                    <p class="subtitle has-text-centered"  id="external-links">Email: tfargent@gmail.com</p>
                </a>
                <p class="subtitle has-text-centered">
                    Phone: 704-460-6266
                </p>
                <br />
                <p class="title">External Links</p>
                <section>
                    <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <article class="tile is-child box notification is-light">
                                <a href="https://www.linkedin.com/in/thomas-argent-78181569/" rel="noopener noreferrer" id="external-links" target="_blank">
                                    <p class="subtitle has-text-centered">
                                    <i class="fab fa-linkedin fa-7x"></i>
                                    <br />LinkedIn </p>
                                </a>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box notification is-light">
                                <a href="https://github.com/Argent-T" rel="noopener noreferrer" id="external-links" target="_blank">
                                    <p class="subtitle has-text-centered">
                                    <i class="fab fa-github-square fa-7x"></i><br />GitHub</p>
                                </a>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box notification is-light">
                                <a href="assets/images/ThomasArgentResume.pdf" rel="noopener noreferrer" id="external-links" target="_blank">
                                    <p class="subtitle has-text-centered">
                                    <i class="fas fa-file-alt fa-7x"></i><br />Resume</p>
                                </a>
                            </article>
                        </div>
                    </div>
                </section>
          <br/>
          <div class="content">
            <p class="title">My Skill Set</p>
            <i class="fab fa-html5 fa-7x" id="icon"></i>
            <i class="fab fa-css3-alt fa-7x" id="icon"></i>
            <i class="fab fa-js fa-7x" id="icon"></i>
            <img src="assets/images/icons/jquery.png" alt=""/>
            <img src="assets/images/icons/mysql.png" alt=""/>
            <img src="assets/images/icons/mongodb.png" alt=""/>
            <i class="fab fa-node-js fa-7x" id="icon"></i>
            <i class="fab fa-react fa-7x" id="icon"></i>
            <img src="assets/images/icons/heroku.png" alt=""/>
            <i class="fab fa-github-square fa-7x" id="icon"></i>
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