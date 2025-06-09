import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.1.0/+esm";
import { useEffect } from 'react';
async function loadParticles(options) {
  await loadAll(tsParticles);

  await tsParticles.load({ id: "tsparticles", options });
}

const configs = {
  particles: {
    number: {
      value: 100
    },
    color: {
      value: "#ffffff"
    },
    links: {
      enable: true,
      distance: 200
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1
    },
    size: {
      value: {
        min: 4,
        max: 6
      }
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  background: {
    color: "#000000"
  },
  poisson: {
    enable: true
  }
};


function Background() {
  useEffect(() => {
    loadParticles(configs);
  }, []);

  return (
    <div
      id="tsparticles"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}

export default Background;