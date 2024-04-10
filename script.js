document.addEventListener("DOMContentLoaded", function() {
    var roles = ["computer scientist", "mathematician", "software engineer"];
    var roleIndex = 0;
    var roleSpan = document.getElementById("role");

    function updateRole() {
        roleSpan.textContent = roles[roleIndex];
        roleIndex = (roleIndex + 1) % roles.length;
    }
    setInterval(updateRole, 1000);

    var projectButton = document.getElementById("project-button");
    var dropdownContent = projectButton.querySelector('.dropdown-content');

    // Function to toggle dropdown
    function toggleDropdown() {
        dropdownContent.classList.toggle('show');
    }

    // Add event listeners for both click and touchstart events
    projectButton.addEventListener('click', toggleDropdown);
    projectButton.addEventListener('touchstart', toggleDropdown);
});
