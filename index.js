
function receivesAFunction(anything){
    anything();
}

function returnsANamedFunction(){
    function aFunction(){
        return "Yo";
    };
    return aFunction;
}

function returnsAnAnonymousFunction (){
    return function (){
        console.log("Hi")
    }
}