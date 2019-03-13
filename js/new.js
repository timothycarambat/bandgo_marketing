/*
Okay, So here is how this works. The arrays below are to help pre-define the images and their ad-copy.
Given the images are all similar sizes the layout is expexted to be the same. coptText and imgNames must be the same length.
coptText: the text to be displayed over the images
imgNames: nested arrays the are defined in subarry of [default image , fixed image]; no peroids

btnText and successText are just for fun and to keep it random.


*/

var defaultBtnText = "Fix With BandGo!";
var copyText =[
  "Can't Find Hair Bands or Bobby Pins in your bag?",
  "Lost Hair Bands and Bobby Pins to the abyss of your purse?",
  "Hair in your face and need to find a quick fix?"
]
var btnText = [
  "Another One!",
  "Wow, Again!",
  "Not Convinced?",
  "Too Cool!",
  "Again!"
]

var successText = [
  "Viola!",
  "Too Easy!",
  "All Organized Now!",
  "*Sparkle Sound*",
  "Easy-Peesy!"
]

var imgNames = [
  ['no-bag-bandgo','yes-bag-bandgo'],
  ['no-purse-bandgo','yes-purse-bandgo'],
  ['no-gymbag-bandgo','yes-gymbag-bandgo'],
];

var lovelyCustomerTypes = [
  'Business Person &#x1F4BC;',
  'Athlete &#x1F4AA;',
  'Teacher &#x1F34E;',
  'Nurse &#x1F489;',
  'Student &#x1F393;	',
  'Astronaut &#x1F680;',
  'Stylist &#x1F487;'
];


$(function(){
  setInterval(function() { changeCustomerType(lovelyCustomerTypes) }  , 2000 )

  //Smooth Scroll, make a elements with href='#item' and target of that id without #
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });

  // Banner Animation
  $('.pic-btn').click(function(e){
    defaultImg = imgNames[ $('.owl-dots').children().index($('.owl-dot.active')) ][0];
    fixedImg = imgNames[ $('.owl-dots').children().index($('.owl-dot.active')) ][1];
    $(e.target).next().children().closest('.poof').removeClass('hidden');
    setTimeout(function(){
      $(e.target).next().children().closest('.poof').addClass('grow').fadeTo( 1000 , 0);

      setTimeout(function(){
        $(e.target).text(btnText[Math.floor(Math.random() * btnText.length)]);
        $(e.target).siblings().closest('.pic-text').text(successText[Math.floor(Math.random() * successText.length)]);
        $(e.target).siblings().closest('.pic-text')
        $(e.target).siblings().closest('.img-container').children().eq(1).removeClass(defaultImg).addClass(fixedImg);
        $(e.target).siblings().closest('.img-container').children().eq(2).addClass('hidden');
      },1000)

      setTimeout(function(){
        $(e.target).next().children().closest('.poof').removeClass('grow').addClass('hidden').attr('style','');
      },2100);
  },300);

  $(e.target).off()
  resetToNext(e,fixedImg,defaultImg);
  });



});

function goToNextCarouselPage() {
    var $dots = $('.owl-dot');
    var $next = $dots.filter('.active').next();

    if (!$next.length)
        $next = $dots.first();

    $next.trigger('click');
}

function resetToNext(e,fixed,bad){
  $(e.target).click(function(e){
    $(e.target).text(defaultBtnText);
    $(e.target).siblings().closest('.img-container').children().eq(1).removeClass(fixed).addClass(bad);
    $(e.target).siblings().closest('.img-container').children().eq(2).removeClass('hidden');
    $(e.target).siblings().closest('.pic-text').text(copyText[ $('.owl-dots').children().index($('.owl-dot.active')) ])
    goToNextCarouselPage();

    $(e.target).off();
    resetClick(e,fixed,bad);
  })
}

function resetClick(e,fixed,bad){
  $(e.target).click(function(e){
    $(e.target).next().children().closest('.poof').removeClass('hidden');
      setTimeout(function(){
        $(e.target).next().children().closest('.poof').addClass('grow').fadeTo( 1000 , 0);

        setTimeout(function(){
          $(e.target).text(btnText[Math.floor(Math.random() * btnText.length)]);
          $(e.target).siblings().closest('.pic-text').text(successText[Math.floor(Math.random() * successText.length)]);
          $(e.target).siblings().closest('.img-container').children().eq(1).removeClass(bad).addClass(fixed);
        },1000)

        setTimeout(function(){
          $(e.target).next().children().closest('.poof').removeClass('grow').addClass('hidden').attr('style','');
        },2100);
      },300);

      $(e.target).off()
      resetToNext(e,fixed,bad);
  });

}

function changeCustomerType(types){
  var currentType = $('e').data('type');
  var newType = Math.floor(Math.random() * types.length);
  if(newType === currentType){
    newType = Math.floor(Math.random() * types.length);
  }

   $('e').fadeOut(500, function(){
     $(this).html("<b>"+String(types[newType]).toUpperCase()+"</b>").fadeIn(800);
   });
   $('e').data('type',newType);
}
