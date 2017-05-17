$(".navbuttons").hover( 
	function() { 
    $(this).addClass("highlightedButton");	
    }, 
	function(){
    $(this).removeClass("highlightedButton");
    }
);

$(".navbuttons").click(
	function(){
		$(this).toggleClass("active");
		$(this).removeClass("highlightedButton");
		var panelId = $(this).attr("id") + "Panel";
		$("#" + panelId).toggleClass("hidden");
		var numberOfActivePanels = 4 - $('.hidden').length;
	$(".panel").width(($(window).width() / numberOfActivePanels) -5);

	}
);

$(".panel").height($(window).height() - $("#navbar").height()-15);

$(".panel").width(($(window).width() / 2) -7);

outputUpdate();

$('textarea').on('change keyup paste', function() {

	outputUpdate();

});

function outputUpdate(){

$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" 
 	+ $("#htmlPanel").val().replace(/\n/g, '<br />') + "</body></html>");

document.getElementById('outputPanel').contentWindow.eval($("#javascriptPanel").val());

}