# Fotocage

Старая версия: <a href="https://stormiks.github.io/portfolio/photocage" title="Fotocage v1">Stormiks Portfolio - "Photocage"</a>

Текущая версия: <a href="https://peaceful-headland-16081.herokuapp.com" title="Fotocage v2">Heroku - "Fotocage SPA"</a>

## Requirement

- Node.JS: >=12.21.0 <=14.16.0
- NPM: ~6.14.11

## Terminal commands
Развёртывание проекта
```
yarn install
```

Компилирование и старт приложения - Только для "<b>Heroku</b>"
```
npm run start
```

Компилирование и живая перезагрузка страниц, при изменениях
```
yarn dev:serve
```
Компилирование и минификация кода проекта
```
yarn build
```

---

### Deployment service to Heroku

<https://github.com/heroku/heroku-buildpack-static> - Вспомогательный инструмент для развертывания SPA-приложения на хостинг сервисе "<b>Heroku</b>", если проект был изначально развернут с помощью Vue CLI.

### Frontend - client

- [Tailwindcss](https://tailwindcss.com)
- [Axios](https://github.com/axios/axios)
- [Vue-axios](https://github.com/imcvampire/vue-axios)
- [Vue-router](https://github.com/vuejs/vue-router)
- [Vuex](https://github.com/vuejs/vuex)

### Backend - API/DB

- [MirageJS](http://miragejs.com)
- [Faker.JS](https://github.com/marak/Faker.js/)

---
### Планы/идеи

- Раздел загрузки изображений
  - [ ] На стадии подготовки списка файлов к загрузке
    - [x] ~~вывод списка загружаемых файлов, используя оригинальное имя файла под самим полем для загрузки~~
    - [x] ~~отредактировать основную информацию о фотографии (заголовок, описание)~~
    - [ ] редактировать разрешение загружаемого изображения для корректного отображения в различных местах/разделах приложения

- Раздел галлереи
  - Просмотр изображения
    - [x] ~~Детальной просмотр уже загруженного изображения~~
  - [ ] Система уровня прав доступа, для ограничения доступа к функциональности/странице/раздела приложения
  - [ ] Система коментирования фотографий, без древовидной вложенности коментариев
  - [ ] Возможность поделиться в социальных сетях
  - [ ] Сортировка просматриваемого списка фотографий, на основе заданного фильтра
