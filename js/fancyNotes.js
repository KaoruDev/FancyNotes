function coverIn(){
	$(this).find('.cover').stop().slideToggle("2000", "easeOutBack");
}
function coverOut(){
	$(this).find('.cover').stop().slideToggle("2000", "easeInBack");
}

function shadowBoxOn(){	
	lights = true;
	var details = $(this).find('.details').clone();
	details.fadeToggle('1');
	$('#shadowBox').fadeToggle('100');
	$('#disableBox').fadeToggle('100');
	$('#detailBox').fadeToggle('2000', 'easeOutCubic');
	$('#detailBox').append(details);
	
}

function shadowBoxOff(){

	lights = false;
	$('#shadowBox').stop().hide('1');
	$('#disableBox').stop().hide('1');
	$('#detailBox').stop().hide('1');
	$('#detailBox').children().empty();
}

var lights = false;



////////////////DOCUMENT START!!


$(document).ready(function(){
	$('section').on('mouseenter', coverIn);
	$('section').on('mouseleave', coverOut);
	$('section').on('click', shadowBoxOn);
	$('#disableBox').on('click', shadowBoxOff);
	$(document).keyup(function(e) {
  		if (e.keyCode == 27 && lights) {
				shadowBoxOff();
			 }   
	});
});
