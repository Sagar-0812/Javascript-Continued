    const messages = [
        'Pioneering Since 1850',
        'Global Brand',
        'Trusted Company',
        'Tata Harrier',
        'Tata Nano'
    ];

    let index = 0;
    let charIndex = 0; // To track the current character in the message
    const slide = document.getElementById('text');

    function revealText() {
        if (charIndex < messages[index].length) {
            slide.textContent += messages[index].charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(charInterval); // Stop revealing characters for the current message
            setTimeout(nextMessage, 500); // Wait for 500ms before moving to the next message
        }
    }

    function nextMessage() {
        charIndex = 0; // Reset charIndex for the next message
        index = (index + 1) % messages.length; // Move to the next message
        slide.textContent = '';
        charInterval = setInterval(revealText, 100); 
    }

    let charInterval = setInterval(revealText, 100); 

