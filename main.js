const hambuger = document.querySelector('#hambuger');
const menu = document.querySelector('#menu');
const closeBtn = document.querySelector('#close-btn');
const naviLinks = document.querySelectorAll('.nav-link');

hambuger.addEventListener('click', () => {
  menu.classList.add('mobile-menu');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('mobile-menu');
});

naviLinks.forEach((n) => n.addEventListener('click', () => menu.classList.remove('mobile-menu')));

const reviews = document.getElementById('students-cards');

const modalCards = [
  {
    id: 1,
    names: 'Stephen',
    country: 'Mozambique',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    image: './images/student1.jpg',
    review: 'Thorough and enjoyable web development fullstack course with knowledgeable instructors. Confident in my skills now!',
  },
  {
    id: 2,
    names: 'Leila',
    country: 'Spain',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    image: './images/student2.jpg',
    review: 'Hands-on and beginner-friendly web development fullstack course. Excellent learning experience.',
  },
  {
    id: 3,
    names: 'Jones',
    country: 'Nigeria',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    image: './images/student3.jpg',
    review: 'Comprehensive course with practical projects. Highly recommend the web development fullstack course.',
  },
  {
    id: 4,
    names: 'Anna',
    country: 'Filand',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    image: './images/student4.jpg',
    review: 'Engaging instructors, relevant content, and challenging assignments. Solid foundation in fullstack web development.',
  },
  {
    id: 5,
    names: 'Yury',
    country: 'India',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    image: './images/student5.jpg',
    review: 'Well-organized course with approachable instructors. Equipped with skills to build web applications.',
  },
  {
    id: 6,
    names: 'Maria',
    country: 'Portugal',
    stars: '⭐️⭐️⭐️⭐️⭐️',
    image: './images/student6.jpg',
    review: 'Excellent investment in my learning journey. Comprehensive content, practical application, and gained valuable skills.',
  },
];

const renderCards = (modalCards, containerName) => {
  modalCards.forEach((item) => {
    const card = document.createElement('div');
    card.classList = `card-review`;
    card.innerHTML = `<div class="card-img">
    <img src=${item.image}>
  </div>
  <div class="review-content">
      <h4 class="review-title">${item.names}</h4>
      <p class="link"><em>
          ${item.country}
      </em></p>
      <p class="star">${item.stars}
      <p class="speaker-desc">
          ${item.review}
      </p>
  </div> `;
    containerName.appendChild(card);
  });
};

renderCards(modalCards, reviews)

