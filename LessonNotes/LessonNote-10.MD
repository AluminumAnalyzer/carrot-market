# Modifiers for Form

## 테스트용으로 Component를 제작할 예정입니다.

이 작업을 통해 Tailwind의 기능을 숙지하게 될 예정입니다

Modifiers for Form을 배우기전에 먼저 Group modifier를 배우도록 하겠습니다.

Group modifier는 하위 요소의 CSS 속성을 변경하는데 사용됩니다.
일반적으로 특정 요소에 마우스 커서를 올리거나 특정 트리거가 되면 다른 쪽의
CSS가 변경이 이루어 지게 되면
.group:hover .avatar:hover와 같이 CSS를 작성하게 됩니다.

tailwind에서는 class 기반으로 작성하게 됩니다.

<ol>

---

<li>tailwind에게 무엇이 target하려는 group인지 말해줘야 합니다.</li>

---

<li>그 그룹에 마우스를 hover 했을 경우 변화할 것을 정해줘야 합니다. </li>

</ol>

담이 경우 group 의 변경 요소는 하위 요소에 해당하는 요소에 변경을 가할수 있습니다.

focus-within:bg-blue-100 이런식으로
required:border-2
invalid:bg-red-500
placeholder-shown:bg-red-500 이런식으로

disabled 됬을 경우
disabled:opacity-0 로 하면 완전히 안보이게 하지만 위치와 레이아웃은 그대로 유지할수 있습니다.
valid:bg-teal-500

다음은 Peer는 형제상태를 기반으로 CSS 스타일을 지정할수 있습니다.
Peert modifier를 사용해보겠습니다.

```
<form className='flex flex-col space-y-2 p-5'>
  <input type='text' required placeholder='Username'
    className='border p-1 border-gray-400 rounded-lg/>
  <span>This is invalid value</span>
  <input type='submit' value='login' className=''/>
</form>
```

위의 코드에서 잘못된 값이 Username을 받기 위한 input에 입력된 경우 아래 span을 보여주고 올바른 값의 입력시 보이지 않게 할경우 다음과 같이 할수 있습니다.

<ol>
  <li>input의 className에 peer를 추가해 줍니다.</li>
  <li>span의 className에 peer-invalid:text-red-500
</ol>

추가로 잘 사용하지 않지만 유용한 html 태그도 존재합니다.

details로 2개의 파트가 있습니다.
summary 파트로 요약 내용 혹은 제목을 기재하는 부분입니다.

```
  <details>
    <summary>What is the name of the tiger</summary>
    <span>Serman</span>
  </details>

```

여기에 summary는 클릭하면 선택되는 부분이 생기는데.
`<summary className='select-none'>What is the name of the tiger</summary>
을 넣게 되면 선택되지 않고 클릭만 됩니다.
여기에 추가가적으로
cursor-pointer를 삽입하게 되면 더 완벽합니다.

`<span className='selection:bg-indigo-600>Serman</span>
으로 수정하게 되면 선택 색상이 변경됩니다.

`<details className='select-none open:text-white open:bg-indigo-400>
으로 변경하게 되면 detail을 클릭시 전체적으로 생상이 변경 됩니다.

```
  <ul className='list-decimal marker:text-teal-500`>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
```

다음으로 input 태그의 스타일링 하겠습니다.

```
  <input type='file' className='file:border-0 file:rounded-xl file:px-5  file:bg-purple-500 file:text-white'>
  </input>
```

다중 중첩을 배워 보도록 하겠습니다.

```
  <input type='file' className='file:cursor-pointer file:transition-colors file:border-0 file:rounded-xl file:px-5  file:bg-purple-500 file:text-white'>
  </input>
```

이와 같은 부분에서 다음부분이 해당합니다.

```
  <input type='file'
    className='
    file:cursor-pointer
    file:transition-colors
    file:border-0
    file:rounded-xl
    file:px-5
    file:bg-purple-500
    file:text-white
    file:hover:text-purple-400
    file:hover:bg-white
    file:hover:border-purple-400
    file:hover:border
    '>
  </input>
```

이렇게 다중으로 조건 중첩으로 사용 가능합니다.
추가로 멋진 부분이 있는데 이렇게 가능

`first-letter:text-xl

```
  <p className='first-letter:text-xl'>lorem ipsum</p>
```

이렇게 가능합니다.
