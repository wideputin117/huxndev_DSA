/**
1. Create an empty array to hold the chunks
2. Set a starting index to keep track of where we  are in the original array
3. Loop through the original array as long as the index hasnt reached the end
4. Extract a chunk of the desired size from the original array
5. Add the extracted chunk to the chunked array
6. Move the index forward by the chunk size to get to the next chunk
7. Return the final array of chunks 
 */

const chunk = (array, size)=>{
    const chunked = []; // creating empty array
    let index = 0; // having initial index at 0

    while(index < array.length) {
        // creating a chunk
        console.log(index, array.length)
        const chunk = array.slice(index,index+size);
        chunked.push(chunk);
        // will update the index for next chunk
        index += size; // will update the index with the size 
    }
     
    return chunked;
}

const answer = chunk([2,1,4,6,3,1,4,6,7,3,1,4,6],2);
console.log(answer);