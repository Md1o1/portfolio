export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Normalizador de vetores',
    description:
      'Um normalizador de vetores que testa três métodos diferentes.',
    logo: '/logos/C.svg',
    link: 'https://github.com/Md1o1/Vector-Normalizer',
    slug: 'normalizador',
  },
  {
    title: 'VSCode Portfolio',
    description:
      'Um portfólio de desenvolvedor com tema do Visual Studio Code, construído com Next.js e CSS Modules.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/Md1o1/portfolio',
    slug: 'vscode-portfolio',
  },
  {
    title: 'Sistema em C para uma companhia aérea',
    description:
      'Um sistema em C para gerenciamento de voos.',
    logo: '/logos/C.svg',
    link: 'https://github.com/Md1o1/TP-Companhia-Aerea',
    slug: 'tp-companhia-aerea',
  },
  {
    title: 'Sistema em C para gerenciamento de um Hotel',
    description:
      'Um sistema em C para gerenciamento de um hotel.',
    logo: '/logos/C.svg',
    link: 'https://github.com/Md1o1/Hotel-Descanso-Garantido',
    slug: 'tp-hotel',
  },
];
