$(document).ready(function() {
  // Wrap image P in special tag
  $('.text-post-body p').each(function(){
    if ( ($(this).find('img').length) &&     
         (!$.trim($(this).text()).length))
    {
        $(this).addClass('img-only');
    }
    else {
      $(this).addClass('no-img');
    }
  });
});

$(window).load(function() {
  var svg = new Walkway({
    selector: '#stoops_logo',
    duration: '2000'
  });


  setTimeout(function() {
    $('.logo').addClass('show');
    svg.draw(function() {
      console.log('Animation finished');
      setTimeout(function() {
        $('.logo').addClass('finished');
      },1000);
    });
  }, 300);
  

});