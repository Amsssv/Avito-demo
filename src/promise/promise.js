
class MyPromise {
    constructor(fn){
        this.state = "pending"
        fn(
            (resolveValue) =>  {this.doRes(resolveValue)},
            (rejectValue) =>  {this.doRej(rejectValue)});
    }

    then(doResolve, doReject) {
        this.doResolve = doResolve;
        this.doReject = doReject;
        return this;
    }

    doRes(value) {
        if (this.state !== "rejected") {
            this.doResolve(value);
            this.state = "fulfilled";
            this.doFinally();
        }
    }

    doRej(value){
        if (this.state !== "fulfilled") {
            this.doReject(value);
            this.state = "rejected";
            this.doFinally();
        }
    }

    catch(doReject) {
        this.then(this.doResolve, doReject);
        return this;
    }

    finally(doFinally) {
        this.doFinally = doFinally;
        return this;
    }
}

let promise = new MyPromise((resolve, reject)=> {
    setTimeout(()=>{reject("error")}, 500);
    setTimeout(() => {resolve("success")}, 500)
})


promise.then(
    (res) => console.log(res)
).catch(
    (error) => console.log(error)
).finally(
    () => console.log("finally")
)
