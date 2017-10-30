$('.member').on('mouseenter', function() {
  $(this).find('.member-pic').addClass('animated tada');
  // $(this).find('.member-name').addClass('animated tada');
});

$('.member').on('mouseleave', function() {
  $(this).find('.member-pic').removeClass('animated tada');
  // $(this).find('.member-name').removeClass('animated tada');
});
