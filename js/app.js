//https://github.com/VincentGarreau/particles.js/

particlesJS('particles-js', {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'image',
      stroke: {
        width: 1,
        color: '#fff'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src:
          'http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 50,
      color: '#ffffff',
      opacity: 0.6,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'bottom',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: true,
        rotateX: 300,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 200,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.2
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

$(document).ready(function() {
  //sidenav trigger
  $('.sidenav').sidenav();
  //Preloader
  preloaderFadeOutTime = 5000;
  function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();

  const dataArr = [
    `I'm a Web Developer`,
    `I'm a Web Designer`,
    `I'm a Winter Lover`,
    `I'm a Coffee Addict`
  ];
  let data = dataArr[0];
  let startIndex = 0;
  const textContainer = document.querySelector('.typeContainer');
  let ctr = 0;
  const type = () => {
    if (ctr <= data.length - 1) {
      textContainer.innerHTML += data.charAt(ctr);
      ctr++;
      setTimeout(() => {
        type();
      }, 50);
    } else {
      ctr = 0;
      if (startIndex === dataArr.length - 1) startIndex = 0;
      else startIndex++;
      data = dataArr[startIndex];
      setTimeout(() => {
        textContainer.innerHTML = '';
      }, 2500);
      setTimeout(() => {
        type();
      }, 3000);
    }
  };
  type();
});
$(window).load(function() {
  // PAGE IS FULLY LOADED
  // FADE OUT YOUR OVERLAYING DIV
});
