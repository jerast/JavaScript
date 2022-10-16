const button = document.getElementById("btn");

button.addEventListener("click", async () => {
    const module = await import("./export.js");
    module.hello();
});