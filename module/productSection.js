import { appendChildrenList, makeDOMwithProperties } from '../utils/dom.js';
import { getProductList } from './productList.js';

{
  /* 
<section class="product-list-section">
  <div class="section-title">
    <span class="section-title-highlight"></span>
    <span>인기 상품</span>
  </div>
  <div class="product-list-con">
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
  </div>
</section> 
  */
}

// 1. sectionName, productInfoList 이 두개를 매개변수로 받고 dom 생성
// 2. section dom이 필요하므로 productListSection변수를 만들고 해당 프로퍼티를 포함해서
// 만드는 유틸 함수를 이용해서 만듦

// 6. export 내보내기
export const getProductSection = (sectionName, productInfoList) => {
  const productListSection = makeDOMwithProperties('div', {
    className: 'product-list-section',
  });
  const sectionTitle = makeDOMwithProperties('div', {
    className: 'section-title',
  });
  const titleHighlight = makeDOMwithProperties('span', {
    className: 'section-title-highlight',
  });
  const title = makeDOMwithProperties('span', {
    innerHTML: sectionName,
  });

  // 3. section-title 내부에 titleHighlight, title가 append 되어있으므로
  // appendChildrenList 모듈을 이용해서 삽입
  appendChildrenList(sectionTitle, [titleHighlight, title]);

  // 4. productListContainer는 getProductList() 함수를 이용해서 매개변수로 받아온
  // productInfoList만 넘겨주면 된다
  const productListContainer = getProductList(productInfoList);

  // 5. 그래서 생성 된  sectionTitle, productListContainer 이 두가지를
  // productListSection dom에 append 해줌
  appendChildrenList(productListSection, [sectionTitle, productListContainer]);

  return productListSection;
};
