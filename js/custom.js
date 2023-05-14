$(document).ready(function(){

  //----- font size control -----//	
  $('.fsize_s').click(function(){
    $('body').removeClass();
  });
  $('.fsize_m').click(function(){
    $('body').removeClass();
	$('body').addClass('zoom z1');
  });
  $('.fsize_l').click(function(){
    $('body').removeClass();
	$('body').addClass('zoom z2');
  });
  
  
  //----- scrollbar control for mobile -----//
  function scrollControl() {
  if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ){
    $('.carousel-inner').addClass('hidescroll');
  } else {
    $('.carousel-inner').removeClass('hidescroll');
  }
  }
	
  scrollControl();
	
  $(window).resize(function() {	
    scrollControl();
  });


  //----- checkbox pop -----//
  function favCheckAll(itemname) {
  	var i = itemname;
	var item_height = $('.checkbox.'+i).height() + 12;
	var arrow_pos = $('.checkbox.'+i+ ' .itemname').width() / 2 + $('.checkbox.'+i).position().left;
	var popitems_pos = $('.checkbox.'+i).position();
    
	if($('.checkbox.'+i+'>input').prop('checked')) {
	  $('.checkbox .popitems').hide();
	  $('.checkbox .itemname').removeClass('on');
	  $('.checkbox.'+i+' .popitems').show();
      $('.checkbox.'+i+' .popitems').css('top',item_height+popitems_pos.top);
	  $('.checkbox.'+i+' .arrowup').css('left',arrow_pos);
	  $('.checkbox.'+i+' .popitems input').prop('checked', true);
	  $('.checkbox.'+i+' .itemname').addClass('on');
	} else {
      $('.checkbox.'+i+' .popitems').hide();
	  $('.checkbox.'+i+' .popitems input').prop('checked', false);
      $('.checkbox.'+i+' .itemname').removeClass('on');
	}
  }
  
  $('.checkbox.music>input').click(function(){ favCheckAll("music"); });
  $('.checkbox.cnopera>input').click(function(){ favCheckAll("cnopera"); });
  $('.checkbox.dance>input').click(function(){ favCheckAll("dance"); });
  $('.checkbox.exhibition>input').click(function(){ favCheckAll("exhibition"); });
  $('.checkbox.film>input').click(function(){ favCheckAll("film"); });
  $('.checkbox.threatre>input').click(function(){ favCheckAll("threatre"); });
  $('.checkbox.multiarts>input').click(function(){ favCheckAll("multiarts"); });
  $('.checkbox.popconcerts>input').click(function(){ favCheckAll("popconcerts"); });
  $('.checkbox.festivals>input').click(function(){ favCheckAll("festivals"); });
  $('.checkbox.family>input').click(function(){ favCheckAll("family"); });
  $('.checkbox.omnimax>input').click(function(){ favCheckAll("omnimax"); });
  $('.checkbox.skyshow>input').click(function(){ favCheckAll("skyshow"); });
  $('.checkbox.others>input').click(function(){ favCheckAll("others"); });
  
  function favSelect(itemname) {
    var i = itemname;
	var item_height = $('.checkbox.'+i).height() + 12;
	var arrow_pos = $('.checkbox.'+i+ ' .itemname').width() / 2 + $('.checkbox.'+i).position().left;
	var popitems_pos = $('.checkbox.'+i).position();
	var atLeastOneIsChecked = $('.checkbox.'+i+' .itemlist input').is(':checked');

    if (atLeastOneIsChecked) {
      $('.checkbox.'+i+'>input').prop('checked', true);
	}

    $('.checkbox .popitems').hide();
	$('.checkbox .itemname').removeClass('on');
	$('.checkbox.'+i+' .popitems').show();
	$('.checkbox.'+i+' .popitems').css('top',item_height+popitems_pos.top);
	$('.checkbox.'+i+' .arrowup').css('left',arrow_pos);
	$('.checkbox.'+i+' .itemname').addClass('on');
  }
  
  $('.checkbox.music .itemname').click(function(){ favSelect("music"); });
  $('.checkbox.cnopera .itemname').click(function(){ favSelect("cnopera"); });
  $('.checkbox.dance .itemname').click(function(){ favSelect("dance"); });
  $('.checkbox.exhibition .itemname').click(function(){ favSelect("exhibition"); });
  $('.checkbox.film .itemname').click(function(){ favSelect("film"); });
  $('.checkbox.threatre .itemname').click(function(){ favSelect("threatre"); });
  $('.checkbox.multiarts .itemname').click(function(){ favSelect("multiarts"); });
  $('.checkbox.popconcerts .itemname').click(function(){ favSelect("popconcerts"); });
  $('.checkbox.festivals .itemname').click(function(){ favSelect("festivals"); });
  $('.checkbox.family .itemname').click(function(){ favSelect("family"); });
  $('.checkbox.omnimax .itemname').click(function(){ favSelect("omnimax"); });
  $('.checkbox.skyshow .itemname').click(function(){ favSelect("skyshow"); });
  $('.checkbox.others .itemname').click(function(){ favSelect("others"); });
  
  function checkboxChecker(itemname) {
    var i = itemname;
  	var atLeastOneIsChecked = $('.checkbox.'+i+' .itemlist input').is(':checked');
	
	if (atLeastOneIsChecked) {
      $('.checkbox.'+i+'>input').prop('checked', true);
	} else {
	  $('.checkbox.'+i+'>input').prop('checked', false);
    }
  }
  
  $('.checkbox.music .itemlist input').click(function(){ checkboxChecker("music"); });
  $('.checkbox.cnopera .itemlist input').click(function(){ checkboxChecker("cnopera"); });
  $('.checkbox.dance .itemlist input').click(function(){ checkboxChecker("dance"); });
  $('.checkbox.exhibition .itemlist input').click(function(){ checkboxChecker("exhibition"); });
  $('.checkbox.film .itemlist input').click(function(){ checkboxChecker("film"); });
  $('.checkbox.threatre .itemlist input').click(function(){ checkboxChecker("threatre"); });
  $('.checkbox.multiarts .itemlist input').click(function(){ checkboxChecker("multiarts"); });
  $('.checkbox.popconcerts .itemlist input').click(function(){ checkboxChecker("popconcerts"); });
  $('.checkbox.festivals .itemlist input').click(function(){ checkboxChecker("festivals"); });
  $('.checkbox.family .itemlist input').click(function(){ checkboxChecker("family"); });
  $('.checkbox.omnimax .itemlist input').click(function(){ checkboxChecker("omnimax"); });
  $('.checkbox.skyshow .itemlist input').click(function(){ checkboxChecker("skyshow"); });
  $('.checkbox.others .itemlist input').click(function(){ checkboxChecker("others"); });
  
  $(window).resize(function() {	
    $(' .popitems').hide();
	$(' .itemname').removeClass('on');
  });
  

  //----- date picker config -----// 
  $('#eventdatepicker').datepicker({
    language: "en-HK",
    startDate: new Date(),
    format: "yyyy/mm/dd",
    weekStart: 1,
    clearBtn: true,
    keyboardNavigation: false,
    autoclose: true,
    todayHighlight: true,
	orientation: "bottom auto",
	daysOfWeekHighlighted: '0',
	maxViewMode: 0
  });
  
  $('#eventdatepicker').click(function(){
    $('.datepicker table tfoot tr').empty();
	$('.datepicker table tfoot tr').append('<th colspan="7"><p><span class="clear">Clear</span></p></th>');
	$('.datepicker .prev').empty();
	$('.datepicker .prev').empty().append('<i class="fas fa-caret-left"></i>');
	$('.datepicker .next').empty();
	$('.datepicker .next').empty().append('<i class="fas fa-caret-right"></i>');
  });
  
  		
  //----- minmax price radio reset -----//
  $('#minprice').focusout(function(){
    if ($('#minprice').val() !== "") {
  	  $('input[name="checkbox_price"]').prop('checked', false);
    }
  });
  $('#maxprice').focusout(function(){
    if ($('#maxprice').val() !== "") {
  	  $('input[name="checkbox_price"]').prop('checked', false);
    }
  });
  
  $('input[name="checkbox_price"]').click(function(){
    $('#minprice').val("");
    $('#maxprice').val("");
  });
  
  
   //----- remove search items -----//
  $('.keyword_group .bin').click(function(){
	$('.keyword_group span').hide();
  });
  
  $('.keyword_group .remove').click(function(){
    $(this).remove();
  });
  

  //----- controlbtn up & down image swap-----//
  $('.search_result .controlbar .controlbtn p').click(function(e){
	if ($(e.target).hasClass('down')) { 
	  $(e.target).removeClass('down');
	} else {
	  $('.search_result .controlbar .controlbtn p').removeClass('down');
	  $(e.target).addClass('down');
	}
  });
  
	
  //----- sticky header for search result (mobile)-----//
  window.onscroll = function(){ stickyHeader(); };

  var header = document.getElementById('search_header');
  var sticky = header.offsetTop;

  function stickyHeader() {
    if (window.pageYOffset + 74 > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }

  $('body').mouseup(function (e) {
   if (!$(event.target).is('.eventpop')) {
     if (!$('.eventpop').is(e.target)) {
       $('.eventpop').hide();
	 }
   }
  }); 
});


