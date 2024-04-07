document.querySelectorAll('.form-container form .field input').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focus');
    });

    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            input.parentElement.classList.remove('focus');
        }
    });

    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            input.parentElement.classList.add('input-ok');
        } else {
            input.parentElement.classList.remove('input-ok');
        }
    });
});

document.querySelectorAll('.form-container form .signup-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.form-container form.login').style.marginLeft = '-100%';
        document.querySelector('.form-container form.signup').style.marginLeft = '0';
    });
});

document.querySelectorAll('.form-container form .signup-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.form-container form.login').style.marginLeft = '-100%';
        document.querySelector('.form-container form.signup').style.marginLeft = '0';
    });
});

document.querySelectorAll('.form-container form .links a')[0].addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.form-container form.login').style.marginLeft = '0';
    document.querySelector('.form-container form.signup').style.marginLeft = '100%';
});

document.querySelectorAll('.form-container form .links button')[0].addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.form-container form.login').style.marginLeft = '0';
    document.querySelector('.form-container form.signup').style.marginLeft = '-100%';
});