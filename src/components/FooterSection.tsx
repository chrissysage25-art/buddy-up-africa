const FooterSection = () => {
  return (
    <footer className="bg-warm-brown py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-display text-2xl font-bold text-golden">Buddy</span>
            <p className="text-primary-foreground/60 text-sm mt-1">
              Wellness for Africa's Founders
            </p>
          </div>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#benefits" className="hover:text-golden transition-colors">Benefits</a>
            <a href="#community" className="hover:text-golden transition-colors">Community</a>
            <a href="#join" className="hover:text-golden transition-colors">Join</a>
          </div>
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Buddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
