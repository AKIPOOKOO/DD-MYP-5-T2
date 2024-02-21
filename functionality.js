console.log('functionality.js is running');

// Use DOMContentLoaded event to ensure the code runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form and buttons
    const identityForm = document.getElementById('identity-form');
    var localButton = document.querySelector('#local-buttonn');
    console.log(localButton)
    const newcomerButton = document.getElementById('newcomer-button');

    // Initialize variables to store user input
    let hobbies = '';
    let personality = '';
    let skills = '';

    // Add event listener for the local button
    localButton.addEventListener('click', () => {
        // Get user input from the form
        hobbies = document.getElementById('hobbies').value;
        personality = document.getElementById('personality').value;
        skills = document.getElementById('skills').value;

        // Generate identity for local user
        const identity = `Local Person - Hobbies: ${hobbies}, Personality: ${personality}, Skills: ${skills}`;

        // Save the identity to localStorage
        localStorage.setItem('userIdentity', identity);
        console.log(identity)

        // // Redirect to pairing.html
        window.location.href = 'pairing.html';
    });

    // Add event listener for the newcomer button
    newcomerButton.addEventListener('click', () => {
        // Get user input from the form
        hobbies = document.getElementById('hobbies').value;
        personality = document.getElementById('personality').value;
        skills = document.getElementById('skills').value;

        // Generate identity for newcomer user
        const identity = `Newcomer - Hobbies: ${hobbies}, Personality: ${personality}, Skills: ${skills}`;

        // Save the identity to localStorage
        localStorage.setItem('userIdentity', identity);

        // Redirect to pairing.html
        window.location.href = 'pairing.html';
    });

    // Function to save user identity to localStorage
    function saveUserIdentity(identity) {
        const name = document.getElementById('name').value;
        const hobbies = document.getElementById('hobbies').value;
        const personality = document.getElementById('personality').value;
        const skills = document.getElementById('skills').value;

        const userObject = {
            name,
            identity,
            hobbies,
            personality,
            skills,
        };

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userObject);
        localStorage.setItem('users', JSON.stringify(users));

        // Redirect to pairing.html
        window.location.href = 'pairing.html';

        // Example: Log user data here
        console.log('User data saved:', userObject);
    }

    // Retrieve user data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Identify the user's own identity (e.g., "Local" or "Newcomer")
    const userIdentity = users.length > 0 ? users[users.length - 1].identity : '';

    // Filter users with the opposite identity
    const oppositeIdentity = userIdentity === 'Local' ? 'Newcomer' : 'Local';
    const oppositeUsers = users.filter(user => user.identity === oppositeIdentity);

    // Create user containers and display descriptions
    const userContainer = document.getElementById('user-container');
    oppositeUsers.forEach(user => {
        const userDescription = document.createElement('div');
        userDescription.className = 'user-description';
        userDescription.innerHTML = `
            <h3>${user.name}</h3>
            <p>Identity: ${user.identity}</p>
            <p>Hobbies: ${user.hobbies}</p>
            <p>Personality: ${user.personality}</p>
            <p>Skills: ${user.skills}</p>
        `;
        userContainer.appendChild(userDescription);
    });
});
