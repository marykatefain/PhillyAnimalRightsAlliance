function showDiv() {
  document.getElementById('hidden_form').style.display = "block";
}

function hideDiv() {
  document.getElementById('hidden_form').style.display = "none";
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {

    var data = JSON.parse(this.responseText);

    var entries = data.feed.entry;

    var events = [];

    for (var i=0; i<entries.length; i++) {
      var entry = entries[i];
      events.push({
        "id": entry.gsx$id.$t,
        "title": entry.gsx$titleofevent.$t,
        "date": entry.gsx$date.$t,
        "start": entry.gsx$starttime.$t,
        "end": entry.gsx$endtime.$t,
        "location": entry.gsx$location.$t,
        "class": entry.gsx$typeofevent.$t,
        "url": entry.gsx$date.$t,
        "contact": entry.gsx$contact.$t,
        "details": entry.gsx$details.$t
      });
    }
    console.log(events);

    var x = "testing 123";

    document.getElementById('calendar').innerHTML = x;


  }

};
xhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1nRQfilLPP1Cm2nO2RP9vnmVHRbDWTrl5bBILJvQC2QA/1/public/values?alt=json", true);
xhttp.send();
