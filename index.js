document.addEventListener("DOMContentLoaded", () => {
    const projectsBtn = document.getElementById("projects");
    const projectLinks = document.getElementsByClassName("project-link");
    const width = window.getComputedStyle(projectsBtn).getPropertyValue("width");
    console.log(width);
    console.log(typeof projectLinks);

    for (const element of projectLinks) {
        element.style.width = width;
    }

    $(document).ready(function () {
        $(".fa").mouseenter(function () {
            growIcon(this);
        });
        $(".fa").mouseleave(function () {
            shrinkIcon(this);
        });
    });
});

function growIcon(element) {
    element.style.transform = "scale(1.1)";
}

function shrinkIcon(element) {
    element.style.transform = "scale(1)";
} 