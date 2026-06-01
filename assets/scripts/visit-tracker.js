(function () {
  var section = document.querySelector("[data-clustrmaps-tracker]");
  if (!section) return;

  var probeSrc = section.getAttribute("data-probe-src");
  var widgetSrc = section.getAttribute("data-widget-src");
  var widget = section.querySelector("[data-clustrmaps-widget]");
  var timeout = 3000;
  var settled = false;

  function hideTracker() {
    section.hidden = true;
    if (widget) {
      widget.textContent = "";
    }
  }

  function showTracker() {
    if (!widget || !widgetSrc) {
      hideTracker();
      return;
    }

    section.hidden = false;

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "clustrmaps";
    script.async = true;
    script.src = widgetSrc;
    script.onerror = hideTracker;
    widget.appendChild(script);
  }

  function finish(callback) {
    if (settled) return;
    settled = true;
    window.clearTimeout(timer);
    callback();
  }

  if (!probeSrc || !widgetSrc || !widget) {
    hideTracker();
    return;
  }

  var timer = window.setTimeout(function () {
    finish(hideTracker);
  }, timeout);

  var probe = new Image();
  probe.onload = function () {
    finish(function () {
      if (probe.naturalWidth > 0 && probe.naturalHeight > 0) {
        showTracker();
      } else {
        hideTracker();
      }
    });
  };
  probe.onerror = function () {
    finish(hideTracker);
  };
  probe.src = probeSrc;
})();
