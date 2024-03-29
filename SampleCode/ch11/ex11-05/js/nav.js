//導覽列
function navFunction() {
	var topNav = document.getElementById('myTopnav');
	if (topNav.className === 'nav') {
	  topNav.className += ' responsive';
	} else {
	  topNav.className = 'nav';
	}
}