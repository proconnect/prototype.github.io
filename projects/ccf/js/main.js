 	//  Asey Lio - Author 2017 	  
        
$(document).ready(function() {   
 
		  
		// Hamburger Icon (fa fa-home)
		$('#hamburger').click(function(){				
			$('nav ul').toggleClass('open');					
		}); 

		// Index page
		$("#welcome").click(function(e){
				e.preventDefault();			
				window.location.assign("index.html");			
			});	

		//  Menu
		var menuItems = $('nav ul li');
	 	
	 	// Mob
	 	if($(window).width() < 768){  /* ####  THIS NEEDS FIXING!! #### */
	 			menuItems.hover(function(e){ 	
	 			 e.stopPropagation();		 	
	 			 $(this).find('>.cbp-hrsub').stop().slideToggle(400); 	
	 			}); 
	 		}	

		for(i = 0; i < menuItems.length; i++){
			menuItems[i].addEventListener('mouseenter', itemLinks);

			function itemLinks(){
			// alert("clicked!");
			// window.location.assign = $(this).attr('href');
			}
		}
 
		// function itemLinks(){
		// 	// alert("clicked!");
		// 	window.location.assign = $(this).attr('href');
		// }

		// Tablet + Desktop
		if($(window).width() > 768){  /* ####  THIS NEEDS FIXING!! #### */
	 			menuItems.hover(function(e){ 
	 				e.preventDefault();		
	 			 // e.stopPropagation();		 	
	 			 $(this).find('>.cbp-hrsub').stop().slideToggle(); 	
	 			}); 
	 		}	

				

		 //$("li.church").click(function(e){						
		 	// window.location.assign("church.html").trigger('click');
		 	// e.stopPropagation();	
		// });

		// $("li.comm").click(function(e){				
			// window.location.assign("community.html").trigger('click');			 
			// e.stopPropagation();	
		 //});

		// $("li.opshop").click(function(e){							
		// 	 window.location.assign("opshop.html").trigger('click');			
		// 	 e.stopPropagation();	
		// });
 
		// $("li.cont").click(function(e){				
		// 	 window.location.assign("contact.html").trigger('click');		 
		// 	 e.stopPropagation();	
		// });
		
		// }
 		

});
		


  
  



 