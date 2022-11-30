/** @type {import('tailwindcss').Config} */
module.exports = {
  // 어디에서 테일윈드를 사용할지 설정해줍니다
  content: [
    // 현재 프로젝트의 하부의 /page/하부폴더의 모든 파일중 jsx,js,ts,tsx 파일만 테일윈드를 사용할 것이라고 설정합니다.
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  // 다크 모드를 수동으로 사용할지 설정 합니다. 부모 className에 dark 를 설정하면 작동하는 모드
  // darkMode: 'class',
  // 다크 모드를 현재 디바이스의 설정을 가져와서 자동으로 설정합니다.
  darkMode: 'media',
  plugins: [require('@tailwindcss/forms')],
};
