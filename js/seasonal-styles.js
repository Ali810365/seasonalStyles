$("document").ready(function () {
    $(".seasons a").click(function (e) {//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element

        switch (season) {
            case "Default":
                $("header h3").text("Outfits for every season");
                $("#wear").attr("src", "images/300x400.png");
                $("#logo").attr("src", "images/four-seasons.gif");
                break;

            //spring 
            case "Spring":
                $("header h3").text("You're guide to amazing spring wear!");
                $("html ").css("background-color", "#2B7129");
                $("#wear").attr("src", "images/spring-wear.jpg");
                $("#logo").attr("src", "images/spring.gif");
                $(".colors").css("display", "none");
                break;

            //summer
            case "Summer":
                $("header h3").text("So you ready for summer wear!");
                $("html ").css("background-color", "#EBA52B");
                $("#wear").attr("src", "images/summer-wear.jpg");
                $("#logo").attr("src", "images/summer.gif");
                $(".colors").css("display", "none");
                break;
            
            //fall
            case "Fall":
                $("header h3").text("We got you covered for your fall outfits!");
                $("html ").css("background-color", "#A81124");
                $("#wear").attr("src", "images/fall-wear.jpg");
                $("#logo").attr("src", "images/fall.gif");
                $(".colors").css("display", "none");
                break;

            //winter
            case "Winter":
                $("header h3").text("Winter, season of discounts and we got you covered");
                $("html ").css("background-color", "#005393");
                $("#wear").attr("src", "images/winter-wear.jpg");
                $("#logo").attr("src", "images/winter.gif");
                $(".colors").css("display", "none");
                break;
        }
    });
});