import { useEffect, useRef } from "react";

function MouseBubbles() {
  const containerRef = useRef(null);
  const bubblesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const isTouchDevice = window.matchMedia(
      "(hover: none), (pointer: coarse)",
    ).matches;

    if (isTouchDevice) return;

    const bubbles = Array.from(container.querySelectorAll("[data-bubble]"));

    bubblesRef.current = bubbles;

    const positions = bubbles.map((bubble) => ({
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    }));

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      bubbles.forEach((bubble, index) => {
        const position = positions[index];

        const offsetX = (index - 2) * 45;
        const offsetY = (index % 2 === 0 ? 1 : -1) * 35;

        position.targetX = mouseX + offsetX;
        position.targetY = mouseY + offsetY;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    let animationFrame;

    const animate = () => {
      bubbles.forEach((bubble, index) => {
        const position = positions[index];

        position.x += (position.targetX - position.x) * 0.045;
        position.y += (position.targetY - position.y) * 0.045;

        bubble.style.transform = `translate3d(
          ${position.x}px,
          ${position.y}px,
          0
        )`;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden lg:block"
    >
      {/* Bubble 1 */}
      <span
        data-bubble
        className="absolute left-0 top-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/10 blur-3xl"
      />

      {/* Bubble 2 */}
      <span
        data-bubble
        className="absolute left-0 top-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl"
      />

      {/* Bubble 3 */}
      <span
        data-bubble
        className="absolute left-0 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/10 blur-3xl"
      />

      {/* Bubble 4 */}
      <span
        data-bubble
        className="absolute left-0 top-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/10 blur-2xl"
      />

      {/* Bubble 5 */}
      <span
        data-bubble
        className="absolute left-0 top-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-2xl"
      />
    </div>
  );
}

export default MouseBubbles;
