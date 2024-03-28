const today = new Date()
const initialYear = new Date('2021-01-01')
const diff = today.getTime() - initialYear.getTime()
const diffInYears = diff / (1000 * 60 * 60 * 24 * 365.25)

const experienceYears = Math.round(diffInYears)

export const faq = {
  title: 'Dúvidas frequentes',
  data: [
    {
      title:
        'Qual é a sua experiência em desenvolvimento de sites e aplicativos?',
      description: `Tenho mais de ${experienceYears} anos de experiência desenvolvendo soluções digitais, desde pequenos sites até aplicativos corporativos. Meu foco é criar produtos que atendam às necessidades específicas do seu negócio.`,
    },
    {
      title: 'Como posso saber se você é a pessoa certa para o meu projeto?',
      description:
        'Entendo que pode ser difícil avaliar as habilidades técnicas. Estou aqui para simplificar o processo. Podemos agendar uma conversa para discutir suas ideias e necessidades, se necessário sem termos técnicos. Vamos falar na linguagem do seu projeto.',
    },
    {
      title:
        'Como funciona o processo de trabalho para quem não tem conhecimentos técnicos?',
      description:
        'Simples! Começamos com uma conversa informal para que eu possa entender suas ideias e objetivos. Em seguida, apresento uma proposta fácil de entender, explicando cada etapa do desenvolvimento sem usar termos técnicos complexos. Quero tornar o processo o mais transparente possível para você.',
    },
    {
      title:
        'Quais benefícios o desenvolvimento com React pode trazer para o meu negócio?',
      description:
        'React é uma tecnologia poderosa que permite criar interfaces de usuário incríveis, garantindo uma experiência positiva para os usuários finais. Traduzindo: seu aplicativo será mais rápido, mais eficiente e agradável de usar, o que pode impactar diretamente na satisfação do cliente.',
    },
    {
      title: 'Você trabalha apenas com clientes locais?',
      description:
        'Não, posso trabalhar remotamente e me comunicar de maneira eficaz, esteja você ao lado ou do outro lado do mundo. A flexibilidade é fundamental para garantir que seus requisitos sejam atendidos, independentemente da localização.',
    },
    {
      title: 'Você oferece suporte após o lançamento do projeto?',
      description:
        'Sim, estou comprometido em garantir que sua solução funcione perfeitamente. Após o lançamento, estarei disponível para fornecer suporte contínuo, responder a perguntas e ajustar conforme necessário. Seu sucesso é meu objetivo.',
    },
    {
      title: 'Como posso ver exemplos do seu trabalho anterior?',
      description:
        'Você pode explorar meu portfólio no site, onde destaco projetos anteriores. Vou explicar cada projeto de forma simples, destacando como minhas soluções ajudaram outras empresas a atingir seus objetivos.',
    },
    {
      title:
        'Como você mantém-se atualizado com as últimas tendências, e isso afeta meu projeto?',
      description:
        'Estou sempre aprendendo e acompanhando as últimas tendências para oferecer as melhores soluções. Embora eu cuide dos detalhes técnicos, o que isso significa para você é que sua solução estará alinhada com as últimas inovações do setor, sem que você precise se preocupar com os detalhes técnicos.',
    },
  ],
}
