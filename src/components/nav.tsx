function Navbar() {
    return(
        <nav className="fixed top-0 w-full bg-[#0540F2] border-b opacity-85 z-auto">
        <div className="w-full mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-xl text-white">SETANO 5G</div>
            <div className="hidden md:flex gap-8">
              <a href="#planilhas" className="text-white hover:text-gray-700 transition-colors">Planilhas</a>
              <a href="#sistemas" className="text-white hover:text-gray-700 transition-colors">Sistemas</a>
              <a href="#documentos" className="text-white hover:text-gray-700 transition-colors">Documentos</a>
              <a href="#procedimentos" className="text-white hover:text-gray-700 transition-colors">Procedimentos</a>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar