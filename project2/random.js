/** 
* FileName :
* CreatedBy :
* Date:
* Purpose:
*/
<button onclick="myFunction()">click for the getting r num>
<p id="demo"></p>
<script>
function myFunction()
{
  var n=prompt("enter the whole number for random ")
  var x=Math.floor((Math.random()*n)+1);
  document.getElementById("demo").innerHTML=x;
}
</script>

/*
Exception: SyntaxError: expected expression, got '<'
@Scratchpad/2:1
*/
