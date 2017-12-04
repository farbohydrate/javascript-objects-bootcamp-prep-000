var playlist = {
  aerosmith: "boobs"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}