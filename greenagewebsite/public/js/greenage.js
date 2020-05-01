// set some global properties
TweenLite.set('.client-grid-wrap', {perspective:1000});
TweenLite.set('.client-grid-wrap-inner', {transformStyle:"preserve-3d"});
TweenLite.set('.grid-back', {rotationX:-90});
TweenLite.set(['.grid-back', '.grid-front'], {backfaceVisibility:"hidden", transformOrigin:'50% 0'});

// loop through each element
$(".client-row").each(function(i, el) {
    
  // create a timeline for this element in paused state
  var tl = new TimelineMax({paused: true});

  // create your tween of the timeline in a variable
  var t = tl
         .set(el,{willChange:"transform"})
         .to($(el).find('.client-grid-wrap-inner'), 0.53, {y:"-40px", rotationX:90, z:0.01, zIndex: 2, overwrite:"all", ease:Back.easeOut}, 0);

  // store the tween timeline in the javascript DOM node
  el.animation = t;

  //create the event handler
  $(el).on("mouseenter",function(){
    this.animation.play();
  }).on("mouseleave",function(){
    this.animation.reverse();
  });
  
});

$(window).bind('scroll', function() {
  var scrollhight = $(window).height()*0.9
        var navHeight = $(window).height() - scrollhight;
  
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
     
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

$(document).ready(function(){
	var $tab = window.location.hash.replace('#', '');
        showProjects($tab, 20);
		
	/*$(".filter").click(function(){
		 // current class assign
		$('.gallery-category-main .gallery-category-button.active-btn').removeClass('active-btn');
		$('.gallery-category-main .gallery-category-button.filter').addClass('active-btn');
	
		 selectedClass = $(this).attr("data-rel");
		console.log(selectedClass);
		$(".gallery-filter").not("."+selectedClass).fadeOut();
		setTimeout(function() {
		$("."+selectedClass).fadeIn();
		$(".gallery-filter").fadeTo(300, 1);
		}, 300); 
	});*/
	  $(".parent-category").click(function(){
		  var selectedClass = $(this).attr("data-rel");
		  if(selectedClass == "all"){
			 $(".gallery-sub-category-button").removeClass("d-visible");
			 $(".gallery-sub-category-button").addClass("d-none");
		 }
		 $(".gallery-sub-category-button").removeClass("d-visible");
		 $(".gallery-sub-category-button."+selectedClass).addClass("d-visible");
	});
	 $( '.filter' ).on( 'click', function() {
		var cat = $(this).attr("data-rel");
		if ( cat == 'all' ) {
			$( '.gallery-filter' ).removeClass( 'd-none' );
			setTimeout(function(){
				$( '.gallery-filter' ).removeClass( 'd-none' );
			},300);
		  } else {
			$( '.gallery-filter' ).addClass( 'd-none' );
			setTimeout(function(){
				$( '.gallery-filter.' + cat).removeClass( 'd-none' );
			},300);
		  }
	}); 
	/*  $( '.filter' ).on( 'click', function() {
		  var $selectclass = $(this).attr('data-rel');
		  
		  if ( $selectclass == 'all' ) {
			$( '.gallery-filter' ).removeClass( 'd-none' );    
		  } else {
			$( '.gallery-filter' ).addClass( 'd-none' );
			 $( '.' + $selectclass ).removeClass( 'd-none' );
		  }
		console.log('.gallery-filter [data-rel=' + $selectclass + ']')
	});  */
  $("#services-slider").owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 1200,
      loop: true,
      nav: false,
      navText: false,
      dots: false,
      mouseDrag: true,
      touchDrag: true,
      center: true,
      responsive: {
         0: {
            items: 1
         },
         640: {
            items: 3
         }
      },
   });
  
  var owl = $('.owl-carousel.quality-carousel');
  owl.owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 1200,   
    loop: true,
    nav: false,
    navText: false,
    dots: false,
    mouseDrag: true,
    margin: 10,
    navigation: true,
    navigationText: ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>', '<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
    slideBy: 1,
    items: 1,
  });


    $('.owl-carousel.testimonial-carousel').owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      smartSpeed: 1200,   
      loop: true,
      nav: false,
      navText: false,
      dots: false,
      mouseDrag: true,
      slideBy: 1,
      items: 1,
      
    });
 
	var owl = $('.greenage-customer .owl-carousel');
	owl.owlCarousel({
  
		autoplay: true,
        autoplayHoverPause: false,
		autoplaySpeed: 2000,
		loop: true,
		nav: false,
		margin: 10,
		navText: false,
		dots: false,
		mouseDrag: true,
		slideBy: 1,
		responsive: {
			0: {
				items: 1,
				loop: true,
			},
			600: {
				items: 3,
				loop: true,
			},
			960: {
				items: 5,
				loop: true,
			},
			1200: {
				items: 6,
				loop: true,
			}
		} 
	});
	
  //for gallery hover effect
  const nodes = [].slice.call(document.querySelectorAll('li'), 0);
    const directions  = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
    const classNames = ['in', 'out'].map((p) => Object.values(directions).map((d) => `${p}-${d}`)).reduce((a, b) => a.concat(b));

    const getDirectionKey = (ev, node) => {
      const { width, height, top, left } = node.getBoundingClientRect();
      const l = ev.pageX - (left + window.pageXOffset);
      const t = ev.pageY - (top + window.pageYOffset);
      const x = (l - (width/2) * (width > height ? (height/width) : 1));
      const y = (t - (height/2) * (height > width ? (width/height) : 1));
      return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    }

    class Item {
      constructor(element) {
        this.element = element;    
        this.element.addEventListener('mouseover', (ev) => this.update(ev, 'in'));
        this.element.addEventListener('mouseout', (ev) => this.update(ev, 'out'));
      }
      
      update(ev, prefix) {
        this.element.classList.remove(...classNames);
        this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
      }
    }

    nodes.forEach(node => new Item(node));
	
	//define controller
	var controller = new ScrollMagic.Controller();

  $(".greenage-fadeinup").each(function(){
    var fadeUpScene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8
    })
    .setTween(TweenMax.from(this, 0.8, {y: 50, opacity: 0, ease: Power1.easeIn}))
    .addTo(controller)
  })

	//Imgage uncover load effetct right to left
	 $('.img-uncover').each(function(){
        var $this = this;
        new ScrollMagic.Scene({
            triggerHook: 0.75,
            triggerElement: $this,   
        })
		.addTo(controller)
	//.addIndicators()
        .setClassToggle($this, 'show');    
    });

  var news = document.querySelector('#page-list > div.page-content.without-sidebar > div > div.page_content > div > div.website-list[data-doctype="News"]')
   if (news){
  /*jQuery(window).on('load', function() {
    
        $('.result').masonry({
          columnWidth : '.item-news',
          gutter : 15,
          itemSelector : '.item-news',
          percentPosition : 'true',
          fitWidth: true,
        });
    */

          function resizeGridItem(item){
            grid = document.getElementsByClassName("grid")[0];
            rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
            rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
            rowSpan = Math.ceil((item.querySelector('.content-news').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
            item.style.gridRowEnd = "span "+rowSpan;
          }
    

        function resizeAllGridItems(){
          allItems = document.getElementsByClassName("item");
          for(x=0;x<allItems.length;x++){
            resizeGridItem(allItems[x]);
          }
        }

        function resizeInstance(instance){
          item = instance.elements[0];
          resizeGridItem(item);
        }

        window.onload = resizeAllGridItems();
        window.addEventListener("resize", resizeAllGridItems);
     /*$('.item img').bind('load', function(){
      });*/
   }

});

var controller = new ScrollMagic.Controller();

//draw svg icons
  $('.icon').each(function(){
        var $this = this;
            new ScrollMagic.Scene({
            triggerHook: 0.9,
            triggerElement: $this
        })
    .on('start',function drawsvg(e){
      var $svg = $(e.target.triggerElement()).find("svg").drawsvg({
        duration:10000
      });
      $svg.drawsvg('animate');
    })
    .addTo(controller);    
  });


function showProjects(tab, delay)
{    //return false;
  //$('.project-list.tab-'+tab).addClass('tab-active').show();
  //  $('.filter-item.filter-item--active').removeClass('filter-item--active');
 //   $('.filter-item-'+tab).addClass('filter-item--active');

    $('.project-item').each(function(){
        var $this = this;
        var tween = new TimelineLite()
            .to($(this), 0.5, {css:{className:'+=show'}}, 0.20).delay(Math.floor(Math.random() * (70+delay - delay) + delay)/100)
            .from($(this).find('.project-item__details'), 1, {ease: Power4.easeOut, opacity: 0, y: '10%'})
            //.from($(this).find('.icon-arrow-right'), 1, {ease: Power4.easeOut, opacity:0, x: '-20%'}, '-=0.5')
            //.from($(this).find('.project-item__media, .project-item__branding'), 1, {ease: Power4.easeOut, opacity: 0, scale: 0.98, transformOrigin:"50% 50%"}, '-=1.5')
            ;

        new ScrollMagic.Scene({
            triggerHook: 1,
            triggerElement: $this
        })
		
		.addTo(controller)
		
		//.addIndicators()
        .setTween(tween);
    });
	
}