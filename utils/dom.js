// makeDOMwithProperties으로 만들어서 dom노드를 프로퍼티를 받아서 함께 만든다라는 뜻
// 우선 domType을 받고 프로퍼티 리스트를 받을텐데 propertyMap라고 만듦
// domType : div, a, li...등이 들어감
// propertyMap은 객체가 넘겨질 것을 가정함
// propertyMap : {'className' : 'product-card', 'alt' : ...}
// document.createElement()로 domType을 넘겨서 dom이라는 변수에 만들어주고
// Object.keys() 함수를 사용
// 오브젝트 객체 안에 있는 keys라는 메서드
// 오브젝트 객체에 키만 모아서 배열로 넘겨주는 메서드
// propertyMap의 객체를 Object.keys 메서드로 propertyMap을 넘겨주면
// 이 반환값은 이 key 값을 배열로 넘겨주게 됨
// Object.keys(propertyMap) -> ['className', 'alt']
// Object.keys()를 사용해서 propertyMap을 받은 다음에 이 key값들을 forEach()로 하나씩 돌면서
// 배열의 value를 받고 배열이 key니까 그 key값들을 하나씩 받으면서 순회하는 메서드
// 따라서 key값들을 하나씩 받으면서 dom의 key값으로 propertyMap으로 들어온 value를 넣어줌
// export로 내보내기

export const makeDOMwithProperties = (domType, propertyMap) => {
  const dom = document.createElement(domType);

  Object.keys(propertyMap).forEach((key) => {
    dom[key] = propertyMap[key]; // dom.className = propertyMap['className']
  });

  return dom;
};

/* --------------------------------------------------------------- */
// appendChildrenList() 함수 만듦
// target 노드 : child를 넣을 부모 노드, chidrenList : 들어갈 자식 노드들
// 이 chidrenList가 배열로 들어올지 아닐지 모르기 때문에
// early return (배열이라면...아니라면 이런식으로 쓰면 길어지기 때문에 아닌거에서 바로 리턴)
// Array에 있는 isArray()함수에 chidrenList를 넘겨서 값이 배열이 아니라면 false라면
// false 즉, 배열이 아니라면 ! 부정연산자를 사용해 이것이 true라면 바로 return 하는 함수를 만듦
// chidrenList forEach()를 이용해서 순회 이 내부에는 children 노드들이 들어감
// children 노드는 target의 appendChild로 들어가게 됨
// 즉, target으로 전달 된 노드에 child를 붙여주는데
// chidrenList로 전달 된 배열에 들어있는 chidren을 하나씩 붙여주는 함수
// export로 내보내기

export const appendChildrenList = (target, chidrenList) => {
  if (!Array.isArray(chidrenList)) return; // early return

  chidrenList.forEach((children) => {
    target.appendChild(children);
  });
};
