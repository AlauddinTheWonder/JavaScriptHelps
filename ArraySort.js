var a = [1, 5, 3, 0, , null, "4", "0"];
a.sort(compare);
console.log(a);


function compare(a, b) {
    var x = (a===null) ? "" : a,
    y = (b===null) ? "" : b;

    if(x !== "" && !isNaN(x))
        x = Number(x);
    if(y !== "" && !isNaN(y))
        y = Number(y);


    if(x===y)
        return 0;


    else if(x==="")
        return -1;
    else if(y==="")
        return 1;


    else if(x===0 && y===0)
        return 1;


    else if(x > y)
        return 1;
    else
        return -1;
}
