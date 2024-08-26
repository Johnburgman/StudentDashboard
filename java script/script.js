document.addEventListener("DOMContentLoaded", function () {
    // Handle search button click
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");

    searchBtn.addEventListener("click", function () {
        const query = searchInput.value.trim();
        if (query) {
            alert("Search functionality is not implemented. You searched for: " + query);
        }
    });

    // Handle navigation option clicks
    const navOptions = document.querySelectorAll(".nav-option");

    navOptions.forEach(option => {
        option.addEventListener("click", function () {
            alert("Navigating to: " + option.querySelector("h3").innerText);
        });
    });

    // Handle login form submission
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Redirect to the index page
            window.location.href = "index.html"; // Change this to your actual dashboard page
        });
    }

    // Handle dynamic content loading
    const links = document.querySelectorAll('[data-url]');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const url = link.getAttribute('data-url');

            fetch(url)
                .then(response => response.text())
                .then(html => {
                    document.querySelector('.report-body').innerHTML = html;
                })
                .catch(error => {
                    console.error('Error loading the page:', error);
                });
        });
    });

    // Handle dropdown menu
    const profileIcon = document.getElementById('profile-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    profileIcon.addEventListener('click', function () {
        // Toggle the visibility of the dropdown menu
        const dropdownTrigger = document.getElementById('dropdown-trigger');
        dropdownTrigger.classList.toggle('open');
    });

    // Close the dropdown menu if clicked outside
    document.addEventListener('click', function (event) {
        if (!dropdownMenu.contains(event.target) && !profileIcon.contains(event.target)) {
            dropdownMenu.style.display = 'none';
            dropdownTrigger.classList.remove('open');
        }
    });
});
