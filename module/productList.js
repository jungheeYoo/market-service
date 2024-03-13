import { makeDOMwithProperties } from '../utils/dom.js';
import { getProductCard } from './productCard.js';

// 하지만 필요한 것은 index.html에서 구성되어있던 product-list-con 이다
// 이 안에는 여러개의 productCard가 들어가게 된다
// 이렇게 상품 정보 리스트를 넘겨주면 상품 정보들의 productCard를 생성한 후
// product-list-con에 묶어서 product-list-con dom을 내보내주는 util함수 만듦

// getProductList DOM을 생성하여 내보내주는 함수이고
// productInfoList가 들어와서 productInfoList를 순회하면서
// productCard들을 만들어서 child로 가지고 있게 됨
// 7-12 getProductList에서 removeCart할 때 Callback이라는 이름으로 매개변수 작성
// 이런 매개변수로 함수가 들어오게 되고 해당 함수를
export const getProductList = (productInfoList, removeCartCallback) => {
  // 만약 productInfoList가 존재하지 않거나 배열이 아니라면 리턴
  if (!productInfoList == null || !Array.isArray(productInfoList)) return;
  // 1. product-list-con 내부에 product-card들이 할당되므로 productListContainer부터 생성
  // 2. makeDOMwithProperties util함수를 사용해 div 생성
  const productListContainer = makeDOMwithProperties('div', {
    className: 'product-list-con',
  });

  // 3. productInfoList로 들어온 배열을 forEach로 순회하여 productInfo를 하나씩 받아서
  // 그 요소에서 아래의 것들을 productInfo에서 다 받아와서
  // productListContainer에 getProductCard에 이러한 요소들을 넘겨주어 생성 된 ProductCard를 하나씩 appendChild로 할당
  /*  productInfoList.forEach((productInfo) => {
    const { id, imgSrc, name, discountPercent, price, originalPrice } = productInfo;
    productListContainer.appendChild(
      getProductCard({
        id,
        imgSrc,
        name,
        discountPercent,
        price,
        originalPrice,
      })
    );
  }) */
  //

  // productInfo로 받은 요소들을 그대로 getProductCard에 넘겨주기만 하면 되는데
  // 구조 분해 할당으로 빼줄 필요가 없다
  // 따라서 productInfo 자체를 하나씩 넘겨주는
  productInfoList.forEach((productInfo) => {
    productListContainer.appendChild(
      // 7-13 getProductCard에서도 removeCartCallback 넘겨보고
      // productCard 이동
      getProductCard(
        {
          ...productInfo, // spread 문법으로 객체의 프로퍼티 하나씩 가져와서 객체 형태로 뿌릴 수 있게
        },
        removeCartCallback
      )
    );
  });

  return productListContainer;
};

// getProductList로 들어온 productInfo들이 하나씩 조회되면서 이 info로 만든 productCard가
// productListContainer에 append 되게 된다
// productListContainer를 반환
// export 내보내기

{
  /* 
<div class="product-list-con">
  <div class="product-card"></div> 
*/
}
