

// Creating new promise
// const promise = new Promise( (resolve, reject) => {
//     resolve("Success") ;
//     reject("Error");
// })
//
// promise.then(
//     result => console.log(result)
// )



// class MyPromise{
//
//     constructor(fn) {
//         this.func = fn;
//     }
//
//     resolve(arg) {
//         return this.func(arg);
//     }
//
//     then(resolveFn, rejectFn) {
//
//     }
//
// }


class MyPromise {
    constructor(fn){
        fn(
            (resolveValue) =>  {this.doRes(resolveValue)},
            (rejectValue) =>  {this.doRej(rejectValue)});
    }

    then(doResolve, doReject){
        this.doResolve = doResolve;
        this.doReject = doReject;
    }

    doRes(value){
        this.doResolve(value)
    }

    doRej(value){
        this.doReject(value)
    }
}
