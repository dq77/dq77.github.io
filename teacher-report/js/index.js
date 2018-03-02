

$(function(){
    $(".ry-checkbox input").on("click",function(){
        if ($(this).prop("checked")) {
            $(this).parent().addClass("on-check")
        } else {
            $(this).parent().removeClass("on-check")
        }
    });

    $(".ry-radio input").on("click",function(){
        if ($(this).prop("checked")) {
            $(this).parent().addClass("on-check").siblings().removeClass("on-check");
        }
    })

    $(".question-number").on("click",function(){
        if (!$(this).hasClass("active")) {
            $(this).addClass("active").siblings().removeClass("active");
        }
    })

    resizeView();
    $(window).resize(function(){
        resizeView();
    });
    $(".toggle-nav-button").on("click",function(){
        if($(".left-area").width() > 100){
            $(".left-area").animate({width:'94px'},"fast",resizeView);
            $(".ry-teach-repo-div").animate({width:'72px'},"fast");
        }else{
            $(".main-view").css("width",$(document.body).width() - 224 + "px")
            $(".left-area").animate({width:'210px'},"fast");
            $(".ry-teach-repo-div").animate({width:'188px'},"fast");
        }
    });

    $(window).scroll(function() {
        if($(window).scrollTop() > 169){
            $(".ry-teach-repo-div").addClass("fix");
        }else{
            $(".ry-teach-repo-div").removeClass("fix");
        }
    });
});


function resizeView(){
    $(".main-view").css("width",$(document.body).width() - $(".left-area").width() - 34 + "px")
    $(".ry-teach-repo-div").css("width",$(".left-area").width() - 4 + "px")
}