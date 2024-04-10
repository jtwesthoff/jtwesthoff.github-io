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

    projectButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });
});
