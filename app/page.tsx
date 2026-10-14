'use client';

import Link from 'next/link';
import { VscArrowRight, VscGithub, VscMail, VscCode } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <VscCode size={32} />
            </div>
          </div>

          <div className={styles.intro}>
            <p className={styles.greeting}>Olá, eu sou</p>
            
            <h1 className={styles.name}>Kelvin Mendes</h1>
            
            <p className={styles.role}>Analista de Projetos</p>
            
            <div className={styles.divider} />
            
            <p className={styles.description}>
              Sou um estudante de engenharia de software com um grande interesse em segurança da informação. 
              Minha experiência como técnico de service desk nos últimos seis anos me proporcionou habilidades avançadas em resolução de problemas em softwares e em sistemas operacionais como Windows e Linux, além de uma sólida compreensão de governança de TI.
              Buscando aprimorar minhas habilidades em desenvolvimento de software e contribuir para projetos inovadores. 
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryAction}>
              <span>Ver Projetos</span>
              <VscArrowRight size={18} />
            </Link>
            
            <Link href="/about" className={styles.secondaryAction}>
              <span>Saiba Mais</span>
            </Link>
          </div>

          <div className={styles.links}>
            <a 
              href="https://github.com/md1o1" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGithub size={16} />
              <span>GitHub</span>
            </a>
            
            <span className={styles.linkSeparator}>/</span>
            
            <Link href="/contact" className={styles.link}>
              <VscMail size={16} />
              <span>Contato</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
