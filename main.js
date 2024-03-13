// 2. 모듈 productSection import 해옴
import { getProductSection } from './module/productSection.js';
import { fetchSectionListData } from './module/fetch.js';

const body = document.getElementsByTagName('body')[0];

// 6-1 네트워크 연결 요청
// fetch('url', 옵션) 함수 이용
// fetch 함수는 promise를 리턴한다. 리턴 된 promise를 받으려면 async와 await 구문 사용
// 6-2 response는 json()함수를 통해서 읽을 수 있다. 이 메소드를 사용할때도 await 문법 필요
// json()메소드의 리턴값으로 promise가 나오기 때문이다
// promise에서 data를 추출해서 보여줄 수 있게 await문법을 사용하고 data를 콘솔로 찍어봄
// 6-5 try절에 실행하고 싶은 코드를 넣고
try {
  // fetch 모듈 함수 만듦
  // const response = await fetch('./public/mock/sectionListData.json');
  // const data = await response.json();
  // console.log(data);
  /* 
response는 이렇게
{
  status:
  ok:
  body: ...ReadableStream
  바디는 ReadableStream로 되어 있어서 직접 읽을수는 없고 json()함수를 통해서 읽을 수 있다
} */
  // 6-3 이렇게 브라우저에서 sectionInfoList를 data 변수로 받는 것을 확인했고 이 데이터 변수 내부에
  // sectionInforList의 값을 데이터 안에 있는 sectionInforList 필드로 받는다
  // 6-4 sectionInforList를 사용해서 document에 붙이기 전에 fetch함수에 에러가 날 수 있으므로 에러 핸들링 함
  // fetch 모듈 함수 만듦
  // const sectionInfoList = data.sectionInfoList;
  const sectionInfoList = await fetchSectionListData();
  // 6-6 만약 에러가 난다면 아래처럼 대응해주세요

  // 6-7 sectionInfoList가 구현된 형태를 살펴보면 섹션이 배열의 형태로 들어가 있다
  // 따라서 배열을 하나씩 순회하는 forEach()함수 사용해서 sectionInfo를 하나씩 받아와서
  // getProductSection에 sectionInfo를 넘겨서 productSectionDOM를 받아본다
  // 6-8 productSectionDOM 만들어졌으면 document 바디에 append 해준다
  // 6-7-1 getProductSection 함수를 살펴보면 sectionName, productInfoList 따로 넘기도록 되어있다
  // JSON 파일에 sectionTitle과 productList를 가져온다
  // 코드가 너무 길어지니 구조 분해 할당으로 넘겨준다
  sectionInfoList.forEach((sectionInfo) => {
    console.log(sectionInfo);
    const { sectionTitle, productList } = sectionInfo;
    /* 
    const productSectionDOM = getProductSection(
      sectionInfo.sectionTitle,
      sectionInfo.productList
    ); */
    const productSectionDOM = getProductSection(sectionTitle, productList);
    body.appendChild(productSectionDOM);
  });
} catch (error) {
  console.log(error); // 에러 로긴이 남는 것만 작성
}
//document.body.appendChild(productSection);

/* ----------------------------------------------------- */

// // 1. getProductSection 가져 옴
// // 3. 섹션의 제목으로 '인기 상품' 으로 넘긴 다음
// // 4. productInfoList는 이전에 넣었던 것과 마찬가지로 넣어줌
// const productSection = getProductSection('인기 상품', [
//   {
//     id: 4,
//     imgSrc: './public/assets/삼겹살.jpg',
//     name: '구이용 삼겹살 600g',
//     discountPercent: 5,
//     price: 14820,
//     originalPrice: 15600,
//   },
//   {
//     id: 5,
//     imgSrc: './public/assets/머핀.jpg',
//     name: '[홍대 W마켓] 컵케익 (2입)',
//     discountPercent: 20,
//     price: 4800,
//     originalPrice: 6000,
//   },
//   {
//     id: 6,
//     imgSrc: './public/assets/원두.jpg',
//     name: '[카페 W] 디카페인 원두 1kg',
//     discountPercent: 15,
//     price: 7140,
//     originalPrice: 8400,
//   },
// ]);

// // 5. productSection을 body에 append 해줌
// // index.html 보면 body 태그의 마지막 요소로 들어가 있다
// document.body.appendChild(productSection);

/* ----------------------------------------------------- */

// // 1. productCard
// // main.js 파일은 index.html 파일에 연결되어 있음
// import { getProductCard } from './module/productCard.js';

// // productCard 함수 생성
// // 안에 들어가는 데이터는 기존에 구성해뒀던 데이터를 가져옴
// const productCard = getProductCard({
//   id: 4,
//   imgSrc: './public/assets/삼겹살.jpg',
//   name: '구이용 삼겹살 600g',
//   discountPercent: 5,
//   price: 14820,
//   originalPrice: 15600,
// });

// // index.html 보면 body 태그의 마지막 요소로 들어가 있다
// document.body.appendChild(productCard);

/* ----------------------------------------------------- */

// // 2. productList
// // productList() 함수를 import해와서 사용
// import { getproductList } from './module/productList.js';

// // 여기에는 [] 배열이 들어오게 되고 productInfoList 들어가게 됨
// // 이 내부에 세개의 productCard의 info가 들어가게 되고 세 가지의  productCard가 생성된 다음
// // product-list-con 컨테이너에 삽입되어 그 list 컨테이너가 반환될것이다
// const productList = getproductList([
//   {
//     id: 4,
//     imgSrc: './public/assets/삼겹살.jpg',
//     name: '구이용 삼겹살 600g',
//     discountPercent: 5,
//     price: 14820,
//     originalPrice: 15600,
//   },
//   {
//     id: 5,
//     imgSrc: './public/assets/머핀.jpg',
//     name: '[홍대 W마켓] 컵케익 (2입)',
//     discountPercent: 20,
//     price: 4800,
//     originalPrice: 6000,
//   },
//   {
//     id: 6,
//     imgSrc: './public/assets/원두.jpg',
//     name: '[카페 W] 디카페인 원두 1kg',
//     discountPercent: 15,
//     price: 7140,
//     originalPrice: 8400,
//   },
// ]);

// // index.html 보면 body 태그의 마지막 요소로 들어가 있다
// document.body.appendChild(productList);
