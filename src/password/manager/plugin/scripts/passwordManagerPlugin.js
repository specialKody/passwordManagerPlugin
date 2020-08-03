//File which orchestrates the password manager plugin

var url;

function setTabUrl(tab) {
    url = tab.url;
}

function handleActiveTab(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, setTabUrl);
    //TODO - Call UserName + PW Storage/Lookup methods
}

function handleUpdatedTab(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        setTabUrl(tab);
    }

    //TODO - Call UserName + PW Storage/Lookup methods
}

//TODO - Create UserName + PW Storage/Lookup methods

chrome.tabs.onActivated.addListener(handleActiveTab);
chrome.tabs.onUpdated.addListener(handleUpdatedTab);
