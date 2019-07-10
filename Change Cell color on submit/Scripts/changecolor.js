function Changecolor()
{
  
  var i;
  for( i=1;i<10;i++)
    {
      document.getElementById(i).bgColor = ""
    }
  
  var x=document.getElementById("myText").value;
  if(x>0 && x<10)
    {
 // console.info( "from js: entered number is :"+x);
  document.getElementById(x).bgColor = "green";
    }
  else
    {
      alert("Enter number only between 1-9")
    }

 
}

