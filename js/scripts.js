//business logic
function triangleType(side1,side2,side3){
  if(((side1 + side2) <= side3)||((side1+side3) <= side2)||((side2+side3) <= side1)){
    return "not a triangle.";
  }
  else if ((side1 === side2) && (side1 === side3)){
    return "an equilateral triangle";
  }
  else if ((side1 === side2 ) || (side1 === side3) || (side2 == side3))
  {
    return "an isosceles triangle";
  }
  else {
    return "a scalene triangle";
  }
}

$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    var side1 = parseInt($("#sideone").val());
    var side2 = parseInt($("#sidetwo").val());
    var side3 = parseInt($("#sidethree").val());
    $("div.result p span").text("This is " + triangleType(side1,side2,side3));
  })
})