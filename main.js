if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/ex1/sw.js', { scope: '/ex1/.' })
    .then((reg) => {
      console.log('Registration suceeded. Scope is' + reg.scope);
    })
    .catch((err) => {
      console.log('Registration failed with' + error);
    });
}
