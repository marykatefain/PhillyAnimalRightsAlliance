function showDiv() {
  document.getElementById('hidden_form').style.display = "block";
}

function hideDiv() {
  document.getElementById('hidden_form').style.display = "none";
}


var response = jQuery.ajax('https://spreadsheets.google.com/feeds/list/1nRQfilLPP1Cm2nO2RP9vnmVHRbDWTrl5bBILJvQC2QA/1/public/values?alt=json');

var data = JSON.parse(response.responseText);

var entries = data.feed.entry;

var events = [];

for (var i=0; i<entries.length; i++) {
  var entry = entries[i];
  events.push({
    "id": entry.gsx$id.$t,
    "title": entry.gsx$titleofevent.$t,
    "date": entry.gsx$starttime.$t,
    // TODO: fill this out
  });
}``
