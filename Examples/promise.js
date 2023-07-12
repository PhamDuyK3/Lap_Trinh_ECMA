const promise = new Promise(function(resolve, reject) {
    const status = false
        setTimeout(function(){
            if(status){
                resolve({
                    code:200,
                    result: "Em sẽ đợi anh"
                })

            }else{
                const error = new Error("Anh chưa giàu")
                reject(error)
            }
        },2000)
    
})
console.log(promise);
// consumer
promise.then(function(res){
console.log(res);
})
.catch(function(err){
    console.log(err);
})
window.promise = promise