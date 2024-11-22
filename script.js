document.addEventListener("DOMContentLoaded", () => {
    const manageDetailsState = () => {
      const detailsElements = document.querySelectorAll(".footer-section details");
      if (window.innerWidth >= 768) {
        detailsElements.forEach((details) => {
          details.setAttribute("open", "");
          details.style.pointerEvents = "none"; // Disable interaction on larger screens
        });
      } else {
        detailsElements.forEach((details) => {
          details.removeAttribute("open");
          details.style.pointerEvents = "auto"; // Restore interaction on smaller screens
        });
      }
    };
  
    // Initial check on load
    manageDetailsState();
  
    // Reapply on window resize
    window.addEventListener("resize", manageDetailsState);
  });
  

  // Add this JavaScript code
window.addEventListener('scroll', function() {
  // Get all mega menus
  const megaMenus = document.querySelectorAll('.mega-menu');
  
  // Hide all mega menus
  megaMenus.forEach(menu => {
      menu.style.opacity = '0';
      menu.style.visibility = 'hidden';
  });
});
