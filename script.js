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

    // Function to close dropdown when a link is clicked
    function closeDropdown() {
        dropdownContent.classList.remove('show');
    }

    // Add event listeners for both click and touchstart events on projectButton
    projectButton.addEventListener('click', toggleDropdown);
    projectButton.addEventListener('touchstart', toggleDropdown);

    // Add event listener to each link inside the dropdown content to close the dropdown
    var dropdownLinks = dropdownContent.getElementsByTagName('a');
    for (var i = 0; i < dropdownLinks.length; i++) {
        dropdownLinks[i].addEventListener('click', closeDropdown);
        dropdownLinks[i].addEventListener('touchstart', closeDropdown);
    }
});
