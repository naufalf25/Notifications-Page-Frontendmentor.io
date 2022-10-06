import data from "./data.js";

const main = () => {
    const isRead = [];
    const displayData = document.querySelector('#notifContent');

    data.forEach(result => {
        const container = document.createElement('div');
        const profilPicture = document.createElement('div');
        const content = document.createElement('div');
        container.classList.add('notifCard');
        container.setAttribute('id', 'notif');
        profilPicture.classList.add('profil');
        content.classList.add('content');
        if (!result.isRead) {
            isRead.push(result.isRead);
            container.classList.add('isTrueNotif');
            content.innerHTML = `<p id="contentParagraph">
                <a href="#">${result.name}</a> ${result.content} <a href="#">${result.target}</a>
                <svg id="circle" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="9px" viewBox="0 0 120 120" enable-background="new 0 0 120 120" xml:space="preserve">
                    <circle fill="hsl(1, 90%, 64%)" cx="60" cy="60.834" r="54.167"/>
                </svg>
            </p>
            <p class="time">${result.date}</p>`;
        } else {
            content.innerHTML = `<p id="contentParagraph">
                <a href="#">${result.name}</a> ${result.content} <a href="#">${result.target}</a>
            </p>
            <p class="time">${result.date}</p>`
        }

        if (result.message) {
            const displayMessage = document.createElement('div');
            displayMessage.classList.add('message');
            displayMessage.innerHTML = `<p>${result.message}</p>`

            content.append(displayMessage);
        }

        profilPicture.innerHTML = `<img src="./images/avatar-${result.nameId}.webp" alt="${result.nameId}">`
        container.append(profilPicture, content);

        if (result.image) {
            const contentImage = document.createElement('div');
            contentImage.classList.add('content-image');
            contentImage.innerHTML = `<img src="./images/${result.image}.webp" alt="${result.image}">`;
            container.append(contentImage);
        }

        displayData.append(container);
    });

    const displayAmount = document.querySelector('#amountNotif');
    displayAmount.classList.remove('hidden');
    displayAmount.innerHTML = isRead.length;

    const markAsRead = document.querySelector('#markAsRead');
    markAsRead.addEventListener('click', (e) => {
        e.preventDefault();
        const notifContent = document.querySelectorAll('#notif');
        notifContent.forEach(result => {
            result.classList.remove('isTrueNotif');
        });

        const circleNotif = document.querySelectorAll('#circle');
        circleNotif.forEach(circle => {
            circle.remove();
        })

        const amountNotif = document.querySelector('#amountNotif');
        amountNotif.innerHTML = '';
        amountNotif.classList.add('hidden');
    });
}

export default main;