import React, { useRef, useEffect } from "react";

interface MatrixRainProps {
  intensity?: number;
  speed?: number;
}

const MatrixRain: React.FC<MatrixRainProps> = ({
  intensity = 5,
  speed = 50,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+{}[]|;:,.<>?";
    let drops = new Array(columns).fill(0);

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newColumns = Math.floor(canvas.width / fontSize);
      if (newColumns !== columns) {
        columns = newColumns;
        const newDrops = new Array(columns).fill(0);
        for (let i = 0; i < Math.min(drops.length, newDrops.length); i++) {
          newDrops[i] = drops[i];
        }
        drops = newDrops;
      }
    };

    window.addEventListener("resize", handleResize);

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = "#0F0";

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] > 0 || Math.random() < 0.01) {
          const text =
            characters[Math.floor(Math.random() * characters.length)];

          // Add glow effect to characters
          ctx.shadowColor = "#0F0";
          ctx.shadowBlur = 10;
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          // Reset shadow for next iteration
          ctx.shadowBlur = 0;

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          } else {
            drops[i]++;
          }
        }
      }
    }

    const intervalId = setInterval(draw, speed);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, [intensity, speed]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1] opacity-25" />;
};

export default MatrixRain;