document.addEventListener('mousemove', (e) => {
  const cards = document.querySelectorAll('.card-3d, .card-3d-small, .card-3d-hover');
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  cards.forEach((card) => {
    const intensity = card.classList.contains('card-3d') ? 8 : 4;
    card.style.transform = `
      perspective(900px)
      rotateX(${y * intensity}deg)
      rotateY(${x * intensity * -1}deg)
      translateY(-2px)
    `;
  });
});
