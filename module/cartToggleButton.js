// 1-5 유틸 함수 import 해 옴
import { makeDOMwithProperties } from '../utils/dom.js';
import { CART_COOKIE_KEY } from '../constants/cart.js';

// 7-2 장바구니 물품 정보는 localStorage에서 가져오면 됨
// 반복되는 함수에 붙여 넣어줌
export const getCartInfo = () =>
  JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];

const isInCart = ({ id }) => {
  // 현재 해당 상품이 장바구니 안에 있는지를 판단하여 결과를 반환
  const originalCartInfo = getCartInfo();
  // Array.find
  return !!originalCartInfo.find((cartInfo) => cartInfo.id === id);
};

// 카트를 클릭했을 때 저장하는 함수 구현 (장바구니에 담아져야 함)
// 2-1 addCartInfo() 함수 생성
// 이 함수는 버튼을 클릭할 때 동작해야하므로 onClick 핸들러로 등록

// 장바구니에 넣는 버튼
const addCartInfo = (productInfo) => {
  console.log('addCartInfo');

  const originalCartInfo = getCartInfo();
  // null undefined || [] : null undefined가 나왔을 때 뒤에 있는 문법을 할당
  // 3 'hi' || [] : 앞이 제대로 된 값이면 뒤의 값은 무시 되고 앞의 값이 할당
  // ?? vs || :: 나중에 알아보도록 하자

  if (
    originalCartInfo.findIndex((cartInfo) => cartInfo.id === productInfo.id) !==
    -1
  )
    return;

  // 2-4 장바구니에 해당 물품의 정보를 저장
  // localStorage.setItem() 메서드를 사용해서 key : 카트를 나타내는 키, value : 카트 정보
  localStorage.setItem(
    CART_COOKIE_KEY,
    JSON.stringify([...originalCartInfo, productInfo])
  );
};

const removeCartInfo = ({ id }) => {
  // const { id } = productInfo
  // 장바구니에서 해당 물품의 정보를 삭제
  const originalCartInfo = getCartInfo();
  const newCartInfo = originalCartInfo.filter((cartInfo) => cartInfo.id !== id);
  // Array.filter

  localStorage.setItem(CART_COOKIE_KEY, JSON.stringify(newCartInfo));
};

// 1-1 getCartToggleButton 함수 생성
// 1-2 productCard에서 돔 부분을 받아와서 넣음
// 1-3 export 내보내기 productCard에서 getCartToggleButton 사용해줌
// 2-2 onclick: () 함수 등록
// 2-3 addCartInfo(); 실행
// 2-5 getCartToggleButton 호출할 때
// 7-16 이렇게 받은 removeCartCallback 함수를
export const getCartToggleButton = (productInfo, removeCartCallback) => {
  let inCart = isInCart(productInfo);
  const cartToggleBtn = makeDOMwithProperties('button', {
    className: 'cart-toggle-btn',
    type: 'button',
    onclick: () => {
      if (inCart) {
        // 이미 장바구니에 들어가 있으면 -> 장바구니에 삭제
        if (!confirm(`[${productInfo.name}]을 장바구니에서 삭제할까요?`))
          return; // early-return
        removeCartInfo(productInfo);
        cartImage.src = 'public/assets/cart.png';
        // 7-17 카트는 삭제 되었을 때 수행해야 함. 따라서 getCartToggleButton내부에서 삭제되었을 때
        // 콜백을 수행할텐데 이 콜백을 수행할 때 이 함수가 넘어오지 않았을수도 있으므로
        // 이 함수가 있을 때 수행하겠다라고 옵셔널 체이닝으로 표현한다
        // 이 함수가 undefined면 undefined으로 끝내고 undefined가 아닌 함수로 들어왔으면 그 함수를 수행하겠다
        removeCartCallback?.();
      } else {
        // 장바구니에 x -> 장바구니에 넣기
        addCartInfo(productInfo);
        cartImage.src = 'public/assets/cartDisabled.png';
        // const result = ;
        if (confirm('장바구니에 담았습니다. 장바구니 페이지로 이동할까요?')) {
          location.href =
            '/2.zero-base/0-1.%20클론코딩연습/js-practice/market-service/cart.html';
        }
      }
      inCart = !inCart;
    },
  });
  const cartImage = makeDOMwithProperties('img', {
    className: 'cart-image',
    src: inCart ? 'public/assets/cartDisabled.png' : 'public/assets/cart.png',
  });
  cartToggleBtn.appendChild(cartImage);

  return cartToggleBtn;
};

// 1-1 getCartToggleButton 함수 생성
// 1-2 productCard에서 돔 부분을 받아와서 넣음
// 1-3 export 내보내기 productCard에서 getCartToggleButton 사용해줌
// export const getCartToggleButton = (productInfo) => {
//   const cartToggleBtn = makeDOMwithProperties('button', {
//     className: 'cart-toggle-btn',
//     type: 'button',
//   });
//   const cartImage = makeDOMwithProperties('img', {
//     className: 'cart-image',
//     src: 'public/assets/cart.png',
//   });
//   cartToggleBtn.appendChild(cartImage);

//   return cartToggleBtn;
// };
