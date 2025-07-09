import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

interface Dado {
  id: number;
  title: string;
  description: string;
}

interface HomeProps {
  dadosA: Dado[];
  dadosB: Dado[];
  dadosC: Dado[];
}

export default function Home({ dadosA, dadosB, dadosC }: HomeProps) {
  return (
    <div className="font-sans scroll-smooth">
      <Head>
        <title>Consciencia+ | Bem-estar Mental</title>
        <meta name="description" content="Landing Page - Consciencia+" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <header className="bg-purple-700 text-white p-6 text-center shadow-md sticky top-0 z-50">
        <h1 className="text-3xl font-bold font-[Quicksand]">Consciencia+</h1>
        <p className="text-lg mt-2 font-[Quicksand]">Saúde mental ao alcance de todos</p>
        <nav className="mt-4 flex justify-center gap-6 text-sm">
          <a href="#apoio" className="hover:underline">Apoio</a>
          <a href="#atividades" className="hover:underline">Atividades</a>
          <a href="#comunidade" className="hover:underline">Comunidade</a>
        </nav>
      </header>

      <main className="p-6 space-y-24">
        <Section id="apoio" titulo="Apoio Psicológico" dados={dadosA} cor="bg-blue-100" icone={<ArrowDownCircle className="text-blue-700" />} />
        <Section id="atividades" titulo="Atividades Conscientes" dados={dadosB} cor="bg-green-100" icone={<ArrowDownCircle className="text-green-700" />} />
        <Section id="comunidade" titulo="Comunidade e Suporte" dados={dadosC} cor="bg-yellow-100" icone={<ArrowDownCircle className="text-yellow-700" />} />
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        <p className="font-[Quicksand]">&copy; 2025 Consciencia+. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

interface SectionProps {
  id: string;
  titulo: string;
  dados: Dado[];
  cor: string;
  icone: React.ReactNode;
}

const Section = ({ id, titulo, dados, cor, icone }: SectionProps) => (
  <section id={id} className={`rounded-2xl shadow-lg p-6 ${cor} scroll-mt-24`}>
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="space-y-24"
>

      {icone}
      <h2 className="text-2xl font-bold font-[Quicksand]">{titulo}</h2>
    </motion.div>
    <div className="grid md:grid-cols-3 gap-4">
      {dados.map((item) => (
        <motion.div
          key={item.id}
          className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="font-semibold text-lg mb-2 text-purple-700 font-[Quicksand]">
            {item.title}
          </h3>
          <p className="text-gray-700 text-sm font-[Quicksand]">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [dadosA, dadosB, dadosC] = await Promise.all([
      axios.get("http://localhost:3000/api/apoio").then(res => res.data),
      axios.get("http://localhost:3000/api/atividades").then(res => res.data),
      axios.get("http://localhost:3000/api/comunidade").then(res => res.data),
    ]);

    return {
      props: { dadosA, dadosB, dadosC },
    };
  } catch (error) {
    console.error("Erro ao consumir a API:", error);
    return {
      props: { dadosA: [], dadosB: [], dadosC: [] },
    };
  }
};
