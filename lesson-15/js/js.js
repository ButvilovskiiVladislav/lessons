let form = document.querySelector('form');
let inputList = document.querySelector('.form__input-block').querySelectorAll('input');
let inputSpan = document.querySelector('.form__input-block').querySelectorAll('span');

let checkInput = (event) => {
  let boolean = false;
  let i = 0;
  let error = '';
  for (let input of inputList) {
    if (input.getAttribute('type') === 'text') {
      if (input.value.trim() === '') {
        boolean = true;
        input.value = '';
        input.classList.add('error-input');
        input.placeholder = 'Ошибка ввода данных';
        inputSpan[i].classList.add('error-span');
        error += '\n-имя';
      } else {
        inputSpan[i].classList.remove('error-span');
        input.classList.remove('error-input');
        input.placeholder = 'Введите имя...';
      }
    }
    if (input.getAttribute('type') === 'tel') {
      if (!/^\d+$/.test(input.value.trim())) {
        boolean = true;
        input.value = '';
        input.classList.add('error-input');
        input.placeholder = 'Ошибка ввода данных';
        inputSpan[i].classList.add('error-span');
        error += '\n-телефон';
      } else {
        inputSpan[i].classList.remove('error-span');
        input.classList.remove('error-input');
        input.placeholder = 'Введите телефон...';
      }
    }
    if (input.getAttribute('type') === 'checkbox') {
      if (!input.checked) {
        boolean = true;
        inputSpan[i].classList.add('error-span');
        error += '\n-нету потверждения';
      } else {
        inputSpan[i].classList.remove('error-span');
      }
    }
    i++;
  }

  if (boolean) {
    event.preventDefault();
    document.querySelector('#massage').innerText = 'При заполнении обнаружены следующие проблемы:' + error;
    document.querySelector('.window').classList.add('active');
  }
}

let closeWindow = () => {
  document.querySelector('.window').classList.remove('active');
}

form.addEventListener('submit', checkInput)
document.querySelector('.window').addEventListener('click',closeWindow);