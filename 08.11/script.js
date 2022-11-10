/*
   Напишите функцию showNotification(options), которая создаёт уведомление:
   <div class="notification"> с заданным содержимым.
   Уведомление должно автоматически исчезнуть через 1,5 секунды.
*/

const btn_danger = document.querySelector('#notification-btn1');
const btn_success = document.querySelector('#notification-btn2');

const showNotification = (options) => {
    const div = document.createElement('div');
    div.innerHTML = '<div class="alert-success">hello world</div>';
    document.body.prepend(div);

    setTimeout(() => {
        div.remove();
    },1500)
}

btn_danger.addEventListener('click',showNotification);
btn_success.addEventListener('click', showNotification);