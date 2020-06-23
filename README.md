# Rakuten TV Technical Test

## Description

Rakuten.TV technical test

## How to run

- `npm run build` - to build the compiled distributable bundle
- `npm run start:dev` - to start the development server. navigate to http://localhost:9000

## About the project

This project has been built from scratch only using the education and knowledge of the author.

I have not based the project template in any other author's configuration or any available in a website.

I have tried to maintain a similar aspect as in rakuten.tv but I have skipped/ignored some details.

### Technologies

- javascript (esnext)
- scss
- react
- redux
- react hooks
- react-router
- redux-saga
- axios
- font-awesome
- webpack
- eslint
- editorconfig

### Architecture

I have developed the project following a personal architecture present in most of my projects.

- every directory has its own `index(.js)` responsible to export the members
- every other member is able to import the directory or super-directory to reference the public members exported in the module's `index`
- there are 3 main directories
- `app` -> `components` and `pages`
- `core` -> `store` and `routing` (`icons` is not standard)
- `api` -> `configuration` and `...lib`

### Pages

- `/` - `~/app/pages/home/HomePage` - Home movie lists
- `/detail/:filmId` - `~/app/pages/detail` - Movie detail
- `/trailer/:filmId` - `~/app/pages/trailer` - Movie trailer

## Author

Jesus Gonzalez
