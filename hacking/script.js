document.addEventListener("DOMContentLoaded", () => {
    const contents = document.querySelectorAll(".content");
    
    // Hide all content initially
    contents.forEach(content => {
        content.classList.remove("visible");
    });

    const onScroll = () => {
        contents.forEach(content => {
            const rect = content.getBoundingClientRect();
            const visibleThreshold = rect.height * 0.4;
            const isVisible = 
                rect.top < window.innerHeight - visibleThreshold && 
                rect.bottom > visibleThreshold;
            
            if (isVisible) {
                content.classList.add("visible");
            } else {
                content.classList.remove("visible");
            }
        });
    };

    // Trigger on scroll and on page load
    window.addEventListener("scroll", onScroll);
    
    // Call onScroll after a slight delay to ensure proper calculation
    setTimeout(onScroll, 400);
    
});