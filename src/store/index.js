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
        role: [
          " Backend - Rest Api 작성, 쪽지 채팅 API 구현 (JPA 활용)",
          " Frontend - 화면 구현 및 전체 디자인, WebGL Build, QA",
          " CI/ CD - Ngnix와 Docker compose를 활용한 배포",
        ],
        github: "https://github.com/GyuYoungCho/MetaOne",
        stacks: "Java, C#, Spring boot, JPA, MySQL, Redis, Firebase, Vue.js, Unity, Photon, WebGL, Nginx, Docker",
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
        role: [" Backend - 데이터 수집 및 가공 (Crawling, API), Book API 구현, 추천 Algorithm 설계 및 구현"],
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
        role: [
          " Backend - User 관리, Follow, 채식팟, 챌린지 API (JPA 활용), 챌린지 Scheduling",
          " Frontend - 채식팟 화면 구현, Infinite Scroll, QA",
        ],
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
        description:
          "CCTV 영상 데이터를 학습 후 실시간 CCTV 영상을 가져와 현재 날씨 정보(날씨 상황, 강수량, 안개량) 및 교통 정보를 제공합니다.",
        people: 3,
        duration: "2020.09.03. ~ 2020.12.17",
        role: [
          " Backend - CCTV 영상 수집 , Data Binding, 학습 pipeline 설계,\n                       성능 분석, 기존 연구 논문 구현",
        ],
        github: "https://github.com/GyuYoungCho/Weather-Discrimination-Service-based-on-traffic-CCTV-Videos",
        stacks: "Python, Java, Django, Selenium, Scheduler, Tensorflow, Android, Firebase",
        stages: [
          {
            imgurl: "weather/image0.png",
            info: `기기 위치 사용자 권한허가를 받고 지역 설정 및 CCTV 위치를 선택 후 확인을 누르고 기다린다.`,
          },
          {
            imgurl: "weather/image1.png",
            info: "현재 CCTV 영상을 분석해 날씨를 보여준다.\n날씨는 맑음, 흐림(안개 농도 보여줌), 비(강수량 보여줌) 로 7단계로 구분하여 보여줌.",
          },
          {
            imgurl: "weather/image2.png",
            info: "도로 상황 제공 화면. 원활, 서행, 정체 상태 표시",
          },
          {
            imgurl: "weather/image3.png",
            info: "API를 활용해 선택한 CCTV의 실시간 영상을 보여줌.",
          },
        ],

        gg: [
          "Android 환경에서 모델이 효율적으로 작동되도록 model selection에 대해 많은 생각을 함.",
          "AI Innovation에서 배운 것이 많은 도움이 되었음.\n     Tensorflow 내장 함수를 통해 메모리를 줄이고 전이 학습을 통해 빠르게 여러 개의 모델을 학습할 수 있었다.",
          "비슷한 논문을 구현해 보면서 Vision 분야의 Image Processing 기법을 많이 알게 되었고\n     성능 비교와 우리 모델과 어떤 차이가 있는지 분석하는 것이 큰 의의가 있었다.",
          "추가로 글씨 Masking 작업을 통해 성능을 높일 수 있었다.",
        ],
        bb: [
          "모임이 주로 온라인으로 진행되어 소통 부분에 아쉬운 점이 있었다.",
          "현재 올린 모델의 결과가 나오는데 5~10초 정도 걸리는데 더 줄일 수 있는 방법을 고민해 보고 싶다.",
          "현재 수도권 데이터만 있는데 학습 환경이 더 잘 갖춰진다면 전국의 데이터를 모아 학습하여 전역에 적용될 수 있을 것 같다. ",
          "나중에 차량 블랙박스에 적용하거나 운전자에게 위험을 경고하고 \n     사고 위험이 적은 길로 안내하는 등의 방향으로 발전시킬 수 있을 것 같다.",
        ],
      },
      {
        id: 5,
        title: "영양 분석 시스템",
        filepath: "food.png",
        description:
          "사용자가 먹은 음식 사진을 찍으면 서비스가 음식을 보고 어떤 음식인지 인식하게 됩니다. 그 음식의 영양 성분 데이터를 활용해서 영양성분을 누적하여 영양성분 권장 섭취량과 비교하여 부족한 영양소를 포함한 음식을 추천해줍니다.",
        people: 5,
        duration: "2020.07.06. ~ 2020.09.18",
        role: [
          " Backend - Image crawling, Data labeling, Model 학습, 성능 분석",
          " Frontend - Model load, 추천 결과 보여주기",
        ],
        github: "https://github.com/GyuYoungCho/Personalized-Diet-Management-System",
        stacks: "Python, Selenium, SQLite3, PyTorch, Yolov3, Flask",
        stages: [
          {
            imgurl: "food/image0.png",
            info: `로그인 및 회원가입 화면. 성별, 나이, 운동량 설정을 통해 권장 섭취량이 결정된다.`,
          },
          {
            imgurl: "food/image1.png",
            info: "식단마다 사진을 업로드하여 기록한다.\nObject Detection을 활용해 사진 안의 모든 음식을 찾아 DB에 기록한다.",
          },
          {
            imgurl: "food/image2.png",
            info: "다음 식단의 메뉴를 추천하는 화면.\n기록된 식단의 영양소 분석을 통해 필요한 영양분이 포함된 음식을 추천해준다.",
          },
          {
            imgurl: "food/image3.png",
            info: "모델을 학습하면서 여러 가지 지표가 개선되는 것을 보여줌.\n사물의 위치를 잘 찾아 내는지인 IOU와 물체가 정확한지 알려주는 \nObjectness, f1 score 등을 적절히 조합해 손실 함수 및 성능을 측정.",
          },
        ],

        gg: [
          "현재 이슈 및 이슈를 해결할 서비스를 생각하여 문제 정의를 잘했다는 평을 받음",
          "Object Detection 모델을 써보고 Computer Vision 분야에 관심을 가지게 됨.",
          "팀원 대부분이 비전공이었지만 교육 내용을 바탕으로 프로젝트를 잘 완성시켰다.",
        ],
        bb: [
          "첫 프로젝트인 만큼 협업 과정에서 아쉬운 부분이 많았다.",
          "시간이 좀 더 있었다면 모델을 더 학습시켜 더 좋은 모델을 완성했을 것 같다.\n      학습 시간이 오래걸려 다음 프로젝트에서 이것을 고려해야 될 것 같다.",
          "페이지에서 데이터 흐름이 어떻게 되는지 이해가 부족하여 웹 관련 지식이 부족했다고 느낌",
        ],
      },
      {
        id: 6,
        title: "반도체 박막 두께 예측",
        filepath: "semiconductor.png",
        description:
          "사용자가 먹은 음식 사진을 찍으면 서비스가 음식을 보고 어떤 음식인지 인식하게 됩니다. 그 음식의 영양 성분 데이터를 활용해서 영양성분을 누적하여 영양성분 권장 섭취량과 비교하여 부족한 영양소를 포함한 음식을 추천해줍니다.",
        people: 5,
        duration: "2020.07.06. ~ 2020.09.18",
        role: [
          " Backend - Image crawling, Data labeling, Model 학습, 성능 분석",
          " Frontend - Model load, 추천 결과 보여주기",
        ],
        github: "https://github.com/GyuYoungCho/Personalized-Diet-Management-System",
        stacks: "Python, Selenium, SQLite3, PyTorch, Yolov3, Flask",
        stages: [
          {
            imgurl: "food/image0.png",
            info: `로그인 및 회원가입 화면. 성별, 나이, 운동량 설정을 통해 권장 섭취량이 결정된다.`,
          },
          {
            imgurl: "food/image1.png",
            info: "식단마다 사진을 업로드하여 기록한다.\nObject Detection을 활용해 사진 안의 모든 음식을 찾아 DB에 기록한다.",
          },
          {
            imgurl: "food/image2.png",
            info: "다음 식단의 메뉴를 추천하는 화면.\n기록된 식단의 영양소 분석을 통해 필요한 영양분이 포함된 음식을 추천해준다.",
          },
          {
            imgurl: "food/image3.png",
            info: "모델을 학습하면서 여러 가지 지표가 개선되는 것을 보여줌.\n사물의 위치를 잘 찾아 내는지인 IOU와 물체가 정확한지 알려주는 \nObjectness, f1 score 등을 적절히 조합해 손실 함수 및 성능을 측정.",
          },
        ],

        gg: [
          "현재 이슈 및 이슈를 해결할 서비스를 생각하여 문제 정의를 잘했다는 평을 받음",
          "Object Detection 모델을 써보고 Computer Vision 분야에 관심을 가지게 됨.",
          "팀원 대부분이 비전공이었지만 교육 내용을 바탕으로 프로젝트를 잘 완성시켰다.",
        ],
        bb: [
          "첫 프로젝트인 만큼 협업 과정에서 아쉬운 부분이 많았다.",
          "시간이 좀 더 있었다면 모델을 더 학습시켜 더 좋은 모델을 완성했을 것 같다.\n      학습 시간이 오래걸려 다음 프로젝트에서 이것을 고려해야 될 것 같다.",
          "페이지에서 데이터 흐름이 어떻게 되는지 이해가 부족하여 웹 관련 지식이 부족했다고 느낌",
        ],
      },
      {
        id: 7,
        title: "상품 추천 알고리즘",
        filepath: "product.png",
        description:
          "성별, 나이에 따른 검색어나 구매 목록 등의 다양한 데이터를 기반으로 식별 정보가 없는 고객에게 상품을 추천하는 공모전 참여",
        people: 3,
        duration: "2019.11.27. ~ 2020.01.06",
        role: [" 데이터 분석 - 데이터 결측치 및 이상치 처리, 결합, 가공, 상품 추천 알고리즘 설계 "],
        github: "https://github.com/GyuYoungCho/Lpoint-Competition",
        stacks: "Python, NLP(WordVector, WordCloud), Matplotlib",
        stages: [
          {
            imgurl: "food/image0.png",
            info: `로그인 및 회원가입 화면. 성별, 나이, 운동량 설정을 통해 권장 섭취량이 결정된다.`,
          },
          {
            imgurl: "food/image1.png",
            info: "식단마다 사진을 업로드하여 기록한다.\nObject Detection을 활용해 사진 안의 모든 음식을 찾아 DB에 기록한다.",
          },
          {
            imgurl: "food/image2.png",
            info: "다음 식단의 메뉴를 추천하는 화면.\n기록된 식단의 영양소 분석을 통해 필요한 영양분이 포함된 음식을 추천해준다.",
          },
          {
            imgurl: "food/image3.png",
            info: "모델을 학습하면서 여러 가지 지표가 개선되는 것을 보여줌.\n사물의 위치를 잘 찾아 내는지인 IOU와 물체가 정확한지 알려주는 \nObjectness, f1 score 등을 적절히 조합해 손실 함수 및 성능을 측정.",
          },
        ],

        gg: [
          "현재 이슈 및 이슈를 해결할 서비스를 생각하여 문제 정의를 잘했다는 평을 받음",
          "Object Detection 모델을 써보고 Computer Vision 분야에 관심을 가지게 됨.",
          "팀원 대부분이 비전공이었지만 교육 내용을 바탕으로 프로젝트를 잘 완성시켰다.",
        ],
        bb: [
          "첫 프로젝트인 만큼 협업 과정에서 아쉬운 부분이 많았다.",
          "시간이 좀 더 있었다면 모델을 더 학습시켜 더 좋은 모델을 완성했을 것 같다.\n      학습 시간이 오래걸려 다음 프로젝트에서 이것을 고려해야 될 것 같다.",
          "페이지에서 데이터 흐름이 어떻게 되는지 이해가 부족하여 웹 관련 지식이 부족했다고 느낌",
        ],
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
