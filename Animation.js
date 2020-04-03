$(".stop").click(function () {
    $(".pressDown").stop(loop);
});

$(".pressDown").dblclick(loop)

function loop() {
    $("#pic1")
        .animate({
            width: "10%"
        })
        .animate({
            width: "50%"
        }, 700)
        .animate({
            opacity: "50%"
        }, 350)
        .animate({
            opacity: "100%"
        }, 350)
    $("#pic2")
        .animate({
            width: "10%"
        })
        .animate({
            width: "50%"
        }, 700)
        .animate({
            opacity: "50%"
        })
        .animate({
            opacity: "100%"
        })

    $("#pic3")
        .animate({
            width: "10%"
        })
        .animate({
            width: "50%"
        }, 700)
        .animate({
            opacity: "50%"
        }, 350)
        .animate({
            opacity: "100%"
        }, 350, loop)
}
