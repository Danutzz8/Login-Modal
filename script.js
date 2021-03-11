const pass = document.querySelector('#password');
const eye = document.querySelector('#hide1');
const eyeSlash = document.querySelector('#hide2');

const showpass = () => {
    if (pass.type === 'password') {
        pass.type = 'text';
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
    } else {
        pass.type = 'password';
        eye.style.display = 'none';
        eyeSlash.style.display = 'block'
    }
}

