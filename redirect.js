chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      var url = tabs[0].url;
      var readerUrl = 'http://contentify.herokuapp.com/reader?url=';

      chrome.tabs.update({url: readerUrl + url});
  });
});
