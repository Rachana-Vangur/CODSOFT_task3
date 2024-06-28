
function append(value){
    let result = document.getElementById('result').innerText;
    result += value;
    document.getElementById('result').innerText = result;
    console.log(result);
}

function allClear(){
    document.getElementById('result').innerText = "";

}

function del(){
    var initialResult = document.getElementById('result').innerText;
    var finalResult = initialResult.substring(0, initialResult.length-1);
    if(finalResult == "")
        finalResult = 0;
    document.getElementById('result').innerText = finalResult;

    console.log(finalResult);
}

function calculate(){
    try{
        let result = document.getElementById('result').innerText;
        result = eval(result);
        document.getElementById('result').innerText = result;
        console.log(result);
    }
    catch{
        document.getElementById('result').innerText = "ERROR";
    }
}