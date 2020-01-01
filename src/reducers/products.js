
let initialState = [
    {
        id:1,
        name: 'Snack Mango',
        image : 'https://raw.githubusercontent.com/lequangdongg/shop-fruits/master/img/slide-product11.jpg',
        description : 'Products from clean farms',
        price : 13,
        inventory : 11,
        rating:4
    },
    {
        id:2,
        name: 'Stawberry juice',
        image : 'https://raw.githubusercontent.com/lequangdongg/shop-fruits/master/img/slide-product12.jpg',
        description : 'Products from clean farms',
        price : 4,
        inventory : 12,
        rating:3
    },
    {
        id:3,
        name: 'Oranges',
        image : 'https://raw.githubusercontent.com/lequangdongg/shop-fruits/master/img/slide-product13.jpg',
        description : 'Products from clean farms',
        price : 3,
        inventory : 1,
        rating:5
    },
    {
        id:4,
        name: 'Super fruist',
        image : 'https://raw.githubusercontent.com/lequangdongg/shop-fruits/master/img/slide-product2.jpg',
        description : 'Products from clean farms',
        price : 7,
        inventory : 1,
        rating:5
    },
    {
        id:5,
        name: 'Franklin',
        image : 'https://raw.githubusercontent.com/lequangdongg/shop-fruits/master/img/slide-product3.jpg',
        description : 'Products from clean farms',
        price : 3.99,
        inventory : 1,
        rating:3
    },
    {
        id:6,
        name: 'Avocado',
        image : 'https://raw.githubusercontent.com/lequangdongg/shop-fruits/master/img/slide-product5.jpg',
        description : 'Products from clean farms',
        price : 9.9,
        inventory : 1,
        rating:5
    },
    
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
};

export default products;
