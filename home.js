// ChatGPT was used to created this JavaScript files because we haven't learn it in class yet and wanted expourse to JavaScript
// Autoplay toggle functionality
document.getElementById('autoPlayToggle').addEventListener('change', function() {
  const video = document.getElementById('youtubeVideo');
  const currentSrc = video.src.split('?')[0]; // Keep the current video URL without the query params
  if (this.checked) {
      // Turn autoplay ON
      video.src = currentSrc + "?controls=1&autoplay=1";
      console.log('Autoplay is ON');
  } else {
      // Turn autoplay OFF
      video.src = currentSrc + "?controls=1";
      console.log('Autoplay is OFF');
  }
});

// Event listener for genre selection
document.querySelectorAll('.dropdown-content a').forEach(function(link) {
  link.addEventListener('click', function(event) {
      event.preventDefault();  // Prevent default anchor behavior

      const newVideoUrl = this.getAttribute('data-video-url');
      const newSummary = this.getAttribute('data-summary');
      const newDescription = this.getAttribute('data-description');
      // video = document.getElementById('youtubeVideo');

      // Get the current autoplay state
      const autoplayState = document.getElementById('autoPlayToggle').checked;
  

      // Update the video player source
      changeVideo(newVideoUrl,newSummary,newDescription, autoplayState);

      // Optionally, update the video suggestions for genres
      //  updateGenreSuggestions(newVideoUrl);

  });
});

// Event listeners for video suggestions
document.querySelectorAll('.suggestion').forEach(function(item) {
  item.addEventListener('click', function() {

      // Retrieve video details from the clicked suggestion
      const newVideoUrl = this.getAttribute('data-video-url');
      const newSummary = this.getAttribute('data-summary');
      const newDescription = this.getAttribute('data-description');
      
      // Get the current autoplay state
      const autoplayState = document.getElementById('autoPlayToggle').checked;
      
      // Change the main video with data from the suggestion clicked
      changeVideo(newVideoUrl, newSummary, newDescription, autoplayState);
  });
});

// Select all suggestion elements
const suggestions = document.querySelectorAll('.suggestion');

// Add a click event listener to each suggestion
suggestions.forEach(function(suggestion) {
    suggestion.addEventListener('click', function() {
        // Retrieve video details from the clicked suggestion
        const newVideoUrl = this.getAttribute('data-video-url');
        const newSummary = this.getAttribute('data-summary');
        const newDescription = this.getAttribute('data-description');

        // Get the current autoplay state
        const autoplayState = document.getElementById('autoPlayToggle').checked;
        if (autoplayState) {
            // Add autoplay to the URL if the toggle is checked
            videoUrl += "&autoplay=1";
        }

        // Change the main video
        changeVideo(newVideoUrl, newSummary, newDescription, autoplayState);
    });
});

// Function to change the main video
function changeVideo(videoUrl, summary, description, autoplayState) {
    const video = document.getElementById('youtubeVideo');
    video.src = autoplayState ? videoUrl + "&autoplay=1" : videoUrl;
    document.getElementById('videoSummary').innerText = summary;
    document.getElementById('videoDescription').innerText = description;
}
