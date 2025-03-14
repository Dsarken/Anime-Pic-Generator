// scriptEnlargeImage.js
window.onload = function () {
  const image = document.getElementById("anime-portrait"); // Anime Portrait
  const titleText = document.getElementById("title-text"); // Title of web app
  const characterButton = document.getElementById("btn"); // Get character button
  const characterName = document.getElementById("character-name"); // Character name
  const downloadButton = document.getElementById("download-btn"); // Download button

  // Toggle image enlargement and show/hide download button
  image.addEventListener("click", function () {
    if (this.classList.contains("enlarged")) {
      this.classList.remove("enlarged");
      titleText.style.display = "revert";
      characterButton.style.display = "revert";
      characterName.style.display = "revert";
      downloadButton.style.display = "none"; // Hide download button
    } else {
      this.classList.add("enlarged");
      titleText.style.display = "none";
      characterButton.style.display = "none";
      characterName.style.display = "none";
      downloadButton.style.display = "inline-block"; // Show download button
    }
  });

  downloadButton.addEventListener("click", async function () {
    const imageUrl = image.src;

    try {
      const response = await fetch(imageUrl, { mode: "cors" });
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${characterName.textContent}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download image. Try again.");
    }
  });
};
