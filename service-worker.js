self.addEventListener("install", e => {
  console.log("Service Worker instalado");
});

self.addEventListener("fetch", e => {
  // no hacemos nada aún (modo seguro)
});