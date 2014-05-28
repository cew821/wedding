function resize_top() {
  var height = $(window).height();
  var block_bar_height = $('#block_bar').height();
  console.log(height);
  console.log(block_bar_height);
  $('#top').css({'height': (height - block_bar_height)+'px'});
  $('#footman').css({'height': (height - block_bar_height)+'px'});
  $('#heart-container').css({'height': (height - block_bar_height)+'px'});
  $('#our-story').css({'height': ((height - block_bar_height)*1.5)+'px'});
  var s = skrollr.init();
}

$(document).ready(function() {
  resize_top();
  $(window).resize(function() {
    resize_top();
  });
});
