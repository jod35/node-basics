// promises are one way we can deal with asynchronous code without having callback

//creating a new promise

let done= true;

const IsItDoneYet= new Promise(
    (resolve,reject)=>{
    	if (done){
    		const workDone=`Here is what I built`;
    		resolve(workDone);
    	}
    	else{
    		const why =	`Still working on something else`;
    		reject(why);
    	}
    }

);

//consuming promises
const checkIfIsDone=()=>{
	IsItDoneYet.then((ok)=>{
		console.log(ok);

	})
	.catch(err){
		console.error(err);
	}
}

//chaining promises
const status = (response) => {
	if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response)
	}
		return Promise.reject(new Error(response.statusText))
}
const json = (response) => response.json()
fetch('/todos.json')
.then(status)


//handling promise errors
new Promise((resolve, reject) => {
	throw new Error('Error');
})
.catch((err) => { console.error(err) })

// or

new Promise((resolve, reject) => {
	reject('Error');
})
.catch((err) => { console.error(err) })

