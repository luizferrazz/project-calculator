insert = (num) => {
    let number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num
}

clean = () => {
    document.getElementById('result').innerHTML="";
}

back = () => {
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length-1);
}

calculate = () => {
    let result = document.getElementById('result').innerHTML;
    if (result){
        document.getElementById('result').innerHTML=eval(result);
    }
    else{
        document.getElementById('result').innerHTML="Nothing...";
    }
}