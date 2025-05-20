document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle")
  const closeMenu = document.getElementById("close-menu")
  const mobileMenu = document.getElementById("mobile-menu")

  if (menuToggle && closeMenu && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active")
      document.body.style.overflow = "hidden"
    })

    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    })

    // Close menu when clicking outside
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  }

  // Tabs functionality
  const tabButtons = document.querySelectorAll(".tab-button")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabName = button.getAttribute("data-tab")

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to current button and content
      button.classList.add("active")
      document.getElementById(`${tabName}-tab`).classList.add("active")
    })
  })

  // Testimonial tabs
  const testimonialTabs = document.querySelectorAll(".testimonial-tab")
  const testimonialContents = document.querySelectorAll(".testimonials-content")

  testimonialTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabName = tab.getAttribute("data-tab")

      // Remove active class from all tabs and contents
      testimonialTabs.forEach((t) => t.classList.remove("active"))
      testimonialContents.forEach((content) => content.classList.remove("active"))

      // Add active class to current tab and content
      tab.classList.add("active")
      document.getElementById(`${tabName}-tab`).classList.add("active")
    })
  })

  // Newsletter form submission
  const newsletterForm = document.getElementById("newsletter-form")
  const toast = document.getElementById("toast")
  const closeToast = document.getElementById("close-toast")

  if (newsletterForm && toast && closeToast) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Show toast notification
      toast.classList.add("show")

      // Clear form
      newsletterForm.reset()

      // Hide toast after 5 seconds
      setTimeout(() => {
        toast.classList.remove("show")
      }, 5000)
    })

    closeToast.addEventListener("click", () => {
      toast.classList.remove("show")
    })
  }
})
