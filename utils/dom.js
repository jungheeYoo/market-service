export const makeDOMwithProperties = (domType, propertyMap) => {
  // domType : div, a, li...
  // propertyMap : {'className' : 'product-card', 'alt' : ...}
  // Object.keys(propertyMap) -> ['className', 'alt]

  const dom = document.createElement(domType);

  Object.keys(propertyMap).forEach((key) => {
    dom[key] = propertyMap[key];
  });

  return dom;
};

// Object.keys()
// 오브젝트 객체 안에 있는 keys라는 메서드
// 오브젝트 객체에 키만 모아서 배열로 넘겨주는 메서드

export const appendChildrenList = (target, chidrenList) => {
  if (!Array.isArray(chidrenList)) return; // early return

  chidrenList.forEach((children) => {
    target.appendChild(children);
  });
};
