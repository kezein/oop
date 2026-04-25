document.addEventListener("DOMContentLoaded", () => {
  // 1. Create an array of 100 thresholds for smooth, frame-by-frame tracking
  const scrollThresholds = [];
  for (let i = 0; i <= 1.0; i += 0.01) {
    scrollThresholds.push(i);
  }

  // 2. Create the new Scroll-Linked Observer
  const scrollBlurObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // intersectionRatio is a number from 0 (just appeared) to 1 (fully visible)
        const ratio = entry.intersectionRatio;

        // Map the ratio to a blur amount. 
        // We multiply by 2 so it becomes fully clear when the element is 50% visible, 
        // rather than making you scroll past the whole thing to read it.
        let clarityProgress = Math.min(ratio * 2, 1); 
        
        // Calculate current blur: Starts at 15px, goes down to 0px
        let currentBlur = 15 - (15 * clarityProgress);

        // Apply the blur dynamically to the element
        entry.target.style.filter = `blur(${currentBlur}px)`;

        // Trigger the upward slide and fade-in once it crosses a small threshold
        if (ratio > 0.10 && !entry.target.classList.contains("show")) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: scrollThresholds, 
      rootMargin: "0px 0px 0px 0px"
    }
  );

  // 3. Find and observe all elements
  const fadeElements = document.querySelectorAll(".fadeIntersect");
  fadeElements.forEach((el) => {
    scrollBlurObserver.observe(el);
  });
});