// variable initialize for loop start
let i = 1;
let intervalId;
let isPaused = false;

// function start slide show
function startSlideshow() {
    intervalId = setInterval(function () {
        if (!isPaused) {
            i++;
            // if Images floder is greater than 12 so it will be start again at image 1
            if (i > 15) i = 1;
            // image show in slider of images folder
            document.getElementById("img").src = "Images/img" + i + ".jpg";
            // slider image change it will also change the body background
            document.body.style.backgroundImage = "url('Images/img" + i + ".jpg')";
        }
    }, 2000); // Change image every 3 seconds
}

// function stop slide 
function stopSlideshow() {
    clearInterval(intervalId);
}

// function previous slide show
function previousSlideshow() {
    stopSlideshow();
    i--;
    if (i < 1) i = 15;
    document.getElementById("img").src = "Images/img" + i + ".jpg";
    document.body.style.backgroundImage = "url('Images/img" + i + ".jpg')";
}

// function next slide show
function nextSlideshow() {
    stopSlideshow();
    i++;
    if (i > 15) i = 1;
    document.getElementById("img").src = "Images/img" + i + ".jpg";
    document.body.style.backgroundImage = "url('Images/img" + i + ".jpg')";
}

// function pause slide show
function pauseSlideshow() {
    isPaused = !isPaused;
    var pauseButton = document.querySelector(".pause");
    pauseButton.innerHTML = isPaused ? "&raquo;" : "&#9616;&#9616;"; // entities in html pause and play
    if (!isPaused) {
        startSlideshow();
    } else {
        stopSlideshow();
    }
}


startSlideshow(); // Start the slide show automatically 