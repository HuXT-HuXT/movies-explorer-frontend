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

export { personalLinks, commonLinks, allLinks, apiError }