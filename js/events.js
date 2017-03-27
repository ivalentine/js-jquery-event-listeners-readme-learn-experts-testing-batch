function getIt() {
  $('p').on('click', function () {
    alert('You clicked the paragraph!')
  })
}

function frameIt() {
  $('img').on('load', function () {
    this.className = "tasty"
  })
}

function pressIt() {
  $('#typing').on('keydown', function (key) {
    if (key.which == 71) {
      alert('You pressed the letter G!')
    }
  })
}

function submitIt() {
  $('form').on('submit', function () {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()

});
