// Dummy user data and medical history
let users = [
    { username: 'user1', password: 'pass1', medicalHistory: 'Patient has a history of allergies.' },
    { username: 'user2', password: 'pass2', medicalHistory: 'Patient has a history of hypertension.' },
];

let currentUser = null;

// Dummy doctor availability
let doctorAvailability = {
    1: ['2023-11-25', '2023-11-26', '2023-11-27'],
    2: ['2023-11-25', '2023-11-26', '2023-11-27', '2023-11-28'],
    // Add more doctors and dates as needed
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = user;
        showNotification(`Welcome, ${username}!`, 'success');
        showAppointmentForm();
    } else {
        showNotification('Invalid username or password', 'error');
    }
}

function register() {
    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;

    // Check if the username is unique
    if (!users.some(u => u.username === regUsername)) {
        users.push({ username: regUsername, password: regPassword, medicalHistory: '' });
        showNotification('Registration successful. Please log in.', 'success');
        showLoginForm();
    } else {
        showNotification('Username already exists. Please choose another.', 'error');
    }
}

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('appointment-form').style.display = 'none';
    document.getElementById('medical-history').style.display = 'none';
}

function showAppointmentForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('appointment-form').style.display = 'block';
    document.getElementById('medical-history').style.display = 'none';
}

function scheduleAppointment() {
    const selectedDoctor = document.getElementById('doctor').value;
    const selectedDate = document.getElementById('date').value;

    if (doctorAvailability[selectedDoctor] && doctorAvailability[selectedDoctor].includes(selectedDate)) {
        showNotification('Appointment scheduled successfully!', 'success');
        showMedicalHistory();
    } else {
        showNotification('Selected doctor is not available on the chosen date. Please select another date.', 'error');
    }
}

function showMedicalHistory() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('appointment-form').style.display = 'none';
    document.getElementById('medical-history').style.display = 'block';

    // Display medical history data for the current user
    document.getElementById('medical-history').innerHTML = `<p>${currentUser.medicalHistory}</p>`;
}

function showNotification(message, type) {
    const notificationsDiv = document.getElementById('notifications');
    notificationsDiv.innerHTML = `<div class="${type}">${message}</div>`;
    setTimeout(() => {
        notificationsDiv.innerHTML = '';
    }, 3000);
}
