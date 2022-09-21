/*
	WEB 303 Assignment 1 - jQuery
	{Dilankumar Patel}
	Student ID: - 0775508
*/

$(document).ready(function()
{
	
	// Using Change Event for function
	$("input").change(function()
	{
		let sal = $("#yearly-salary").val();
		let per = $("#percent").val();

		let sol = (( sal * per)/ 100);
		$("#amount").text('$' + sol.toFixed(2));
	}
	);

	// Using Keyup Event for function
	// $("input").keyup(function(){
	// 	let sal = $("#yearly-salary").val();
	// 	let per = $("#per").val();

	// 	let sol = (( sal * per)/ 100);
	// 	$("#amount").text('$' + sol.toFixed(2));
	// });
});