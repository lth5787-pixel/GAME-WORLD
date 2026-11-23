// 애니메이션 정보 예제입니다.
// 작품을 추가하려면 아래 animeData 목록에 항목을 더해 주세요.
const animeData = [
  {
    id: 1, title: "SPY×FAMILY", genre: "일상", year: "2022",
    description: "스파이 아빠, 암살자 엄마, 마음을 읽는 딸이 함께하는 특별한 가족 이야기입니다.",
    image: "https://www.crank-in.net/img/db/227085298113527_1200.jpg",
    source: "https://spy-family.net/tvseries/"
  },
  {
    id: 2, title: "장송의 프리렌", genre: "판타지", year: "2023",
    description: "마왕을 물리친 뒤, 엘프 마법사 프리렌이 사람의 마음을 알아가는 여행을 떠납니다.",
    image: "https://ogre.natalie.mu/media/news/comic/2023/0823/frieren_kv0823.jpg?impolicy=pp",
    source: "https://frieren-anime.jp/"
  },
  {
    id: 3, title: "봇치 더 록!", genre: "일상", year: "2022",
    description: "사람들 앞에 서는 것이 어려운 소녀가 밴드 활동을 하며 성장하는 음악 이야기입니다.",
    image: "https://resize-image.vocus.cc/resize?norotation=true&quality=80&sign=z7J2iBiA66fxchGFTpuFslgq_QgtfTRz1zDNLNJQWDA&url=https%3A%2F%2Fimages.vocus.cc%2F857d8281-aeb0-453e-a257-06c854cc6e48.jpg&width=1200",
    source: "https://www.aniplex.co.jp/lineup/bocchi/"
  },
  {
    id: 4, title: "블루 록", genre: "액션", year: "2022",
    description: "세계 최고의 스트라이커를 목표로 모인 선수들의 치열한 축구 경쟁을 그립니다.",
    image: "https://s.animeanime.jp/imgs/p/64XVvff3mD9cFhi_PU1_DqGg_6ytrq_oqaqr/576864.jpg?zoom=spacing",
    source: "https://bluelock-anime-en.com/gallery/"
  },
  {
    id: 5, title: "귀멸의 칼날", genre: "액션", year: "2019",
    description: "가족을 잃은 탄지로가 혈귀가 된 여동생을 되돌리기 위해 싸우는 이야기입니다.",
    image: "https://www.ufotable.com/c98/img/key_kmt.jpg",
    source: "https://kimetsu.com/"
  },
  {
    id: 6, title: "주술회전", genre: "액션", year: "2020",
    description: "저주의 힘을 둘러싸고 주술사들이 펼치는 어둡고 강렬한 액션 판타지입니다.",
    image: "https://animeanime.jp/imgs/zoom/400458.jpg",
    source: "https://jujutsukaisen.jp/"
  },
   {
    id: 7, title: "원피스", genre: "액션", year: "1999",
    description: "루피와 동료들이 해적왕을 꿈꾸며 전설의 보물을 찾아 떠나는 모험.",
    image: "https://www.yokohamajapan.com/kr/img_data/evt74_1.jpg?20191126144316",
    source: "https://one-piece.com/index.html"
  },
   {
    id: 8, title: "Re: 제로부터 시작하는 이세계 생활", genre: "판타지", year: "2016",
    description: "죽음을 반복하며 소중한 사람들을 구하는 이세계 판타지 모험.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjosCyXOp1NHjPmKMHexxp3C_D8CT5-C6ihHgh5HwISA&s=10",
    source: "https://re-zero-anime.jp/"
  },
   {
    id: 9, title: "이 멋진 세계에 축복을!", genre: "판타지", year: "2016",
    description: "이세계에서 개성 넘치는 동료들과 펼치는 코믹한 모험.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQSKF82S4_uk7mw1hNelQiHyVipD7RJxAvLNakBr9Zw&s=10",
    source: "https://konosuba.com/"
  },
  {
    id: 10, title: "체인소맨", genre: "드라마", year: "2022",
    description: "악마의 힘을 얻은 소년이 잔혹한 세상에서 싸우는 이야기.",
    image: "https://images.iwafu.com/1d0bc1f60ee5081c31d1742a6bea679a5bf6826fedcddc6c3413d794f952fbbf/width=1280,format=avif,quality=75/https://res.iwafu.com/public/photo/20251007/192f9b8d656a4dbf9ef0ebd0bc058acc/192f9b8d656a4dbf9ef0ebd0bc058acc.jpg",
    source: "https://chainsawman.dog/"
  },
  {
    id: 11, title: "명탐정 코난", genre: "추리", year: "1996",
    description: "작아진 천재 탐정이 다양한 사건을 해결하는 추리 이야기.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlkWbUTKOz81NUl4WzKImJMrgzUZA7N9I-ahVPACYehg&s=10",
    source: "https://www.ytv.co.jp/conan/"
  },
    {
    id: 12, title: "나의 히어로 아카데미아", genre: "액션", year: "2016",
    description: "히어로를 꿈꾸는 소년이 동료들과 함께 성장하는 이야기.",
    image: "https://www.heroaca.com/wp/wp-content/uploads/2020/12/201207_01-1.jpg",
    source: "https://heroaca.com/"
  },
  {
    id: 13, title: "닥터스톤", genre: "SF (공상과학)", year: "2026",
    description: "석화된 인류를 과학의 힘으로 되살리는 모험 이야기.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKVVVQFZI76N3HTkOx4gKcngcEN3dp2anibrSy6Ze7g&s=10",
    source: "https://dr-stone.jp/"
  },
   {
    id: 14, title: "마슐", genre: "액션", year: "2024",
    description: "마법 없는 소년이 압도적인 근육으로 마법 세계에 도전하는 이야기.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ER60eeKP_VvEPBuqXdhsdilsMzUxMf_8HmQvXnegAQ&s=10",
    source: "https://mashle.pw/"
  },
  {
    id: 15, title: "사이버펑크: 엣지러너", genre: "드라마", year: "2022",
    description: "사이버펑크 세계에서 소년이 생존과 자유를 위해 싸우는 이야기.",
    image: "https://an2-img.amz.wtchn.net/image/v2/fToNVMJ1unuaMkFc4oWd9w.webp?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5UYzJNVEU0TVRNMU5EazVPREl6TlRnaWZRLllZTWlmTkV6dlE2WXVyZ2Z5dnpDNkhGN2pSRTFiWVFHRWQ5SVRkWF9Id2M=",
    source: "https://www.cyberpunk.net/ko/edgerunners"
  },
   {
    id: 16, title: "괴수 8호", genre: "드라마", year: "2024",
    description: "괴수가 된 남자가 인류를 지키기 위해 싸우는 이야기.",
    image: "https://i.namu.wiki/i/N4LJ2CmALuV18amAkoZn8tU1yWy0T4H2ZEz8ukQJy2NFYY39_NzZzjCvJ-ksETn2q9nJAB-sFmIsq1QBenLOIg.webp",
    source: "https://kaiju-no8.net/en/"
  },
   {
    id: 17, title: "진격의 거인", genre: "드라마", year: "2013",
    description: "거인과 맞서 인류의 자유를 되찾으려는 처절한 이야기.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt68Y2ffaVOnyVUSODn7mK0wCav_to-MJ92MFMfnF_zA&s=10",
    source: "https://shingeki.tv/movie_guren/"
  },
   {
    id: 18, title: "강철의 연금술사", genre: "SF (공상과학)", year: "2013",
    description: "잃어버린 것을 되찾기 위해 형제가 떠나는 연금술 모험.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWDJdgq7xjRzG-UU0UB6bKgmRDaxo6fPY0jvBizmCKw&s=10",
    source: "https://www.hagaren.jp//"
  },
   {
    id: 19, title: "최애의 아이", genre: "드라마", year: "2013",
    description: "아이돌의 화려한 무대 뒤에 숨겨진 복수와 진실 이야기.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRUDdmaox4KLmNMu9YHpEk6FSvZanwFKercSwIaNnpA&s=10",
    source: "https://ichigoproduction.com/"
  },
  {
    id: 20, title: "약사의 혼잣말", genre: "추리", year: "2013",
    description: "아이돌의 화려한 무대 뒤에 숨겨진 복수와 진실 이야기.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCrOvIyj617T-KJx8TPe85zJu7qsBh9RS0JK31OqLCg&s=10",
    source: "https://kusuriyanohitorigoto.jp/"
  },
  {
    id: 21, title: "메이드 인 어비스", genre: "다크 판타지", year: "2017",
    description: "신비한 거대 구멍의 비밀을 찾아 떠나는 소녀들의 모험.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUy3FDhZNpbyxgprocXymLpevLVhlXHbbP46Ra57R3xw&s=10",
    source: "https://miabyss.com/"
  },
   {
    id: 22, title: "던전에서 만남을 추구하면 안 되는 걸까", genre: "판타지", year: "2013",
    description: "초보 모험가가 동료들과 함께 던전에서 성장하는 이야기.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8kPJYwSNU0zYKeOmi2EPiwSuzSxIcJku6B1PUXPJPA&s=10",
    source: "https://danmachi.com/"
  },
  {
    id: 23, title: "던전밥", genre: "요리", year: "2024",
    description: "던전에서 마물을 요리하며 동료를 구하러 떠나는 모험.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoShJUHx5auOE6CLm7H88Jub93C9lfWwqfZ3BOt9kxEw&s=10",
    source: "https://delicious-in-dungeon.com/"
  },
  {
    id: 24, title: "중2병이라도 사랑이 하고 싶어!", genre: "로맨스", year: "2014",
    description: "중2병 소녀와 소년이 만나 사랑을 키워가는 이야기.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxVL2JrGVIfpxqhuW0zv1es5BnvwAZnQQ9_F_tS3F5ow&s=10",
    source: "https://www.anime-chu-2.com/"
  },
  {
    id: 25, title: "신세기 에반게리온!", genre: "SF (공상과학)", year: "1995",
    description: "소년들이 거대 로봇을 타고 정체불명의 적과 싸우는 이야기.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33uAZ7qhZixh5BE6RF8KrRyySlfLMt-KWvL5ozpv7Iw&s=10",
    source: "https://www.evangelion.jp/"
  },
   {
    id: 26, title: "마계학교 이루마군", genre: "판타지", year: "2019",
    description: "인간 소년이 마계 학교에서 친구들과 성장하는 이야기.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7qbeR6bxL9kkIA6ZivFyPDCZ20j_f5l_jqnSeKWh9g&s=10",
    source: "https://x.com/wc_mairuma"
  },
   {
    id: 27, title: "루팡 3세", genre: "코미디", year: "1971",
    description: "천재 도둑 루팡이 동료들과 펼치는 짜릿한 보물 사냥.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRR-FI-Fyhe9yr8jSKr4wG3qNlduHe4A_tZH-JYIPx7Q&s=10",
    source: "https://www.lupin-3rd.net/"
  },
   {
    id: 28, title: "데스노트", genre: "스릴러", year: "2006",
    description: "죽음을 다스리는 노트로 세상을 바꾸려는 천재의 이야기.",
    image: "https://i.namu.wiki/i/HiblZ6ijbM7obVMPYozAWwQOgq0DfcH2XlQkNCIG-mysOyh__OON1R-E4-qjdbLnqxnOkmPcG7v5U08wKOSIhg.webp",
    source: "https://www.ntv.co.jp/deathnote/",
  },
  {
    id: 29, title: "디지몬", genre: "판타지", year: "1999",
    description: "선택받은 아이들이 디지몬과 함께 세상을 구하는 모험.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-wpUG6fC2QKlfeoVAKNaXsRFes4YGSCn-1utBcuV9w&s=10",
    source: "https://digimon.net/",
  },
    {
    id: 30, title: "내 여동생이 이렇게 귀여울 리가 없어", genre: "로맨스", year: "2010",
    description: "평범한 오빠와 여동생의 특별하고 유쾌한 일상 이야기.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsDH6h69dOHFpsGaHizOn-LiUWQuNsasUT02PN5OMWQ&s=10",
    source: "https://promo.kadokawa.co.jp/dengekibunko/special/oreimo/",
  },
];

const animeGrid = document.getElementById("animeGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.getElementById("filters");
const emptyMessage = document.getElementById("emptyMessage");
const savedList = document.getElementById("savedList");
const savedCount = document.getElementById("savedCount");
const modal = document.getElementById("detailModal");

let currentFilter = "all";
let searchWord = "";
let savedIds = [];
let selectedAnimeId = null;

function renderAnime() {
  const filtered = animeData.filter(anime => {
    const matchesGenre = currentFilter === "all" || anime.genre === currentFilter;
    const matchesSearch = anime.title.toLowerCase().includes(searchWord.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  animeGrid.innerHTML = filtered.map(anime => `
    <article class="anime-card">
      <div class="card-art poster-card">
        <img class="poster-image" src="${anime.image}" alt="${anime.title} 공식 포스터 이미지"
          loading="lazy" referrerpolicy="no-referrer"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
        <div class="poster-fallback">${anime.title}</div>
        <span class="card-tag">${anime.genre}</span>
        <button class="favorite-button ${savedIds.includes(anime.id) ? "saved" : ""}"
          data-favorite="${anime.id}" aria-label="즐겨찾기">
          ${savedIds.includes(anime.id) ? "♥" : "♡"}
        </button>
      </div>
      <div class="card-body">
        <h3>${anime.title}</h3>
        <p>${anime.year}년 · ${anime.description}</p>
        <button class="detail-button" data-detail="${anime.id}">자세히 보기 →</button>
      </div>
    </article>
  `).join("");

  emptyMessage.hidden = filtered.length !== 0;
  renderSaved();
}

function renderSaved() {
  const saved = animeData.filter(anime => savedIds.includes(anime.id));
  savedCount.textContent = saved.length;
  savedList.innerHTML = saved.length
    ? saved.map(anime => `<span class="saved-chip">${anime.title}</span>`).join("")
    : "아직 저장한 작품이 없어요. 작품 카드의 하트를 눌러보세요!";
}

function toggleFavorite(id) {
  if (savedIds.includes(id)) {
    savedIds = savedIds.filter(savedId => savedId !== id);
  } else {
    savedIds.push(id);
  }
  renderAnime();
  if (selectedAnimeId === id) updateModalFavorite();
}

function openDetail(id) {
  const anime = animeData.find(item => item.id === id);
  if (!anime) return;
  selectedAnimeId = id;
  document.getElementById("modalArt").className = "modal-art modal-poster";
  document.getElementById("modalArt").innerHTML =
    `<img src="${anime.image}" alt="${anime.title} 포스터" referrerpolicy="no-referrer"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
     <span class="modal-poster-fallback">${anime.title}</span>`;
  document.getElementById("modalGenre").textContent = `${anime.genre} · ${anime.year}`;
  document.getElementById("modalTitle").textContent = anime.title;
  document.getElementById("modalDescription").textContent = anime.description;
  const sourceLink = document.getElementById("modalSource");
  if (sourceLink) sourceLink.href = anime.source;
  updateModalFavorite();
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function updateModalFavorite() {
  const button = document.getElementById("modalFavorite");
  const isSaved = savedIds.includes(selectedAnimeId);
  button.textContent = isSaved ? "♥ 저장 취소" : "♡ 내 목록에 저장";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

filters.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  currentFilter = button.dataset.filter;
  document.querySelectorAll(".filter-button").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderAnime();
});

searchInput.addEventListener("input", event => {
  searchWord = event.target.value.trim();
  renderAnime();
});

animeGrid.addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-favorite]");
  const detailButton = event.target.closest("[data-detail]");
  if (favoriteButton) toggleFavorite(Number(favoriteButton.dataset.favorite));
  if (detailButton) openDetail(Number(detailButton.dataset.detail));
});

document.getElementById("modalFavorite").addEventListener("click", () => {
  if (selectedAnimeId !== null) toggleFavorite(selectedAnimeId);
});
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

document.getElementById("menuButton").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("show");
});
document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => document.querySelector(".main-nav").classList.remove("show"));
});

renderAnime();

