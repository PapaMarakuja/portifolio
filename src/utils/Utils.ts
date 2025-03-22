/**
 * Scrolls the window to the top with a smooth animation
 * @param {number} duration - The duration of the scroll animation in milliseconds
 */
export const scrollToTop = (duration: number = 500): void => {
  const scrollHeight = window.scrollY;
  const scrollStep = Math.PI / (duration / 15);
  const cosParameter = scrollHeight / 2;

  let scrollCount = 0;
  let scrollMargin;

  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      scrollCount += 1;
      scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
      window.scrollTo(0, scrollHeight - scrollMargin);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
};

/**
 * Hook to scroll to top when component mounts
 * Useful for page transitions
 */
export const useScrollToTop = (): void => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 10);
};