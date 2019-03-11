var images = new Array()
function preload() {
	for (i = 0; i < preload.arguments.length; i++) {
		images[i] = new Image()
		images[i].src = preload.arguments[i]
	}
}
preload(
	{% for project in site.projects %}
		"{{project.main_image_url}}"
	{% endfor %}
)