chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    window.open("https://contentify.herokuapp.com/reader?url=" + url);
    // window.open("http://localhost/scrape?url=" + url);
});
