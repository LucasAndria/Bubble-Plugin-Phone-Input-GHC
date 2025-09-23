function(instance, properties, context) {
  if (instance.data.phoneInput) {
    instance.data.phoneInput.destroy();
    instance.data.phoneInput = null;
  }

  // Define default options.
  const defaultOptions = {
    initialCountry: "us",
    separateDialCode: true,
    dropdownContainer: document.body,
    strictMode: true,
    loadUtils: () =>
      import(
        "https://cdn.jsdelivr.net/npm/intl-tel-input@25.10.10/build/js/utils.js"
      ),
  };

  // Merge default options with any provided properties.
  const options = { ...defaultOptions, ...properties };

  instance.data.phoneInput = window.intlTelInput(
    instance.data.htmlInput,
    options
  );

  // Attendre que les utils soient bien chargés
  instance.data.phoneInput.promise.then(() => {
    instance.data.setDefaultValue(instance, "(201) 555-0123");
    instance.data.handleResponse(instance);
  });
}