import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BuddyNavbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Benefits", "Community"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl font-bold text-gradient-warm">
          Buddy
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
          <a href="#join" className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Join Buddy
          </a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
                  {l}
                </a>
              ))}
              <a href="#join" onClick={() => setOpen(false)} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center">
                Join Buddy
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default BuddyNavbar;
