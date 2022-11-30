#Tailwind Practices

Plugins
재사용 가능한 타사 플러그인으로 Tailwind 플러그인을 사용하면 CSS 대신 JavaScript를 사용하여 사용자의 스타일시트에 삽입할 Tailwind에 대한 새 스타일을 등록할 수 있습니다.
https://tailwindcss.com/docs/plugins

@tailwindcss/forms
(form요소에 다양한 기본 스타일을 추가해줍니다.)
form 요소를 유틸리티로 쉽게 재정의할 수 있도록 하는 form 스타일에 대한 기본 reset을 제공하는 플러그인입니다. @tailwindcss/forms 플러그인은 유틸리티 클래스를 사용하여 form 요소의 스타일을 쉽게 지정할 수 있도록 하는 독창적인 form reset layer를 추가합니다.
npm install -D @tailwindcss/forms

@tailwindcss/forms 플러그인 설치 후, tailwind.config.js에 아래와 같이 plugins에 추가

```
// tailwind.config.js
module.exports = {
theme: {
// ...
},
plugins: [
require('@tailwindcss/forms'),
// ...
],
}
```

https://tailwindcss.com/docs/plugins#forms
https://github.com/tailwindlabs/tailwindcss-forms

user-select
CSS user-select 속성은 사용자가 텍스트를 선택할 수 있는지 지정합니다.
ex) user-select: none;
https://developer.mozilla.org/ko/docs/Web/CSS/user-select
