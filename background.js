
var action_url = "https://sats.itea.ntnu.no/sso-wrapper/web/wrapper?target=itslearning";
chrome.extension.sendRequest({redirect: action_url}); // send message to redirect
