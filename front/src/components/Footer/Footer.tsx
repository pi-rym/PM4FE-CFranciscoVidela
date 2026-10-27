export const Footer = () => {
  return (
    <footer className="p-6 bg-gradient-to-l from-black to-purple-900">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm">
          © 2026 CikoStore. Todos los derechos reservados.
        </p>

        <div className="flex gap-4">
          <a href="#" className="transition-colors hover:text-purple-500">
            Instagram
          </a>

          <a href="#" className="transition-colors hover:text-purple-500">
            Facebook
          </a>

          <a href="#" className="transition-colors hover:text-purple-500">
            Contacto
          </a>
        </div>

      </div>
    </footer>
  );
};