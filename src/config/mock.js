import { v4 as uuidv4 } from 'uuid';
import * as faker from 'faker/locale/pt_BR';
import { fake } from 'faker';


const getReviews = () =>{
    return [{
        userName: faker.name.firstName(),
        review: faker.commerce.productDescription(),
        rate: faker.random.alphaNumeric(2)
    },{
        userName: faker.name.firstName(),
        review: faker.commerce.productDescription(),
        rate: faker.random.alphaNumeric(2)
    },{
        userName: faker.name.firstName(),
        review: faker.commerce.productDescription(),
        rate: faker.random.alphaNumeric(2)
    },{
        userName: faker.name.firstName(),
        review: faker.commerce.productDescription(),
        rate: faker.random.alphaNumeric(2)
    },{
        userName: faker.name.firstName(),
        review: faker.commerce.productDescription(),
        rate: faker.random.alphaNumeric(2)
    }]
}

const mock = {
    storeName: 'Trader',
    logoUrl: '/assets/images/logo.png',
    menuOptions: [
        'Homens',
        'Mulheres',
        'Acessórios',
        'Bolsas',
        'Sapatos'
    ],
    lastStories: [
        { title: 'Lançamentos de Blusas', img: 'https://source.unsplash.com/random/200x200?sig=1' },
        { title: 'Novas Bolsas Gulci', img: 'https://source.unsplash.com/random/200x200?sig=2' },
        { title: 'Promoção Shorts Femininos', img: 'https://source.unsplash.com/random/200x200?sig=3' }
    ],
    products: [
        { id: uuidv4(), title: faker.commerce.productName(), images: ['https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig='], description: faker.commerce.productDescription(), value: faker.commerce.price(), reviews: getReviews() },
        { id: uuidv4(), title: faker.commerce.productName(), images: ['https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig='], description: faker.commerce.productDescription(), value: faker.commerce.price(), reviews: getReviews() },
        { id: uuidv4(), title: faker.commerce.productName(), images: ['https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig='], description: faker.commerce.productDescription(), value: faker.commerce.price(), reviews: getReviews() },
        { id: uuidv4(), title: faker.commerce.productName(), images: ['https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig='], description: faker.commerce.productDescription(), value: faker.commerce.price(), reviews: getReviews() },
        { id: uuidv4(), title: faker.commerce.productName(), images: ['https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig='], description: faker.commerce.productDescription(), value: faker.commerce.price(), reviews: getReviews() },
        { id: uuidv4(), title: faker.commerce.productName(), images: ['https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig='], description: faker.commerce.productDescription(), value: faker.commerce.price(), reviews: getReviews() },
        { id: uuidv4(), title: faker.commerce.productName(), images: ['https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig='], description: faker.commerce.productDescription(), value: faker.commerce.price(), reviews: getReviews() },
        { id: uuidv4(), title: faker.commerce.productName(), images: ['https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig=', 'https://source.unsplash.com/random/600x800?sig='], description: faker.commerce.productDescription(), value: faker.commerce.price(), reviews: getReviews() },
    ]
}

export default mock