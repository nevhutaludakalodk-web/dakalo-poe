document.addEventListener('DOMContentLoaded', () => {
    const enquiryForm = document.querySelector('.enquiry-form');
    if (!enquiryForm) return;

    enquiryForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const enquiryType = document.getElementById('enquiry-type').value;
        const program = document.getElementById('program-interest').value;

        const saPhoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
        if (!saPhoneRegex.test(phone.replace(/\s+/g, ''))) {
            alert('Please enter a valid South African phone number (e.g., 015 291 0000 or 082 123 4567).');
            return;
        }

        let estimationDetails = "";
        switch (enquiryType) {
            case 'volunteer':
                estimationDetails = "<strong>Status:</strong> Immediate Placement Available.<br><strong>Orientation:</strong> Weekly Saturdays at 09:00 AM.";
                break;
            case 'sponsor':
                estimationDetails = "<strong>Tier Options:</strong> Gold (R10,000/mo feeds 100 families), Silver (R5,000/mo), Bronze (R2,000/mo). Section 18A Tax Certificate issued.";
                break;
            case 'donation':
                estimationDetails = "<strong>Impact:</strong> R50 provides 25 warm meals. Banking details sent to your email.";
                break;
            case 'assistance':
                estimationDetails = "<strong>Processing Time:</strong> 24–48 Hours. Social Worker consultation will be scheduled.";
                break;
            default:
                estimationDetails = "Request logged successfully.";
        }

        let responseCard = document.getElementById('enquiry-response');
        if (!responseCard) {
            responseCard = document.createElement('div');
            responseCard.id = 'enquiry-response';
            enquiryForm.parentNode.appendChild(responseCard);
        }
        
        responseCard.style.display = 'block';
        responseCard.innerHTML = `
            <div style="background-color: #eef9f2; border: 2px solid #27ae60; padding: 20px; border-radius: 8px; margin-top: 20px;">
                <h3 style="color: #27ae60; margin-top:0;">Enquiry & Application Processed</h3>
                <p><strong>Thank you, ${name}!</strong> Your submission has been received.</p>
                <ul>
                    <li><strong>Enquiry Category:</strong> ${enquiryType.toUpperCase()}</li>
                    <li><strong>Selected Program:</strong> ${program.toUpperCase()}</li>
                    <li><strong>Details & Costing:</strong> ${estimationDetails}</li>
                    <li><strong>Confirmation Email:</strong> Sent to ${email}</li>
                </ul>
                <p>Our team will contact you shortly on <strong>${phone}</strong>.</p>
            </div>
        `;
        enquiryForm.reset();
    });
});
