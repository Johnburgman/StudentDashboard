// institution.js

document.addEventListener("DOMContentLoaded", function () {
    const institutionItems = document.querySelectorAll(".institution-item");

    institutionItems.forEach(item => {
        item.addEventListener("click", function () {
            alert("You clicked on: " + item.innerText);
            // Add your navigation logic here if necessary
            // Example: window.location.href = 'department-overview.html';
        });
    });
});
