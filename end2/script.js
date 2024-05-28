var number = 0;

function addOne (){
    if (number < 1000) {
        number++;
        var myH1 =document.getElementById("firstTitle");
        myH1.innerText =number;
    }
}

function minusOne (){
    if (number > 0)
    number--;
    var myH1 =document.getElementById("firstTitle");
    myH1.innerText =number;
}