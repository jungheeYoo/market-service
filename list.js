// 물품 목록을 모두 불러와서 페이지에 띄우기 -> productList.js getProductList 사용

import { getProductList } from './module/productList.js';
import { fetchSectionListData } from './module/fetch.js';

// fetch문 모듈로 만들기
// 만들고 가져오기
const sectionInfoList = await fetchSectionListData();

const productList = sectionInfoList.reduce(
  // newArray는 prev + curr.productList 두 가지를 합한 배열을 받고 싶다
  (prev, curr) => [...prev, ...curr.productList],
  []
);

/*  const a = [1,2,3]
 const newArr = [
  ...arr, 4
 ] */

const section = document.getElementsByTagName('section')[0];
const productListDOM = getProductList(productList);
section.appendChild(productListDOM);
