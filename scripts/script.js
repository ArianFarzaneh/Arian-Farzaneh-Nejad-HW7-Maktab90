'use strict'
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let aclean=(arr)=>
{
    let map = new Map()//sakhtan yek map
    for(let i of arr)
    {
        let uniqe=i.toLowerCase().split("").sort().join('')
        map.set(uniqe,i)
    }
    let arr2=Array.from(map.values());
    console.log(arr2);
}
aclean(arr);