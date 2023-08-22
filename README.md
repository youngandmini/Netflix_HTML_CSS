# Netflix UI를 HTML / CSS / JS 를 이용하여 만들어보기

## 초기 목표로 한 이미지
![예시](https://github.com/youngandmini/Netflix_html_css/assets/80088671/99fc599a-5cef-4ee4-b323-af8178fc82d1)

## 내가 만든 페이지 이미지
![결과](https://github.com/youngandmini/Netflix_html_css/assets/80088671/63fea5b0-e3ed-48a9-a712-c5ca3f4cbec0)

## 사용한 방법들
### 1. 헤더
넷플릭스 로고가 들어갈 left section과 사용자 아이콘이 들어갈 right section을 분리하였고, display: flex; justify-content: space-between; 등의 옵션을 이용해 원하는 위치에 자리를 잡을 수 있도록 하였다.
추가적으로, 사용자 아이콘에 마우스를 올리면 아래 사진과 같이 사용자 변경이라는 툴팁이 표현될 수 있도록 하였다.

![사용자_변경](https://github.com/youngandmini/Netflix_html_css/assets/80088671/2fb136b3-5314-4130-a41e-4f62f2ce2014)


### 2. 상단 포스터
![상단_포스터](https://github.com/youngandmini/Netflix_html_css/assets/80088671/234cf6b8-c165-47e4-87ab-87b6a1a3d223)
위 그림과 같이 페이지 상단에 대표 컨텐츠가 큰 포스터로 표현될 수 있도록 하였다. 이 때, 헤더와 겹쳐질 수 있도록 헤더와 상단 포스터 둘 다 absulute position을 적용하였다.

한편, 상단 포스터의 width는 position: absolute; top: 0; left: 0; right: 0;를 통해 화면 크기가 바뀌어도 화면에 꽉 차도록 유지할 수 있었지만, height는 고정된 길이를 사용하면 width와 비율이 맞지 않는 문제가 있었다. 그래서 aspect-ratio: 2500 / 1051; 옵션을 사용하여 width에 따라 height가 결정되도록 해서, 화면 크기 변경에 반응하여 상단 포스터도 크기가 잘 조정될 수 있도록 하였다.

상단 포스터 내부의 제목 / 버튼 / 작품설명 등의 컨텐츠는 flex-direction: column;과 flex-grow: x; 옵션을 이용해 자기 위치를 유지하도록 하였다.


### 3. 포스터 그리드
![포스터_그리드](https://github.com/youngandmini/Netflix_html_css/assets/80088671/3c3383fe-7e6e-4621-9df2-f8bf75c046ad)
위 그림과 같이 각 포스터들이 display: flex; 방식으로 하나씩 위치할 수 있도록 하였다.

한편, 상단 포스터의 크기 변경에 따라, 포스터 그리드가 상단포스터와 겹치거나 멀어지는 문제가 있었다. 이를 해결하기 위해 포스터 그리드의 위치도 absulute position을 적용하고, JS를 이용해 적절한 높이로 top: k px;를 변경하도록 하였다.

포스터 한 줄을 표현할 때도 크기에 대한 문제가 있었다. 실제 넷플릭스와 유사한 UI를 만들기 위해 overflow-x: hidden; overflow-y: hidden;를 이용해 너비를 빠져나가지 않도록 조정하였다. 대신 JS를 이용해 스크롤 버튼을 만들어, 버튼을 누르면 해당 방향으로 스크롤이 움직이도록 구현하였다.

전체화면이거나 스크롤이 끝에 다다랐을 때에는 스크롤 버튼을 숨길 필요가 있었다. 다음과 같은 상황에는 스크롤 버튼을 보여주거나 숨겨야한다.
1. 페이지 로드
2. 페이지 크기 변경
3. 스크롤 이동
역시 JS를 이용해서 위 3가지 상황에 대해서 스크롤 버튼의 visibility 옵션을 hidden/visible로 동적으로 변경하도록 하였다.

각 포스터 이미지들은 hover{ transform: scale(1.2); } 옵션을 이용해 포스터의 크기가 커질 수 있도록 하였다.
