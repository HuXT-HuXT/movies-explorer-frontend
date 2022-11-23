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
]

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

export { personalLinks, commonLinks, allLinks, apiError, movieErrors, email_pattern, name_pattern, validationError }