'use strict'
'use strict'
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
let uniqe=(values)=>
{
    let set=new Set(values)//tabdil array be set chon set uniqe ast
    let arr=Array.from(set)//tabdil mojadad set be array
    console.log(arr);
}
uniqe(values);