$(document).ready(function(){
	 $(document).bind("contextmenu",function(e) {
         return false;
      });

		  

  $("#projGame").click(function(){

 $("#myModal").modal('show');
		   
	   });
	   
	   $("#proj2").click(function(){
		   
		$("#myModal1").modal('show');   
		   
	   });
	   
	   $("#proj3").click(function(){
		   
			$("#myModal2").modal('show');   
			   
		   });
	   
	   $("#proj4").click(function(){
		   $("#myModal3").modal('show');
	   });
	   
	   $("#proj5").click(function(){
		   $("#myModal4").modal('show');
	   });
	   
	   
	   
});
	
