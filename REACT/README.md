# REACT study

> 리엑트 복습 repo

> 

#### 2019.12.28

- 기본 anaconda 환경 command

```bash
#설치 된 가상환경 리스트 확인
$ conda info --envs

#가상환경 생성
$ conda create -n yourname python=3.6
#가상환경 삭제
$ conda remove -n yourname --all

#패키지 리스트 확인
$ conda list
```

# npm 권한 설정
 npm config get prefix 로 위치 확인하고
 sudo chown -R $USER /usr/local 로 권한 변경

- JS review

#### 2019.12.29

- React props, states 사용법

> - props와 states의 차이
>
>  props 는 부모 컴포넌트가 자식 컴포넌트에게 주는 값입니다. 자식 컴포넌트에서는 props 를 받아오기만하고, 받아온 props 를 직접 수정 할 수 는 없습니다.
>
>  반면에 state 는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있습니다.









## Reference

- props와 states 차이점 : https://velopert.com/3629
