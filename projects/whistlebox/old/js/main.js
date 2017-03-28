 	//  ### FADEIN + FADEOUT
 
  
$(document).ready(function() {
  

	var $mainContent = $('.parallax'),
		$mainNav = $('#main-nav'),
		$mainMenu = $mainNav.find('ul'),
		$navItems = $mainMenu.find('a'),
		$hamburger = $('#hamburger'),
		scrollOffset = -40,
		scrollTime = 1000,
		navOffsets;


		function getNavOffsets(){
			var offsets = []
			$navItems.each(function(i){
				var id = $(this).attr('href'),
					offset = $(id).offset().top;
				offsets.push(offset);
				console.log(offsets[i]);
			})

			return offsets;
		}


	// Mobile Dropdown Menu
/*	$('header .hamburger').click(function(){			
		//alert('click');
		$('nav').toggleClass('open');
	});*/

	$hamburger.click(function(){
		$mainMenu.toggleClass('open');
	})

	
	//Animated page scrolling
	$navItems.click(function(e){

		e.preventDefault();

		if(!navOffsets){
			navOffsets = getNavOffsets();
		}	
		var index = $navItems.index($(this)),
			scrollTop = navOffsets[index] - $mainNav.height();


		$mainContent.animate({scrollTop: scrollTop});

	});


});
  
  



 