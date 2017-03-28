
$(document).ready(function(){
 
	// Hamburger Menu
	// listen for when the user clicks on the hamburger icon
	// HAMBURGLERv2

	$('button').click(function() {
  	$(this).toggleClass('expanded').siblings('div').slideToggle();
	});
	// eof Hamburger Menu

	// Menu selected
	var $navItems = $navItems = $('nav a');
	
	$navItems.click(function(e){

		e.preventDefault();
		var id = $(this).attr('href');
		$navItems.removeClass('selected');
		$(this).addClass('selected');
		$(id).velocity('scroll', {duration: 1000, easing: 'easeInOutQuad'});

	});
	// eof menu selected

	function togglescroll() {
	  $('body').on('touchstart', function(e) {
	    if ($('body').hasClass('noscroll')) {
	      e.preventDefault();
	    }
	  });
	} 


	togglescroll();
		$(".icon").click(function() {
		$(".mobilenav").fadeToggle(500);
		$(".top-menu").toggleClass("top-animate");
		$("body").toggleClass("noscroll");
		$(".mid-menu").toggleClass("mid-animate");
		$(".bottom-menu").toggleClass("bottom-animate");
	});


	// PUSH ESC KEY TO EXIT: Hamburger Menu

	$(document).keydown(function(e) {
	  if (e.keyCode == 27) {
	    $(".mobilenav").fadeOut(500);
	    $(".top-menu").removeClass("top-animate");
	    $("body").removeClass("noscroll");
	    $(".mid-menu").removeClass("mid-animate");
	    $(".bottom-menu").removeClass("bottom-animate");
	  }
	}); 
	// eof Hamburge Menu


	// when menu clicked do a smooth scroll:
	// create variables
	var $nav = $('header nav'),
		$navItems = $('header nav a'),		
		scrollTime = 500;

	$navItems.click(function(e){
		e.preventDefault();
		var id = $(this).attr('href');
		
		$(id).velocity('scroll',{
			duration: scrollTime,
			easing:'easeInOutQuad'
		});

	});
	/*end navA click*/ 

	/*Image Modal Overlay*/
	var $body = $('body'),
		$thumbs = $('.thumbs img'),
		$modal,
		currentIndex = -1,
		numImages = $thumbs.length,
		lastIndex = numImages - 1;

		//alert($thumbs.length);

	function createModal(){
		var $modal = $('<div>', {class: 'modal'}),
			$container = $('<div>', {class: 'modal-container'}),
			$img = $('<img>', {alt: ""}),
			$next = $('<i>', {class: "fa fa-chevron-right next"}),
			$prev = $('<i>', {class: "fa fa-chevron-left prev"}),
			$close = $('<i>', {class: "fa fa-times close"});
			$modal.append($container.append($img, $next, $prev, $close));
		return $modal;
	}

	function addModal(){
		$body.append($modal);
	}

	function removeModal(){
		$modal.detach();
	}

	function loadModalImage(imageURL){
		$modal.find('img')
			.css({opacity: 0})
			.attr('src', imageURL)
			.load(function(){
				$(this).velocity('fadeIn', {duration: 300}).unbind();
			})
	}

	
	//initialize
	$modal = createModal();

	$thumbs.click(function(){
		var imgSrc = $(this).data('img');
		currentIndex = $thumbs.index(this);
		loadModalImage(imgSrc);
		addModal();
	});

	$modal.click(function(e){
		if(e.currentTarget === e.target){
			removeModal();
		}
	});

	$modal.find('.close').click(function(){
		removeModal();
	});

	$modal.find('.next').click(function(){
		if(currentIndex < lastIndex){
			currentIndex++;
		}else{
			currentIndex = 0;
		}
		var imgSrc = $thumbs.eq(currentIndex).data('img');
		loadModalImage(imgSrc);
	});

	$modal.find('.prev').click(function(){
		if(currentIndex > 0){
			currentIndex--;
		}else{
			currentIndex = lastIndex;
		}
		var imgSrc = $thumbs.eq(currentIndex).data('img');
		loadModalImage(imgSrc);
	});

	/*Video Modal Overlay*/
	var $videoButtons = $('.thumbs .vid button'),
		$videoModal,
		videoIndex = -1,
		numVideos = $videoButtons.length,
		lastVidIndex = numVideos - 1,
		youTubeURL = "https://www.youtube.com/embed/";

		//alert($numVideos.length);

	function createVideoModal(){
		var $modal = $('<div>', {class: 'modal'}),
			$container = $('<div>', {class: 'modal-container'}),
			$iFrame = '<iframe width="640px" height="400px" src="" frameborder="0" allowfullscreen></iframe>',
			$close = $('<i>', {class: "fa fa-times close"});
			$modal.append($container.append($iFrame, $close));
		return $modal;
	}

	function addVideoModal(){
		$body.append($videoModal);
	}

	function removeVideoModal(){
		$videoModal.detach();
	}

	function loadModalVideo(videoId){
		$videoModal.find('iframe')
			.css({opacity: 0})
			.attr('src', youTubeURL+videoId)
			.load(function(){
				$(this).velocity('fadeIn', {duration: 300}).unbind();
			})
	}

	//initialize
	$videoModal = createVideoModal();

	$videoButtons.click(function(){
		var videoId = $(this).data('id');
		videoIndex = $videoButtons.index(this);
		loadModalVideo(videoId);
		addVideoModal();
	});

	$videoModal.click(function(e){
		if(e.currentTarget === e.target){
			removeVideoModal();
		}
	});

	$videoModal.find('.close').click(function(){
		removeVideoModal();
	}); 
	// eof Video Modal

	/*Tickets Modal Overlay*/
	var $ticketModal = $('.ticket-modal'),
		$ticketBtn = $('.ticket-btn');

	function removeTicketModal(){
		$ticketModal.velocity('fadeOut', {duration: 300});
	}


	$ticketBtn.click(function(e){
		e.preventDefault();
		$ticketModal.velocity('fadeIn', {duration: 300});
	});

	$ticketModal.click(function(e){
		if(e.currentTarget === e.target){
			removeTicketModal();
		}
	});

	$ticketModal.find('.close').click(function(){
		removeTicketModal();
	});

	//Video controls

	var homeVideo = document.getElementById('hmvid'),
		$play = $('.play');
	//alert(homeVideo);

	$play.click(function(){
		homeVideo.play();
		$play.velocity('fadeOut', {duration: 300});
	})

	homeVideo.addEventListener('ended', function(){
		$(homeVideo).velocity('fadeOut', {duration: 300});
	});

});
/*end doc ready()*/ 




 









