import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Gmail',
    link: 'kelvinmendes8@gmail.com',
    href: 'mailto:kelvinmendes8@gmail.com',
  },
  {
    social: 'github',
    link: 'Md1o1',
    href: 'https://github.com/Md1o1',
  },
  {
    social: 'linkedin',
    link: 'Kelvin Mendes',
    href: 'https://www.linkedin.com/in/kelvin-mendes/',
  },
  {
    social: 'Protonmail',
    link: 'MelvinKendes@protonmail.com',
    href: 'mailto:MelvinKendes@protonmail.com',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
