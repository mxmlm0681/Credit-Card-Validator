export default function choiceCardImg(card) {
  const imgCards = document.getElementsByClassName("img-card");
  for (const item of imgCards) {
    item.style.opacity = 0.4;
  }
  if (card) {
    const activCard = document.getElementById(card);
    activCard.style.opacity = 1;
  }
}
