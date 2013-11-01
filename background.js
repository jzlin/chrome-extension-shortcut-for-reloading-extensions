console.log('background.js running...');

// Browser_Action_Click_Event
function Browser_Action_Click_Event(tabs) {
	console.count('browser action click');
	if (typeof clickCount != 'undefined') {
		clickCount++;
	}
	else {
		clickCount = 1;
	}
	if (clickCount <= 1) {
		alert('click count: ' + clickCount + '\n\nClose dialog and click button again.');
	}
	else {
		alert('click count: ' + clickCount + '\n\nPress Ctrl + Shift + Q to reload extension.\nYou can note that the click count has reset.');
	}
}
chrome.browserAction.onClicked.addListener(Browser_Action_Click_Event);