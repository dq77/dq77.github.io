$(function(){

    var max_width = 0;
	$("#subject li").each(function() {
        if ($(this).width() > max_width) {
            max_width = $(this).width();
        };
    });
        
    $("#btn_pre").click(function(e) {
		var $subjectListLi = $("#subject li")
		$(this).next().find("ul").width($subjectListLi.size() * max_width);
		var $subjectList = $(this).next();
		$subjectList.animate({
			scrollLeft : $subjectList.scrollLeft() - $("#subject li").width()
		}, $("#subject li").width())
	});
	$("#btn_next").click(function(e) {
		var $subjectListLi = $("#subject li")
		$(this).prev().find("ul").width($subjectListLi.size() * max_width);
		var $subjectList = $(this).prev();
		$subjectList.animate({
			scrollLeft : $subjectList.scrollLeft() + $("#subject li").width()
		}, $("#subject li").width())
    });
});