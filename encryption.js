//implement transform stream that will encrypt our data

//encryption/decryption =>crypto
//hashing-salting   =>crypto
//compression   => zlib
//decoding/encoding => buffer text-encoding/decoding


const {Transform}=require("node:stream");
const fs=require("node:fs/promises");
const { write, writeFile } = require("node:fs");


class Encrypt extends Transform{
    _transform(chunk,encoding,callback){
        //<34,ff,a4,11,22...>
        //encrypting by adding 1 to each of the number
        //<34+1,ff+1,a4+1,11+1,22+1...>
       
        for(let i=0;i<chunk.length;++i){
            if(chunk[i]!==255){
                chunk[i]=chunk[i]+1;
            }
        }

        this.push(chunk);
    }
}

// 52!==='52'


(async()=>{
    const readFileHandle=await fs.open("read.txt","r");
    const writeFileHandle=await fs.open("write.txt","w");

    const readStream=readFileHandle.createReadStream();
    const writeStream=writeFileHandle.createWriteStream();

    const encrypt=new Encrypt();

    readStream.pipe(encrypt).pipe(writeStream);


})();



