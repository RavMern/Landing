import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollEffect() {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    if (!img.complete) {
      img.onload = () => startAnimation(img);
    } else {
      startAnimation(img);
    }

    function startAnimation(image: HTMLImageElement) {
      const naturalWidth = image.naturalWidth;
      const naturalHeight = image.naturalHeight;

      const targetX = 500;
      const targetY = 465;

      const originX = (targetX / naturalWidth) * 100;
      const originY = (targetY / naturalHeight) * 100;

      gsap.set(image, {
        transformOrigin: `${originX}% ${originY}%`,
        position: "fixed",
        top: "50%",      // lo centramos verticalmente
        left: "50%",     // y horizontalmente
        xPercent: -50,   // centramos en x
        yPercent: -50,   // centramos en y
      });

      gsap.fromTo(
        image,
        { scale: 1, opacity: 1, x: 0, y: 0 },
        {
          scale: 3,
          opacity: 0,
          x: () => {
            // Calculamos compensación para que al escalar no se vaya mucho a la derecha
            // La fórmula aproximada: 
            // movimiento x = - (escala final - 1) * (originX% - 50%) * ancho
            // como xPercent ya está -50%, usamos origen relativo a centro
            const width = image.getBoundingClientRect().width;
            return - (3 - 1) * ((originX) - 50) / 100 * width;
          },
          y: () => {
            const height = image.getBoundingClientRect().height;
            return - (3 - 1) * ((originY) - 50) / 100 * height;
          },
          scrollTrigger: {
            trigger: image,
            start: "top top",
            end: "+=1500",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div style={{ height: "250vh", background: "#fff", color: "#111" }}>
      <h1
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "5rem",
          opacity: 0.1,
          userSelect: "none",
        }}
      >
        SOLUCIONES DIGITALES
      </h1>
      <img
        ref={imgRef}
        src="/ravmern.jpeg"
        alt="Logo"
        style={{
          width: "600px",
          height: "auto",
          userSelect: "none",
        }}
      />
    </div>
  );
}
