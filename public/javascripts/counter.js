$(document).ready(function(){
	window.setInterval(counter, 1000);
	$("#reset").click(function(){
		$("#cost").val(0);
		$("#people").val(0);
		$("#counter").text("0.00");
		$('.counters').hide();
		$('.inputs').show();
	});
	$("#start").click(function(){
		if(checkInputs() !== false){
			$('.counters').show();
			$('.inputs').hide();
		}
	});
});
function counter(){
	var cur = parseFloat($("#counter").text());
	var cost = ($("#cost").val())?parseFloat($("#cost").val()):1;
	var people = ($("#people").val())?parseFloat($("#people").val()):1;
	var costpersecond = new Number(cur + (people * (cost/60/60)));
	$("#counter").text(costpersecond.toFixed(4));
}

function checkInputs(){
	var cost = ($("#cost").val())?parseFloat($("#cost").val()):0;
	var people = ($("#people").val())?parseFloat($("#people").val()):0;
	if(cost <= 0 || people <= 0){
		alert("Inputs must be greater than 0");
		return false;
	}
}