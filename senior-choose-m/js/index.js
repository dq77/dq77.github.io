window.onload = function(){
    // 获取科目
    var subjects = [
        {id:1,value:'物理'},
        {id:2,value:'化学'},
        {id:3,value:'生物'},
        {id:4,value:'历史'},
        {id:5,value:'政治'},
        {id:6,value:'地理'}
    ];
    // 渲染下拉菜单
    var optionDOM = '';
    for(var i=0; i<subjects.length; i++){
        optionDOM += '<div data-subid="'+subjects[i].id+'" class="ry-check-div">'+subjects[i].value+'</div>'
    }
    $(".diy-phs-comp .sub-list").html(optionDOM);
    $(".wrong-input-score").hide();

    
    // 立即查询按钮
    $("#startCalculate").on("click",function(){
        // 校验函数
        judgeDiySbuject();
    });

    // css
    $(".diy-phs-comp .sub-list .ry-check-div").on("click",function(){
        if($(this).hasClass("checked")){
            $(this).removeClass("checked");
        }else{
            if($(".diy-phs-comp .sub-list .ry-check-div.checked").length < 3){
                $(this).addClass("checked");
            }
        }
        
    })
}

// 校验自定义学科
function judgeDiySbuject(){
    var $options = $(".diy-phs-comp .sub-list .ry-check-div.checked");
    var $wrong = $(".wrong-input-score");
    var wrongIcon = '<span class="glyphicon glyphicon-exclamation-sign"></span>';
    $wrong.hide();
    var res = []; // 选择结果集
    for(var i = 0; i < $options.length; i++){
        res.push($($options[i]).attr("data-subid"));
    }
    if($options.length < 3){// 未选全
        $wrong.show().html(wrongIcon+' 请选择 3 个学科');
    }else{
        alert('你选的是：'+res);
    }
}


// function judgeDiySbuject(){
//     console.log($(".phs-comp-title div.fr .form-control"))
//     var $options = $(".phs-comp-title div.fr .form-control");
//     var $wrong = $(".wrong-input-score");
//     var wrongIcon = '<span class="glyphicon glyphicon-warning-sign"></span>';
//     $options.removeClass("error");
//     $wrong.hide();
//     var res = []; // 选择结果集
//     var json = {};
//     for(var i = 0; i < $options.length; i++){
//         if(!json[$($options[i]).val()]){
//             res.push($($options[i]).val());
//             json[$($options[i]).val()] = 1;
//         }else{
//             $($options[i]).addClass("error");
//         };
//         if($($options[i]).val() == 0){
//             $($options[i]).addClass("error");
//         }
//     }
//     if($.inArray("0", res) != -1){// 未选全
//         $wrong.show().html(wrongIcon+' 请选择 '+i+' 个学科');
//     }else if(res.length < i){// 选重了
//         $wrong.show().html(wrongIcon+' 请勿选择重复的学科');
//     }else{
//         alert('你选的是：'+res);
//     }
// }