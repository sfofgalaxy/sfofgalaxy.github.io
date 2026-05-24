(function () {
  var toggles = document.querySelectorAll("[data-news-more]");

  toggles.forEach(function (details) {
    var summary = details.querySelector("summary");
    var content = details.querySelector("[data-news-more-content]");
    var duration = 240;

    if (!summary || !content) {
      return;
    }

    var clearAnimation = function () {
      content.style.height = "";
      content.style.opacity = "";
      content.style.overflow = "";
      content.style.transition = "";
      details.classList.remove("is-animating");
    };

    var finish = function (callback) {
      var done = function (event) {
        if (event.target !== content || event.propertyName !== "height") {
          return;
        }
        content.removeEventListener("transitionend", done);
        callback();
      };

      content.addEventListener("transitionend", done);
      window.setTimeout(function () {
        content.removeEventListener("transitionend", done);
        callback();
      }, duration + 80);
    };

    var open = function () {
      details.open = true;
      details.classList.add("is-animating");
      content.style.overflow = "hidden";
      content.style.height = "0px";
      content.style.opacity = "0";

      window.requestAnimationFrame(function () {
        content.style.transition = "height " + duration + "ms ease, opacity 180ms ease";
        content.style.height = content.scrollHeight + "px";
        content.style.opacity = "1";
        finish(clearAnimation);
      });
    };

    var close = function () {
      details.classList.add("is-animating");
      content.style.overflow = "hidden";
      content.style.height = content.scrollHeight + "px";
      content.style.opacity = "1";

      window.requestAnimationFrame(function () {
        content.style.transition = "height " + duration + "ms ease, opacity 160ms ease";
        content.style.height = "0px";
        content.style.opacity = "0";
        finish(function () {
          details.open = false;
          clearAnimation();
        });
      });
    };

    summary.addEventListener("click", function (event) {
      event.preventDefault();

      if (details.classList.contains("is-animating")) {
        return;
      }

      if (details.open) {
        close();
      } else {
        open();
      }
    });
  });
})();
