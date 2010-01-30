$(document).ready(function() {
  setup_lucky_tooltip();
  setup_bookmarklet_tooltip();
  set_focus_on_url_input();
  setup_tweets();
  setInterval("fetch_tweets($('.twitStream'))", 30000);
});

function set_focus_on_url_input() {
  $('#vurl_url').focus();
}

function setup_bookmarklet_tooltip() {
  $('#bookmarklet .help').simpletip({
    content: "Drag the 'Vurlify!' button to your toolbar to vurlify any page address while you're browsing",
    fixed: false
  });
}

function setup_lucky_tooltip() {
  $('.lucky_link').simpletip({
    content: "Click to view a random vurl from the archives!",
    fixed: false
  });
}
function setup_tweets() {
  showTweetLinks=showTweetLinks.toLowerCase();
  if(showTweetLinks.indexOf('all')!=-1)
    showTweetLinks='reply,view,rt';
  $('.twitStream').each(function(){
    fetch_tweets(this);
  });
}
