import React from "react";
import ProjectObject from "../components/ProjectObject";


function Portfolio(){
  
  
function modalFunction(event){
    document.querySelector(".modal").classList.add("is-active");
    const portfolio = event.currentTarget.getAttribute("data-portfolio");
    document.querySelector("#displayName").textContent= (ProjectObject[portfolio].name)
    document.querySelector("#description").textContent= (ProjectObject[portfolio].description)
    document.querySelector("#development").textContent= (ProjectObject[portfolio].development)
    document.querySelector(".img1").src= (ProjectObject[portfolio].images.one)
    document.querySelector(".img2").src= (ProjectObject[portfolio].images.two)
    document.querySelector(".img3").src= (ProjectObject[portfolio].images.three)
    document.querySelector(".img4").src= (ProjectObject[portfolio].images.four)
    document.querySelector("#displayURL").href= (ProjectObject[portfolio].deployedURL)
    document.querySelector("#displayURL2").href= (ProjectObject[portfolio].githubURL)
    
}



    return(
        
        <>
        <br/>
        <div className="tile is-ancestor">
        <div className="tile is-vertical is-11" id="tile">
        <div className="tile is-parent">
        <article className="tile is-child notification is-dark">
        <p className="title banana" id="recent_work">My Recent Work</p>
        <div className="hero-body">
        <section>
        <div className="columns">
        <div className="column">
        <article onClick={modalFunction} className="tile is-child box notification is-light project"
            id="portfolioSelector" data-portfolio="portfolio1">
            <img className="previewimage" id="Nutrition Journal" src="assets/images/nutrition_journal/njournal.JPG"
             alt="Nutrition Journal"/>
            <img className="previewimage" id="Nutrition Journal2" src="assets/images/nutrition_journal/njournal2.JPG"
             alt="Nutrition Journal2"/>
        </article>
        </div>
        <div className="column">
            <article onClick={modalFunction} className="tile is-child box notification is-light project"
                id="portfolioSelector" data-portfolio="portfolio2">
                <img className="previewimage" id="Drinky-Bird" src="assets/images/drinkybird/drinkybird.PNG"
                     alt="Drinky-Bird"/>
                <img className="previewimage" id="Drinky-Bird" src="assets/images/drinkybird/drinkybird2.PNG"
                     alt="Drinky-Bird"/>
            </article>
        </div>
        <div className="tile is-parent">
            <article onClick={modalFunction} className="tile is-child box notification is-light project"
                id="portfolioSelector" data-portfolio="portfolio3">
                <img className="previewimage" id="JS Quiz" src="assets/images/jsquiz/jsquiz.PNG"
                     alt="JS Quiz"/>
                <img className="previewimage" id="JS Quiz" src="assets/images/jsquiz/jsquiz3.PNG"
                     alt="JS Quiz2"/>
            </article>
        </div>

        </div>
        </section>


        {/* MODAL */}
        <div className="modal" id="projectDisplay">
                            <div className="modal-background close-modal"></div>
                            <div className="modal-card">
                                <header className="modal-card-head">
                                    <p className="modal-card-title pride" id="displayName"></p>
                                    <button onClick={()=>document.querySelector(".modal").classList.remove("is-active")} className="delete close-modal" aria-label="close"></button>
                                </header>
                                <section className="modal-card-body">
                                    <div className="content has-text-centered">
                                        <div className="tile is-ancestor">
                                            <div className="tile is-parent">
                                                <article className="tile is-child box notification is-dark">
                                                    <a id="displayURL" target="_blank">Deployed URL</a>
                                                </article>
                                            </div>
                                            <div className="tile is-parent">
                                                <article className="tile is-child box notification is-dark">
                                                    <a id="displayURL2" target="_blank">GitHub Repo</a>
                                                </article>
                                            </div>
                                        </div>
                                        
                                        <div className="tile is-ancestor">
                                            <div className="tile is-parent">
                                                <article className="tile is-child box notification is-dark">
                                                    <h5 className="sub">Description</h5>
                                                    <p id="description"></p>
                                                    <br/>
                                                    <h5 className="sub">Development</h5>
                                                    <p id="development"></p>
                                                </article>
                                            </div>
                                        </div>
                                        
                                        <h4>Screen Shots</h4>
                                        <img className="img1" alt="img1"></img>
                                        <img className="img2" alt="img2"></img>
                                        <img className="img3" alt="img3"></img>
                                        <img className="img4" alt="img4"></img>
                                    </div>
                                </section>
                                <footer className="modal-card-foot">
                                    <button onClick={()=>document.querySelector(".modal").classList.remove("is-active")} className="button close-modal">Close</button>
                                </footer>
                            </div>
                        </div>

        </div>
        </article>     
        </div>
        </div>
        </div>
        
        </>
    );
}

export default Portfolio;