document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:5501/api/profile');
        if (response.ok) {
            const data = await response.json();
            document.getElementById('email').querySelector('h2').innerText = data.email;
            document.getElementById('username').querySelector('h2').innerText = data.username;
            document.querySelector('#password h2').innerText = data.password;
        } else {
            console.error('Failed to fetch profile information');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
