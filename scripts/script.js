'use strict'
'use strict'
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
   };
   
   
const topSalary=(salaries)=>
{
    let max=0;
    let nameOfRichest=[]
    for (let [key, value] of Object.entries(salaries)) {
        if(value>max)
        {
            max=value;
            for(let i in nameOfRichest)
            {
                delete nameOfRichest[i];
            }
            nameOfRichest.push(key)
        }
        else if(value===max)
        {
            nameOfRichest.push(key)
        }
    }
    console.log(`the highest salary is for: ${nameOfRichest} and the value is: ${max}`);
}
topSalary(salaries);
  