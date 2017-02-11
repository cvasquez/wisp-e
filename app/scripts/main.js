// When "Day" is clicked
$('#awf_field-889633520').on('click', function(){
  $('.hero__bg').removeClass('hero__bg--night');
  $('.hero__bg').addClass('hero__bg--day');
  $('#wisp-e-img').attr('src', 'images/wisp-e-day.svg');
});

// When "Night" is clicked
$('#awf_field-889633521').on('click', function(){
  $('.hero__bg').removeClass('hero__bg--day');
  $('.hero__bg').addClass('hero__bg--night');
  $('#wisp-e-img').attr('src', 'images/wisp-e-night.svg');
});
