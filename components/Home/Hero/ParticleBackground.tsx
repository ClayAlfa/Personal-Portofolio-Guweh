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
    // keep the same init pattern you used before
    initParticlesEngine(async (engine) => {
      // load the slim bundle to keep bundle size smaller
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // optional debug:
    // console.log("particles loaded:", container);
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
        // neon-green palette (a few tints for variety)
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
