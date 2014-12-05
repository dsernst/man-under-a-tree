var nextPage;

$(document).ready(function () {
  var $current = $('section').first();
  $current.addClass('currentPage');

  nextPage = function () {
    $current.removeClass('currentPage');
    $current = $current.next();
    $current.addClass('currentPage');
  };

  $(".openBranch").click(nextPage);

});