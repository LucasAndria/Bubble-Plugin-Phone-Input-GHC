function(instance, properties) {
    instance.canvas.append(`<div style="box-sizing: border-box; padding: 0px 15px; display: flex; align-items: center; height: ${properties.bubble.height()}px; width: ${properties.bubble.width()}px;
							border-radius: ${properties.border_radius}; border: ${properties.border_width} solid ${properties.border_color}; background:${properties.backgorund}">
  								<span style="color: #E5E8EB; font-size:${properties.font_size};">Phone Number</span>
							</div>`);
}