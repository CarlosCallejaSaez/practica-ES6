

let totalVolume = 0;
let totalSounds = 0;

for (const user of users) {
  const favoriteSounds = user.favoritesSounds;

  for (const sound in favoriteSounds) {
    totalVolume += favoriteSounds[sound].volume;
    totalSounds++;
  }
}

const averageVolume = totalVolume / totalSounds;

console.log(averageVolume);