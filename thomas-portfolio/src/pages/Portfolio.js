import React from "react";

function Portfolio(){
    return(
        <>
        <br/>
        <div class="tile is-ancestor">
        <div class="tile is-vertical is-11" id="tile">
        <div class="tile is-parent">
        <article class="tile is-child notification is-dark">
        <p class="title banana" id="recent_work">My Recent Work</p>
        <div class="hero-body">
        <section>
        <div class="columns">
        <div class="column">
        <article class="tile is-child box notification is-light project"
            id="portfolioSelector" data-portfolio="portfolio1">
            <img class="previewimage" id="Nutrition Journal" src="assets/images/nutrition_journal/njournal.JPG"
             alt="Nutrition Journal"/>
            <img class="previewimage" id="Nutrition Journal2" src="assets/images/nutrition_journal/njournal2.JPG"
             alt="Nutrition Journal2"/>
        </article>
        </div>
        <div class="column">
            <article class="tile is-child box notification is-light project"
                id="portfolioSelector" data-portfolio="portfolio2">
                <img class="previewimage" id="Drinky-Bird" src="assets/images/drinkybird/drinkybird.png"
                     alt="Drinky-Bird"/>
                <img class="previewimage" id="Drinky-Bird" src="assets/images/drinkybird/drinkybird2.png"
                     alt="Drinky-Bird"/>
            </article>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child box notification is-light project"
                id="portfolioSelector" data-portfolio="portfolio3">
                <img class="previewimage" id="JS Quiz" src="assets/images/jsquiz/jsquiz.png"
                     alt="JS Quiz"/>
                <img class="previewimage" id="JS Quiz" src="assets/images/jsquiz/jsquiz3.png"
                     alt="JS Quiz2"/>
            </article>
        </div>

        </div>
        </section>
        </div>
        </article>     
        </div>
        </div>
        </div>
        </>
    );
}

export default Portfolio;