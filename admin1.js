function setActive(element) {
    // Remove "active" from all items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add "active" to clicked item
    element.classList.add('active');
}
