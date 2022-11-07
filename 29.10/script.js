/*1) Выводим  2 следующих сообщения после соответствующих задержек.

   Сообщение “Hello after 4 seconds” выводим через 4 секунды.
   Сообщение “Hello after 8 seconds” выводим через 8 секунд.

   В решении нужно определить всего одну функцию, содержащую встроенные функции.
   Это означает, что множество вызовов setTimeout должны будут
   использовать одну и ту же функцию.

   Пример вызова:

   setTimeout(func1) => Hello after 4 seconds
   setTimeout(func1) => Hello after 8 seconds*/

const showMessage = (message) => {
    alert(message);
}

setTimeout(showMessage, 4000, "Hello after 4 seconds");
setTimeout(showMessage, 8000, 'Hello after 8 seconds');

























