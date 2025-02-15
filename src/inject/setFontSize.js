const setFontSize = () => {
    document.body.style.fontSize = '16px';
    const elements = document.querySelectorAll('*');
    elements.forEach((el) => {
        el.style.fontSize = 'inherit';
    });
};

const observer = new MutationObserver(setFontSize);
observer.observe(document.body, { attributes: true, childList: true, subtree: true });

// Run the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setFontSize); 