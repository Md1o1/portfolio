import { Metadata } from 'next';

import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';

export const metadata: Metadata = {
  title: 'Contact',
};

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Entre em contato</h1>
      <p className={styles.pageSubtitle}>
        Sinta-se à vontade para entrar em contato comigo através de qualquer uma das plataformas sociais abaixo.
        Estou sempre aberto a novas oportunidades e conexões.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
