var playlist = {
  artistName: "aerosmith",
  songTitle: "walk this way"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist.artistName = artistName;
  playlist.songTitle = songTitle;
  return playlist;
}