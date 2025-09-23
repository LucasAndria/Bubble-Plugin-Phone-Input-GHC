function(instance, properties) {
    const input = document.createElement("input");
    input.style.width = `${instance.canvas.width()}px`;
    input.style.height = `${instance.canvas.height()}px`;
    input.type = "tel";
    
    instance.data.htmlInput = input;

    instance.canvas.append(input);

    instance.data.phoneInput = window.intlTelInput(input, {
        loadUtils: () =>
            import(
            "https://cdn.jsdelivr.net/npm/intl-tel-input@25.10.10/build/js/utils.js"
            ),
          countryOrder: ["mg", "gb", "fr", "de", "it", "es"],
          excludeCountries: ["ca", "au"],
          initialCountry: "us",
          dropdownContainer: document.body,
          showFlags: true,
          separateDialCode: true,
          StrictMode: true,
    });

    instance.data.phoneInput.setNumber("(201) 555-0123");
    canvas.css("overflow", "visible");
}
