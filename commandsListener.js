console.log("commandsListener.js running...");

chrome.commands.onCommand.addListener(function(command)
{
	console.debug('command is : ' + command);

	// Develop use : reload extension.
	if (command == 'reload_extension')
		chrome.runtime.reload();
});

