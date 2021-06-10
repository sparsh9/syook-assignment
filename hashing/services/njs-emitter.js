const {EventEmitter} = require('events');
const fetch = require('node-fetch');
const { encrypt, decrypt } = require('../middlewares/crypto');

class NjsEmitter extends EventEmitter {
    execute(asyncFunc, ...args) {
        this.emit('begin');
        console.time('execute');
        this.on('data', (data)=> console.log('got data ', data));
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }
            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');
        });
    }
}

const njsEmitter = new NjsEmitter();

njsEmitter.on('begin', () => console.log('About to execute'));
njsEmitter.on('end', () => console.log('Done with execute'));

let hash;
let res;

const getData = (url, cb) => {
    fetch(url)
        .then((resp) => resp.json())
        .then(data => {
            res = data;
            });


}
function data(){
    if(res == undefined){
        console.log("Data is being parsed")
    } else {
       // console.log(res);
        clearInterval(loadData);
         generateData(res);
    }
}
const loadData = setInterval(data, 1000);
let newHash;
function generateData(res) {
    let newData = res;
    //console.log(newData);
    newData.forEach(element => {
        hash = (encrypt(element.name + ' ' + element.origin + ' ' + element.destination + ' ' + element.secret_key))
        console.log(hash)
        let text = decrypt(hash)
        console.log(text)
        text = {
            name : element.name,
            origin : element.origin,
            destination : element.destination
        }
        console.log(text)
    });
}



setTimeout(function(){
    njsEmitter.execute(getData, 'http://localhost:5000/person/show');
},10000)
// njsEmitter.execute(getData, 'http://localhost:5000/person/show');

module.exports = {
    njsEmitter
};
