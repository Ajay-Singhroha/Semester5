var selector =document.getElementById('selector');

var input = prompt(" Enter a positive number : ");
input=parseInt(input)

if(input<0){
    alert(" Negative no not allowed ");
}
else{
    if (input == 0){
        document.write(" Factorial is 1 ");
    }
    else{
        var fact =1;
        for( var i = input; i>=1; i--){
            fact = fact * i;
        }
        selector.innerHTML= fact;
        selector.style.color="cyan";
    }
}