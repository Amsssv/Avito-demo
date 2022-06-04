function Promise (fn) {
    this.state = 'pending',

        fn(
            (resolveValue) =>  {this.doRes(resolveValue)},
            (rejectValue) =>  {this.doRej(rejectValue)}
        )

    this.then = function(doResolve, doReject) {
        this.doResolve = doResolve;
        this.doReject = doReject;
        return this;
    }

    this.doRes = function(value) {
        if (this.state !== "rejected") {
            this.doResolve(value);
            this.state = "fulfilled";
            this.doFinally();
        }
    }

    this.doRej= function(value){
        if (this.state !== "fulfilled") {
            this.doReject(value);
            this.state = "rejected";
            this.doFinally();
        }
    }

    this.catch = function(doReject) {
        this.then(this.doResolve, doReject);
        return this;
    }

    this.finally = function(doFinally) {
        this.doFinally = doFinally;
        return this;
    }
}

let promise1 = new Promise((resolve, reject)=> {
    setTimeout(() => {resolve("success")}, 500)
    setTimeout(() => {reject("error")}, 500);
})


promise1.then(
    (res) => console.log(res)
).catch(
    (error) => console.log(error)
).finally(
    () => console.log("finally")
)
