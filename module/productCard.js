// list에서 DOM의 함수를 받아와서 사용했었는데 여기로 옮김
import { appendChildrenList, makeDOMwithProperties } from '../utils/dom.js';
import { getCartToggleButton } from './cartToggleButton.js';

// 이전에 list에서 만들었던 productCard를 하나의 module 함수로 만듦
// getProductCard() 는 호출시에 ProductCard라는 DOM을 생성해서 내보내주는 함수
// 7-14 getProductCard에도 똑같이 넘겨서
export const getProductCard = (productInfo, removeCartCallback) => {
  // getProductCard 함수로 들어오는 내부 데이터들을 인자로 표현
  // productCard을 생성하기 위해서 넘겨줘야 하는 정보
  // 이렇게 바꿔주면 같은 코드를 여러번 실행할 때 getgetProductCard 함수에 아래 정보들만 넘겨주면
  // 새로운 productCard를 받을 수 있다
  // export 내보내기
  const { imgSrc, name, discountPercent, price, originalPrice } = productInfo;

  // 이전에 작성했던 코드들을 그대로 수행하므로 그대로 가져와서 복사
  // DOM 생성
  // --- product-card ---
  const productCard = makeDOMwithProperties('div', {
    className: 'product-card',
  });
  // --- product-card ---

  // --- product-image-con ---
  const productImageCon = makeDOMwithProperties('div', {
    className: 'product-image-con',
  });
  const productImage = makeDOMwithProperties('img', {
    src: imgSrc,
    alt: name,
  });

  // 이 부분을 모듈 함수로 뺌
  // cartToggleButton.js 로 넘겨줌
  // const cartToggleBtn = makeDOMwithProperties('button', {
  //   className: 'cart-toggle-btn',
  //   type: 'button',
  // });
  // const cartImage = makeDOMwithProperties('img', {
  //   className: 'cart-image',
  //   src: 'public/assets/cart.png',
  // });
  // cartToggleBtn.appendChild(cartImage);

  // 1-4 여기서 그대로 getCartToggleButton 사용해줌
  // getCartToggleButton();
  // 변수를 만들고 getCartToggleButton(productInfo); 할당해줌
  // 7-15 장바구니를 생성하는 getCartToggleButton에도 똑같이 넘겨줌
  // cartToggleButton으로 이동
  const cartToggleBtn = getCartToggleButton(productInfo, removeCartCallback); // cartToggleButton.js

  appendChildrenList(productImageCon, [productImage, cartToggleBtn]);
  // --- product-image-con ---

  // --- product-description ---
  const productDescription = makeDOMwithProperties('div', {
    className: 'product-description',
  });
  const productName = makeDOMwithProperties('div', {
    className: 'product-name',
    innerHTML: name,
  });

  const productPriceContainer = makeDOMwithProperties('div', {
    className: 'product-price-con',
  });
  const productDiscountPercent = makeDOMwithProperties('div', {
    className: 'product-discount-percent',
    innerHTML: `${discountPercent}%`,
  });
  const productPrice = makeDOMwithProperties('div', {
    className: 'product-price',
    innerHTML: `${price.toLocaleString()}원`, // 2000 -> 2,000 toLocaleString() 사용
  });
  const productOriginalPrice = makeDOMwithProperties('div', {
    className: 'product-original-price',
    innerHTML: `${originalPrice.toLocaleString()}원`,
  });

  appendChildrenList(productPriceContainer, [
    productDiscountPercent,
    productPrice,
  ]);
  appendChildrenList(productDescription, [
    productName,
    productPriceContainer,
    productOriginalPrice,
  ]);
  // --- product-description ---

  appendChildrenList(productCard, [productImageCon, productDescription]);

  return productCard;
};
