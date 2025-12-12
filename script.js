// script.js – futuristic interactions for Pin Quan Lu portfolio
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  /* ========== 1. Dark mode toggle ========== */
  const themeToggle = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("theme"); // "dark" | "light" | null

  if (!storedTheme || storedTheme === "dark") {
    body.classList.remove("light-mode");
  } else {
    body.classList.add("light-mode");
  }

  const syncThemeLabel = () => {
    if (!themeToggle) return;
    const isLight = body.classList.contains("light-mode");
    themeToggle.textContent = isLight ? "Dark mode" : "Light mode";
  };
  syncThemeLabel();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-mode");
      const isLight = body.classList.contains("light-mode");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      syncThemeLabel();
    });
  }

  /* ========== 2. Back to top button ========== */
  const backTop = document.getElementById("back-to-top");

  if (backTop) {
    const handleScroll = () => {
      if (window.scrollY > 220) backTop.classList.add("show");
      else backTop.classList.remove("show");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    backTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ========== 3. Contact form validation ========== */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
      const successMsg = document.getElementById("success-message");

      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      // reset styles
      [nameInput, emailInput, messageInput].forEach((el) => {
        if (!el) return;
        el.style.border = "1px solid rgba(148,163,184,0.7)";
      });

      if (!nameInput.value.trim()) {
        alert("Please enter your name.");
        nameInput.style.border = "2px solid #fb7185";
        return;
      }
      if (!emailInput.value.trim()) {
        alert("Please enter your email.");
        emailInput.style.border = "2px solid #fb7185";
        return;
      }
      if (!emailPattern.test(emailInput.value.trim())) {
        alert("Please enter a valid email.");
        emailInput.style.border = "2px solid #fb7185";
        return;
      }
      if (!messageInput.value.trim()) {
        alert("Please enter a message.");
        messageInput.style.border = "2px solid #fb7185";
        return;
      }

      // 模拟提交成功
      contactForm.style.display = "none";
      if (successMsg) {
        successMsg.classList.remove("hidden");
        successMsg.textContent = "Your message has been sent. (demo)";
      }
    });
  }

  /* ========== 4. Optional: intro “Read more” (if present) ========== */
  const toggleMore = document.getElementById("toggle-more");
  const moreText = document.getElementById("more-text");
  if (toggleMore && moreText) {
    toggleMore.addEventListener("click", (e) => {
      e.preventDefault();
      const hidden = moreText.classList.contains("hidden");
      moreText.classList.toggle("hidden", !hidden);
      toggleMore.textContent = hidden ? "Read less" : "Read more";
    });
  }

  /* ========== 5. Mouse tilt effect for elements with [data-tilt] ========== */
  const tiltEls = Array.from(document.querySelectorAll("[data-tilt]"));
  if (tiltEls.length > 0) {
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mouseX = (e.clientX / w - 0.5) * 2; // -1 ~ 1
      mouseY = (e.clientY / h - 0.5) * 2;

      tiltEls.forEach((el) => {
        const depth = parseFloat(el.dataset.tiltDepth || "1");
        const rotateX = -mouseY * 8 * depth;
        const rotateY = mouseX * 10 * depth;
        el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
      });
    });

    window.addEventListener("mouseleave", () => {
      tiltEls.forEach((el) => {
        el.style.transform = "rotateX(0deg) rotateY(0deg)";
      });
    });
  }

  /* ========== 6. Drag-to-scroll rail ========== */
  const rail = document.querySelector("[data-draggable]");
  if (rail) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const startDrag = (pageX) => {
      isDown = true;
      rail.classList.add("is-dragging");
      startX = pageX - rail.offsetLeft;
      scrollLeft = rail.scrollLeft;
    };

    const moveDrag = (pageX) => {
      if (!isDown) return;
      const x = pageX - rail.offsetLeft;
      const walk = (x - startX) * 1.1; // scroll speed
      rail.scrollLeft = scrollLeft - walk;
    };

    const stopDrag = () => {
      isDown = false;
      rail.classList.remove("is-dragging");
    };

    // Mouse
    rail.addEventListener("mousedown", (e) => startDrag(e.pageX));
    rail.addEventListener("mousemove", (e) => moveDrag(e.pageX));
    rail.addEventListener("mouseleave", stopDrag);
    rail.addEventListener("mouseup", stopDrag);

    // Touch
    rail.addEventListener("touchstart", (e) => {
      const t = e.touches[0];
      if (!t) return;
      startDrag(t.pageX);
    });

    rail.addEventListener("touchmove", (e) => {
      const t = e.touches[0];
      if (!t) return;
      moveDrag(t.pageX);
    });

    rail.addEventListener("touchend", stopDrag);
    rail.addEventListener("touchcancel", stopDrag);
  }

  /* ========== 7. Scroll-reveal for .reveal sections ========== */
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  if (revealEls.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // 如果浏览器不支持，直接显示
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
});
