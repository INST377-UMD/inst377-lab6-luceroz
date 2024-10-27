function createMap(){
    var map = L.map('map').setView([32, -106.53], 3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
for (let i = 1; i < 4; i++) {
    let latt = getRandomInRange(30, 35, 3);
    let longet = getRandomInRange(-90, -100, 3);

    var marker = L.marker([latt, longet]).addTo(map);

    var heading = document.getElementById("head"+i);
    heading.textContent += ("Latitude: " + latt + ", Longitude: " + longet);

    let text = document.getElementById("text" + i);
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latt}&longitude=${longet}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
            var location = data.locality;
            text.textContent += location;
        })

  }
}
function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }

window.onload = createMap;