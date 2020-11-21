const myArray = [
    
    {'name': 'life'},
    {'name': 'months'},
    {'name': 'weeks'},
    {'name': 'days'},
    {'name': 'years'},
    
];


let updatedArray = myArray.sort((a, b) => {

   if(a.name === 'days') {
       return -1;
   } else if(b.name === 'weeks') {
       return 1;
   }

   if(a.name === 'weeks') {
        return -1;
    } else if(b.name === 'months') {
        return 1;
    }

    if(a.name === 'months') {
        return -1;
    } else if(b.name === 'years') {
        return 1;
    }

    if(b.name === 'life') {
        return -1;
    } else if(a.name === 'years') {
        return 1;
    }

    return 0;
});

console.log(updatedArray);