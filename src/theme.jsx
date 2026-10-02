import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const key = 'jujubas-theme';
function systemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function storedTheme() {
  try { const value = localStorage.getItem(key); return value === 'dark' || value === 'light' ? value : null; }
  catch { return null; }
}
export function ThemeToggle() {
  const [theme, setTheme] = useState(() => storedTheme() || systemTheme());
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111a25' : '#f8f8f2');
  }, [theme]);
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const followSystem = () => { if (!storedTheme()) setTheme(systemTheme()); };
    const synchronize = (event) => { if (event.key === key || event.key === null) setTheme(storedTheme() || systemTheme()); };
    media.addEventListener('change', followSystem);
    window.addEventListener('storage', synchronize);
    return () => { media.removeEventListener('change', followSystem); window.removeEventListener('storage', synchronize); };
  }, []);
  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem(key, next); } catch { /* O tema continua funcionando sem armazenamento. */ }
  }
  return <button className="theme-toggle" onClick={toggle} aria-label={`Ativar modo ${theme === 'dark' ? 'claro' : 'escuro'}`} title={`Ativar modo ${theme === 'dark' ? 'claro' : 'escuro'}`}>
    {theme === 'dark' ? <Sun size={19}/> : <Moon size={19}/>}
  </button>;
}
