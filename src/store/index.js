import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        title: "위기탈출 메타원",
        filepath: "metaone.png",
        description:
          "학교 안전 및 재난 교육을 메타버스 플랫폼에 적용하여 재난 상황 시 대피 요령을 학습하고, Unity를 활용한 시뮬레이션 미션 체험을 통해 학습한 내용을 플레이할 수 있습니다.",
        people: 3,
        duration: "2021.10.11 ~ 2021.11.19",
        role: " Backend - 쪽지 채팅 API 구현 (JPA 활용), 기능 수정\n          Frontend - 화면 구현 및 전체 디자인, WebGL Build, QA\n          CI/ CD - Ngnix와 Docker compose를 활용한 배포",
        github: "https://github.com/GyuYoungCho/MetaOne",
        stacks: "Java, C#, Spring boot, JPA, MySQL, Redis, Firebase, Vue.js, Unity, Photon, WebGL, Ngnix, Docker",
        stages: [
          {
            imgurl: "metaone/image0.gif",
            info: "교실에 들어가면 교육 영상 시청 가능 영상 시청 후 미션 가능.\n하이라이트된 오브젝트를 클릭함으로써 미션 수행 가능",
          },
          {
            imgurl: "metaone/image01.gif",
            info: "미션 시작 후 게임 실행 화면.\n왼쪽에 미션 리스트가 뜨고 남은 시간, 가이드 제공",
          },
          {
            imgurl: "metaone/image2.png",
            info: "교육 영상 이수나 미션시 교육 내역에 기록됨.\n미션을 통과하면 증명서 발급 가능",
          },
          {
            imgurl: "metaone/image3.png",
            info: "각 교육에 대한 랭킹 시스템 제공.\n맵 이내의 책 오브젝트 클릭시 방명록 작성 가능\n특정 페이지로 이동시 Unity Map을 왼쪽 위에 작게 두고 Back 버튼으로 활용",
          },
          {
            imgurl: "metaone/image5.png",
            info: "Firebase Realtime Database를 활용한 전체 채팅 시스템 제공.\n채팅방은 방마다 분리",
          },
          {
            imgurl: "metaone/image06.gif",
            info: "Firebase Cloud Messaging을 활용한 쪽지 기능 제공\n쪽지 메뉴를 통해 현재 온라인 유저, 받은 쪽지 내역과 특정 유저와의 1:1 쪽지 내역,\n쪽지 내용과 보내기 Form 제공",
          },
        ],
        gg: [
          "메타버스에 대해 잘 몰랐는데 프로젝트를 통해 확실히 알게 되었고\n      기업 면접에서 관련 질문에 잘 대답할 수 있었다.",
          "Figma를 통해 UX/UI를 잘 설계하여 화면 구현 과정에서 원활한 편이었다.",
          "SCSS를 모듈화하여 전체와 부분적으로 적용되는 요소를 잘 구분하여 화면에 적용시킬 수 있었다.",
          "Redis와 Firebase를 활용하여 Token 발급의 이해 및 채팅과 쪽지 기능을 구현할 수 있었다. ",
          "짧은 기간 동안 새로운 기술을 공부하고 적용하는 것에 대한 걱정이 약간 있었지만\n      팀원들이 잘해준 덕분에 우리 프로젝트에 잘 적용시킬 수 있었다.",
          "이전 프로젝트들 보다 여유 있게 마무리한 편이고 QA를 잘하여 가장 완성도 있는 프로젝트를 했다.",
        ],
        bb: [
          "몇몇 팀원의 취업으로 인하여 프로젝트 볼륨이 축소되었다.",
          "Vue에서 Unity 2020 버전의 WebGL 활용 사례가 많지 않아\n      Unity와 Frontend의 통신 과정을 설계하는 것이 어려웠다.",
          "개인적으로 Unity 공부를 좀 더 했다면 문제에 더 빨리 대응했을 것 같다.",
        ],
      },
      {
        id: 2,
        title: "BOOKS",
        subtitle: "(BOOK Search)",
        filepath: "books.png",
        description: "검색 기록, 리뷰, 관심 카테고리 등의 사용자 정보를 이용하여 맞춤 도서를 추천받을 수 있습니다.",
        people: 4,
        duration: "2021.08.30 ~ 2021.10.08",
        role: "팀장\n         Backend - 데이터 수집 및 가공 (Crawling, API), Book API 구현, 추천 Algorithm 설계 및 구현",
        github: "https://github.com/GyuYoungCho/BOOKS",
        stacks: "Java, Python, Django, Spring boot, JPA, MySQL, Vue.js, Docker, Jenkins",
        stages: [
          {
            imgurl: "books/main.gif",
            info: `첫 화면에는 API를 활용해 베스트셀러만 보여줌`,
          },
          {
            imgurl: "books/recommend.gif",
            info: "로그인 후 사용자에게 추천할 책 목록을 보여줌\n추천은 카테고리, 검색 기록, 책 리뷰 데이터를 가공 후 결합하여\nFactorization Machine의 Rank 예측 결과가 높은 순서대로 추천",
          },
          {
            imgurl: "books/search.gif",
            info: "검색 기능을 제공하고 검색 기록이 저장되어 다음 추천에 활용",
          },
          {
            imgurl: "books/image0.png",
            info: "나의 검색 기록 및 관심 카테고리 설정 화면",
          },
          {
            imgurl: "books/image1.png",
            info: "책 정보를 보여주고 판매 페이지로 이동하여 구매 가능",
          },
        ],
        gg: [
          "API와 UX/UI를 구체적으로 정의함으로써 이전 프로젝트에서 기획의 아쉬움을 해결했다.",
          "팀장을 처음 해봐서 걱정이었지만 전달할 것을 얘기하고 해야할 것을 정하는 과정을 통해 잘 해낸 것 같다.",
          "Backend 구현 시 MicroService 방식으로 개발",
          "추천 시스템에서 최근 활용되는 Factorization Machine을 공부하고 적용할 수 있었다.",
        ],
        bb: [
          "Django와 Spring 둘 다 배포하는 과정에서 잘 되지 않아서 아쉬웠다.",
          "팀장으로써 좀 더 적극적으로 팀원들을 이끌었다면 더 좋은 성과가 나왔을 것 같다.",
        ],
      },
      {
        id: 3,
        title: "OVL",
        subtitle: "(Our Vegan Life)",
        filepath: "ovl.png",
        description:
          "다른 사람들과 레시피를 공유하고 채식팟과 챌린지 기능을 통해서 사람들과 함께 하고 성취감 있게 만들어주는 비건 실천 장려 SNS입니다.",
        people: 5,
        duration: "2021.07.06. ~ 2021.08.20",
        role: "Backend - User 관리, Follow, 채식팟, 챌린지 API (JPA 활용), 챌린지 Scheduling\n           Frontend - 채식팟 화면 구현, Infinite Scroll, QA",
        github: "https://github.com/GyuYoungCho/OVL",
        stacks: "Java, Spring boot, JPA, MariaDB, Vue.js, Ngnix, Docker, Jenkins",
        stages: [
          {
            imgurl: "ovl/image0.png",
            info: `뉴스피드 화면 및 게시글 작성 화면\n팔로우한 사람들의 게시글이 보임`,
          },
          {
            imgurl: "ovl/image1.png",
            info: "레시피 등록 및 목록 화면\n과정 탭을 통해 사진마다 설명을 적을 수 있음.\n레시피 정렬 방식 및 검색 기능 제공",
          },
          {
            imgurl: "ovl/image2.png",
            info: "채식팟 등록 화면 및 목록 화면\n식당 검색, 지도 위치 표시, 채식팟 참여, 참여 중 및 참여 가능 목록,\n참여자 목록 및 취소,수정 기능 제공",
          },
          {
            imgurl: "ovl/image3.png",
            info: "챌린지 참여 기능\n챌린지 참여 후 Scheduling을 활용해 해당 날짜가 되면 자동으로 챌린지를 시작하게 함\n도장 및 progress bar로 달성 기록 확인",
          },
          {
            imgurl: "ovl/image4.png",
            info: "프로필 화면에서 프로필 수정, 팔로우 기능, 팔로워 & 팔로잉 목록\n랭킹, 신고 기능 및 해당 사용자의 게시글, 레시피, 챌린지 목록 보여줌",
          },
        ],

        gg: [
          "내가 비건이나 채식을 한다면 사용하고 싶을 정도의 다양한 기능과 컨텐츠가 있는 서비스를 만들었다.",
          "Backend에서 많은 기능을 JPA를 활용해 간편하게 구현하였고 Media 데이터를 다루는 법을 알게 되었다.",
          "많은 DB를 Join하고 활용해봄으로써 SQL 역량이 향상되었다.",
          "axios의 비동기 처리 방식을 잘 이해하고 적용할 수 있었다.",
          "협업 툴을 제대로 활용한 프로젝트이고 앞으로의 프로젝트에서도 잘 활용할 수 있을 것 같다.",
        ],
        bb: [
          "규모가 컸던 프로젝트만큼 QA를 많이 했어야 했는데 그러지 못했어서 아쉽다.",
          "기획 단계에서 목업 화면 구체화나 무한 스크롤 기능 등\n       생각하지 못한 부분이 있어서 중간에 부가 작업이 있었다.",
          "Vuetify 사용 시 Customzing이 잘 안되었고 화면 Design에 부족함을 깨달았다.",
          "무한 스크롤을 중간에 적용하는 과정 중 다른 사람이 짜놓은 코드에 영향을 줬음",
        ],
      },
      {
        id: 4,
        title: "CCTV 날씨 제공",
        filepath: "weather.png",
      },
      {
        id: 5,
        title: "영양 분석 시스템",
        filepath: "food.png",
      },
      {
        id: 6,
        title: "반도체 박막 두께 예측",
        filepath: "semiconductor.png",
      },
      {
        id: 7,
        title: "상품 추천 알고리즘",
        filepath: "product.png",
      },
    ],
    skills: [
      {
        img: "java.png",
        title: "Java",
      },
      {
        img: "python.png",
        title: "Python",
      },
      {
        img: "docker.png",
        title: "Docker",
      },
      {
        img: "spring.png",
        title: "Spring",
      },
      {
        img: "django.png",
        title: "Django",
      },
      {
        img: "flask.png",
        title: "Flask",
      },
      {
        img: "mysql.png",
        title: "MySQL",
      },
      {
        img: "hcjb.png",
        title: "Web",
      },
      {
        img: "vuejs.png",
        title: "Vuejs",
      },
      {
        img: "git.png",
        title: "Git",
      },
      {
        img: "jira.png",
        title: "Jira",
      },
    ],
  },
});
