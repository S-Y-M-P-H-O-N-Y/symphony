var array = [1880,1140,2400]
var sum=0
function addToCart(){
sum=sum+array[0]
console.log(sum)
$("#price").empty()
$("#price").append("<b>" + sum + ' DT' + "<b/>")

}
function addToCart1(){
    sum= sum+array[1]
    console.log(sum)
    $("#price").empty()
    $("#price").append("<b>"+ sum + ' DT'+ "<b/>")
    }
    function addToCart2(){ 
       sum= sum+array[2]
        console.log(sum)
        $("#price").empty()
    $("#price").append("<b>"+ sum + 'DT'+ "<b/>")
        }
function remove(){ 
    $("#price").empty()
    $("#price").append("<b>" +' 0 DT' +"<b/>" )
    sum =0
}
function buy() {
    window.location.href="https://cdn.dribbble.com/users/526316/screenshots/4283036/check-animation.gif"
  }
  function chario(){
  $("#columns").show()
  $("#item1").hide()
  $("#item2").hide()
  $("#item3").hide()
  }