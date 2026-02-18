# TODO: Исправление проблем в React Redux приложении

## src/App.jsx
- [ ] Удалить неиспользуемый импорт `use`
- [ ] Исправить функцию `handleDeleteTodo` - убрать лишний параметр `dispatch`
- [ ] Исправить функцию `handlechange` - использовать `dispatch` (строчная) после useDispatch
- [ ] Изменить `Dispatch` на `dispatch` (строчная)
- [ ] Исправить отображение users - найти пользователя по userId и показать email

## src/main.jsx
- [ ] Исправить case 'GET_USERS' - вернуть users и loadingUsers: false
- [ ] Исправить case 'LOADING_USERS' - вернуть loadingUsers: true
