import { motion } from "framer-motion";
import { ExternalLink } from 'lucide-react'
import { planilhas, sistemas, procedimentos, documentos } from "./data/const";
import ImageView from "./components/ImageView"
import Navbar from "./components/nav";
import { Link } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar/>

      <motion.section
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center py-24 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Manual do monitoramento 5G</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Focado em auxiliar novos colaboradores a entender procedimentos do setor e facilitar ao acesso de arquivos, sistemas e etc...
          </p>
      </motion.section>


      {/*Planilhas*/}
      <section id="planilhas" className="bg-[#056CF2] py-20">
        <div className="w-100% mx-auto px-4">
          <h1 className="text-black font-bold text-4xl mb-3">Planilhas</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planilhas.map((p) => (
              <div key={p.id} className="p-12 mt-5 mx-auto bg-[#F2F2F2] rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
                <div className="flex justify-between">
                  <h4 className="text-2xl">{p.title}</h4>
                  <a target="_blank" className="text-blue-700" href={p.link}>
                    <ExternalLink className="w-5 h-5 text-gray-700 group-hover:text-gray-300 transition-colors" />
                  </a>
                </div>
                <p className="mt-3">{p.description}</p>
                <Link className="text-blue-800 mt-5" to="/detalhe">Ir para detalhe</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*SISTEMAS*/}
      <section id="sistemas" className="py-20">
        <div className="w-100% mx-auto px-4">
          <h1 className="text-black font-bold text-3xl mb-3">Sistemas</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sistemas.map((s) => (
              <div key={s.id} className="pb-5 mt-5 mx-auto bg-blue-400 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <ImageView src={s.img}/>
                </div>
                <div className="flex justify-around">
                  <h4 className="text-2xl">{s.title}</h4>
                  <a target="_blank" className="text-blue-700" href={s.link}>
                    <ExternalLink className="w-5 h-5 text-gray-700 group-hover:text-gray-300 transition-colors" />
                  </a>
                </div>
                <p className="mt-3 mx-3">{s.description}</p>
                <Link className="text-blue-800 mt-5 mx-3" to="/detalhe">Ver mais</Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/*Documentos*/}
      <section id="documentos" className="bg-gray-100 py-20">
        <div className="w-100% mx-auto px-4">
          <h1 className="text-black font-bold text-3xl mb-3">Documentos</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentos.map((d) => (
              <div key={d.id} className="p-18 mt-5 mx-auto bg-orange-400 rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
                <div className="flex justify-between">
                  <h4 className="text-2xl">{d.title}</h4>
                  <a target="_blank" className="text-blue-700" href="">
                    <ExternalLink className="w-5 h-5 text-gray-700 group-hover:text-gray-300 transition-colors" />
                  </a>
                </div>
                <p className="mt-3">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*PROCEDIMENTOS*/}
      <section id="procedimentos" className=" py-20">
        <div className="w-100% mx-auto px-4">
          <h1 className="text-black font-bold text-3xl mb-3">Procedimentos</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedimentos.map((p) => (
              <div key={p.id} className="p-18 mt-5 mx-auto bg-orange-400 rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
                <div className="flex justify-between">
                  <h4 className="text-2xl">{p.title}</h4>
                  <a target="_blank" className="text-blue-700" href="">
                    <ExternalLink className="w-5 h-5 text-gray-700 group-hover:text-gray-300 transition-colors" />
                  </a>
                </div>
                <p className="mt-3">{p.description}</p>
                <Link className="text-blue-800 mt-5" to="/detalhe">Ver mais</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default App
