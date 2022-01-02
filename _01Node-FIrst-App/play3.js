
const fetchData = (callBack) => {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

//asynchronous code
setTimeout(() => {
    console.log('Timer is done');
    fetchData().then(text=>{
        console.log(text);
        return fetchData();
    }).then(text2=>{
        console.log(text2);
    });
}, 2000);    //function, time in ms

//synchronous code
console.log('Hello!');
console.log('Hi');