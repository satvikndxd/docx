document.getElementById('docForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const topic = document.getElementById('topic').value;
    const structure = document.getElementById('structure').value;
    const custom_structure = document.getElementById('custom_structure').value;
    const num_pages = document.getElementById('num_pages').value;

    // Create a payload to send to the server
    const payload = {
        topic,
        structure,
        custom_structure,
        num_pages
    };

    try {
        const response = await fetch('/generate_document', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Trigger file download
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'generated.docx';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error:', error);
        alert('Error generating document: ' + error.message);
    }
});
