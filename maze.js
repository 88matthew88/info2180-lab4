function changeColor()
{
  //document.getElementById('boundary1').className = ("youlose");
  document.getElementById('boundary1').style.backgroundColor="#ff8888";
}

window.onload = function()
{
  document.getElementById('boundary1').onmouseover = changeColor;
}
