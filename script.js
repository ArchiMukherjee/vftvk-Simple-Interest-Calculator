function calculate(){

        
        
        p = document.getElementById("p").value;
        t = document.getElementById("t").value;
        r = document.getElementById("r").value;
        var year = parseInt(new Date ().getFullYear());
        T = parseInt(t)
    
        const matureYear =  year + T;

         

        if (p < 0){
            alert("Please enter a positive number");
            p.focus();
            return false;
       }
        else{
            alert("Form validation is successful.")
            output.innerHTML="If you deposit "+"<mark>"+p+"</mark>"+",<br>"+
        "at an interest rate of "+"<mark>"+r+"</mark>"+"%.<br>"+"You will receive an amount of "+"<mark>"+(p*t*r/100)+"</mark>"
        +",<br>"+"in the year "+"<mark>"+matureYear+"</mark>";
            
    }
        }
       
         
    var slider = document.getElementById("r");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
