import { makeDOMwithProperties } from '../utils/dom.js';
import { CART_COOKIE_KEY } from '../constants/cart.js';

const isInCart = ({ id }) => {
  // 현재 해당 상품이 장바구니 안에 있는지를 판단하여 결과를 반환
  const originalCartInfo =
    JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];
  // Array.find
  return !!originalCartInfo.find((cartInfo) => cartInfo.id === id);
};

// 장바구니에 넣는 버튼
const addCartInfo = (productInfo) => {
  console.log('addCartInfo');
  // 장바구니에 해당 물품의 정보를 저장
  const originalCartInfo =
    JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];
  // null undefined || [] : null undefined가 나왔을 때 뒤에 있는 문법을 할당
  // 3 'hi' || [] : 앞이 제대로 된 값이면 뒤의 값은 무시 되고 앞의 값이 할당
  // ?? vs || :: 나중에 알아보도록 하자

  if (
    originalCartInfo.findIndex((cartInfo) => cartInfo.id === productInfo.id) !==
    -1
  )
    return;

  localStorage.setItem(
    CART_COOKIE_KEY,
    JSON.stringify([...originalCartInfo, productInfo])
  );
};

const removeCartInfo = ({ id }) => {
  // const { id } = productInfo
  // 장바구니에서 해당 물품의 정보를 삭제
  const originalCartInfo =
    JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];
  const newCartInfo = originalCartInfo.filter((cartInfo) => cartInfo.id !== id);
  // Array.filter

  localStorage.setItem(CART_COOKIE_KEY, JSON.stringify(newCartInfo));
};

export const getCartToggleButton = (productInfo) => {
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
