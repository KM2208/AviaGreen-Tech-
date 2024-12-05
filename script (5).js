const menuBtn = document.getElementById("menu-Btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

let isOpen = false; // Track if the menu is open or not

menuBtn.addEventListener("click", () => {
  // Toggle the navigation menu
  navLinks.classList.toggle("open");

  // Toggle the icon based on whether the menu is open or closed
  if (isOpen) {
    menuBtnIcon.setAttribute("class", "ri-menu-3-line"); // Change to menu icon
  } else {
    menuBtnIcon.setAttribute("class", "ri-close-line"); // Change to close icon
  }

  isOpen = !isOpen; // Flip the isOpen state
});

// Close the menu when clicking on any nav link (optional)
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
  isOpen = false;
});

// Optionally, highlight the active section (e.g., Home, Services) when clicked
const navLinksItems = document.querySelectorAll('.nav_links li a');

navLinksItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all links
    navLinksItems.forEach(link => link.classList.remove('active'));
    
    // Add 'active' class to the clicked link
    item.classList.add('active');
  });
});

// Example: Log when an icon is clicked (optional)
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    console.log(`Redirecting to: ${icon.href}`);
  });
});