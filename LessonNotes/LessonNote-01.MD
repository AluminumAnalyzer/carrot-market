
# 프로젝트 설정 1
<ol> 
<li>프로젝트 생성</li>

```
    yarn create next-app --typescript
 ```

프로젝트명을 일단 carrot-market으로 설정
여기에서는 **typescript**를 사용할 예정입니다.

<li> 프로젝트 안정화 설정</li>

```
    rm -rf .git (만약 git 이 생성되어있는 경우에..)
    git init 
```

<li>git 설정</li>
git 에서 프로젝트를 생성합니다.
carrot-market으로 생성후 description은 적당히

<li>프로젝트 마무리 설정</li>
여기에서는 프로젝트에서
styles 폴더에서 home.modules.css를 삭제
pages플더엥서는 _app.tsx를 삭제
pages/index.tsx를 일단

```
    import type { NextPage } from 'next';

    const Home: NextPage = () => {
    return null;
    }

    export default Home;
```

으로 설정해줍니다.
</ol>
