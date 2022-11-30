# Response Website Designment(반응형 웹사이트 디자인)

기존의 웹사이트 다자인은 데스크탑부분을 적용하고 추가적으로 모바일에 해당하는 부분을 적용합니다.
하지만 모바일 기기의 사용이 많은 현재 모바일 웹 디자인의 중요성은 오히려 데스크탑부분을 능가하는 시점입니다.

tailwind는 모바일을 먼저 디자인하고 추가적으로 데스크탑부분을 적용하는 부분으로 작용하기에 현재 트렌드에 충실합니다.

디자인에 맞춰서 사이즈에 데스크탑부분을 수정하는 법을 배우게 됩니다.

- [ ] Response -[ ] sm -[ ] md -[ ] lg -[ ] xl -[ ] 2xl -[ ] portrait -[ ] landscape -[ ] Dark Mode

sm, md , lg, xl, 2xl 순으로 사이즈가 가로 사이즈가 증가하는 순으로 적용됩니다.

```
  sm 640px @media (min-width: 640px) { ... }
  md 768px @media (min-width: 768px) { ... }
  lg 1024px @media (min-width: 1024px) { ... }
  xl 1280px @media (min-width: 1280px) { ... }
  2xl 1536px @media (min-width: 1536px) { ... }
```

portrait 및 landscape 수정자를 사용하여 뷰포트가 특정 방향에 있을 때 조건부로 스타일을 추가합니다.

```
div class="portrait:hidden"
div class="landscape:hidden"
```

https://tailwindcss.com/docs/hover-focus-and-other-states#viewport-orientation
