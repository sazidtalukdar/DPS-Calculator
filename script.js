/* Enter-Key event listener to focus next input tag in form field */
let arr = document.getElementsByTagName('input');
for (let i=0; i<arr.length; i++) 
{
    arr[i].addEventListener('keydown', (e) => {
        if (e.key == 'Enter') 
        {
            arr[i+1].focus();
        }
    })
}


function Calculate()
{    
    /*
        Formula :
        V = P × [ {(1 + i)^n} - 1) / i) ] × (1 + i)

        V = Future value
        P = Amount to be invested
        r = Interest rate
        n = Period
        i = Monthly rate of return
   */
   let P = document.getElementById('principal').value;
   let r = document.getElementById('interest').value;
   let n = document.getElementById('period').value;
   let i, V;

   /* Calculating Future Value */
   n = n * 12;
   i = (r/100)/12;
   V = P * [ ((1 + i)**n - 1) / i] * (1 + i);
   V = V.toFixed(0);

   /* Returns which the user will get upon investing */
   let invreturns = V - (P*n);
   invreturns = invreturns.toFixed(0);

   document.getElementById('invested').append(" "   + " " + P*n);
   document.getElementById('returns').append(" "  + " " + invreturns);

   /* Throwing an error when input fields are empty */
   if(P=="" || r=="" || n=="")
   {
        alert("ERROR : Please enter all values");
        document.getElementById('btn').innerText="Reset";
        document.getElementById('invested').innerText = "Invested:";
        document.getElementById('returns').innerText = "Returns:";
   }

   /* Calling Reset() function after calculations are done */
   if(document.getElementById('btn').innerText == "Reset")
        Reset();
   else
        document.getElementById('btn').innerText="Reset";
}


function Reset()
{
    document.getElementById('principal').value = "";
    document.getElementById('interest').value = "";
    document.getElementById('period').value = "";

    document.getElementById('invested').innerText = "Invested:";
    document.getElementById('returns').innerText = "Returns:";
    document.getElementById('btn').innerText="Calculate";

    document.getElementById('principal').focus();
}