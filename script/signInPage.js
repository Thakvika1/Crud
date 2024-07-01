class SignIn extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section>
            <div class="container">
                <div class="div-container">
                    <form id="sign-up-form">
                        <label>Enter your name</label>
                        <input type="text" id="full-name" required placeholder="Name">
                        
                        <label>Enter your email</label>
                        <input type="email" id="email" required placeholder="Email">
                        
                        <label>Password must contain 8 letters</label>
                        <input type="password" id="password" required placeholder="Password">
                        
                        <div class="button">
                            <a href="../index.html"><button type="button">Back</button></a>
                            <button type="submit">Sign In</button>
                        </div>
                    </form>
                </div>
                <p>Need Help? <br> Contact us by footer's link</p>
            </div>
        </section>
        `;

        const form = this.querySelector('#sign-up-form');
        form.addEventListener('submit', this.getInput.bind(this));
    }

    getInput(event) {
        event.preventDefault();

        const inputName = this.querySelector('#full-name');
        const inputPassword = this.querySelector('#password');

        const valueName = inputName.value;
        const valuePassword = inputPassword.value.split("");

        const passwordLength = valuePassword.length;

        if (valueName === valueName && this.emailVerify() && passwordLength >= 8) {
            window.location.href = "../page/home-page.html";
        } else {
            document.querySelector(".pop-up-container").style.display = "flex";
        }
    }

 // check email have @gmail.com or not
    emailVerify() {
        const inputEmail = this.querySelector('#email');
        const valueEmail = inputEmail.value.split("");

        if (valueEmail.includes("@") && valueEmail.includes("g") && valueEmail.includes("m")
          && valueEmail.includes("a") && valueEmail.includes("i") && valueEmail.includes("l") 
          && valueEmail.includes(".") && valueEmail.includes("c") && valueEmail.includes("o")
          && valueEmail.includes("m")) {
            return true;
          }
        else {
            return false;
        }
    }
}
customElements.define("sign-in", SignIn);


const click = document.querySelector("#okay") ;
click.addEventListener("click", function okay() {
    document.querySelector(".pop-up-container").style.display = "none";
});
