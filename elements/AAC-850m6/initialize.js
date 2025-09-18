function(instance, properties) {
  window.canvasPhoneInputCount = (window.canvasPhoneInputCount ?? 0) + 1;

  const randomId = Math.floor((1 + Math.random()) * 10000)
    .toString(16)
    .substring(1);

  instance.data.id = `input-${randomId}`;

  const htmlTelInput = document.createElement("input");

  htmlTelInput.setAttribute("id", instance.data.id);
  htmlTelInput.setAttribute("type", "tel");
  htmlTelInput.setAttribute("name", "phone");
        
  const canvas = instance.canvas;
  canvas.append(htmlTelInput);
  canvas.css("overflow", "visible");
  canvas.css("z-index", 100 - window.canvasPhoneInputCount);

  instance.data.htmlTelInput = htmlTelInput;
}
