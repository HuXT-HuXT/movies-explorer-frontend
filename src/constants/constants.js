const personalLinks = [
  {
    id: 1,
    link: 'https://facebook.com',
    name: 'Facebook',
  },
  {
    id: 2,
    link: 'https://github.com/HuXT-HuXT',
    name: 'GitHub',
  },
]

const commonLinks = [
  {
    id: 1,
    link: 'https://practicum.yandex.ru',
    name: 'Яндекс.Практикум',
  },
  {
    id: 2,
    link: 'https://github.com/',
    name: 'GitHub',
  },
]

const allLinks = [
  {
    id: 1,
    link: 'https://practicum.yandex.ru',
    name: 'Яндекс.Практикум',
  },
  {
    id: 2,
    link: 'https://github.com/',
    name: 'GitHub',
  },
  {
    id: 3,
    link: 'https://facebook.com',
    name: 'Facebook',
  },
]

const apiError = [
  {
    code: 401,
    text: 'Неправильно указаны почта или пароль'
  },
  {
    code: 409,
    text: 'Данная почта уже используется'
  },
  {
    code: 404,
    text: 'Не найдено'
  },
]

const apiErr401 = 'Неправильно указаны почта или пароль';
const apiErr409 = 'Данная почта уже используется';
const apiErrDefault = 'Что-то пошло не так :('

const movieErrors = {
    nothing: 'Ничего не найдено',
    input_empty: 'Введите запрос в поисковую строку',
    fetch_fail: 'Ошибка при получении данных'
}

const validationError = {
  email: 'Некоректно введен email',
  name: 'Разрешены: кириллица, латинница и "-"'
}

const email_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const name_pattern = /^[- ?!,.a-zA-Zа-яА-ЯёЁ\s]+/;

const english_pattern = /^[a-zA-Z0-9\s]+$/;
const russian_pattern = /^[а-яёА-ЯЁ0-9\s]+$/;

const cardLimits = {
  limitFor1280: 12,
  limitFor768: 8,
  limitFor480: 5,
  offset1280: 3,
  offset768: 2
}

const shortieLength = 40;

export {
  personalLinks,
  commonLinks,
  allLinks,
  apiError,
  movieErrors,
  email_pattern,
  name_pattern,
  validationError,
  english_pattern,
  russian_pattern,
  cardLimits,
  shortieLength,
  apiErr401,
  apiErr409,
  apiErrDefault
}