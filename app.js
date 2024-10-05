const planetData = {
  Mercury: { 
    mass: "3.3011 × 10^23", 
    gravity: "3.7", 
    distanceFromSun: "57.9 million", 
    moons: 0 
  },
  Venus: { 
    mass: "4.8675 × 10^24", 
    gravity: "8.87", 
    distanceFromSun: "108.2 million", 
    moons: 0 
  },
  Earth: { 
    mass: "5.972 × 10^24", 
    gravity: "9.8", 
    distanceFromSun: "149.6 million", 
    moons: 1 
  },
  Mars: { 
    mass: "6.4171 × 10^23", 
    gravity: "3.71", 
    distanceFromSun: "227.9 million", 
    moons: 2 
  },
  Jupiter: { 
    mass: "1.8982 × 10^27", 
    gravity: "24.79", 
    distanceFromSun: "778.5 million", 
    moons: 79 
  },
  Saturn: { 
    mass: "5.6834 × 10^26", 
    gravity: "10.44", 
    distanceFromSun: "1.4 billion", 
    moons: 83 
  },
  Uranus: { 
    mass: "8.6810 × 10^25", 
    gravity: "8.69", 
    distanceFromSun: "2.9 billion", 
    moons: 27 
  },
  Neptune: { 
    mass: "1.02413 × 10^26", 
    gravity: "11.15", 
    distanceFromSun: "4.5 billion", 
    moons: 14 
  },
  Asteroid: { 
    info: "This is an asteroid"
  },
  Comet: { 
    info: "This is a comet"
  }
};

document.querySelectorAll('.planet, .asteroid, .comet').forEach(spaceObject => {
  spaceObject.addEventListener('click', (e) => {
    const objectName = e.target.dataset.planet;
    const infoBox = document.querySelector('.info-box');
    
    let objectInfo;

    if (objectName === 'Asteroid' || objectName === 'Comet') {
      objectInfo = planetData[objectName];
    } else {
      objectInfo = planetData[objectName];
    }

    document.getElementById('planet-name').innerText = objectName;

    if (objectName === 'Asteroid' || objectName === 'Comet') {
      document.getElementById('planet-info').innerText = objectInfo.info;
    } else {
      document.getElementById('planet-info').innerHTML = `
        <strong>Mass:</strong> ${objectInfo.mass || 'Unknown'} kg <br>
        <strong>Gravity:</strong> ${objectInfo.gravity || 'Unknown'} m/s² <br>
        <strong>Distance from Sun:</strong> ${objectInfo.distanceFromSun || 'Unknown'} km <br>
        <strong>Moons:</strong> ${objectInfo.moons || 0}
      `;
    }

    infoBox.style.display = 'block';

    e.target.style.transform = 'scale(2)';
  });
});

document.getElementById('close-info').addEventListener('click', () => {
  document.querySelector('.info-box').style.display = 'none';
  document.querySelectorAll('.planet, .asteroid, .comet').forEach(object => {
    object.style.transform = 'scale(1)';
  });
});