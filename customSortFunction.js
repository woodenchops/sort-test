const myArray = [
    
    {'name': 'life'},
    {'name': 'months'},
    {'name': 'weeks'},
    {'name': 'days'},
    {'name': 'years'},
    
];

const rearrangeArrayOrder = (array, fromPosition, toPosition) => {
    array.splice(toPosition,0,array.splice(fromPosition,1)[0]);
    return array;
  };
const daysToLife = (array, positions) => {
    const sortedArray = [...array];
    return positions.map(x => rearrangeArrayOrder(sortedArray, x.from, x.to));
   };
   
   console.log(daysToLife(myArray, [
    {from: 3, to: 0},
    {from: 3, to: 1},
    {from: 3, to: 2},
    {from: 3, to: 4}
   ])) // will take an item from its original index and shift it to a new position

   /* OUTPUT:

   [
    { name: 'days' },
    { name: 'weeks' },
    { name: 'months' },
    { name: 'years' },
    { name: 'life' }
  ]
   
   */ 