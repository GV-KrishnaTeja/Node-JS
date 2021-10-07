function bubbleSort(arr) {    // bubble is fun used to sort which compares in the array.and keeping in ascending form(small to big) 
    const loop =arr.length     //looplength
    for(let i=0; i<loop; i++){
        for(let j=0;j<loop; j++){
            if (arr[j]>arr[j+1]){
                let temp=arr[j]         //swap
                arr[j]=arr[j+1]          
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([14,33,27,35,10,56,101]));
