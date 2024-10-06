document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:5501/api/profile');
        if (response.ok) {
            const data = await response.json();
            document.getElementById('email').querySelector('h3').innerText = "Email: " + data.email;
            document.getElementById('username').querySelector('h3').innerText = "Username: " + data.username;
            document.querySelector('#password h2').innerText = data.password;
        } else {
            console.error('Failed to fetch profile information');
        }
    } catch (error) {
        console.error('Error:', error);
    }

    document.querySelector('#username .change-btn').addEventListener('click', () => {
        document.querySelector('#usernameModal').style.display = 'block';
    });

    document.querySelector('#closeUsernameModal').addEventListener('click', () => {
        document.querySelector('#usernameModal').style.display = 'none';
    });

    document.querySelector('#saveUsername').addEventListener('click', async () => {
        const newUsername = document.querySelector('#newUsername').value;
        try {
            const response = await fetch('http://localhost:5501/api/profile/username', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: newUsername })
            });
            if (response.ok) {
                const data = await response.json();
                document.getElementById('username').querySelector('h3').innerText = "Username: " + data.username;
                document.querySelector('#usernameModal').style.display = 'none';
            } else {
                console.error('Failed to update username');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});

document.querySelector('#password .change-btn').addEventListener('click', () => {
    document.querySelector('#passwordModal').style.display = 'block';
});

document.querySelector('#closePasswordModal').addEventListener('click', () => {
    document.querySelector('#passwordModal').style.display = 'none';
});

document.querySelector('#savePassword').addEventListener('click', async () => {
    const currentPassword = document.querySelector('#currentPassword').value;
    const newPassword = document.querySelector('#newPassword').value;
    
    try {
        const response = await fetch('http://localhost:5501/api/profile/password', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ currentPassword, newPassword })
        });
        if (response.ok) {
            alert('Password updated successfully');
            document.querySelector('#passwordModal').style.display = 'none';
        } else {
            const data = await response.json();
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

