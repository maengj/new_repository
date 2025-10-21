$(document).ready(function () {
  console.log("work");

  var button_status = 0;

  $(".my-button").on("click", function () {
    if (button_status == 0) {
      $(".box").css("width", "200px");
      button_status = 1;
    } else if (button_status == 1) {
      $(".box").css("width", "400px");
      $(".box").css("height", "400px");
      $(".box").css("background-color", "blue");
      button_status = 2;
    } else if (button_status == 2) {
      $(".box").css("height", "200px");
      $(".box").css("background-color", "red");
      button_status = 0;
    }
  });

  $(".my-button2").on("click", function () {
    // .box 요소가 clicked 클래스를 가지고 있는지 확인
    $(".box2").toggleClass("clicked");
    if ($(".box2").hasClass("clicked")) {
      // clicked 클래스가 없으면 → 빨간색 배경
      $(".box2").css("background-color", "red");
      $(".box2").addClass("clicked"); // 클래스 a추가
    } else {
      // clicked 클래스가 있으면 → 회색 배경
      $(".box2").css("background-color", "gray");
      $(".box2").removeClass("clicked"); // 클래스 제거
    }
  });
});
