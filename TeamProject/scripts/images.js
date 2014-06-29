window.onload = function () {
    var reactions = [{
        id: 1,
        title: "When Nakov asks if we are doing our homework regulary",
        image: "gifs/OfCourse.gif"
    }, {
        id: 2,
        title: "When I decide to change just one line of my code",
        image: "gifs/warehouse-forklift-crash.gif"
    }, {
        id: 3,
        title: "When you see a problem and you know how to solve it",
        image: "gifs/aha.gif"
    }, {
        id: 4,
        title: "Going to work in the morning after coding all night",
        image: "gifs/polar-bear-slide.gif"
    },{
        id: 5,
        title: "When your code finally returns the expected output",
        image: "gifs/booyah.gif"
    },{
        id: 6,
        title: "You have 2 weeks to make a game using Java",
        image: "gifs/simon-cowel-glazed-look.gif"
    },{
        id: 7,
        title: "When you see the next HTML/CSS homework tasks..",
        image: "gifs/enough-internet.gif"
    },{
        id: 8,
        title: "When you see a girl walking in the room during classes",
        image: "gifs/squirrel-up-dog-gif_large.gif"
    },{
        id: 9,
        title: "When you have 100/100 score in the judge system",
        image: "gifs/Snoop-Bounce.gif"
    },{
        id: 10,
        title: "When you see a new topic in the forum about the first C# homework",
        image: "gifs/squirrel-up-dog-gif_large.gif"
    },{
        id: 11,
        title: "When you see the tasks with ** in the homework",
        image: "gifs/boy-that-escalated-quickly.gif"
    },{
        id: 12,
        title: "Feeling ready for the exam",
        image: "gifs/BeforeExam.gif"
    },{
        id: 13,
        title: "When you see the tasks in the exam",
        image: "gifs/WhenYouSeeTheExam.gif"
    }];

    var imagesListContainer = document.getElementById('reactions');

    var imagesListTemplate = Handlebars.compile((document.getElementById('images-template')).innerHTML);

    // empty the container
    while (imagesListContainer.firstChild) {
        imagesListContainer.removeChild(imagesListContainer.firstChild);
    }

    imagesListContainer.innerHTML = imagesListTemplate({
        reactions: reactions
    });
};