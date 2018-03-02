




$(function(){
    $(".vaild-score>div>input").hide();
    $("#cancel-diy-vaild-score").hide();
    $("#save-diy-vaild-score").hide();
    

    $("#diy-vaild-score,#cancel-diy-vaild-score").on("click",function(){
        $("#diy-vaild-score").toggle();
        $(".vaild-score>div>span").toggle();
        $(".vaild-score>div>input").toggle();
        $("#cancel-diy-vaild-score").toggle();
        $("#save-diy-vaild-score").toggle();
        $(".toggle-nav-button").click();
        $(".wrong-input-score").addClass("hidden");
    })

    $("#save-diy-vaild-score").on("click",function(){
        var list1Total = $("#list-1-total").val();
        var list1Math = $("#list-1-math").val();
        var list2Total = $("#list-2-total").val();
        var list2Math = $("#list-2-math").val();

        var $wrongInputScore = $(".wrong-input-score");
        if(list1Total > 750 || list1Math > 150 || list2Total > 150 || list2Math > 150 ){
            $wrongInputScore.removeClass("hidden");
        }else if(list1Total == "" || list1Math  == "" || list2Total == "" || list2Math == "" ){
            $wrongInputScore.removeClass("hidden");
            $wrongInputScore.html('<span class="glyphicon glyphicon-warning-sign"></span>' + "请填写全部输入框；");
        }else{
            alert("修改成功");
            $wrongInputScore.addClass("hidden");
            $("#list-1-total-span").html(list1Total);
            $("#list-1-math-span").html(list1Math);
            $("#list-2-total-span").html(list2Total);
            $("#list-2-math-span").html(list2Math);
            $("#cancel-diy-vaild-score").click();
        }

        if(list1Total > 750){
            $wrongInputScore.html('<span class="glyphicon glyphicon-warning-sign"></span>' + "第一分段总分不能大于750分；");
            $("#list-1-total").parent().addClass("has-error");
        }
        if(list1Math > 150){
            $wrongInputScore.html('<span class="glyphicon glyphicon-warning-sign"></span>' + "第一分段数学分不能大于150分；");
            $("#list-1-math").parent().addClass("has-error");
        }
        if(list2Total > 750){
            $wrongInputScore.html('<span class="glyphicon glyphicon-warning-sign"></span>' + "第二分段总分不能大于750分；");
            $("#list-2-total").parent().addClass("has-error");
        }
        if(list2Math > 150){
            $wrongInputScore.html('<span class="glyphicon glyphicon-warning-sign"></span>' + "第二分段数学分不能大于150分；");
            $("#list-2-math").parent().addClass("has-error");
        }
    })


});




