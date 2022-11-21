# Test Drive Part. 01

## 테스트용으로 Component를 제작할 예정입니다.
이 작업을 통해 Tailwind의 기능을 숙지하게 될 예정입니다
<ol>

---
<li> <div></div>로 전체적인 레이아웃을 짭니다.</li>
여기에서는 4개의 <div></div>를 설정합니다.
다음과 같이요

```
    <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
```

<li>wrapper를 설정합니다. </li>

```
    <div className='bg-slate-400 py-10 px-5'>
        <div className='bg-white'></div>
        <div className='bg-white'></div>
        <div className='bg-white'></div>
        <div className='bg-white'></div>
    </div>
```

<li>내부 박스에 padding을 설정합니다</li>
 전체적으로 10rem(40px)정도를 설정합니다.

```
    <div className='bg-slate-400 py-10 px-5'>
        <div className='bg-white p-10'></div>
        <div className='bg-white p-10'></div>
        <div className='bg-white p-10'></div>
        <div className='bg-white p-10'></div>
    </div>
```

<li>내부 div에 rounded를 설정합니다.</li>
 전체적으로 10rem(40px)정도를 설정합니다.

```
    <div className='bg-slate-400 py-10 px-5'>
        <div className='bg-white p-10 rounded-2xl'></div>
        <div className='bg-white p-10 rounded-2xl'></div>
        <div className='bg-white p-10 rounded-2xl'></div>
        <div className='bg-white p-10 rounded-2xl'></div>
    </div>
```


<li>내부 div에 margin을 설정합니다.</li>
 margin-bottom으로 하단에 여백을 설정합니다.

```
    <div className='bg-slate-400 py-10 px-5'>
        <div className='bg-white p-10 rounded-2xl mb-10'></div>
        <div className='bg-white p-10 rounded-2xl mb-10'></div>
        <div className='bg-white p-10 rounded-2xl mb-10'></div>
        <div className='bg-white p-10 rounded-2xl mb-10'></div>
    </div>
```

<li>container에서의 여백 설정</li>
 위의 방법 말고 container에서 설정해줄수 있습니다.

```
    <div className='bg-slate-400 py-10 px-5 flex flex-col space-y-5'>
        <div className='bg-white p-10 rounded-2xl'></div>
        <div className='bg-white p-10 rounded-2xl'></div>
        <div className='bg-white p-10 rounded-2xl'></div>
        <div className='bg-white p-10 rounded-2xl'></div>
    </div>
```

<li>shadow를 설정해 줍니다.</li>

```
    <div className='bg-slate-400 py-10 px-5 flex flex-col space-y-5'>
        <div className='bg-white p-10 rounded-2xl shadow-2xl'></div>
        <div className='bg-white p-10 rounded-2xl shadow-2xl'></div>
        <div className='bg-white p-10 rounded-2xl shadow-2xl'></div>
        <div className='bg-white p-10 rounded-2xl shadow-2xl'></div>
    </div>
```
아이고 길다 강의 내용을 직접보고 정리를 추가적으로 하고
나중에 정리 하는 것으로 하겠습니다.
최종 결과물은 다음과 같습니다.

<li>최종 결과물</li>
```
    <div className='bg-slate-400 py-10 px-5 flex flex-col space-y-5'>
        <div className='bg-white p-6 rounded-3xl shadow-2xl'>
            <span className='font-semibold text-3xl'>Select Item</span>
            <div className='flex justify-between mb-2'>
                <span className='text-gray-500' >Grey Chair</span>
                <span className='font-semibold'>$19</span>
            </div>
            <div className='flex justify-between'>
                <span className='text-gray-500' >Grey Chair</span>
                <span className='font-semibold'>$19</span>
            </div>
            <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed'>
                <span>Total</span>
                <span className='font-semibold'>$38</span>
            </div>
            <div className='mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto'>
                CheckOut
            </div>
        </div>
        <div className='bg-white p-10 rounded-2xl shadow-2xl'></div>
        <div className='bg-white p-10 rounded-2xl shadow-2xl'></div>
        <div className='bg-white p-10 rounded-2xl shadow-2xl'></div>
    </div>
```


</ol>



---
<li> </li>

