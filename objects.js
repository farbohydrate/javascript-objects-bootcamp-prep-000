var playlist = {
  [artistName]: ''
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = artistName;
  return playlist;
}