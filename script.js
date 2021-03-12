//** this function controls the password visibillity and toggles between eye logo */
const showpassword = () => {
    const pass = document.querySelector('#password');
    const eye = document.querySelector('#hide1');
    const eyeSlash = document.querySelector('#hide2');
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

//** to show and hide the login modal */

// Get DOM Elements
const modal = document.querySelector('#login-modal');
const modalBtn = document.querySelector('#login-btn');
// const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
document.addEventListener('keydown', closeModal);
window.addEventListener('click', outsideClick);

//** To open the modal */
function openModal() {
  modal.style.display = 'flex';
}

//** To close the modal */
function closeModal(e) {
    e.preventDefault();
    if (e.keyCode == 27) {
        return modal.style.display = 'none'; 
    }
}

//** Close the modal with click outside the SignIn window */
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


  
  