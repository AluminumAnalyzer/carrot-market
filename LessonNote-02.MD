# 프로젝트 설정 2

## tailwind 설정
## tainwind 설치
` yarn add tailwindcss postcss autoprefixer
` yarn tailwindcss init -p

## 이작업후 
## 다음 2개의 파일이 생성됩니다.
## Created Tailwind CSS config file: tailwind.config.js
## Created PostCSS config file: postcss.config.js

## postcss.config.js 파일은 터치할 필요없습니다.
## tailwind.config.js 을 커스터마이징 할 예정

# styles/global.css에서
# 기존 내용을 삭제한뒤에 다음 내용을 기재합니다.
` @tailwind base;
` @tailwind components;
` @tailwind utilities;


