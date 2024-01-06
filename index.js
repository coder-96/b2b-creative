$(document).ready(function () {
    $(".ham").click(function () {
        
        // var arrOfCategories = [
        //     "inspirational",
        //     "love",
        //     "dreams",
        //     "happiness",
        //     "hope",
        //     "success",
        // ];

        // var category = arrOfCategories[Math.floor(Math.random() * 7)];

        $(".dropdown").addClass("show");
    });

    $(".close").click(function () {
        $(".dropdown").removeClass("show");
    });
});
