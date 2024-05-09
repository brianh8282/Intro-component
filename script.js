function check(event) {
    // Perform validation
    event.preventDefault();
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const firstname = firstNameInput.value.trim();
    const lastname = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    var emailReg = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

    if (firstname === '') {
        firstNameInput.classList.add('highlight');
        firstNameInput.placeholder = '';
        document.getElementById('firstNameError').style.visibility = 'visible';
    } else {
        firstNameInput.classList.remove('highlight');
        firstNameInput.placeholder = 'First Name';
        document.getElementById('firstNameError').style.visibility = 'hidden';
    }

    if (lastname === '') {
        lastNameInput.classList.add('highlight');
        lastNameInput.placeholder = '';
        document.getElementById('lastNameError').style.visibility = 'visible';
    } else {
        lastNameInput.classList.remove('highlight');
        lastNameInput.placeholder = 'Last Name';
        document.getElementById('lastNameError').style.visibility = 'hidden';
    }

    if (emailReg.test(email) == false) {
        emailInput.classList.add('highlight', '#email::placeholder');
        emailInput.placeholder = 'email@example/com';
        document.getElementById('emailError').style.visibility = 'visible';
    } else {
        emailInput.classList.remove('highlight');
        emailInput.placeholder = 'Email Address';
        document.getElementById('emailError').style.visibility = 'hidden';
    }

    if (password === '') {
        passwordInput.classList.add('highlight');
        passwordInput.placeholder = '';
        document.getElementById('passwordError').style.visibility = 'visible';
    } else {
        passwordInput.classList.remove('highlight');
        passwordInput.placeholder = 'Password';
        document.getElementById('passwordError').style.visibility = 'hidden';
    }
}
