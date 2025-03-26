async function copyContent(file, btn) {
    try {
        let response = await fetch(file);
        let text = await response.text();
        await navigator.clipboard.writeText(text);
        
        
        let message = btn.nextElementSibling;
        message.style.display = 'block';
        
        
        setTimeout(() => message.style.display = 'none', 1500);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
}