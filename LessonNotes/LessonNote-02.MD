# 프로젝트 설정 2 - tailwind 설정

<ol>
<li>tainwind 설치</li>

```
    yarn add tailwindcss postcss autoprefixer
    yarn tailwindcss init -p
```

---
<li>tailwind 설정파일 설정</li>
이작업후 
다음 2개의 파일이 생성됩니다.

```
    Created Tailwind CSS config file: tailwind.config.js
    Created PostCSS config file: postcss.config.js
```

postcss.config.js 파일은 터치할 필요없습니다.
tailwind.config.js 을 커스터마이징 할 예정

---
<li>tailwind.config.js설정<li>

```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    // 어디에서 테일윈드를 사용할지 설정해줍니다
    content: [
        // 현재 프로젝트의 하부의 /page/하부폴더의 모든 파일중 jsx,js,ts,tsx 파일만 테일윈드를 사용할 것이라고 설정합니다.    
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
```

---
<li> 프로젝트 내부 tailwind 설정</li>
styles/global.css에서
기존 내용을 삭제한뒤에 다음 내용을 기재합니다.

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
</ol>



