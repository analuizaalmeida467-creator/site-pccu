import React from "react";
import { motion } from "framer-motion";
import { Microscope, Users, Activity, BookOpen } from "lucide-react";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg,#ffeef2,#ffdfe8)", color: "#333", padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: 32 }}>
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: 32, color: "#b91c1c", margin: 0, fontWeight: 700 }}>
          Relação entre Comportamentos de Prevenção, Faixa Etária e Alterações Citológicas no PCCU
        </motion.h1>
        <p style={{ marginTop: 8 }}>Uma Análise Quantitativa e Psicossocial</p>
        <p style={{ marginTop: 10, fontSize: 14 }}>Por Ana Luiza Parente De Almeida et al. — Macapá - AP (2024)</p>
      </header>

      <main style={{ maxWidth: 980, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
        <section style={cardStyle}>
          <div style={cardHeader}><Microscope size={18} /> <strong style={{ marginLeft: 8 }}>Resumo</strong></div>
          <p>
            O estudo analisou resultados do exame preventivo do câncer de colo do útero (PCCU) coletados em 2024, com o objetivo de compreender a relação entre faixa etária e ocorrência de alterações citológicas, além dos fatores psicossociais que influenciam a adesão ao exame. Identificou-se maior incidência de alterações entre mulheres de 30 a 45 anos, associadas à persistência do HPV e práticas preventivas irregulares. Fatores como vergonha, medo e falta de compreensão impactam o autocuidado.
          </p>
        </section>

        <section style={cardStyle}>
          <div style={cardHeader}><Users size={18} /> <strong style={{ marginLeft: 8 }}>Referencial Teórico</strong></div>
          <p>
            A infecção persistente pelo HPV é a principal causa das lesões cervicais. A adesão ao PCCU envolve crenças, experiências e barreiras emocionais. A psicologia da saúde destaca a influência de fatores culturais e de gênero, especialmente em mulheres adultas que priorizam outras demandas em detrimento do autocuidado.
          </p>
        </section>

        <section style={cardStyle}>
          <div style={cardHeader}><Activity size={18} /> <strong style={{ marginLeft: 8 }}>Metodologia</strong></div>
          <p>
            A pesquisa combinou métodos quantitativos e qualitativos, analisando dados de exames e observando fatores psicossociais. Foram calculadas médias, proporções e desvios padrão, além de reflexões sobre acolhimento e estratégias de educação em saúde.
          </p>
        </section>

        <section style={cardStyle}>
          <div style={cardHeader}><BookOpen size={18} /> <strong style={{ marginLeft: 8 }}>Conclusão</strong></div>
          <p>
            O estudo conclui que é fundamental promover ações de educação em saúde e acolhimento psicológico, reforçando o autocuidado e reduzindo o medo associado ao exame preventivo. Essas medidas são essenciais para diminuir a incidência de lesões cervicais e fortalecer o empoderamento feminino na saúde.
          </p>
        </section>
      </main>

      <footer style={{ textAlign: "center", marginTop: 28, fontSize: 13 }}>
        <div>Macapá - AP | 2024</div>
        <a
  href="/artigo-pccu.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    marginTop: 12,
    background: "#b91c1c",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: 8,
    textDecoration: "none",
  }}
>
  Ler Artigo Completo
</a>
      </footer>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  borderRadius: 12,
  padding: 16,
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
};

const cardHeader = {
  display: "flex",
  alignItems: "center",
  marginBottom: 8,
  color: "#9f1239"
};
