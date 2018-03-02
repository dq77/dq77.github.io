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
    var optionDOM = '<option value="0" class="checked">请选择科目</option>';
    for(var i=0; i<subjects.length; i++){
        optionDOM += '<option value="'+subjects[i].id+'">'+subjects[i].value+'</option>'
    }
    $("#diySubject1,#diySubject2,#diySubject3").html(optionDOM);
    $(".wrong-input-score").hide();

    
    // 立即查询按钮
    $("#startCalculate").on("click",function(){
        // 校验函数
        judgeDiySbuject();
    });

    // css
    $(".major-prof-title li a,.major-prof-list li a").on("click",function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    })
}

// 校验自定义学科
function judgeDiySbuject(){
    console.log($(".phs-comp-title div.fr .form-control"))
    var $options = $(".phs-comp-title div.fr .form-control");
    var $wrong = $(".wrong-input-score");
    var wrongIcon = '<span class="glyphicon glyphicon-warning-sign"></span>';
    $options.removeClass("error");
    $wrong.hide();
    var res = []; // 选择结果集
    var json = {};
    for(var i = 0; i < $options.length; i++){
        if(!json[$($options[i]).val()]){
            res.push($($options[i]).val());
            json[$($options[i]).val()] = 1;
        }else{
            $($options[i]).addClass("error");
        };
        if($($options[i]).val() == 0){
            $($options[i]).addClass("error");
        }
    }
    if($.inArray("0", res) != -1){// 未选全
        $wrong.show().html(wrongIcon+' 请选择 '+i+' 个学科');
    }else if(res.length < i){// 选重了
        $wrong.show().html(wrongIcon+' 请勿选择重复的学科');
    }else{
        alert('你选的是：'+res);
    }
}
