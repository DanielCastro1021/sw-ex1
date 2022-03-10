if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js', { scope: './' })
    .then((reg) => {
      console.log('Registration suceeded. Scope is' + reg.scope);
    })
    .catch((err) => {
      console.log('Registration failed with' + error);
    });
}
