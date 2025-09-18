function(instance, properties, context) {
    var backgorund = properties.backgorund;
    var border_radius = properties.border_radius;
    var border_color = properties.border_color;
    var border_width = properties.border_width;
    var font_size = properties.font_size;
    var font_color = properties.font_color;
    const htmlTelInput = instance.data.htmlTelInput;
    instance.data.telInputInstance = window.intlTelInput(htmlTelInput, {
      utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });
    var id_input = instance.data.id;
    
    
    htmlTelInput.addEventListener("keyup", function () {
      update_value(instance);
    });
    
    htmlTelInput.addEventListener("countrychange", function () {
      update_value(instance);
    });
    
    function loadintlinput(){
      const telInputInstance = instance.data.telInputInstance;
      const currentText = telInputInstance.getNumber();
      
      if (typeof intlTelInputUtils === "undefined") {
        setTimeout(() => {
          loadintlinput(instance, properties);
        }, 100);

        return;
      }
      
      if (typeof currentText === "string") {
        telInputInstance.setNumber(currentText);
        update_value(instance);
      }
    }
    
    function update_value(instance){
        const telInputInstance = instance.data.telInputInstance;
        const value_number = telInputInstance.getNumber(
          intlTelInputUtils.numberFormat.E164
        );
        instance.publishState("value", value_number);
    }
    
    
    instance.canvas.append(`
	<style>
		.${id_input}.iti {
          width: 100%;
        }

		.${id_input} .iti__country-list {
            border-radius: ${border_radius};
            border-color: ${border_color};
        }

		.${id_input} .iti__selected-flag {
          background-color: red;
          border-radius: ${border_radius} 0px 0px ${border_radius};
        }
        input#${id_input}{
            height: ${properties.bubble.height()}px;
            font-size: ${font_size};
            color: ${properties.font_color};
            width: ${properties.bubble.width()}px;
			border: ${border_width} solid ${border_color};
			border-radius: ${border_radius};
			background:${properties.backgorund};
        }
		.${id_input} .iti__country {
            padding:12px 18px;
        }
  
        .${id_input} .iti__country:hover,
        .${id_input} .iti__highlight,
        .${id_input} .iti__active {
         background-color: #fafafa;
        }
	</style>
	`);
}