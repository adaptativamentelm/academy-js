let main = document.getElementsByTagName('main')[0];
// let colors = ['yellow', 'orange', 'red', 'purple', 'blue', 'cadetblue', 'green'];

// for (let x = 0; x < colors.length; x++) {
//   const div = document.createElement('div');
//   div.classList.add('height');
//   div.classList.add(colors[x]);
//   main.appendChild(div);
// }

let users = ['Andrea', 'Scar', 'Chinchilla', 'Daniela', 'Natalia', 'Igor', 'Dharma', 'Paola'];

let arr = [
'https://www.primevideo.com/',
'https://www.disneyplus.com/es-cl',
'https://www.sanrio.com/',
'https://pusheen.com/',
'https://ghibli.store/',
'https://www.cartoonnetwork.cl/',
'https://www.southpark.lat/',
'https://www.universalstudios.com/',
'https://www.vogue.es/',
'https://store.steampowered.com/?l=spanish',
'https://na.leagueoflegends.com/es-ar/',
'https://www.peanuts.com/watch',
'https://www.peanuts.com/activities',
'https://www.epicgames.com/fortnite/es-ES/home',
'https://www.nintendo.es/Familia-Nintendo-Switch/Nintendo-Switch/Nintendo-Switch-1148779.html',
'https://hudabeauty.com/us/en_US/home',
'https://www.apple.com/cl/mac/?&mtid=2092514261712&aosid=p238&mnid=sc90fBXU6-dc_mtid_2092514261712_pcrid_479194288753_pgrid_112460600625_&cid=wwa-cl-kwgo-mac-slid---Brand-Mac-Announce-',
'https://www.nyxcosmetics.cl/',
'https://www.starbucks.com/',
'https://www.mcdonalds.com/us/en-us.html',
'https://www.bk.com/',
'https://www.udemy.com/',
'https://www.coursera.org/?ranMID=40328&ranEAID=j31dLGXDSD8&ranSiteID=j31dLGXDSD8-H20WKLRgNdWXYCueC5FgqQ&siteID=j31dLGXDSD8-H20WKLRgNdWXYCueC5FgqQ&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=j31dLGXDSD8',
'https://www3.animeflv.net'];

const random = () => {
  for (let x = 0; x < users.length; x++) {
    draw(users[x], arr[Math.floor((Math.random() * arr.length))]);
  }
};

const draw = (user, page) => {
  let div = document.createElement('div');
  let h1 = document.createElement('h1');
  h1.innerHTML = user;
  let h2 = document.createElement('h2');
  h2.innerHTML = page;
  div.appendChild(h1);
  div.appendChild(h2);
  main.appendChild(div);
}

// random();
