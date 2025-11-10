import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { motion } from "framer-motion"; import { Microscope, Users, Activity, BookOpen } from "lucide-react";

export default function PCCUSite() { return ( <div className="min-h-screen bg-gradient-to-b from-rose-100 to-pink-200 p-8 text-gray-800"> <header className="text-center mb-10"> <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-rose-700" > Relação entre Comportamentos de Prevenção, Faixa Etária e Alterações Citológicas no PCCU </motion.h1> <p className="text-lg mt-2">Uma Análise Quantitativa e Psicossocial</p> <p className="mt-4 text-sm">Por Ana Luiza Parente De Almeida, Fernanda De Sá Tiago, Luely Hellen Silva Tavares, Talita Fernanda Magalhães Amoras e Vanessa Maciel Reis</p> </header>

<main className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-rose-600"><Microscope /> Resumo</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          O estudo analisou resultados do exame preventivo do câncer de colo do útero (PCCU) coletados em 2024, com o objetivo de compreender a relação entre faixa etária e ocorrência de alterações citológicas, além dos fatores psicossociais que influenciam a adesão ao exame. Identificou-se maior incidência de alterações entre mulheres de 30 a 45 anos, associadas à persistência do HPV e práticas preventivas irregulares. Fatores como vergonha, medo e falta de compreensão impactam diretamente o autocuidado.
        </p>
      </CardContent>
    </Card>

    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-rose-600"><Users /> Referencial Teórico</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          A infecção persistente pelo HPV é a principal causa das lesões cervicais. A adesão ao PCCU envolve crenças, experiências e barreiras emocionais. A psicologia da saúde destaca a influência de fatores culturais e de gênero, especialmente em mulheres adultas que priorizam outras demandas em detrimento do autocuidado.
        </p>
      </CardContent>
    </Card>

    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-rose-600"><Activity /> Metodologia</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          A pesquisa combinou métodos quantitativos e qualitativos, analisando dados de exames e observando fatores psicossociais. Foram calculadas médias, proporções e desvios padrão, além de reflexões sobre acolhimento e estratégias de educação em saúde.
        </p>
      </CardContent>
    </Card>

    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-rose-600"><BookOpen /> Conclusão</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          O estudo conclui que é fundamental promover ações de educação em saúde e acolhimento psicológico, reforçando o autocuidado e reduzindo o medo associado ao exame preventivo. Essas medidas são essenciais para diminuir a incidência de lesões cervicais e fortalecer o empoderamento feminino na saúde.
        </p>
      </CardContent>
    </Card>
  </main>

  <footer className="text-center mt-10 text-sm text-gray-700">
    <p>Macapá - AP | 2024</p>
    <Button className="mt-4 bg-rose-600 hover:bg-rose-700">Ler Artigo Completo</Button>
  </footer>
</div>

); }
