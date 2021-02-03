M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

window.onscroll = function() {myFunction()};
  var header = document.getElementById("main-nav");
  var sticky = 500;
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("nav-bg-switch");
    } else {
      header.classList.remove("nav-bg-switch");
    }
}


/********************** RSVP **********************/
$('#rsvp-form').on('submit', function (e) {
  e.preventDefault();
  var data = $(this).serialize();

  $('#alert-wrapper').html(alert_markup('champagne', '<strong>Just a sec!</strong> We are saving your details.'));

  $.post('https://script.google.com/macros/s/AKfycbwEQrW8TN69i0XeVSZxV9g2WT3UjaOm9VQ4kCpdzXXOdvJT7KCFqT5naA/exec', data)
      .done(function (data) {
          console.log(data);
          if (data.result === "error") {
              $('#alert-wrapper').html(alert_markup('mulledwine', data.message));
          } else {
            $('#alert-wrapper').html(alert_markup('autumn', '<strong>Thank you!</strong> We have received your RSVP.'));
          }
      })
      .fail(function (data) {
          console.log(data);
          $('#alert-wrapper').html(alert_markup('mulledwine', '<strong>Sorry!</strong> There is some issue with the server. Please try again later or contact us to RSVP.'));
      });
}); 

// alert_markup
function alert_markup(colour, msg) {
  // return '<div class="alert" role="alert">' + msg + '</div>';
  return '<p class="form-result ">' + msg +'</p>';
}
