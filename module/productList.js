import { makeDOMwithProperties } from '../utils/dom.js';
import { getProductCard } from './productCard.js';

// getProductList DOM을 생성하여 내보내주는 함수이고
// productInforList가 들어와서 productInforList를 순회하면서
// productCard들을 만들어서 child로 가지고 있게 됨
export const getProductList = (productInforList) => {
  // 만약 productInforList가 존재하지 않거나 배열이 아니라면 리턴
  if (!productInforList == null || Array.isArray(productInforList)) return;
  const productListContainer = makeDOMwithProperties('div', {
    className: 'product-list-con',
  });

  // productInforList로 들어온 배열을 forEach로 순회하여 productInfo를 하나씩 받아서
  //
  productInforList.forEach((productInfo) => {
    // productInfo로 받은 요소들을 그대로 getProductCard에 넘겨주기만 하면 되는데
    // 구조 분해 할당으로 빼줄 필요가 없다
    // const { id, imgSrc, name, discountPercent, price, originalPrice } = productInfo;
    productListContainer.appendChild(
      getProductCard({
        ...productInfo, // spread 문법으로 객체의 프로퍼티 하나씩 가져와서 객체 형태로 뿌릴 수 있게
      })
    );
  });

  return productListContainer;
};

{
  /* 
<div class="product-list-con">
  <div class="product-card"></div> 
*/
}
