
// hour 
class TimeElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let now = new Date();
        let hour = now.getHours();
        let greeting = '';

        if (hour < 12) greeting = "Good morning";
        else if (hour >= 12 && hour < 18) greeting = "Good afternoon";
        else if (hour >= 18 && hour < 21) greeting = "Good evening";
        else greeting = "Good night";
        
        this.innerHTML = `<h2>${greeting} Tiki!</h2>`;
    }
}
customElements.define('time-element', TimeElement);

// Calendar
class Calendar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const now = new Date();
        const day = now.getDate();
        let month = now.getMonth() + 1; 
        const year = now.getFullYear();

        let monthZero = '';
        if (month < 10 ) {
            monthZero = '0' + month;
        } else {
            monthZero = month;
        }
        this.innerHTML = `
            <div class="calendar-box">
                <h3 class="calendar">${day}.${monthZero}.${year}</h3>
            </div>
        `;
    }
}
customElements.define('calendar-element', Calendar);

