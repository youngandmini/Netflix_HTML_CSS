# Netflix UI를 HTML / CSS / JS 를 이용하여 만들어보기

## 초기 목표로 한 이미지
![예시](https://github.com/youngandmini/Netflix_html_css/assets/80088671/99fc599a-5cef-4ee4-b323-af8178fc82d1)

## 내가 만든 페이지
![결과](https://github.com/youngandmini/Netflix_html_css/assets/80088671/63fea5b0-e3ed-48a9-a712-c5ca3f4cbec0)

## 사용한 방법들
### 1. 헤더
넷플릭스 로고가 들어갈 left section과 사용자 아이콘이 들어갈 right section을 분리하였고, display: flex; justify-content: space-between; 등의 옵션을 이용해 원하는 위치에 자리를 잡을 수 있도록 하였음.
추가적으로, 사용자 아이콘에 마우스를 올리면 아래 사진과 같이 사용자 변경이라는 툴팁이 표현될 수 있도록 하였음.

![사용자_변경](https://github.com/youngandmini/Netflix_html_css/assets/80088671/2fb136b3-5314-4130-a41e-4f62f2ce2014)


### 2. 상단 포스터
![상단_포스터](https://github.com/youngandmini/Netflix_html_css/assets/80088671/234cf6b8-c165-47e4-87ab-87b6a1a3d223)
위 그림과 같이 페이지 상단에 대표 컨텐츠가 큰 포스터로 표현될 수 있도록 하였음. 이 때, 헤더와 겹쳐질 수 있도록 헤더와 상단 포스터 둘 다 absulute position을 적용하였음.

한편, 상단 포스터의 width는 position: absolute; top: 0; left: 0; right: 0;를 통해 화면 크기가 바뀌어도 화면에 꽉 차도록 유지할 수 있었지만, height는 고정된 길이를 사용하면 width와 비율이 맞지 않는 문제가 있었음. 그래서 aspect-ratio: 2500 / 1051; 옵션을 사용하여 width에 따라 height가 결정되도록 해서, 화면 크기 변경에 반응하여 상단 포스터도 크기가 잘 조정될 수 있도록 하였음.

상단 포스터 내부의 제목 / 버튼 / 작품설명 등의 컨텐츠는 flex-direction: column;과 flex-grow: x; 옵션을 이용해 자기 위치를 유지하도록 하였음.

### 3. 포스터 컨텐츠 그리드
