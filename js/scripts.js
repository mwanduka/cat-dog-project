$(document).ready(function() {
      $("button#dog").click(function() {
         alert('meow');
      });

      $("button#cat").click(function() {
        alert("bark");
      });

      $("button#none").click(function() {
        alert("shhh");
      });
      $("button#animal").click(function() {
      $("ul#animal").prepend("<li>animal farm is real</li>");
      $("ul#animal").append("<li>come and shop</li>");
    });
    $("button#animal").click(function() {
    $("ul#animal").after("<li>yadiyada</li>");
    $("ul#animal").before("<li>blablabla</li>");
  });
  $("button#fadein").click(function(){
    $("img").fadeIn("image");
  });
    $("button#fadeout").click(function(){
    $("img").fadeOut("image");
});
});
