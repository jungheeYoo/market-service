import { getCartInfo } from './cartToggleButton.js';

const DELIVERY_FREE_PRICE = 20000;
const DELIVERY_PRICE = 3000;

// 각각의 dom을 받아오는 과정
const originalPriceDOM = document.getElementById('original-price');
const discountPriceDOM = document.getElementById('discount-price');
const deliveryPriceDOM = document.getElementById('delivery-price');
const totalPriceDOM = document.getElementById('total-price');

// {
//   "id": 1,
//   "imgSrc": "./public/assets/파프리카.jpg",
//   "name": "파프리카 2입",
//   "discountPercent": 20,
//   "price": 2000,
//   "originalPrice": 2500
// },

// forEach()함수 사용
// const setPayInfo = () => {
//   // 이 dom의 innerHTML 바꾸는 과정
//   // 1. 장바구니에서 물품 정보 얻어오기
//   // 2. 물품 정보들을 순회함녀서 총 가격, 할인된 가격, 배송비, 결제 금액을 계산하기
//   // 3. 2번에서 계산된 금액들을 DOM.innerHTMl로 할당하기

//   const cartInfoList = getCartInfo();

//   let originalPrice = 0;
//   let discountPrice = 0;
//   let deliveryPrice = 0; // 20000 미만 구매 -> 3000, 이상 구매 -> 0
//   let totalPrice = 0;

//   cartInfoList.forEach((cartInfo) => {
//     originalPrice += cartInfo.originalPrice;
//     // 복합할당연산자
//     // totalPrice = totalPrice + cartInfo.originalPrice;
//     discountPrice += cartInfo.originalPrice - cartInfo.price;
//   });

//   // 실제 총 상품 금액 = 원래 가격들의 합 - 할인된 가격들의 합
//   const payPrice = originalPrice - discountPrice;
//   if (payPrice >= DELIVERY_FREE_PRICE) {
//     deliveryPrice = 0;
//   } else {
//     deliveryPrice = DELIVERY_PRICE;
//   }
//   totalPrice = payPrice - deliveryPrice;

//   originalPriceDOM.innerHTML = originalPrice;
//   discountPriceDOM.innerHTML = discountPrice;
//   deliveryPriceDOM.innerHTML = deliveryPrice;
//   totalPriceDOM.innerHTML = totalPrice;
//   // 할인 된 가격 -> 원래 가격(originalPrice) - 판매 가격(price)
// };

/* ---------------------------------------- */
// reduce()함수 사용

export const setPayInfo = () => {
  // 이 dom의 innerHTML 바꾸는 과정
  // 1. 장바구니에서 물품 정보 얻어오기
  // 2. 물품 정보들을 순회함녀서 총 가격, 할인된 가격, 배송비, 결제 금액을 계산하기
  // 3. 2번에서 계산된 금액들을 DOM.innerHTMl로 할당하기

  const cartInfoList = getCartInfo();

  let deliveryPrice = 0; // 20000 미만 구매 -> 3000, 이상 구매 -> 0
  let totalPrice = 0;

  const { originalPrice, discountPrice } = cartInfoList.reduce(
    (prev, curr) => ({
      originalPrice: prev.originalPrice + curr.originalPrice,
      discountPrice: prev.discountPrice + (curr.originalPrice - curr.price),
    }),
    {
      originalPrice: 0,
      discountPrice: 0,
    }
  );

  // 실제 총 상품 금액 = 원래 가격들의 합 - 할인된 가격들의 합
  const payPrice = originalPrice - discountPrice;
  if (payPrice >= DELIVERY_FREE_PRICE) {
    deliveryPrice = 0;
  } else {
    deliveryPrice = DELIVERY_PRICE;
  }
  totalPrice = payPrice + deliveryPrice;

  originalPriceDOM.innerHTML = `${originalPrice.toLocaleString()}원`;
  // 할인금액 (-3000원) (0원)
  // Boolean(0) => fasle Boolean(-100) => true,
  discountPriceDOM.innerHTML = discountPrice
    ? `-${discountPrice.toLocaleString()}원`
    : '0원';
  // +3000원, 0원
  deliveryPriceDOM.innerHTML = deliveryPrice
    ? `+${deliveryPrice.toLocaleString()}원`
    : '0원';
  totalPriceDOM.innerHTML = `${totalPrice.toLocaleString()}원`;
  // 할인 된 가격 -> 원래 가격(originalPrice) - 판매 가격(price)
};
