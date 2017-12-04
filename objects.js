var playlist = {
  [artistName]: ''
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = artistName;
  playlist.songTitle = songTitle;
  return playlist;
}