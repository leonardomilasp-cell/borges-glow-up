import { useEffect, useState } from "react";
import { X, Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";

const STORAGE_KEY = "nb_expopostos_2026_dismissed";

export function EventPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = window.localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      const t = setTimeout(() => setOpen(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  };

  return (
    <>
      {/* Faixa fixa no topo */}
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-gradient-primary text-primary-foreground text-xs sm:text-sm py-2 px-4 flex items-center justify-center gap-2 hover:opacity-95 transition"
        aria-label="Ver informações do evento ExpoPostos 2026"
      >
        <Sparkles className="size-3.5 shrink-0" />
        <span className="font-semibold">ExpoPostos 2026</span>
        <span className="hidden sm:inline opacity-90">— Estaremos presentes! 8, 9 e 10 de setembro • São Paulo Expo</span>
        <span className="sm:hidden opacity-90">• 8–10 set • SP</span>
        <span className="underline underline-offset-2 font-semibold hidden sm:inline">Saiba mais</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={close}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl overflow-hidden bg-gradient-card border border-primary/40 shadow-glow animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 size-9 rounded-full bg-background/80 backdrop-blur grid place-items-center hover:bg-background transition"
              aria-label="Fechar"
            >
              <X className="size-4" />
            </button>

            <div className="relative bg-gradient-primary p-8 text-primary-foreground text-center">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-background/20 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-semibold">
                  <Sparkles className="size-3" /> Participaremos
                </div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-bold leading-tight">
                  ExpoPostos & Conveniência 2026
                </h3>
                <p className="mt-2 text-sm text-primary-foreground/90">
                  22ª edição — O maior evento de combustíveis e conveniência da América Latina
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-background/20 backdrop-blur px-3 py-1 text-xs font-semibold">
                  <MapPin className="size-3" /> Estande O05 • Rua 0
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-lg bg-primary/10 grid place-items-center text-primary shrink-0">
                  <Calendar className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Data</div>
                  <div className="font-semibold">8, 9 e 10 de setembro de 2026</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-10 rounded-lg bg-primary/10 grid place-items-center text-primary shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Local</div>
                  <div className="font-semibold">São Paulo Expo — São Paulo, SP</div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                A <strong className="text-foreground">New Borges</strong> estará presente na ExpoPostos 2026 apresentando toda a sua linha de filtros, elementos filtrantes e a caixa separadora S.A.O. Venha nos visitar e conhecer nossas soluções de perto!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://expopostos.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
                >
                  Site do evento <ArrowRight className="size-4" />
                </a>
                <a
                  href="https://wa.link/x20tj3"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex-1 inline-flex items-center justify-center rounded-full border border-primary text-primary px-5 py-3 font-semibold hover:bg-primary hover:text-primary-foreground transition"
                >
                  Falar com a equipe
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
