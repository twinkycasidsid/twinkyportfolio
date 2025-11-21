import { useEffect, useRef } from "react";

export default function FluidBackground({ dark }) {
  const container = useRef(null);

  useEffect(() => {
    const balls = container.current.querySelectorAll(".ball");

    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      balls.forEach((b, i) => {
        const speed = 0.02 + i * 0.015;

        const cx = parseFloat(b.dataset.x);
        const cy = parseFloat(b.dataset.y);

        const nx = cx + (x - cx) * speed;
        const ny = cy + (y - cy) * speed;

        b.dataset.x = nx;
        b.dataset.y = ny;

        b.style.transform = `translate(${nx}px, ${ny}px)`;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div ref={container} className="fluid-gradient">
      <div className={`ball ${dark ? "ball-dark-1" : "ball-light-1"}`} data-x="200" data-y="200"></div>
      <div className={`ball ${dark ? "ball-dark-2" : "ball-light-2"}`} data-x="900" data-y="500"></div>
      <div className={`ball ${dark ? "ball-dark-3" : "ball-light-3"}`} data-x="500" data-y="300"></div>
    </div>
  );
}
