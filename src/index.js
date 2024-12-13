$(document).ready(function () {
    $(".nav-item").hover(function () {
        const item = $(this);
        const underline = $("<div class='underline'></div>").css({
            position: "absolute",
            bottom: "0",
            left: "0",
            height: "2px",
            backgroundColor: "aquamarine",
            width: "0",
        });

        item.css("position", "relative");
        item.append(underline);
        underline.animate({ width: "100%" }, 300);
    },
        function () {
            const item = $(this);
            item.find(".underline").animate({ width: "0" }, 300, function () {
                $(this).remove();
            });
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const projectLinks = document.getElementsByClassName("project-link");
    Array.from(projectLinks).forEach(element => {
        element.setAttribute("target", "_blank");
    });
});
