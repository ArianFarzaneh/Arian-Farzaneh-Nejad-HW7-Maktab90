'use strict'
/*dalil in etefagh in ast ke
method map.keys() yek array be ma bar nemigardanad
pas rahe hal hal kardan moshkel in ast ke 
map ra az tarigh estefade az Array.form()
barabar yek array gharar bedahim
*/
//shekl dorost:
let map = new Map();
map.set("name", "John");
let keys =new Array()
keys= Array.from(map.keys());//inja ba estefade az Array.from() map ra be array tabdil kardim
keys.push("more");
console.log(keys);