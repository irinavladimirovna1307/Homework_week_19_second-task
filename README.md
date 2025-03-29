## Программа для добавления постов на страницу
### Для этого нам понадобится метод POST. Чтобы понять, какой метод использовать и как, нужно посмотреть в документации (https://jsonplaceholder.typicode.com/) к API. У сервиса JSONplaceholder есть документация, даже с примерами запросов (https://github.com/typicode/jsonplaceholder#creating-a-resource).


Вам нужно написать функцию для создания постов, в ней должен быть вызов fetch, с двумя обработчиками then, который:
* делает POST-запрос по адресу https://jsonplaceholder.typicode.com/posts ;
* с телом — JSON с двумя свойствами title и body ;
* со свойством headers с единственным заголовком: 'Content-Type': 'application/json; charset=UTF-8' ;
* добавляет созданный пост в DOM.
