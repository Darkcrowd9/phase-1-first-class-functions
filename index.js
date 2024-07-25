function receivesAFunction(spy) {
    return spy()
}

returnsANamedFunction();
function returnsANamedFunction() {
    return function Captain() {

    }
}

function returnsAnAnonymousFunction() {
    return()=> {

    }
}