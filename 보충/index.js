$(document).ready(function () {

    let count = 0
  
    setInterval(function () {
      count++;
      if (count > 3) { count = 0 }
      $(".train").css("transform", "translateX(" + (-800 * count) + "px)")
    }, 2500)
  
    $(".btnNext").click(function () {
      count++;
      if (count > 3) { count = 0 }
      $(".train").css("transform", "translateX(" + (-800 * count) + "px)")
    })
  
    $(".btnPrev").click(function () {
      count--;
      if (count < 0) { count = 3 }
      $(".train").css("transform", "translateX(" + (-800 * count) + "px)")
    })
  
  })