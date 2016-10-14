
window.onload=function()
{

  //Exercise 1
  // function changeColor()
  // {
  //   document.getElementById('boundary1').className += " youlose";
  //   //document.getElementById('boundary1').style.backgroundColor="#ff8888";
  // }
  //
  // window.onload = function()
  // {
  //   document.getElementById('boundary1').onmouseover = changeColor;
  // }
  var count=0;
  var maze= document.getElementById('maze');

  var boundrys = document.querySelectorAll("div.boundary");
  for(var k=0; k < boundrys.length; k++)
  {
    boundrys[k].onmouseover = function()
    {
      var boundrys = document.querySelectorAll("div.boundary");
      for(var k=0; k < boundrys.length-1; k++)
      {
        boundrys[k].className += " youlose";
        count +=1;
        document.getElementById("status").innerHTML=" You Lose";
      }
    }
  }


  document.getElementById('end').onmouseover=function()
  {
    document.getElementById("status").innerHTML=" You cannot start at the End";
  }



  document.getElementById("start").onclick=function()
    {

      document.getElementById('end').onmouseover=function()
        {
          if (count > 0) {
            document.getElementById("status").innerHTML=" You Lose";
          }
          else {
            document.getElementById("status").innerHTML=" You Win";
          }
        }

      count=0;
      document.getElementById("status").innerHTML=" Move your mouse over the \"S\" to begin.";
      for(var k=0; k < boundrys.length-1; k++)
      {
        boundrys[k].className = "boundary";
      }

      document.onmouseover=function(num)
      {
        var left= maze.offsetLeft;
        var right= maze.offsetRight;
        var top= maze.offsetTop;
        var height= maze.offsetHeight;
        var width= maze.offsetWidth;
        var x = num.clientX ;
        var y = num.clientY;

        if((x<left)||(x>right))
        {
          for(var k=0; k < boundrys.length-1; k++)
          {
          boundrys[k].className += " youlose";
          count +=1;
          document.getElementById("status").innerHTML=" You Lose";
          }
        }
      }

    }
};
