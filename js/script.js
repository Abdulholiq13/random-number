const title = document.querySelector('.title');
const randomBtn = document.querySelector('.random');
const addNumberBtn = document.querySelector('.add-number');
const elInput = document.querySelector('.input');

const randomNumbers = [
  '+998 94-222-53-44',
  '+998 94-222-43-53',
  '+998 93-111-32-32',
  '+998 91-432-12-32',
  '+998 96-555-12-35',
  '+998 33-123-34-43',
  '+998 20-888-91-98',
  '+998 99-666-24-66',
];

randomBtn.addEventListener('click', (e) => {
  e.preventDefault();
  randomBtn.setAttribute('disabled', true);
  let interval = setInterval(() => {
    let index = Math.floor(Math.random() * randomNumbers.length);
    title.textContent = randomNumbers[index];
  }, 50);

  setTimeout(() => {
    clearInterval(interval);
    randomBtn.removeAttribute('disabled');
  }, 2500);
});

addNumberBtn.addEventListener('click', (e) => {
  if (elInput.value === '') {
    return alert("Iltimos raqamni +998 bilan tering va faqat raqamdan iborat bo'lsin");
  } else {
    randomNumbers.push(elInput.value);
    console.log(randomNumbers);
    elInput.value = '';
  }
});
