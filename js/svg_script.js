$(document).ready(function () {
  console.log(".text");

  var pathArray = $(".text");

  $.each(pathArray),
    function (i, d) {
      var pathLength = d.getToallLength();
      console.log(pathLength);

      $(d).css("stroke-dasharry", pathLength + "" + pathLength);
    };
});
