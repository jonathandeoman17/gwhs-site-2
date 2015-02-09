function divide(x, y)
{
    if (y=== 0) {
        return "Cannot divide by zero!";
    }
	return x/y;
}

function multiply(x, y)
{
    return x*y;
}
function add(x, y)
{
    return x+y;
}
function power(x, y)
{
    return Math.pow(x, y);
}
function square_root(x)
{
    return Math.sqrt(x);
}
function logBase10(x)
{
    if (x=== "0") {
        return "Cannot find the logarithm of zero!";
    }
    return Math.log(x);
}
function generateRandomNumber(x)
{
    return Math.random() * 999;
}
function subtract(x, y)
{
    return x-y;
}
function convertToC(F)
{
    return (F - 32) * 5 / 9;
     
}
function convertToF(C)
{
    return C * 9/5 + 32;
     
}



