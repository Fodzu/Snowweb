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

