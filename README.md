## Scale360 React Starter Kit

ตัว Starter Kit นี้ถูกสร้างขึ้นมาจาก [Create React App](https://github.com/facebookincubator/create-react-app)

ท่านสามารถอ่านรายละเอียดวิธีการใช้งานได้ [ที่นี่](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

## Table of Contents

- [Slack](#slack)
- [Quick Start](#quick-start)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm test:full](#npm-test-full)
  - [npm run build](#npm-run-deploy)
  - [npm run help](#npm-run-help)
  - [npm run make:core `<name>`](#npm-run-make-core)
  - [npm run make:page `<name>`](#npm-run-make-page)
  - [npm run make:component `<name>`](#npm-run-make-component)
  - [npm run make:container `<name>`](#npm-run-make-container)

## Slack

- [Create React App](#slack)
  - React
  - Webpack
  - Babel
  - Autoprefixer
  - ESlint
  - Jest
- [React Router](#slack) `v3.0.3`
- [Redux](#slack)
- [React-Redux](#slack)
- [Redux-Thunk](#slack)
- [Redux-Api-Middleware](#slack)
- [Redux-Devtools-Extension](#slack)
- [SASS](#slack)
- [Webpack](#slack)

## Quick Start

```sh
$ git clone https://github.com/weerapat1993/scale360-react-starter-kit
$ cd scale360-react-starter-kit
$ npm install
$ npm start
```

## Folder Structure

โครงสร้างไฟล์ทั้งหมด

```s
app/
  Console/
  Scripts/
  Webpack/
node_modules/
public/
  index.html
  favicon.ico
src/
  core/
    task/
      test/
        taskActions.test.js
        taskReducer.test.js
        taskSelector.test.js
      index.js
      taskActions.js
      taskReducer.js
      taskSelector.js
    constants.js
    rootReducers.js
    store.js
  utils/
  views/
    assets/
    components/
    pages/
    styles/
      scale360/
        mixins/
        default.scss
        mixins.scss
      scale360.scss
    routes.js
  index.js
  setupTests.js
  test/
command.sh
package.json
README.md
```

## Available Scripts

ภายใน Project Directory, สามารถ Run คำสั่งดังต่อไปนี้ได้

### `npm start`

Run Application ในโหมดผู้พัฒนา<br>
จะแสดงผลบนเบารว์เซอร์ [http://localhost:3000](http://localhost:3000)

มีการติดตั้ง [Hot Module Replacement](https://webpack.js.org/guides/hmr-react/) หน้าเพจจะเปลี่ยนเมื่อมีการแก้ไขไฟล์<br>
และสามารถแสดงผล Error บน Console ได้

### `npm test`

Run Test ระบบเพื่อตรวจสอบความผิดพลาดหรือไม่ !!<br>
สามารถตรวจสอบได้โดยที่ไม่ต้องเปิดบน Browser

### `npm run test:full`

Run Test ระบบเพื่อตรวจสอบความผิดพลาด เช่นเดียวกับ `npm test`<br>
แต่จะแสดงผลในรูปแบบของตาราง โดยจะใช้คำสั่ง `npm test -- --coverage`

### `npm run build`

สร้าง Application ขึ้นมาไว้ที่ Folder `build` <br>
โดยทำการ Build ไฟล์ให้มีขนาดเล็กที่สุด

สำหรับขึ้น Deploy บน Production

### `npm run help`

ใช้ตรวจสอบคำสั่งทั้งหมด บน `npm script`

### `npm run make:core <name>`

สร้างไฟล์ Core ทั้งหมดลงบน `src/core` โดยประกอบด้วย
- Action - สำหรับเรียก Action
- Reducer - สำหรับเปลี่ยนแปลงข้อมูลบน State
- Selector - สำหรับจัดการ Filter ข้อมูลบน State
- JSON - ตัวอย่าง ข้อมูลสำหรับ redux-api-middleware

ยกตัวอย่างเช่น
```
npm run make:core todo
```
เมื่อรันคำสั่งจะสร้างไฟล์ดังต่อไปนี้
```diff
public/
  assets/
    json/
+     todo.json
src/
  core/
    todo/
+     tests/
+       todoActions.test.js
+       todoReducer.test.js
+       todoSelector.test.js
+     index.js
+     todoActions.js
+     todoReducer.js
+     todoSelector.js
```

### `npm run make:page <name>`

สร้างไฟล์ Page ขึ้นมาที่ `src/views/pages` <br>
ประกอบด้วยหน้าเพจ Container จำนวน 1 หน้า

ยกตัวอย่างเช่น
```
npm run make:page todo
```
เมื่อรันคำสั่งจะสร้างไฟล์ดังต่อไปนี้
```diff
src/
  views/
    pages/
+     todo.js
```
### `npm run make:component <name>`

สร้างไฟล์ Page ขึ้นมาที่ `src/views/components`

ยกตัวอย่างเช่น
```
npm run make:component TodoComponent
```
เมื่อรันคำสั่งจะสร้างไฟล์ดังต่อไปนี้
```diff
src/
  views/
    components/
+     TodoComponent.js
```

### `npm run make:container <name>`

สร้างไฟล์ Container ขึ้นมาที่ `src/views/containers`

ยกตัวอย่างเช่น
```
npm run make:container TodoContainer
```
เมื่อรันคำสั่งจะสร้างไฟล์ดังต่อไปนี้
```diff
src/
  views/
    containers/
+     TodoContainer.js
```

NPM Commands
------------

|Script|Description|
|---|---|
|npm start|Start webpack development server @ **localhost:3000**|
|npm test|Run unit tests with `Jest`|
|npm run test:full|`npm test -- --coverage`|
|npm run build|Build Webpack to production|
|npm run help|Check NPM Script in Console|
|npm run make:core|Create New Core Action & Reducer|
|npm run make:page|Create New Container Page|
|npm run make:component|Create New Component|
|npm run make:container|Create New Container|