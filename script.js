function calculate(){

        
        
        p = document.getElementById("p").value;
        t = document.getElementById("t").value;
        r = document.getElementById("r").value;
        var year = parseInt(new Date ().getFullYear());
        T = parseInt(t)
    
        const matureYear =  year + T;

         

         if(p == ""){
        alert("Amount should not be empty");
        document.getElementById("p").focus();
        return false;
    }
    else if(p <= 0 )
    {
        alert("Enter a positive Amount");
        document.getElementById("p").focus();
    }
    else
    {
        output.innerHTML="If you deposit "+"<mark>"+p+"</mark>"+",<br>"+
        "at an interest rate of "+"<mark>"+r+"</mark>"+"%.<br>"
        +"You will receive an amount of "+"<mark>"+(p*t*r/100)+"</mark>"
        +",<br>"+"in the year "+"<mark>"+matureYear+"</mark>";
    }
        }
       
         
    var slider = document.getElementById("r");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
