chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      var url = tabs[0].url;
      var readerUrl = 'https://www.contentify.io/reader?url=';

      chrome.tabs.update({url: readerUrl + url});
  });
});
