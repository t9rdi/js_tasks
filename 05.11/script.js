/*Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую
   в конец ul будет добавляться новый li с текстом 'пункт'.
*/

const btn = document.querySelector('#btn');

const showNotification = () => {
    const li = document.createElement('li');
    // li.classList.add('notification');
    li.innerText = 'Пункт';
    document.body.prepend(li);
}

btn.addEventListener('click', () => {
    showNotification({
        className:'alert_point',
        text:'Пункт'
    })
});



