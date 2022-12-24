const logger = document.createElement("div");
logger.classList.add("logger");

window.addEventListener("mouseover", (e) => {
  var styles = window.getComputedStyle(e.target);

  logger.innerHTML = `
        <h1>${styles.zIndex}</h1>
    `;

  document.body.append(logger);
});