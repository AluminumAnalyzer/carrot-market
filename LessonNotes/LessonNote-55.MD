#Tailwind Practices

프론트 페이지 제작을 해보겠습니다.
이부분에서는 업로드 페이지를 수정 하게습니다.

textarea의 사이즈를 고정시키고 싶으신 분들은 textarea에 resize-none을 추가해주시면 됩니다.
row={10} 세로 사이즈 조정

label

HTML label 요소는 사용자 인터페이스 항목의 설명을 나타냅니다.
label 을 input 요소와 연결하면 몇 가지 이점이 있습니다.

1. label 텍스트는 텍스트 입력과 시각적으로 관련이 있을뿐만 아니라 프로그래밍적으로도 관련이 있습니다. 예를 들어, 화면리더기(screenreader) 는 폼 입력(form input)에서 label 을 읽어서 보조기술(assistive technology) 사용자가 입력해야하는 텍스트가 무엇인지 더 쉽게 이해할 수 있게 합니다.

2. 관련 label 을 클릭해서 input 자체에 초점을 맞추거나 활성화를 시킬 수 있습니다. (활성되어서)늘어난 누를 수 있는 영역(hit area)은 터치스크린 사용자를 포함해 입력하려하는 모든 사람에게 이점을 줍니다.

label 을 input 요소와 연관시키려면, input 에 id 속성을 넣어야합니다. 그런 다음 label 에 id 와 같은 값의 for 속성을 넣어야합니다.

```
< label for="username">Click me< /label>
< input type="text" id="username">
```

https://developer.mozilla.org/ko/docs/Web/HTML/Element/label

원화 기호
₩
