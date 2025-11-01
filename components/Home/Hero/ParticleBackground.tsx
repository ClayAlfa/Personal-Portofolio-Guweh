// components/ParticlesHero.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesHero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // initialize tsparticles engine
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // renamed `container` to `_container` to satisfy ESLint (not used)
  const particlesLoaded = async (_container?: Container): Promise<void> => {
    // you can log this for debugging if needed:
    // console.log("Particles loaded:", _container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: {
          push: { quantity: 6 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        // Neon-green color palette
        color: {
          value: ["#00ff9c", "#66ffcc", "#bbffda"],
        },
        links: {
          color: "#00ff9c",
          distance: 400,
          enable: true,
          opacity: 0.23,
          width: 0.9,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          speed: 1.2,
        },
        number: {
          density: { enable: true, area: 900 },
          value: 45,
        },
        opacity: {
          value: 0.55,
          random: { enable: true, minimumValue: 0.3 },
        },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 }, random: true },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
}
