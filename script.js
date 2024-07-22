// Map data
const markers = [
    {
        location: [38.739397, -9.139291], //Xior Benefica
        title: "Project Test Modal 1",
        description: "This is a test for the first popup modal. Images and other content can be entered here.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        link: "./index.html"
    },
    {
        location: [38.736925, -9.139631], //University of Lisboa
        title: "Project Test Modal 2",
        description: "This is a test for the first popup modal. Images and other content can be entered here.",
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        link: "./index.html"
    },
];

// Initialize the map
const map = L.map('map').setView([38.7508681, -9.1907995], 16); // Xior Benfica coordinates and zoom level

// Add the tile layer
L.tileLayer('https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=cf6464ad5ae04e1daf628387214f40b8', { //API Key from Thunderforest 07/21/24
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Custom Markers
const yetuIcon = L.icon({
    iconUrl: 'yetu.png',     // Path to map marker
    iconSize: [45, 75],      // Adjust size as needed
    iconAnchor: [16, 37],    // The point of the icon which will correspond to marker's location
    popupAnchor: [0, -37]    // Point from which the popup should open relative to the iconAnchor
});


// Add markers to map w/ custom icon
markers.forEach(markerData => {
    const marker = L.marker(markerData.location, { icon: yetuIcon }).addTo(map); 

    marker.on('click', () => {
        document.getElementById('modal-title').textContent = markerData.title;
        document.getElementById('modal-description').textContent = markerData.description;
        document.getElementById('modal-link').href = markerData.link;

        const imagesContainer = document.getElementById('modal-images');
        imagesContainer.innerHTML = ''; // Clear old images
        markerData.images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            imagesContainer.appendChild(img);
        });
        document.getElementById('myModal').style.display = 'block';
    });
});

// Modal functions
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}