import { appendChildrenList, makeDOMwithProperties } from '../utils/dom.js';
import { getCartToggleButton } from './cartToggleButton.js';

// getProductCard 는 호출시에 ProductCard라는 DOM을 생성해서 내보내주는 함수
export const getProductCard = (productInfo) => {
  const { imgSrc, name, discountPercent, price, originalPrice } = productInfo;
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

  const cartToggleBtn = getCartToggleButton(productInfo); // cartToggleButton.js

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
    innerHTML: `${price.toLocaleString()}원`, // 2000 -> 2,000
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
