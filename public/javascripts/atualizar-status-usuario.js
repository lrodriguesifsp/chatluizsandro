// Function to handle status update form submission
async function handleStatusUpdateFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userId = formData.get('userId');
    const newStatus = formData.get('newStatus');

    try {
        const response = await fetch(`https://chatluizsandro-production.up.railway.app/api/users/status/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: newStatus }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        event.target.reset();

        window.location = "/";
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Set up form submission handlers
document.getElementById('update-status-form').addEventListener('submit', handleStatusUpdateFormSubmit);