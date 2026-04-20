const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate Username
    if (username.value.trim().length < 3) {
        setError(username);
        isValid = false;
    } else {
        removeError(username);
    }
    
    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        setError(email);
        isValid = false;
    } else {
        removeError(email);
    }
    
    // Validate Password
    if (password.value.length < 8) {
        setError(password);
        isValid = false;
    } else {
        removeError(password);
    }
    
    // Validate Confirm Password
    if (confirmPassword.value !== password.value || confirmPassword.value === '') {
        setError(confirmPassword);
        isValid = false;
    } else {
        removeError(confirmPassword);
    }
    
    if (isValid) {
        // Success state animation
        const btn = document.getElementById('submitBtn');
        const originalText = btn.innerText;
        btn.innerText = 'Creating Account...';
        btn.style.background = 'linear-gradient(135deg, #00b09b, #96c93d)';
        btn.style.boxShadow = '0 4px 15px rgba(150, 201, 61, 0.4)';
        btn.style.pointerEvents = 'none';
        
        // Simulate API call and success message
        setTimeout(() => {
            alert('Registration Successful! 🎉');
            form.reset();
            btn.innerText = originalText;
            btn.style.background = '';
            btn.style.boxShadow = '';
            btn.style.pointerEvents = 'auto';
            
            // Dispatch blur to all inputs to reset floating labels
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.value = ""; // Firefox persistence fallback
            });
        }, 1500);
    }
});

function setError(element) {
    element.parentElement.classList.add('error');
}

function removeError(element) {
    element.parentElement.classList.remove('error');
}

// Remove error styling instantly when user starts typing
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        removeError(input);
    });
});
