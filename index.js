function growIcon(element) {
    element.style.transform = "scale(1.1)";
}

function shrinkIcon(element) {
    element.style.transform = "scale(1)";
}

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

    $(".fa").mouseenter(function () {
        growIcon(this);
    });
    $(".fa").mouseleave(function () {
        shrinkIcon(this);
    });
});
