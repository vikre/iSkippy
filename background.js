/*chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' into something');
  chrome.tabs.executeScript({
    code: 'document.body.innerHTML = "<p style=\"text-align:center; font-size:88px;\">One way to itsLearning</p>";'
  });
});*/

var hack = '<div class="wrapper"><a class="its" href="https://sats.itea.ntnu.no/sso-wrapper/web/wrapper?target=itslearning">One way to itsLearning</a></div>';

/*var hack1 = '<a href="#">LOL</a>';*/
/*Magic!*/
 $("body").html(hack);
