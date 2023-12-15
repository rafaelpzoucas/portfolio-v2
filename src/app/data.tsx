import { Figma, Globe, Puzzle, Search, Smartphone } from 'lucide-react'
import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import ignitodo from '../../public/ignitodo-thumb.png'
import marvel from '../../public/marvel-thumb.jpg'
import wm10 from '../../public/wm10-thumb.png'
import { ProjectDataType } from './(sections)/projects'

export const steps = [
  {
    step: 1,
    title: 'Análise de Requisitos',
    description:
      'Compreendendo as necessidades do projeto e definindo metas claras para garantir que o desenvolvimento atenda às expectativas do cliente.',
  },
  {
    step: 2,
    title: 'Design UI/UX',
    description:
      'Criando uma experiência visual atraente e intuitiva, considerando a usabilidade para garantir que o sistema seja fácil de usar.',
  },
  {
    step: 3,
    title: 'Desenvolvimento',
    description:
      'Transformando o design em realidade, construindo a estrutura do sistema e garantindo que funcione perfeitamente em todos os dispositivos.',
  },
  {
    step: 4,
    title: 'Testes',
    description:
      'Verificando cuidadosamente o sistema para garantir que funcione sem problemas, seja fácil de usar e atenda aos requisitos estabelecidos.',
  },
  {
    step: 5,
    title: 'Feedback e Ajustes',
    description:
      'Coletando opiniões dos usuários e fazendo ajustes contínuos para melhorar a funcionalidade e a satisfação do usuário ao longo do tempo.',
  },
]

export const solutions = [
  {
    icon: <Figma className="w-6 h-6" />,
    title: 'Prototipação',
    description:
      'Criação de protótipos interativos para simular a experiência do usuário antes do desenvolvimento completo.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Landing Pages',
    description: 'Criação de páginas de destino otimizadas para conversão.',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Aplicações Web Progressivas (PWAs):',
    description:
      'Desenvolvimento de aplicações web que oferecem uma experiência semelhante à de aplicativos nativos.',
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: 'Integração de Sistemas:',
    description:
      'Conexão de diferentes sistemas e APIs para garantir uma experiência fluida.',
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Otimização para SEO:',
    description:
      'Realização de auditorias on-page para garantir que os elementos HTML, meta tags e conteúdo estejam otimizados para os motores de busca.',
  },
]

export const faq = [
  {
    title:
      'Qual é a sua experiência em desenvolvimento de sites e aplicativos?',
    description:
      'Tenho mais de 5 anos de experiência desenvolvendo soluções digitais, desde pequenos sites até aplicativos corporativos. Meu foco é criar produtos que atendam às necessidades específicas do seu negócio.',
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
]

export const projects: ProjectDataType[] = [
  {
    title: 'Heróis da Marvel',
    description:
      'Foi desenvolvido um layout inspirado nas páginas de uma revista em quadrinhos, com cores vibrantes, tipografia chamativa e elementos gráficos que remetem ao estilo artístico dos quadrinhos.',
    repo_url: 'https://github.com/rafaelpzoucas/marvel-app',
    deploy_url: 'https://marvel-app-z.vercel.app/',
    image_src: marvel,
    stacks: [
      {
        name: 'TypeScript',
        icon: <SiTypescript />,
      },
      {
        name: 'ReactJs',
        icon: <SiReact />,
      },
      {
        name: 'Styled Components',
        icon: <SiTailwindcss />,
      },
    ],
  },
  {
    title: 'ERP WM10',
    description:
      'Redesign do site do WM10, realizado durante o período de estágio na empresa. Projeto desenvolvido com HTML, CSS, JS, Bootstrap e a biblioteca SplideJs para os carroséis. Projeto finalizado em outubro de 2022.',
    repo_url: null,
    deploy_url: 'https://wm10.com.br/',
    image_src: wm10,
    stacks: [
      {
        name: 'HTML',
        icon: <SiHtml5 />,
      },
      {
        name: 'CSS',
        icon: <SiCss3 />,
      },
      {
        name: 'JavaScript',
        icon: <SiJavascript />,
      },
      {
        name: 'Bootstrap',
        icon: <SiBootstrap />,
      },
    ],
  },
  {
    title: 'Ignitodo',
    description:
      'Projeto criado para o desafio do Bootcamp Ignite. O desafio consistia em criar uma aplicação com React e Typescript, no qual seria possível criar tarefas, marcar as concluídas e com um resumo do progresso.',
    repo_url: 'https://github.com/rafaelpzoucas/ignitodo',
    deploy_url: 'https://ignitodo.vercel.app/',
    image_src: ignitodo,
    stacks: [
      {
        name: 'TypeScript',
        icon: <SiTypescript />,
      },
      {
        name: 'ReactJs',
        icon: <SiReact />,
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
      },
    ],
  },
]
