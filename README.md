follow up<br>

trying to create  % loader of how much of total file is encrypted or decrypted <br>

Decrypting... 1%  <br>
Decrypting... 65%  <br>
Decrypting... 69%  <br>
Decrypting... 72%  <br>
Decrypting... 100%  <br>

hint: get the total file size using readFileHandle.stat() in decryption.js <br>

declare the variable totalBytesRead to find the totalBytesRead from read.txt file <br>

from the chunk from _transform add it to the totalBytesRead, and keep incrementing everytime you run _transform method <br>

in _transform() method add if statement checking, on every 1000 times running _transform()  method need to print the percentage <br>



count the number of bytes read after passing the certain number of buffer size, and <br>
divide it with the total file size and log the percentage till entire file is not processed <br>

