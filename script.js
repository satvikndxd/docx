document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('documentForm');

    form.onsubmit = async function(event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(this);

        try {
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                // Handle non-2xx HTTP responses
                const errorText = await response.text(); // Get error response text
                throw new Error(`Network response was not ok: ${response.status} - ${errorText}`);
            }

            // Assuming the response is JSON
            const data = await response.json();
            console.log(data); // Handle the data from the response

            // Optionally, update the UI with the response data
            document.getElementById('result').innerText = 'Document generated successfully!';
        } catch (error) {
            console.error('Error:', error);
            alert('Error generating document: ' + error.message);
        }
    };
});

