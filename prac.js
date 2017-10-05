let compute = true;
function add(x,y) {
    return new Promise(function (resolve, reject) {
        if (!compute){
            resolve(x+y)
        }else{
            reject(Error("Go home buddy!"))
        }
    })
}

add(5,6).then(function (success) {
    console.log(success)
}).catch(function (err) {
    console.log(err)
});