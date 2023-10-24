const wrapper = document.querySelector('.wrapper');
const logInLink = document.querySelector('.login-link');
const signUpLink = document.querySelector('.signup-link');


logInLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

signUpLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
