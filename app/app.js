import './app.styl'

var contentsArray = []
var fader = document.querySelector('.fader')



var showFader = ()=>{
	fader.classList.remove('hidden');
	history.pushState({name: "show"}, "work", "#work");
}

var hideFader = ()=>{
	fader.classList.add('hidden')
	history.pushState({name: "hide"}, "index", "/");
}


var removeContents = (isFirstTime)=>{
	var contents = document.querySelectorAll('.works--item--content')
	for (var i = 0; i < contents.length; i++) {
		var el = contents[i]
		if(isFirstTime) contentsArray.push(el)
		el.parentNode.removeChild(el)
	}
}
removeContents(true)

window.addEventListener('popstate', (e)=>{
	hideFader()
	removeContents()
});

var covers = document.querySelectorAll('.works--item--cover')
for (var a = 0; a < covers.length; a++) {

	var handler = function(target, num){
		removeContents()
		target.parentNode.appendChild(contentsArray[num])
		showFader()
		let closeBtn = document.querySelector('.works--item--content--close')
		closeBtn.addEventListener('click', (event)=>{
			hideFader()
			removeContents()
		})
    }.bind(this, covers[a], a)

	covers[a].addEventListener('click', handler)

}

