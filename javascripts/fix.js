document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a.md-post__action").forEach(function (link) {
    if (link.textContent.trim().startsWith("Back")) {
      link.setAttribute("href", "/");
    }
  });
});