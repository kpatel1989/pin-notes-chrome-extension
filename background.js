function contextMenuClickHandler(info, tab) {
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
}
chrome.contextMenus.onClicked.addListener(contextMenuClickHandler);
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        "title": "Pin this on the board",
        "id": "pinnote",
        "contexts" : ["selection"]
    });
});