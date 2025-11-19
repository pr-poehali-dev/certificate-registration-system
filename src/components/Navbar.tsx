import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isAuthenticated?: boolean;
  onAuthClick?: () => void;
}

export default function Navbar({ isAuthenticated = false, onAuthClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/pricing', label: 'Тарифы' },
    { path: '/verify', label: 'Проверить сертификат' },
    { path: '/faq', label: 'FAQ' },
    { path: '/about', label: 'О системе' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:blur-2xl transition-all" />
              <Icon name="Shield" className="text-primary relative z-10" size={36} />
            </div>
            <span className="text-2xl font-bold glow-cyan">CertRegistry</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all hover:text-primary ${
                  location.pathname === link.path ? 'text-primary glow-cyan' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Icon name="User" size={18} className="mr-2" />
                  Личный кабинет
                </Button>
              </Link>
            ) : (
              <Button
                onClick={onAuthClick}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <Icon name="LogIn" size={18} className="mr-2" />
                Войти
              </Button>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-6 animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                    <Icon name="User" size={18} className="mr-2" />
                    Личный кабинет
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onAuthClick?.();
                  }}
                  className="w-full bg-gradient-to-r from-primary to-secondary"
                >
                  <Icon name="LogIn" size={18} className="mr-2" />
                  Войти
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
