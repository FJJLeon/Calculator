
function append(td) {//append the text to the expression
    var expression = document.getElementById("expression");
    var result = document.getElementById("result");

    var text = td.innerText;
    expression.innerText += text;
}

function clear(td) {//clear the expression
    var expression = document.getElementById("expression");
    var result = document.getElementById("result");

    expression.innerText = "";
}

function backspace(td) {//backspace the expression
    var expression = document.getElementById("expression");
    var result = document.getElementById("result");

    if (expression.innerText.length > 0){//if expression is not empty
        expression.innerText = expression.innerText.substring(0,expression.innerText.length-1);
    }
}

function equal(td) {//response to equal
    var expression = document.getElementById("expression");
    var result = document.getElementById("result");

    if (expression.innerText == ""){// if the expression is empty, so as result
        result.innerText ="";
        return;
    }

    //check the expression and outcome
    result.innerText = handle(expression.innerText);
    expression.innerText = "";
}

function handle(expression) {

    var outcome;
    //check whether the expression is valid
    try {
        eval(expression);
    }
    catch (e){
        outcome = "Input error";
        return outcome;
    }

    //calculate the expression
    outcome = parse(expression);

    if(expression.indexOf("**") > -1 ){
        outcome = eval(expression);
    }
    if (outcome == Infinity || outcome == -Infinity ){
        outcome = "Divide by zero";
    }
    else {
        outcome = expression + " = " + outcome;
    }
    return outcome;
}

function parse(exp){//parse the expression

    var lastLeft = exp.lastIndexOf("(");//find the last left parenthesis

    if (lastLeft > -1){// if left parenthesis exist
        var nextRight = exp.indexOf(")",lastLeft);//find the right parenthesis of the pair
        if (nextRight > -1){
            var tmp = parse(exp.substring(lastLeft + 1,nextRight));  //recursive computation

            return parse(exp.substring(0,lastLeft) + ("" + tmp) + exp.substring(nextRight + 1));
        }
    }

    var index = exp.indexOf("+");
    if(index > -1){
        return parse(exp.substring(0,index)) + parse(exp.substring(index + 1));//recursive computation
    }
    index = exp.lastIndexOf("-");
    if(index > -1){
        return parse(exp.substring(0,index)) - parse(exp.substring(index + 1));//recursive computation
    }
    index = exp.lastIndexOf("*");
    if(index > -1){
        return parse(exp.substring(0,index)) * parse(exp.substring(index + 1));//recursive computation
    }
    index = exp.lastIndexOf("/");
    if(index > -1){
        return parse(exp.substring(0,index)) / parse(exp.substring(index + 1));//recursive computation
    }


    if("" == exp){
        return 0;
    }
    else{
        return Number(exp);
    }
}

