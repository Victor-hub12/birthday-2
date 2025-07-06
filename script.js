// Add sparkle effect on click
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.bouncing-header h1');
    const footer = document.querySelector('.birthday-footer');
    
    // Add click effect to header
    header.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {f
            this.style.animation = 'bounce 2s infinite';
        }, 100);
        
        // Create sparkle effect
        createSparkles(this);
    });
    
    // Add hover effect to footer
    footer.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    footer.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    function createSparkles(element) {
        for (let i = 0; i < 6; i++) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position ='absolute';
            sparkle.style.fontSize = '1.5rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.animation = 'sparkle 2s ease-out backwards';
            
            const rect = element.getBoundingClientRect();
            sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    }
    
    // Add sparkle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% {
                opacity: 1;
                transform: translateY(0) scale(0);
            }
            50% {
                opacity: 1;
                transform: translateY(-20px) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-40px) scale(0);
            }
        }
    `;
    document.head.appendChild(style);
});



document.addEventListener("mousemove", () => {
    createStar();
});

function createStar() {
    const star = document.createElement("span");
    star.className = "star";
    star.innerHTML = "&#11088;"; // Unicode star

    // Random horizontal position across the viewport
    star.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(star);

    // Remove the star after animation
    star.addEventListener("animationend", () => {
        star.remove();
    });
}// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Select the header and footer elements
    const header = document.querySelector('.bouncing-header h1');
    const footer = document.querySelector('.birthday-footer');
    
    // Add a click event to the header for bounce and sparkle effect
    header.addEventListener('click', function() {
        // Temporarily remove the bounce animation to replay it
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'bounce 2s infinite';
        }, 100);
        
        // Create sparkles over the header when clicked
        createSparkles(this);
    });
    
    // Add a hover effect to the footer (slight scale up)
    footer.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    // Reset the footer scale when mouse leaves
    footer.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Function to create sparkles at random positions over a given element
    function createSparkles(element) {
        for (let i = 0; i < 6; i++) {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨'; // Unicode sparkle emoji
            sparkle.style.position ='absolute';
            sparkle.style.fontSize = '1.5rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.animation = 'sparkle 2s ease-out backwards';
            
            // Position the sparkle randomly within the element's bounding box
            const rect = element.getBoundingClientRect();
            sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            
            document.body.appendChild(sparkle);
            
            // Remove the sparkle after 1 second
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    }
    
    // Inject sparkle animation CSS into the page
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% {
                opacity: 1;
                transform: translateY(0) scale(0);
            }
            50% {
                opacity: 1;
                transform: translateY(-20px) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-40px) scale(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// Listen for mouse movement anywhere on the page to create falling stars
document.addEventListener("mousemove", () => {
    createStar();
});

// Function to create a falling star at a random horizontal position
function createStar() {
    const star = document.createElement("span");
    star.className = "star";
    star.innerHTML = "&#11088;"; // Unicode star emoji

    // Set a random horizontal position across the viewport
    star.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(star);

    // Remove the star after its animation ends
    star.addEventListener("animationend", () => {
        star.remove();
    });
}

















