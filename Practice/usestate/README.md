# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

1. Счетчик
   Создай компонент, который отображает число и две кнопки: "+" и "-". По нажатию на кнопки число увеличивается или уменьшается.

2. Переключатель темы
   Создай компонент, который меняет цвет фона при нажатии на кнопку. Используй useState, чтобы хранить текущее состояние (светлая или темная тема).

3. Скрытие и показ текста
   Создай компонент с кнопкой "Показать/Скрыть". При нажатии текст "Привет, React!" должен появляться или исчезать.

4. Список дел
   Создай компонент с полем ввода и кнопкой "Добавить". При нажатии введенный текст добавляется в список ниже. Список рендерится в ul.
