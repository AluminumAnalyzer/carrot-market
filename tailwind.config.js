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
