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

    // Dropdown for Institution in the navigation bar
    const institutionDropdownTrigger = document.querySelector('.dropdown-trigger-institution');
    const institutionDropdownMenu = document.querySelector('.dropdown-institution');

    institutionDropdownTrigger.addEventListener('click', function (event) {
        event.preventDefault();
        institutionDropdownMenu.classList.toggle('show');
    });

    // Optional: Close dropdown if clicking outside
    document.addEventListener('click', function (event) {
        if (!institutionDropdownTrigger.contains(event.target) && !institutionDropdownMenu.contains(event.target)) {
            institutionDropdownMenu.classList.remove('show');
        }
    });

    // Handle links with data-url attributes
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

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    username: username,
                    password: password
                })
            })
            .then(response => {
                if (response.ok) {
                    window.location.href = 'index.html'; // Redirect to main page on success
                } else {
                    return response.text().then(text => {
                        errorMessage.textContent = text; // Display error message
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                errorMessage.textContent = 'An error occurred.';
            });
        });
    }
});
