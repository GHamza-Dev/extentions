const logger = document.createElement("div");
logger.classList.add("logger");

window.addEventListener("mouseover", (e) => {
   let vid = document.querySelector('video');
  logger.innerHTML = `
        <p>href: ${e.target.href}<p>
        <p>src: ${e.target.src}<p>
        <p>Tag name: ${e.target.localName}<p>
        <p>Vid: ${vid}<p>
    `;
    
  document.body.append(logger);
  console.log(e.target.href);
});