import { makeDOMwithProperties } from '../utils/dom.js';
import { CART_COOKIE_KEY } from '../constants/cart.js';

// 장바구니에 넣는 버튼
const addCartInfo = (productInfo) => {
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

export const getCartToggleButton = (productInfo) => {
  const cartToggleBtn = makeDOMwithProperties('button', {
    className: 'cart-toggle-btn',
    type: 'button',
    onclick: () => {
      addCartInfo(productInfo);
    },
  });
  const cartImage = makeDOMwithProperties('img', {
    className: 'cart-image',
    src: 'public/assets/cart.png',
  });
  cartToggleBtn.appendChild(cartImage);

  return cartToggleBtn;
};