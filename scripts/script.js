'use strict'
let arr1=[1,8,89,15,2,5,94]
let arr2=[8,6,12,16,23]
let arr3=[24,89,93,17,100]
const sort=(arr1,arr2,arr3)=>
{
    let set=new Set(arr1)//create set and add arr1 to set
    for(let i in arr2) //add arr2 to set
    {
        set.add(arr2[i]);
    }
    for(let i in arr3)//add arr3 to set
    {
        set.add(arr3[i]);
    }

    let arr4=Array.from(set)//turning set to array
    arr4.sort((a,b)=>b-a)//sorting arr4
    arr4.reverse()//reverse arr4
    console.log(arr4);
    
}
sort(arr1,arr2,arr3);