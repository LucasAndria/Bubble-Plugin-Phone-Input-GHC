function(instance, properties) {
  const input = document.createElement("input");
  input.type = "tel";
  input.style.width = `${instance.canvas.width()}px`;
  input.style.height = `${instance.canvas.height()}px`;
  instance.data.htmlInput = input;

  instance.canvas.append(input);

  input.addEventListener("input", () => instance.data.handleResponse(instance));
  input.addEventListener("countrychange", () =>
    instance.data.handleResponse(instance)
  );

  instance.data.handleResponse = function (instance) {
    const iti = instance?.data?.phoneInput;
    if (!iti) return;

    const intlValue = iti.getNumber();
    let natValue =
      iti.getNumber(window.intlTelInput.utils.numberFormat.NATIONAL) || "";

    const hasError = !iti.isValidNumber();
    const countryData = iti.getSelectedCountryData();
    const countryCode = countryData ? countryData.dialCode : null;

    instance.publishState({
      international_value: intlValue,
      national_value: natValue,
      has_error: hasError,
      country_code: countryCode,
    });
  };

  instance.data.setDefaultValue = function (instance, defaultNumber) {
    if (instance.data.phoneInput) {
      instance.data.phoneInput.setNumber(defaultNumber || "");
      instance.data.handleResponse(instance);
    }
  };
}
