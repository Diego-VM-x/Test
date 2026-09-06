import { useEffect, useState } from "react";
import { IconoLlave, IconoLogo } from "./icons";

interface HeaderProps {
  esAdmin: boolean;
  onAdmin: () => void;
  irA: (id: string) => void;
}

const ENLACES = [
  { id: "inicio", nombre: "Inicio" },
  { id: "catalogo", nombre: "Catálogo" },
  { id: "promesa", nombre: "Nuestra promesa" },
  { id: "contacto", nombre: "Contacto" },
];

export default function Header({ esAdmin, onAdmin, irA }: HeaderProps) {
  const [fondo, setFondo] = useState(false);

  useEffect(() => {
    const alBajar = () => setFondo(window.scrollY > 24);
    alBajar();
    window.addEventListener("scroll", alBajar, { passive: true });
    return () => window.removeEventListener("scroll", alBajar);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        fondo ? "bg-vino-950/92 shadow-lg shadow-vino-950/40 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button onClick={() => irA("inicio")} className="group flex items-center gap-3 text-left">
          <IconoLogo className="h-10 w-10 text-oro-400 transition-transform duration-500 group-hover:rotate-90" />
          <span>
            <span className="block font-display text-lg font-bold leading-none tracking-[0.3em] text-marfil-50">
              EPIKAS
            </span>
            <span className="mt-1.5 block text-[9px] font-medium uppercase tracking-[0.32em] text-oro-300/90">
              Bisutería católica
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-9 lg:flex">
          {ENLACES.map((e) => (
            <button
              key={e.id}
              onClick={() => irA(e.id)}
              className="group relative text-[13px] font-medium uppercase tracking-[0.22em] text-marfil-100/80 transition-colors duration-300 hover:text-oro-200"
            >
              {e.nombre}
              <span className="absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-oro-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={onAdmin}
            title="Panel de administración"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
              esAdmin
                ? "border-oro-400 bg-oro-400 text-vino-950"
                : "border-marfil-100/25 text-marfil-100/70 hover:border-oro-400 hover:text-oro-300"
            }`}
          >
            <IconoLlave className="h-4.5 w-4.5" />
          </button>
        </nav>

        <button
          onClick={onAdmin}
          title="Panel de administración"
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${
            esAdmin
              ? "border-oro-400 bg-oro-400 text-vino-950"
              : "border-marfil-100/25 text-marfil-100/70 hover:border-oro-400 hover:text-oro-300"
          }`}
        >
          <IconoLlave className="h-4.5 w-4.5" />
        </button>
      </div>
    </header>
  );
}
