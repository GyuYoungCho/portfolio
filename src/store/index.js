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
        role: "Frontend, CI/CD",
        github: "https://github.com/GyuYoungCho/MetaOne",
        stacks: ["Spring boot", "MySQL", "Firebase", "Redis", "Vue.js", "Unity", "WebGL", "Ngnix"],
        stages: [
          {
            imgurl: "metaone/image0.png",
            info:
              "교실에 들어가면 교육 영상 시청 가능 영상 시청 후 미션 가능." + `<br />` + "하이라이트된 오브젝트를 클릭함으로써 수행 가능",
          },
          {
            imgurl: "metaone/image1.png",
            info: "미션 시작 후 게임 실행 화면. 왼쪽에 미션 리스트가 뜨고 남은 시간, 가이드 제공",
          },
          {
            imgurl: "metaone/image2.png",
            info: "교육 영상 이수나 미션시 교육 내역에 기록되고 미션을 통과하면 증명서 발급 가능",
          },
          {
            imgurl: "metaone/image3.png",
            info: "각 교육에 대한 랭킹 시스템 제공",
          },
          {
            imgurl: "metaone/image4.png",
            info: "책 오브젝트를 클릭 시 방명록 시스템 제공",
          },
          {
            imgurl: "metaone/image5.png",
            info: "Firebase Database를 활용한 전체 채팅 시스템 제공. 채팅방은 방마다 분리",
          },
          {
            imgurl: "metaone/image6.png",
            info: "쪽지 메뉴를 통해 현재 온라인 유저, 받은 쪽지 내역과 특정 유저와의 1:1 쪽지 내역, 쪽지 내용과 보내기 Form 제공",
          },
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
        role: "Backend, Recommend Algorithm",
        github: "https://github.com/GyuYoungCho/BOOKS",
        stacks: ["Spring boot", "MySQL", "Firebase", "Redis", "Vue.js", "Unity", "WebGL", "Ngnix"],
        stages: [
          {
            imgurl: "books/main.gif",
            info: `교실에 들어가면 교육 영상 시청 가능 영상 시청 후 미션 가능. 하이라이트된 오브젝트를 클릭함으로써 수행 가능`,
          },
          {
            imgurl: "books/recommend.gif",
            info: "미션 시작 후 게임 실행 화면. 왼쪽에 미션 리스트가 뜨고 남은 시간, 가이드 제공",
          },
          {
            imgurl: "books/search.gif",
            info: "교육 영상 이수나 미션시 교육 내역에 기록되고 미션을 통과하면 증명서 발급 가능",
          },
          {
            imgurl: "metaone/image0.png",
            info: "각 교육에 대한 랭킹 시스템 제공",
          },
          {
            imgurl: "metaone/image1.png",
            info: "책 오브젝트를 클릭 시 방명록 시스템 제공",
          },
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
        role: "Backend, Frontend",
        github: "https://github.com/GyuYoungCho/OVL",
        stacks: ["Spring boot", "MySQL", "Vue.js", "Ngnix"],
        stages: [
          {
            imgurl: "ovl/image0.png",
            info: `교실에 들어가면 교육 영상 시청 가능 영상 시청 후 미션 가능. 하이라이트된 오브젝트를 클릭함으로써 수행 가능`,
          },
          {
            imgurl: "ovl/image1.png",
            info: "미션 시작 후 게임 실행 화면. 왼쪽에 미션 리스트가 뜨고 남은 시간, 가이드 제공",
          },
          {
            imgurl: "ovl/image2.png",
            info: "교육 영상 이수나 미션시 교육 내역에 기록되고 미션을 통과하면 증명서 발급 가능",
          },
          {
            imgurl: "ovl/image3.png",
            info: "각 교육에 대한 랭킹 시스템 제공",
          },
          {
            imgurl: "ovl/image4.png",
            info: "프로필 화면에서 프로필 수정, 팔로우 기능, 팔로워 & 팔로잉 목록, 랭킹, 신고 기능 및 해당 사용자의 게시글, 레시피, 챌린지 보이게 하기",
          },
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
