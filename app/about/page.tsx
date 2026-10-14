'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Kelvin Mendes</h1>
              <p className={styles.role}>Analista de Projetos na Meet Tecnologia</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                Belo Horizonte, Brazil
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href="https://github.com/md1o1" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Sobre Mim */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>Sobre Mim</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Olá, sou um especialista em Suporte de TI com mais de 6 anos de experiência fornecendo suporte de Nível 1 e Nível 2 em
                ambientes híbridos. Experiência com Microsoft 365, Active Directory, administração Linux, troubleshooting de redes e
                software, e suporte à infraestrutura de TI. 
              </p>
              
              <p className={styles.paragraph}>
                 Atualmente cursando engenharia de software, buscando aprimorar minhas habilidades 
                 em desenvolvimento de software e contribuir para projetos inovadores.
              </p>
            </div>
          </section>

          {/* Experiências */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experiência</h2>
            </div>
            
            <div className={styles.sectionBody}>
            <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Atualmente</span>
                </div>
                <h3 className={styles.expRole}>Analista de Projetos</h3>
                <p className={styles.expCompany}>Meet Tecnologia</p>
                <ul className={styles.expList}>
                  <li>Análise e elicitação de requisitos</li>
                  <li>Desenvolvimento de produtos de automação internos</li>
                  <li>Estruturação de processos de desenvolvimento</li>
                  <li>Suporte aos gerentes de vendas para uso do sistema</li>
                </ul>
            </div>

            <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Nov 2025 - Agosto 2026</span>
                </div>
                <h3 className={styles.expRole}>Técnico de Suporte N1</h3>
                <p className={styles.expCompany}>Meet Tecnologia</p>
                <p className={styles.expDesc}>
                   Suporte técnico T1 para 140 clientes em todo o Brasil, em múltiplos ambientes, utilizando GLPI (Verdanadesk, 1450 tickets encerrados) e Matrix.
                   Suporte proativo T2 em equipamentos ubiquiti(UDM, unify), incluindo execução e validação de backups, 
                   Gerenciamento de regras de firewall e acesso SSH(VMWare, Proxmox), 
                   Monitoramento de status de rede e espaço em disco de servidores(Zabbix) e 
                   Automação de tarefas e configurações com GPO a nível de domínio.
                </p>
            </div>
            <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Fev 2020 - Junho 2025</span>
                </div>
                <h3 className={styles.expRole}>Técnico de Service Desk</h3>
                <p className={styles.expCompany}>Hatch Ltd.</p>
                <p className={styles.expDesc}>
                   Atendimento interno internacional utilizando Zendesk (4.444 tickets encerrados), para T1 e T2 na área de Service Delivery, 
                   atuando em mais de 150 países, de forma remota e presencial.
                   Gerenciamento de contratos, cotações, aquisição e suporte de suprimentos e garantias. 
                   Gerenciamento de contas de usuários e grupos do Office 365. 
                   Treinamento de integração para novos colaboradores.
                </p>
            </div>
            <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Set 2018 - Jan 2020</span>
                </div>
                <h3 className={styles.expRole}>Menor Aprendiz</h3>
                <p className={styles.expCompany}>Hatch Ltd.</p>
                <p className={styles.expDesc}>
                  Suporte no gerenciamento de documentação trabalhista e contratual.
                </p>
              </div>
            </div>

          </section>

          {/* Habilidades */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Habilidades</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Linguagens</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>JavaScript</span>
                    <span className={styles.skillTag}>TypeScript</span>
                    <span className={styles.skillTag}>HTML/CSS</span>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>C/C++</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Front end</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>React</span>
                    <span className={styles.skillTag}>Next.js</span>
                    <span className={styles.skillTag}>Tailwind CSS</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Back end</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Node.js</span>
                    <span className={styles.skillTag}>Spring Boot</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Ferramentas</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Git</span>
                    <span className={styles.skillTag}>VS Code</span>
                    <span className={styles.skillTag}>Figma</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Além do Código</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
               Além da tecnologia, gosto de ler fantasia e ficção científica, 
               ouvir música e ir em shows, jogar RPGs, fazer trilhas e aprender sobre diferentes culturas,
               atualmente estou estudando russo.
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            Veja meus projetos →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
