function chet()
{
    var fir = document.getElementById("First").value;
    var sec = document.getElementById("Second").value;
    var arg = document.getElementById("Third").value;
    var module = document.getElementById("Fourth").value;
    var Result = document.getElementById("Res");
    console.log(fir,arg,sec,module);

    if(arg == "+")
    {
        var Res = Number(fir) + Number(sec);
        Res = (Res % Number(module));
        if(Res == 0)
        {
            Result.innerHTML += fir;
        }
        else
        {
            Result.innerHTML += Res;
        }
        
    }
    if(arg == "*")
    {
        var Res = Number(fir) * Number(sec);
        Res = (Res % Number(module));
        
        if(Res == 0)
        {
            Result.innerHTML += fir;
        }
        else
        {
            Result.innerHTML += Res;
        }
    }
    if(arg == "^")
    {
        var Res = Math.pow(Number(fir),Number(sec));
        Res = (Res % Number(module));
        if(Res == 0)
        {
            Result.innerHTML += fir;
        }
        else
        {
            Result.innerHTML += Res;
        }
    }
}