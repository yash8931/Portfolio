import { useEffect, useRef } from "react";

const BUBBLES = [
  { size: 70, x: 8, y: 18, color: "rgba(99,102,241,0.18)", speed: 0.8 },
  { size: 45, x: 18, y: 72, color: "rgba(168,85,247,0.16)", speed: 1.1 },
  { size: 90, x: 32, y: 28, color: "rgba(59,130,246,0.14)", speed: 0.7 },
  { size: 35, x: 45, y: 82, color: "rgba(236,72,153,0.18)", speed: 1.2 },
  { size: 65, x: 58, y: 15, color: "rgba(139,92,246,0.15)", speed: 0.9 },
  { size: 42, x: 70, y: 65, color: "rgba(14,165,233,0.17)", speed: 1.3 },
  { size: 85, x: 84, y: 25, color: "rgba(99,102,241,0.13)", speed: 0.6 },
  { size: 32, x: 92, y: 78, color: "rgba(217,70,239,0.17)", speed: 1.4 },
  { size: 55, x: 12, y: 45, color: "rgba(6,182,212,0.12)", speed: 1 },
  { size: 38, x: 52, y: 48, color: "rgba(124,58,237,0.14)", speed: 1.2 },
];

function InteractiveBackground() {
  const containerRef = useRef(null);
  const bubblesRef = useRef([]);
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    active: false,
  });

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const bubbles = BUBBLES.map((bubble) => ({
      ...bubble,

      currentX: (window.innerWidth * bubble.x) / 100,
      currentY: (window.innerHeight * bubble.y) / 100,

      baseX: (window.innerWidth * bubble.x) / 100,
      baseY: (window.innerHeight * bubble.y) / 100,

      velocityX: 0,
      velocityY: 0,

      phase: Math.random() * Math.PI * 2,
    }));

    bubblesRef.current = bubbles;

    const handleMouseMove = (event) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let animationFrame;
    let time = 0;

    const animate = () => {
      time += 0.008;

      const mouse = mouseRef.current;

      bubbles.forEach((bubble, index) => {
        /*
         * Natural floating movement
         */
        const floatingX = Math.sin(time * bubble.speed + bubble.phase) * 18;

        const floatingY =
          Math.cos(time * bubble.speed * 0.8 + bubble.phase) * 14;

        const targetX = bubble.baseX + floatingX;
        const targetY = bubble.baseY + floatingY;

        /*
         * Mouse interaction
         */
        if (mouse.active) {
          const dx = bubble.currentX - mouse.x;
          const dy = bubble.currentY - mouse.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          const interactionRadius = 180;

          if (distance < interactionRadius && distance > 0) {
            const strength = (interactionRadius - distance) / interactionRadius;

            const force = strength * 2.8;

            bubble.velocityX += (dx / distance) * force;
            bubble.velocityY += (dy / distance) * force;
          }
        }

        /*
         * Return slowly to original floating position
         */
        bubble.velocityX += (targetX - bubble.currentX) * 0.002;
        bubble.velocityY += (targetY - bubble.currentY) * 0.002;

        /*
         * Friction
         */
        bubble.velocityX *= 0.94;
        bubble.velocityY *= 0.94;

        /*
         * Position
         */
        bubble.currentX += bubble.velocityX;
        bubble.currentY += bubble.velocityY;

        const element = container.children[index];

        if (element) {
          element.style.transform = `
            translate3d(
              ${bubble.currentX - bubble.size / 2}px,
              ${bubble.currentY - bubble.size / 2}px,
              0
            )
          `;
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
      "
    >
      {BUBBLES.map((bubble, index) => (
        <span
          key={index}
          className="
            absolute
            rounded-full
            border
            border-white/40
            shadow-[0_8px_30px_rgba(99,102,241,0.08)]
            backdrop-blur-[2px]
            will-change-transform
          "
          style={{
            width: bubble.size,
            height: bubble.size,
            background: bubble.color,
          }}
        />
      ))}
    </div>
  );
}

export default InteractiveBackground;
