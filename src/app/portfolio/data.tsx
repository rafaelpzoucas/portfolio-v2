import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiRadixui,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import ignitodo from '../../../public/thumb-ignitodo.png'
import marvelGIF from '../../../public/thumb-marvel.gif'
import marvel from '../../../public/thumb-marvel.png'
import v1GIF from '../../../public/thumb-v1.gif'
import v1 from '../../../public/thumb-v1.png'
import wm10GIF from '../../../public/thumb-wm10.gif'
import wm10 from '../../../public/thumb-wm10.png'
import { ProjectDataType } from './(sections)/projects'

export const projects: ProjectDataType[] = [
  {
    title: 'Portfólio V1',
    description:
      'Esta foi a primeira versão do meu portfólio, e eu sinto muito orgulho desse projeto. No entanto, desde que o criei no final de 2022, melhorei muito minhas habilidades de código. Por isso, decidi dar uma atualizada nele criando a V2.',
    repo_url: 'https://github.com/rafaelpzoucas/portfolio-v1',
    deploy_url: 'https://rafaelzoucas-v1.vercel.app/',
    image_src: v1,
    gif_src: v1GIF,
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
      {
        name: 'Radix UI',
        icon: <SiRadixui />,
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
    gif_src: wm10GIF,
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
    title: 'Heróis da Marvel',
    description:
      'Foi desenvolvido um layout inspirado nas páginas de uma revista em quadrinhos, com cores vibrantes, tipografia chamativa e elementos gráficos que remetem ao estilo artístico dos quadrinhos.',
    repo_url: 'https://github.com/rafaelpzoucas/marvel-app',
    deploy_url: 'https://marvel-app-z.vercel.app/',
    image_src: marvel,
    gif_src: marvelGIF,
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
        icon: <SiStyledcomponents />,
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
    gif_src: null,
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
