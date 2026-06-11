"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const STEEL = new THREE.Color("#7e8696");
const GOLD = new THREE.Color("#c8a44e");
const FRAME_COUNT = 9;
const FRAME_SPACING = 16;
const CORRIDOR_DEPTH = FRAME_COUNT * FRAME_SPACING;

/**
 * Builds the line geometry of one box-truss portal frame: two lattice
 * columns and a lattice top chord, like the gantry frames of an assembly
 * hall. Returned positions are consumed by a single LineSegments object.
 */
function trussPortalPositions(width: number, height: number, depth: number): number[] {
  const pts: number[] = [];
  const seg = (a: THREE.Vector3, b: THREE.Vector3) => {
    pts.push(a.x, a.y, a.z, b.x, b.y, b.z);
  };
  const v = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
  const hw = width / 2;
  const hd = depth / 2;

  const latticeColumn = (x: number) => {
    const steps = 5;
    const dy = height / steps;
    for (const z of [-hd, hd]) {
      seg(v(x - 0.5, 0, z), v(x - 0.5, height, z));
      seg(v(x + 0.5, 0, z), v(x + 0.5, height, z));
    }
    for (let i = 0; i < steps; i++) {
      const y0 = i * dy;
      const y1 = y0 + dy;
      for (const z of [-hd, hd]) {
        // alternating diagonals of the column lattice
        if (i % 2 === 0) seg(v(x - 0.5, y0, z), v(x + 0.5, y1, z));
        else seg(v(x + 0.5, y0, z), v(x - 0.5, y1, z));
      }
      seg(v(x - 0.5, y1, -hd), v(x - 0.5, y1, hd));
      seg(v(x + 0.5, y1, -hd), v(x + 0.5, y1, hd));
    }
  };

  const latticeBeam = () => {
    const steps = 8;
    const dx = (width - 1) / steps;
    const yTop = height;
    const yBot = height - 1.1;
    for (const z of [-hd, hd]) {
      seg(v(-hw + 0.5, yTop, z), v(hw - 0.5, yTop, z));
      seg(v(-hw + 0.5, yBot, z), v(hw - 0.5, yBot, z));
    }
    for (let i = 0; i <= steps; i++) {
      const x = -hw + 0.5 + i * dx;
      for (const z of [-hd, hd]) {
        seg(v(x, yBot, z), v(x, yTop, z));
        if (i < steps) {
          if (i % 2 === 0) seg(v(x, yBot, z), v(x + dx, yTop, z));
          else seg(v(x, yTop, z), v(x + dx, yBot, z));
        }
      }
      seg(v(x, yTop, -hd), v(x, yTop, hd));
    }
  };

  latticeColumn(-hw);
  latticeColumn(hw);
  latticeBeam();
  return pts;
}

function floorGridPositions(width: number, depth: number, step: number): number[] {
  const pts: number[] = [];
  const hw = width / 2;
  for (let x = -hw; x <= hw; x += step) {
    pts.push(x, 0, 4, x, 0, -depth - 20);
  }
  for (let z = 4; z >= -depth - 20; z -= step) {
    pts.push(-hw, 0, z, hw, 0, z);
  }
  return pts;
}

function lineSegments(positions: number[], color: THREE.Color, opacity: number) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  return new THREE.LineSegments(geometry, material);
}

export function IndustrialScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(new THREE.Color("#0b0d12"), 18, 92);

    const camera = new THREE.PerspectiveCamera(
      54,
      window.innerWidth / window.innerHeight,
      0.1,
      200,
    );
    camera.position.set(0, 4.2, 14);

    // Corridor of truss portal frames the camera travels through.
    const portal = trussPortalPositions(26, 13, 1.4);
    const frames: THREE.LineSegments[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const isGold = i % 3 === 1;
      const frame = lineSegments(
        portal,
        isGold ? GOLD : STEEL,
        isGold ? 0.34 : 0.22,
      );
      frame.position.z = -6 - i * FRAME_SPACING;
      scene.add(frame);
      frames.push(frame);
    }

    // Blueprint floor grid.
    const grid = lineSegments(floorGridPositions(110, CORRIDOR_DEPTH, 4), STEEL, 0.1);
    scene.add(grid);

    // Distant large-scale structure silhouettes flanking the corridor.
    const silhouettes = new THREE.Group();
    const boxEdges = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1));
    const silhouetteMaterial = new THREE.LineBasicMaterial({
      color: STEEL,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    let seed = 7;
    const rand = () => {
      // deterministic so SSR/replay renders identically
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < 26; i++) {
      const box = new THREE.LineSegments(boxEdges, silhouetteMaterial);
      const side = i % 2 === 0 ? -1 : 1;
      box.scale.set(4 + rand() * 9, 6 + rand() * 22, 4 + rand() * 10);
      box.position.set(
        side * (20 + rand() * 26),
        box.scale.y / 2,
        -rand() * (CORRIDOR_DEPTH + 30),
      );
      silhouettes.add(box);
    }
    scene.add(silhouettes);

    // Slow industrial dust drifting through the light.
    const particleCount = 420;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (rand() - 0.5) * 60;
      particlePositions[i * 3 + 1] = rand() * 16;
      particlePositions[i * 3 + 2] = -rand() * (CORRIDOR_DEPTH + 20) + 6;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3),
    );
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: new THREE.Color("#d9c389"),
        size: 0.09,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      }),
    );
    scene.add(particles);

    let frameId = 0;
    let progress = 0;
    let targetProgress = 0;
    let running = true;

    const readScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      targetProgress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    };

    const applyProgress = (p: number, t: number) => {
      const travel = CORRIDOR_DEPTH - 10;
      camera.position.z = 14 - p * travel;
      camera.position.x = Math.sin(p * Math.PI * 1.5) * 1.6;
      camera.position.y = 4.2 + Math.sin(p * Math.PI) * 1.1;
      camera.lookAt(camera.position.x * 0.4, 4.6, camera.position.z - 22);
      particles.position.y = Math.sin(t * 0.00012) * 0.6;
      particles.rotation.y = t * 0.000018;
    };

    const renderLoop = (t: number) => {
      if (!running) return;
      readScroll();
      // critically-damped ease toward the scroll position: deliberate, never snappy
      progress += (targetProgress - progress) * 0.045;
      applyProgress(progress, t);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(renderLoop);
    };

    const renderStatic = () => {
      readScroll();
      progress = targetProgress;
      applyProgress(progress, 0);
      renderer.render(scene, camera);
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (reducedMotion) renderStatic();
    };
    window.addEventListener("resize", onResize);

    const onVisibility = () => {
      if (reducedMotion) return;
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frameId);
      } else if (!running) {
        running = true;
        frameId = requestAnimationFrame(renderLoop);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    if (reducedMotion) {
      renderStatic();
      window.addEventListener("scroll", renderStatic, { passive: true });
    } else {
      frameId = requestAnimationFrame(renderLoop);
    }

    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", renderStatic);
      document.removeEventListener("visibilitychange", onVisibility);
      frames.forEach((f) => f.geometry.dispose());
      grid.geometry.dispose();
      boxEdges.dispose();
      silhouetteMaterial.dispose();
      particleGeometry.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.LineSegments || obj instanceof THREE.Points) {
          (obj.material as THREE.Material).dispose();
        }
      });
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 [&_canvas]:h-full [&_canvas]:w-full"
    />
  );
}
