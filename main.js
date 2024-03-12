import { getProductList } from './module/productList.js';

const productList = getProductList([
  {
    id: 4,
    imgSrc: './public/assets/삼겹살.jpg',
    name: '구이용 삼겹살 600g',
    discountPercent: 5,
    price: 14820,
    originalPrice: 15600,
  },
  {
    id: 5,
    imgSrc: './public/assets/머핀.jpg',
    name: '[홍대 W마켓] 컵케익 (2입)',
    discountPercent: 20,
    price: 4800,
    originalPrice: 6000,
  },
  {
    id: 6,
    imgSrc: './public/assets/원두.jpg',
    name: '[카페 W] 디카페인 원두 1kg',
    discountPercent: 15,
    price: 7140,
    originalPrice: 8400,
  },
]);

// index.html 보면 body 태그의 마지막 요소로 들어가 있다
document.body.appendChild(productList);
