'use client';

import { useState, useRef, useEffect } from 'react';
import { VscTerminal, VscClose } from 'react-icons/vsc';

import { THEME_KEYS } from '@/lib/themes';
import styles from '@/styles/Terminal.module.css';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

const commands: Record<string, () => string[]> = {
  help: () => [
    'Comandos Disponíveis:',
    '  help      - Exibir esta mensagem de ajuda',
    '  about     - Sobre mim',
    '  skills    - Minhas habilidades técnicas',
    '  projects  - Visualizar meus projetos',
    '  contact   - Informações de contato',
    '  theme     - Alterar o tema (uso: theme <name>)',
    '  themes    - Listar temas disponíveis',
    '  clear     - Limpar o terminal',
    '  date      - Exibir a data atual',
    '  whoami    - Quem sou eu?',
    '  ls        - Listar conteúdo do diretório',
    '  pwd       - Exibir o diretório de trabalho atual',
    '  echo      - Exibir texto (uso: echo <text>)',
  ],
  about: () => [
    'Olá, meu nome é Kelvin!',
    'Um estudante de Engenharia de Software,',
    'Esse é meu portfólio interativo, onde você pode explorar meus projetos e habilidades.',
  ],
  skills: () => [
    'Habilidades Técnicas:',
    '  Linguages:  TypeScript, JavaScript, HTML/CSS, Python, C/C++',
    '  Front end:  React, Next.js, Tailwind CSS',
    '  Back end:   Node.js, Spring Boot',
    '  DevOps:     Docker, Azure',
    '  Ferramentas:  VS Code, Git, Figma',
  ],
  projects: () => [
    'Projetos em destaque:',
    '  1. vscode-portfolio - Esse portfólio interativo!',
    '  2. Sistema de gestão em C',
    '  3. Normalização de vetores',
    '',
    'Visite a aba de projetos para mais detalhes!',
  ],
  contact: () => [
    'Informações de Contato:',
    '  Email:    kelvinmendes8@gmail.com',
    '  GitHub:   github.com/md1o1',
    '  LinkedIn: linkedin.com/in/kelvin-mendes',
  ],
  themes: () => [
    'Temas disponíveis:',
    ...THEME_KEYS.map((theme, i) => `  ${theme}${i === 0 ? '  (default)' : ''}`),
    '',
    'Use "theme <nome>" para trocar o tema.',
  ],
  date: () => [new Date().toString()],
  whoami: () => ['visitor@portfolio ~ explorando projetos legais!'],
  ls: () => ['about/', 'projects/', 'skills/', 'contact/', 'README.md'],
  pwd: () => ['/home/visitor/portfolio'],
};

const processCommand = (input: string): TerminalLine[] => {
  const trimmed = input.trim();
  const lines: TerminalLine[] = [{ type: 'input', content: `$ ${trimmed}` }];

  if (!trimmed) {
    return lines;
  }

  const parts = trimmed.split(' ');
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  if (cmd === 'clear') {
    return [];
  }

  if (cmd === 'theme' && args[0]) {
    if ((THEME_KEYS as string[]).includes(args[0])) {
      document.documentElement.setAttribute('data-theme', args[0]);
      localStorage.setItem('theme', args[0]);
      lines.push({ type: 'output', content: `Tema alterado para ${args[0]}` });
    } else {
      lines.push({ type: 'error', content: `Tema desconhecido: ${args[0]}. Digite "themes" para ver as opções disponíveis.` });
    }
    return lines;
  }

  if (cmd === 'theme') {
    lines.push({ type: 'error', content: 'Uso: theme <nome>. Digite "themes" para ver as opções disponíveis.' });
    return lines;
  }

  if (cmd === 'echo') {
    lines.push({ type: 'output', content: args.join(' ') });
    return lines;
  }

  if (commands[cmd]) {
    const output = commands[cmd]();
    output.forEach(line => {
      lines.push({ type: 'output', content: line });
    });
  } else {
    lines.push({ type: 'error', content: `Comando não encontrado: ${cmd}. Digite "help" para ver os comandos disponíveis.` });
  }

  return lines;
};

interface TerminalProps {
  onToggle: () => void;
}

const Terminal = ({ onToggle }: TerminalProps) => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Bem-vindo ao terminal interativo!' },
    { type: 'output', content: 'Digite "help" para ver os comandos disponíveis.' },
    { type: 'output', content: '' },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();

    if (trimmed === 'clear') {
      setLines([]);
    } else {
      const newLines = processCommand(input);
      setLines(prev => [...prev, ...newLines]);
    }

    if (trimmed) {
      setCommandHistory(prev => [...prev, trimmed]);
    }
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <VscTerminal className={styles.terminalIcon} />
          <span>Terminal</span>
        </div>
        <div className={styles.headerRight}>
          <button onClick={onToggle} className={styles.headerBtn} title="Close">
            <VscClose size={14} />
          </button>
        </div>
      </div>
      <div className={styles.body} ref={terminalRef} onClick={handleTerminalClick}>
        {lines.map((line, index) => (
          <div
            key={index}
            className={`${styles.line} ${
              line.type === 'error' ? styles.error : line.type === 'input' ? styles.input : ''
            }`}
          >
            {line.content}
          </div>
        ))}
        <form onSubmit={handleSubmit} className={styles.inputLine}>
          <span className={styles.prompt}>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={styles.input}
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
