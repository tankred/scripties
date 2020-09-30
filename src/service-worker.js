if('serviceWorker' in navigator) {
  const registerServiceWorker = async () =>  
  navigator.serviceWorker.register('./service-worker.js');
  const registration = await registerServiceWorker();
}
