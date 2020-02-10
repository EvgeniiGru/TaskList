This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Проект по обработке задач
Добавление задач, сортировка задач, изменения статуса задач.

### Добавление новой задачи
Задачу может добавить любой пользователь по кнопке "Добавить задачу".После нажатия открывается модульное окно необходимо заполнить "имя пользователя", "Е-маил", "Текст", данные поля обязательны для заполнения, в случае не заполнения или не корректного заполнения сраобтает валидация. При корректном заполнении полей требуется нажать кнопку "Отправить".Задача добавляется в список с статусом "Невыполнено".При нажатии"отмена" настройки сбрасываются

### Сортировка
Список можно сортировать по полям "имя пользователя", "Е-маил","Статус".Активируетс нажатием на кнопку с именем сортировки, при повторном нажатии сбрасывается. Так же можно сортировать по Убыванию и Возрастанию.(по умолчанию стоит убывание)ю

### Пагинация
В список задач выводятся по 3 задачи на страницу. При добавлении 3 задач страницы увеличиваютсяю

### Изменения статуса задачи
Для того чтоб бы измениять статус задачи требуются права Администратора(см пункт Авторизация), в случае если их не будет измения статуса задачи будет невозможно. В случае успешной авторизации можете поменять статус задачи кликнув по задачи из списка. Вы будете оповещенны при успешной смене статуса

### Авторизация
Для того что бы авторизоваться требуется нажать ссылку "Авторизоваться" после чего перейдете в окно авторизации. Требуется ввести "логин" и "пароль"(имя "admin" пароль"123") при успешной авторизации программа оповестит вас.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
