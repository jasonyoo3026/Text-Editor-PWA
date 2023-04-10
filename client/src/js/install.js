const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

  // Store the triggered events
  window.deferredPrompt = event;

  // Remove the hidden class from the button.
  butInstall.classList.toggle('hidden', false);
});
  

// TODO: Implement a click event handler on the `butInstall` element

butInstall.addEventListener('click', async () => {
  
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
}); 


// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {
//   // Prevent the default behavior of Chrome to show the prompt
//   event.preventDefault();
//   // Store the event for later use
//   deferredPrompt = event;
//   // Show the install button
//   butInstall.style.display = 'block';
// });


// // TODO: Implement a click event handler on the `butInstall` element

// butInstall.addEventListener('click', async () => {
//   // Hide the install button
//   butInstall.style.display = 'none';
//   // Show the prompt
//   if (deferredPrompt) {
//     deferredPrompt.prompt();
//     // Wait for the user's response
//     const choiceResult = await deferredPrompt.userChoice;
//     console.log(`User response: ${choiceResult.outcome}`);
//     // Clear the deferredPrompt variable
//     deferredPrompt = null;
//   }
// });

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {
// console.log('App installed:', event);
// });