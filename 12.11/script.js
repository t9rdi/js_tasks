const btn = document.querySelector('#btn');

const showNotification = () => {
    const notification = '<div class="alert alert-primary">\n' +
        '        A simple primary alert—check it out!\n' +
        '</div>';

    const container = document.querySelector('#notification-container')
    container.innerHTML = notification;
    container.classList.add('notification-container');
}


btn.addEventListener('click', showNotification);