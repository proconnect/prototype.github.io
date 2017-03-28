 	//  Asey Lio - Author 2017 	  
        
$(document).ready(function() {  

		 
		// Hamburger Icon (fa fa-home)
		$('#hamburger').click(function(){				
			$('nav ul').toggleClass('open');					
		}); 
	 			
 		// Menu: ** PARENT => ".CBP-HRSUB" | 
 		if($(window).width() < 768){
 			$("nav ul li").hover(function(e){ 	
 			 e.stopPropagation();		 	
 			 $(this).find('>.cbp-hrsub').stop().slideToggle(400); 	
 			});
 		
 		} else {
 			$("nav ul li").click(function(){
 				$(this).find('>.cbp-hrsub').stop().slideToggle(400); 
 			});
 		}
 		
 	  
 	
		// Main Menu Links to Webpages	Using ajax
		if($(window).width() < 768){		
	
		$("#welcome").click(function(e){
			e.preventDefault();			
			window.location.assign("index.html");			
		});

		$("#churchClick").click(function(e){
			e.preventDefault();
			window.location.assign("church.html");			
		});

		$("#commClick").click(function(e){
			e.preventDefault();
			window.location.assign("community.html");			
		});

		$("#opshopClick").click(function(e){
			e.preventDefault();
			window.location.assign("opshop.html");			
		});
 
		$("#contactClick").click(function(e){
			e.preventDefault();
			window.location.assign("contact.html"); 			
		});

		} else {

		$("#welcome").click(function(e){
			 // e.stopPropagation();	
			 if(!$(this).hasClass('active')){
			 	window.location.assign("index.html").addClass('active');			 	
			 } else {
			 	$(this).removeClass('active');
			 }	
			 e.preventDefault();										
		});		

		$("li.church").mouseenter(function(e){						
			 window.location.assign("church.html").trigger('click');
			 e.stopPropagation();	
		});

		$("li.comm").mouseenter(function(e){				
			 window.location.assign("community.html").trigger('click');			 
			 e.stopPropagation();	
		});

		$("li.opshop").mouseenter(function(e){							
			 window.location.assign("opshop.html").trigger('click');			
			 e.stopPropagation();	
		});
 
		$("li.cont").mouseenter(function(e){				
			 window.location.assign("contact.html").trigger('click');		 
			 e.stopPropagation();	
		});
		
		}


		// ### Animated page scrolling !!!!	

		// var headerHeight = $('header').outerHeight();		
	
		$('.slide-section').click(function(e){	
			e.preventDefault();
			var linkHref = $(this).attr('href');
			
			$('html, body .parallax').animate({				
				scrollTop: $(linkHref).offset().top
			}, 1000 );			
			
						
		}); 	


});
		


  
  



 