const projectArray = {
    portfolio1: {
        name: "Nutrition Journal",
        description: "Nutrition Log is an application where a user can sign up by creating an account and keep track of their nutrition habits. This app allows you to enter the foods you have eaten and the nutritional facts about that food will be displayed. It also tells you how many calories are in that food. The user can also enter exercise completed and the expected calories to burn will be provided.",
        development: "Passport, Express, BULMA, Heroku, Sequelize, Javascript, jQuery, MySql, Handlebars, Nutritionix API",
        deployedURL: "https://salty-ravine-80275.herokuapp.com/",
        githubURL: "https://github.com/Sharonyel/project2",
        images: {
            one: "assets/images/nutrition_journal/njournal.JPG",
            two: "assets/images/nutrition_journal/njournal2.JPG",
            three: "assets/images/nutrition_journal/gif2.gif",
            four: "assets/images/nutrition_journal/gif3.gif",
            },
        },
    portfolio2: {
        name: "Drinky Bird",
        description: "Drinky bird is a site which allows users to search for cocktail recipes by name, first letter, and by main ingredient. It also provides local bar locations, descriptions, and ratings wherein the user can order the drinks they choose.",
        development: "HTML5, CSS, JavaScript, Cocktail API, Materialize, Zomato API",
        deployedURL: "https://argent-t.github.io/Drinky-Bird/",
        githubURL: "https://github.com/Argent-T/Drinky-Bird",
        images: {
            one: "assets/images/drinkybird/drinkybird.png",
            two: "assets/images/drinkybird/drinkybird2.png",
            three: "assets/images/drinkybird/drinkybird3.png",
            four: "assets/images/drinkybird/drinkybird4.png",
        },
    },
    portfolio3: {
        name: "JS Quiz",
        description: "This is a multiple choice quiz. Upon clicking the start button, a timer is activated, giving 15 seconds per question in the questions.js file. Upon reaching the end of the quiz, the user is prompted to enter their name and the time and name is locally stored.",
        development: "HTML5, CSS, JavaScript, Bootstrap",
        deployedURL: "https://argent-t.github.io/Js-Quiz/",
        githubURL: "https://github.com/Argent-T/Js-Quiz",
        images: {
            one: "assets/images/jsquiz/jsquiz.png",
            two: "assets/images/jsquiz/jsquiz3.png",
            three: "assets/images/jsquiz/jsquiz4.png",
            four: "assets/images/jsquiz/jsquiz5.png",
        },
    },
    portfolio4: {
        name: "Employee Tracker",
        description: "This command-line application will allow the user to view and edit a database of employees, roles, and managers.",
        development: "Node.js, SQL, JavaScript",
        
        githubURL: "https://github.com/Argent-T/employee-tracker",
        images: {
            one: "assets/images/react-task-manager/home.png",
            two: "assets/images/react-task-manager/about.png",
            three: "assets/images/react-task-manager/toggle_effect.png",
            four: "assets/images/react-task-manager/delete_add.png",
        }
    },
    portfolio5: {
        name: "",
        description: "",
        development: "",
        deployedURL: "",
        githubURL: "",
        images: {
            one: "",
            two: "",
            three: "",
            four: "",
        }
    },
    portfolio6: {
        name: "Eat-A-Burger",
        description: "",
        development: "",
        deployedURL: "",
        githubURL: "",
        images: {
            one: "",
            two: "",
            three: "",
            four: "",
        }
    },
    portfolio7: {
        name: "",
        description: "",
        development: "",
        deployedURL: "",
        githubURL: "",
        images: {
            one: "",
            two: "",
            three: "",
            four: "",
        }
    },
    portfolio8: {
        name: "",
        description: "",
        development: "",
        deployedURL: "",
        githubURL: "",
        images: {
            one: "",
            two: "",
            three: "",
            four: "",
        }
    },
    portfolio9: {
        name: "",
        description: "",
        development: "",
        deployedURL: "",
        githubURL: "",
        images: {
            one: "",
            two: "",
            three: "",
            four: "",
        }
    },
};
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

const modal = $("#projectDisplay");

$(".project").on("click", function () {
    const portfolio = $(this).attr("data-portfolio");
    $("#displayName").text(projectArray[portfolio].name);
    $("#description").text(projectArray[portfolio].description);
    $("#development").text(projectArray[portfolio].development);
    $(".img1").attr("src", projectArray[portfolio].images.one);
    $(".img2").attr("src", projectArray[portfolio].images.two);
    $(".img3").attr("src", projectArray[portfolio].images.three);
    $(".img4").attr("src", projectArray[portfolio].images.four);
    $("#displayURL").attr("href", projectArray[portfolio].deployedURL).text("Deployed URL");
    $("#displayURL2").attr("href", projectArray[portfolio].githubURL).text("GitHub Repo");
    modal.addClass('is-active');
});

$(".close-modal").on("click", function () {
    modal.removeClass("is-active");
});
