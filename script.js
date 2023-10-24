const wrapper = document.querySelector('.wrapper');
const logInLink = document.querySelector('.login-link');
const signUpLink = document.querySelector('.signup-link');
const btnLogIn = document.querySelector('.btn-login')


signUpLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

logInLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnLogIn.addEventListener('click', ()=>{
    wrapper.classList.add('active-btn');
});
