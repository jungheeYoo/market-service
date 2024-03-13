// module 에서 getProductCard 함수 받아와서 사용
import { getProductCard } from './module/productCard.js';

// list.js 파일은 list.html 파일 내부에서 import 하고 있기 때문에 list.html을 실행하면 자동으로 실행된다.
// DOM을 구성하기 위해서 list.html로 가서 해당 product-card 복사해온다. 이 DOM을 그대로 구현할 것이기 때문이다.
// 특정 DOM을 생성할 때는 documetn.createElement 사용

// sectionDOM 변수를 정의하고
// document에서 해당 객체를 찾기 위해 getElementsByTagName()사용
// section태그를 사용하는 노드를 모두 받아온 다음 첫 번째 태그를 받아오면
const sectionDOM = document.getElementsByTagName('section')[0];

// productCard를 받아오는 함수 사용
// 그 후 productCard dom을 section dom에 append 해줄 것임
// 이 함수에는 정보를 넘겨야하기 때문에 미리 구성해 뒀었던 mock데이터 정보를 들고온다
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

/* ------------------------------------------------------- */

// DOM 생성
// productCard 변수는 makeDOMwithProperties() 함수를 이용
// 이 함수를 이용하려면 여기에 해당파일에 import 해와야함
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

// // cart-toggle-btn 내부에 이미지가 들어가야하므로
// // 어떤 노드 내부 이미지를 붙여주기 위해서 사용할 수 있는 함수 둘 중에 하나 씀
// // Node.appendChild
// // Node.insertBefore
// // 그럼 토글 버튼 내부에 카트 이미지가 들어가게 됨
// cartToggleBtn.appendChild(cartImage);
// // product-image-con 내부에 productImage, cartToggleBtn 넣어줌
// // productImageCon.appendChild(productImage);
// // productImageCon.appendChild(cartToggleBtn);

// // 계속 appendChild로 여러개 붙여 넣어줄 것 같으므로 Utils / dom.js에 함수로 만듦
// appendChildrenList(productImageCon, [productImage, cartToggleBtn]);
// // --- product-image-con ---

// --- product-description ---
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

// // productCard에 productImageCon과 productDescription을 붙여줬으면
// // 이렇게 생성 된 productCard를 실제 맞는 위치에 넣어줌
// appendChildrenList(productCard, [productImageCon, productDescription]);

// // list.html에 가서 section 태그의 마지막으로 삽입되면 됨
// // sectionDOM 밑으로 붙여줌
// sectionDOM.appendChild(productCard);
