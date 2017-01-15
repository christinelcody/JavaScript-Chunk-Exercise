/*Write a function that splits an array into a given number of equal-sized chunks.

The function should take two arguments: the input array and an integer equal to the number of chunks to split it into. The return value should be an array of arrays (these are the 'chunks').

<strong>For example:</strong>

<pre>
var input = [1,2,3,4,5,6,7,8,9,10];
chunk(input, 2); // should return [ [1,2,3,4,5], [6,7,8,9,10] ]
</pre>

The tricky part is when the number of chunks doesn't divide evenly into the size of the array. Take the following examples:

<pre>
var input = [1,2,3,4,5,6,7,8,9,10];
chunk(input, 3); // should return [ [1,2,3,4], [5,6,7], [8,9,10] ]
chunk(input, 7); // should return [ [1,2], [3,4], [5,6], [7], [8], [9], [10] ]
</pre>
In the above examples, the inner arrays (chunks) are larger at the beginning of the array than at the end, as if you were trying to make all chunks as close to the same size as possible while keeping the bigger chunks at the beginning.

[1, 2, 3, 4, 5, 6] ,3 =>
[1,2] [3,4] [5,6]

input / chunksize => # of chunks

[1, 2, 3, 4, 5, 6, 7], 3 => [1, 2, 3] [4, 5, 6] [7]

[1, 2, 3, 4, 5, 6, 7, 8, 9], 3

ceil() method rounds a number UPWARDS to the nearest integer & returns the result.

*/
function chunk(input, size, arr = []){  
	if(size >= input.length / 2) return [input.slice(0, size), input.slice(size)];
  var chunkSize = Math.ceil(input.length / size);
	for(var i = 0; i < input.length; i += chunkSize) arr.push(input.slice(i, i + chunkSize));
	return arr;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));

console.log(chunk([1,2,3,4,5,6,7,8,9,10], 3));
  
console.log(chunk([1,2,3,4,5,6,7], 3));

console.log(chunk([1,2,3,4,5,6,7,8,9,10,11,12,13], 2));

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9,], 5));

