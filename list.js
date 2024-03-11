import { getProductCard } from './module/productCard.js';

// section태그를 사용하는 노드를 모두 받아온 다음 첫 번째 태그를 받아오면
const sectionDOM = document.getElementsByTagName('section')[0];

// productCard를 받아오는 함수
// 이 함수에는 정보를 넘겨야함
const productCard = getProductCard({
  id: 4,
  imgSrc: './public/assets/삼겹살.jpg',
  name: '구이용 삼겹살 600g',
  discountPercent: 5,
  price: 14820,
  originalPrice: 15600,
});
const productCard2 = getProductCard({
  id: 5,
  imgSrc: './public/assets/머핀.jpg',
  name: '[홍대 W마켓] 컵케익 (2입)',
  discountPercent: 20,
  price: 4800,
  originalPrice: 6000,
});

sectionDOM.appendChild(productCard);
sectionDOM.appendChild(productCard2);

// DOM 구현
{
  /* 
  <div class="product-card">
    <div class="product-image-con">
        <img src="public/assets/파프리카.jpg" alt="파프리카 2입">
        <button type="button" class="cart-toggle-btn">
          <img src="public/assets/cart.png" class="cart-image">
        </button>
    </div>
    <div class="product-description">
        <div class="product-name">파프리카 2입</div>
        <div class="product-price-con">
          <div class="product-discount-percent">20%</div>
          <div class="product-price">2,000원</div>
        </div>
        <div class="product-original-price">2,500원</div>
    </div>
  </div>
*/
}

// dom.js 만들기 전에 했던 방식
// DOM 생성
// const productCard = document.createElement('div');
// productCard.className = 'product-card';

// const productImageCon = document.createElement('div');
// productImageCon.className = 'product-image-con';
// const productImage = document.createElement('img');
// productImage.src =
//   'https//cdn.pixabay.com/photo/2014/08/18/23/11/bell-peppers-421087_1280.jpg';
// productImage.alt = '파프리카';

// DOM 생성
// --- product-card ---
// const productCard = makeDOMwithProperties('div', {
//   className: 'product-card',
// });
// // --- product-card ---

// // --- product-image-con ---
// const productImageCon = makeDOMwithProperties('div', {
//   className: 'product-image-con',
// });
// const productImage = makeDOMwithProperties('img', {
//   src: 'public/assets/파프리카.jpg',
//   alt: '파프리카',
// });
// const cartToggleBtn = makeDOMwithProperties('button', {
//   className: 'cart-toggle-btn',
//   type: 'button',
// });
// const cartImage = makeDOMwithProperties('img', {
//   className: 'cart-image',
//   src: 'public/assets/cart.png',
// });
// cartToggleBtn.appendChild(cartImage);
// appendChildrenList(productImageCon, [productImage, cartToggleBtn]);
// // --- product-image-con ---

// // 토글 버튼 내부에 이미지가 들어가야 하므로
// // 어떤 노드 내부 이미지를 붙여주기 위해서 사용할 수 있는 함수
// // Node.appendChild
// // Node.insertBefore

// // 여러개를 붙여줘야 할 경우에 아래처럼 하지 말고 따로 함수로 만듦
// // productImageCon.appendChild(productImage);
// // productImageCon.appendChild(cartToggleBtn);

// // --- product-description ---
// const productDescription = makeDOMwithProperties('div', {
//   className: 'product-description',
// });
// const productName = makeDOMwithProperties('div', {
//   className: 'product-name',
//   innerHTML: '파프리카',
// });

// const productPriceContainer = makeDOMwithProperties('div', {
//   className: 'product-price-con',
// });
// const productDiscountPercent = makeDOMwithProperties('div', {
//   className: 'product-discount-percent',
//   innerHTML: '20%',
// });
// const productPrice = makeDOMwithProperties('div', {
//   className: 'product-price',
//   innerHTML: '2000원',
// });
// const productOriginalPrice = makeDOMwithProperties('div', {
//   className: 'product-original-price',
//   innerHTML: '2500원',
// });

// appendChildrenList(productPriceContainer, [
//   productDiscountPercent,
//   productPrice,
// ]);
// appendChildrenList(productDescription, [
//   productName,
//   productPriceContainer,
//   productOriginalPrice,
// ]);
// // --- product-description ---

// appendChildrenList(productCard, [productImageCon, productDescription]);

// sectionDOM 밑으로 붙여줌
// sectionDOM.appendChild(productCard);
