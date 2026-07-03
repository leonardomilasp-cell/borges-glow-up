import { Header } from "./Header";
import { Footer } from "./Footer";
import { EventPopup } from "./EventPopup";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <EventPopup />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
