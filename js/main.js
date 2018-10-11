var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

jQuery(document).ready(function(){

  if(!isMobile) {
		var dataclass;
    jQuery('.main-menu ul a').on({
      mouseenter: function(){
        //dataclass = jQuery(this).data('class');

        if(jQuery(this).data('class')){
          dataclass = jQuery(this).data('class');
          jQuery(this).addClass('hover');
          jQuery('.' + dataclass).fadeIn();

        } else {
          jQuery('.main-menu ul a').removeClass('hover');
          jQuery('.' + dataclass).fadeOut();
        }
      },
      click: function(e){
        if(jQuery(this).data('class')){
          e.preventDefault();
        }
      }
    });

    jQuery('.sol-legrand > .head > h2').on('click', function(e){
      // e.preventDefault();
      jQuery('.sol-legrand > .head > h2, .sol-legrand > .content').removeClass('activo');
      jQuery(this).addClass('activo');

      if(jQuery(this).hasClass('activo')){
        var dataid1 = jQuery(this).find('a').data('id');
        jQuery('#sol-' + dataid1).addClass('activo');
      }
    });

    jQuery('.prod-legrand > .head > h2').on('click', function(e){
      e.preventDefault();
      jQuery('.prod-legrand > .head > h2, .prod-legrand > .content').removeClass('activo');
      jQuery(this).addClass('activo');

      if(jQuery(this).hasClass('activo')){
        var dataid2 = jQuery(this).find('a').data('id');
        jQuery('#prod-' + dataid2).addClass('activo');
      }
    });
	}

  jQuery('#nav-icon').on('click', function(){
    jQuery(this).toggleClass('open');
    jQuery('header').toggleClass('activo');
    jQuery('.main-menu').toggleClass('open').fadeToggle();
	});

  if(jQuery('.home').is('*')) {

    jQuery('.sl-linea-prod').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<a href="#" class="slick-prev"><span class="icon icon-chevron-left"></span></a>',
      nextArrow: '<a href="#" class="slick-next"><span class="icon icon-chevron-right"></span></a>'
    });

    jQuery('.sl-linea-prod').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      var slidetex = jQuery('.nav-prod a[data-slide=' + nextSlide + ']').text();
      jQuery('.nav-prod a').removeClass('active');
      jQuery('.nav-prod a[data-slide=' + nextSlide + ']').addClass('active');
      jQuery('.col-next h3').text(slidetex);
    });
    jQuery('.nav-prod a').on('click', function(e) {
      e.preventDefault();
      var slideno = jQuery(this).data('slide');
      var slidetex = jQuery(this).text();
      jQuery('.col-next h3').text(slidetex);
      jQuery('.sl-linea-prod').slick('slickGoTo', slideno);
    });

    jQuery('#accordion-prod').accordion({
      heightStyle: "content"
    });
  }

  if(jQuery('.solution').is('*')) {
    var pos;
    jQuery('.instal .point').on('click', function(e){
      e.preventDefault();
      pos = jQuery(this).position();

      jQuery('.instal .point').removeClass('activo');
      jQuery('.instal .lytip').css(pos);
      jQuery('.instal .lytip').addClass('activo');
      jQuery(this).addClass('activo');
    });
    jQuery('.instal .lytip .cerrar').on('click', function(e){
      e.preventDefault();

      jQuery('.instal .lytip, .instal .point').removeClass('activo');
    });
  }

  if(jQuery('.catalogo').is('*')) {
    jQuery('#accordion-cata').accordion({
      heightStyle: "content"
    });
  }

  if(jQuery('.distribuidores').is('*')) {
    jQuery("#scrollbar1").tinyscrollbar();
  }


});