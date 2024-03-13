import { CART_COOKIE_KEY } from './constants/cart.js';
import { getCartInfo } from './module/cartToggleButton.js';
import { setPayInfo } from './module/payModule.js';
import { getProductList } from './module/productList.js';
import { makeDOMwithProperties } from './utils/dom.js';
// 부모는 section tag
// 이 뒤에 있는 요소는 id : cart-pay-container
// 장바구니 내부에 있는 물품 -> product-list-con 으로 만들기

// 7-1
// product-list-con는 이미 구현해놓았음
// productSection은 섹션 타이틀과, 프로덕트 리스트가 함께 들어가있으므로
// productList 함수를 받아오면 됨
// productList로 가보면 getProductList함수를 사용하고 productInfoList를 넘겨주면 됨

// 1. 장바구니에 있는 물품 정보 가져오기
// 2. 물품 정보를 productList와 연결
// 3. section 아래 cart-pay-container 앞에 삽입하기

// 7-5 sectionDOM은 태그네임을 받아오는 메서드를 사용해서 section 태그의 첫 번째를 받아옴
const sectionDOM = document.getElementsByTagName('section')[0];
// 7-6 cart-pay-container 돔을 받아옴
const cartPayContainerDOM = document.getElementById('cart-pay-container');

// 7-2 장바구니에 있는 물품 정보 가져오기
const cartInfo = getCartInfo();

// 7-3 만약에 cartInfo 길이가 배열의 길이가 1보다 작다면 장바구니에 물품 정보가 없는 것이다.
// 그래서 물품 정보가 없다는 페이지도 띄워줘야 한다
// 7-4 cartInfo의 값을 getProductList에 넘겨서 productListDOM 값으로 그 반환값을 받는다
// productListDOM 값으로 getProductList 호출해서 productList을 넘겨야 하는데
// 이 배열은 이미 구성되어 있으므로 cartInfo를 그대로 넘기고 그에 따른 dom으로 구성 된 반환된 값을
// 섹션 아래에 삽입

// 7-10 장바구니에 상품을 삭제하면 바로 삭제하기
// reload() 새로고침 함수 사용 location.reload()함수 사용해서 페이지를 새로고침 해줌
// reloadPage메서드를 실행하려면 장바구니버튼에서 해당 메서드를 알고 있어야함
// 따라서 이 메서드를 export 해줌 장바구니버튼에서 가져와도 되고, \
// 이 메서드는 간단하기 때문에 장바구니버튼에 넣어줘도 되지만
// export하지 않고 콜백함수로 인자로 넘겨 보겠음
// 7-11 getProductList를 수행할 때 인자로 reloadPage 넘기면
// 7-12 productList 이동
export const reloadPage = () => location.reload();

if (cartInfo.length < 1) {
  // 7-8 장바구니에 상품이 없다는 DOM 생성 미리 구현한 makeDOMwithProperties 이 유틸 함수 사용
  const noticeDOM = makeDOMwithProperties('div', {
    innerHTML: '장바구니에 상품이 없습니다',
    className: 'product-list-con',
  });
  // 7-9 noticeDOM도 cartPayContainerDOM 이전에 삽입되어야 하므로 noticeDOM도 삽입해줌
  sectionDOM.insertBefore(noticeDOM, cartPayContainerDOM);
} else {
  const productListDOM = getProductList(cartInfo, reloadPage);
  // 7-7 productListDOM은 sectionDOM 아래에 cartPayContainerDOM 앞에 삽입된다
  sectionDOM.insertBefore(productListDOM, cartPayContainerDOM);
  // A.insertBefore(B, C);
  // B가 A아래의 C 앞에 삽입되는 메서드
}

/* ----------------------------------- */
const cartAllDeleteButtonDOM = document.getElementById('remove-all-button');
cartAllDeleteButtonDOM.onclick = () => {
  // localStorage에 있는 장바구니 물품 목록 정보가 전부 삭제
  localStorage.removeItem(CART_COOKIE_KEY); // cartInfo라는 키를 가진 키-값 쌍이 삭제
  // localStorage.clear(); // localStorage의 모든 키-값 쌍이 삭제
  location.reload(); // 새로고침
};

setPayInfo();
