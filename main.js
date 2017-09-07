$(document).ready(function(){
$("#search").keyup(function(){

searchHighlight($(this).val());


});	
	
});

function searchHighlight(searchText)
{
	
	if (searchText)
	{
	var content = $("p").text();
	var searchExp = new RegExp(searchText, "ig");
	var matches = content.match(searchExp); 
	if (matches)
		{
			$("p").html(content.replace(searchExp, function(match){
				return "<span class='highlight'>" + match + "</span>";
				
			}));
		}
		
	}
	
	else
	{
		$(".highlight").removeClass(".highlight");
	}
	
	
	
}