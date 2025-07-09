
import React from "react";

aria-label={`Seção ${titulo}`}

interface Dado {
  id: number;
  title: string;
  description: string;
}

interface SectionProps {
  id: string;
  titulo: string;
  dados: Dado[];
  cor: string;
  icone?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, titulo, dados, cor, icone }) => {
  return (
      <section id={id} className={`${cor} p-8 rounded-xl shadow-md scroll-mt-20`} aria-label={`Seção ${titulo}`}>
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        {icone}
        {titulo}
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dados.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
