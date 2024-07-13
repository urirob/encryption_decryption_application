//implement transform stream that will encrypt our data

//encryption/decryption =>crypto
//hashing-salting   =>crypto
//compression   => zlib
//decoding/encoding => buffer text-encoding/decoding


const {Transform}=require("node:stream");
const fs=require("node:fs/promises");
const { write, writeFile } = require("node:fs");


class Decrypt extends Transform{
    _transform(chunk,encoding,callback){
        //<34+1,ff+1,a4+1,11+1,22+1...>
        //decrypting by subtracting 1 to each of the number
        //<34+1-1,ff+1-1,a4+1-1,11+1-1,22+1-1...>
       
        for(let i=0;i<chunk.length;++i){
            if(chunk[i]!==255){
                //getting original data from encrypted data by subtracting 1 from encrypted values
                chunk[i]=chunk[i]-1;
            }
        }
        callback(null,chunk);

        //need to call the callback after the push is done

    }
}


//Decrypting... 1%
//Decrypting... 65%
//Decrypting... 69%
//Decrypting... 72%
//Decrypting... 100%


(async()=>{
    const readFileHandle=await fs.open("write.txt","r");
    const writeFileHandle=await fs.open("decrypted.txt","w");

    readFileHandle.stat()

    const readStream=readFileHandle.createReadStream();
    const writeStream=writeFileHandle.createWriteStream();

    const decrypt=new Decrypt();

    readStream.pipe(decrypt).pipe(writeStream);


})();



