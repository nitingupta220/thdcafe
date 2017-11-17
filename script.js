var elems = document.querySelectorAll('.text');
$('.search').textHighlight(elems, false);

//hover
$(document).ready(function(){
    $(".text").hover(function(){
/*        $(this).css("background-color", "yellow");*/
        }, function(){
        $(this).css("background-color", "white");
    });
});

//quantity button
$(document).ready( () => {
  $('.minus-button').click( (e) => {

    // change this to whatever minimum you'd like
    const minValue = 0

    const currentInput = $(e.currentTarget).parent().prev()[0];

    let minusInputValue = $(currentInput).html();

    if (minusInputValue > minValue) {
      minusInputValue --;
      $($(e.currentTarget).next()).removeAttr('disabled');
      $(currentInput).html(minusInputValue);

      if (minusInputValue <= minValue) {
        $(e.currentTarget).attr('disabled', 'disabled');
      }
    }
  });

  $('.plus-button').click( (e) => {

    const maxValue = 10

    const currentInput = $(e.currentTarget).parent().prev()[0];

    let plusInputValue = $(currentInput).html();

    if (plusInputValue < maxValue) {
      plusInputValue ++;
      $($(e.currentTarget).prev()[0]).removeAttr('disabled');
      $(currentInput).html(plusInputValue);

      if (plusInputValue >= maxValue) {
        $(e.currentTarget).attr('disabled', 'disabled');
      }
    }
  });
});
