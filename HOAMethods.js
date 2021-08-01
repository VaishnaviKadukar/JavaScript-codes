
//Lets see what is higher order array methods

 const companies = [//array of object
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},

    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},

    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},

    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},

    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},

    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},

    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},

    {name: 'Company Eight', category: 'Technology', start: 2001, end: 2016},

    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
]

// 1. For each loop----not return an array

 // a.arrayname.method (function keyword (parameter){function body})
//   companies.forEach(function (e){
  //  console.log(e.category);
//})

//b.using arrow function you call callback method
// const index=0;
// companies.forEach( (o) =>{
//     console.log(o.end);
//     console.log(index);
// },index)


//c.using push method 
 const people=[1,44,23,34,10,3,4,6,4];

// const marray=[];
// people.forEach((k)=>{
//    if(k>18){
//     marray.push(k);
//    }
// })
// console.log(marray);

//2.filter method--return an array
//a.
// const marray=people.filter(function (people){

//       if(people>18){
//         return true;
//       }
//   })

// console.log(marray);

//b.
// const marray=people.filter(people1=>people>18);
// console.log(marray);

//c.
// const rcampany=companies.filter( companies1=>companies.category=='Technology')
// console.log(rcampany);

//3.maps--returns you an arrays
// const campanyvalue=companies.map( campany =>{return `${campany.name} [ ${campany.start}-${campany.end}] `})
// console.log(campanyvalue);

//Question for you...
// const campanyvalue=companies.map( campany =>campany.name).filter(campany=>campany.category=="Retail")
// console.log(campanyvalue);

   
// const campanyvalue=companies.map( campany =>campany.name)
// console.log(campanyvalue);

const campanyvalue=companies.map( campany =>campany.name).filter(campany=>campany.start<2000)
 console.log(campanyvalue);