// Smooth Scroll
$ (document).ready(function () {

  $("a").click(function () {
      var gato = this.hash

      $("html, body").animate(
          {
              scrollTop: $(gato).offset().top
          },
          800
      )
  })
})


// Para ver en y>300 la barra en negro
$(document).scroll( function (e) {
        const y = $("html").scrollTop();
        if(y > 300) $("nav").addClass("nav-black")
        else $("nav").removeClass("nav-black")
})


// Para que Tooltips funcione
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
