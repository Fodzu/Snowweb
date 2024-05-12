document.addEventListener('DOMContentLoaded', function () {
    var body = document.body;

    // Adding a delay before adding the fade-in class
    setTimeout(function () {
        body.classList.remove('transition-fade'); // Remove fade-out class
        body.classList.add('fade-in'); // Add fade-in class
    }, 100); // Adjust the delay time if needed

    var links = document.querySelectorAll('.navbar a');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Add the 'transition-fade' class to initiate the fade-out transition
            body.classList.add('transition-fade');

            // Get the target page URL
            var targetPage = link.getAttribute('href');

            // Wait for the transition to complete before navigating to the new page
            setTimeout(function () {
                window.location.href = targetPage;
            }, 500); // Adjust the timeout to match your transition duration
        });
    });

    var buttons = document.querySelectorAll('.buttons .btn');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            // Add the 'transition-fade' class to initiate the fade-out transition
            body.classList.add('transition-fade');

            // Get the target page URL
            var targetPage = button.getAttribute('href');

            // Wait for the transition to complete before navigating to the new page
            setTimeout(function () {
                window.location.href = targetPage;
            }, 500); // Adjust the timeout to match your transition duration
        });
    });

    // Add an event listener to remove the 'transition-fade' class on page load
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) {
            // Remove the 'transition-fade' class to initiate the fade-in transition
            body.classList.remove('transition-fade');
            body.classList.add('fade-in'); // Ensure fade-in class is added
        }
    });
})
document.addEventListener("DOMContentLoaded", function() {
    // Fade out the video overlay after some time
    setTimeout(function() {
        var overlay = document.getElementById('video-overlay');
        overlay.classList.add('fade-out');

        // Show the content after the fade-out animation completes
        setTimeout(function() {
            var content = document.getElementById('content');
            content.style.display = 'block';
        }, 500); // Adjust this time to match the duration of the fade-out animation
    }, 4000); // Adjust this time to match the duration you want the video to play
});



document.addEventListener("DOMContentLoaded", function() {
    var videoOverlay = document.getElementById('video-overlay');
    var footer = document.getElementById('footer');
    var stopVideoButton = document.getElementById('stopVideoButton');

    // Check if the user has visited before
    var hasVisitedBefore = localStorage.getItem('visitedBefore');

    // If not visited before, play the video
    if (!hasVisitedBefore) {
        videoOverlay.style.display = 'block';
        localStorage.setItem('visitedBefore', true);
    }

    // Event listener for the stop video button
    stopVideoButton.addEventListener('click', function() {
        // Hide the video overlay
        videoOverlay.style.display = 'none';
        // Show the website content
        document.getElementById('content').style.display = 'block';
        // Hide the footer
        footer.style.display = 'none';
    });
});



