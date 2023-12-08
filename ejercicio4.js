// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().
const users = [
{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let array1=[]

users.map(user=> array1.push(user.name))

console.log(array1)


// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.

 const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
 	{id:4, name: 'Amanda'}
 ];


 let array2=[]

users2.map(user=> {
    if(user.name.startsWith('A'))
    array2.push("Anacleto")
    else
   
    array2.push(user.name)})

console.log(array2)



// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.

const cities = [
 	{isVisited:true, name: 'Tokyo'}, 
 	{isVisited:false, name: 'Madagascar'},
 	{isVisited:true, name: 'Amsterdam'}, 
 	{isVisited:false, name: 'Seul'}
 ];
 let array3=[]

 cities.map(city=>{
    if(city.isVisited===true)
    array3.push(city.name+" (Visitado)")
    else
    array3.push(city.name)
})

console.log(array3)
 