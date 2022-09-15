// JavaScript Document

function crossfade(cfid){
	var button = document.getElementById("crossfade-btn-"+cfid);
	var image = document.getElementById("crossfade-img-"+cfid);
	var button_group = button.parentElement.children;
	var image_group = image.parentElement.children;
	
	for(var i=0; i<button_group.length; i++){
		button_group[i].disabled = false;
	}

	for(var i=0; i<image_group.length; i++){
		image_group[i].classList.remove("crossfade-show");
	}
	
	button.disabled = true;
	image.classList.add("crossfade-show");
}
