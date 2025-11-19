import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  const features = [
    {
      icon: 'Blocks',
      title: 'Блокчейн-технология',
      description: 'Используем распределенный реестр для обеспечения неизменяемости и прозрачности всех операций',
    },
    {
      icon: 'Lock',
      title: 'Банковское шифрование',
      description: 'AES-256 шифрование и многоуровневая защита гарантируют безопасность ваших данных',
    },
    {
      icon: 'Cpu',
      title: 'ИИ-валидация',
      description: 'Искусственный интеллект автоматически проверяет документы на соответствие требованиям',
    },
    {
      icon: 'Cloud',
      title: 'Облачная инфраструктура',
      description: 'Масштабируемая архитектура на базе ведущих облачных провайдеров',
    },
  ];

  const stats = [
    { value: '2023', label: 'Год основания' },
    { value: '50K+', label: 'Пользователей' },
    { value: '200K+', label: 'Сертификатов' },
    { value: '99.99%', label: 'Надёжность' },
  ];

  const team = [
    { role: 'CEO & Founder', name: 'Алексей Иванов' },
    { role: 'CTO', name: 'Мария Петрова' },
    { role: 'Head of Security', name: 'Дмитрий Сидоров' },
    { role: 'Lead Developer', name: 'Анна Смирнова' },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <section className="mb-24 animate-fade-in">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-primary/20 blur-2xl" />
              <Icon name="Building" className="text-primary relative z-10 mx-auto" size={64} />
            </div>
            <h1 className="text-5xl font-bold mb-4 glow-cyan">О системе CertRegistry</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Мы создаём будущее цифровой сертификации, объединяя передовые технологии блокчейна,
              искусственного интеллекта и облачных вычислений для максимальной безопасности и удобства.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="glass-card p-6 text-center border-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary glow-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center glow-cyan animate-fade-in">
              Наша миссия
            </h2>
            <Card className="glass-card p-12 border-primary/20 animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Мы верим, что в цифровую эпоху верификация и сертификация должны быть доступными,
                безопасными и мгновенными. Наша цель — сделать процесс получения и проверки
                сертификатов максимально простым, при этом обеспечивая высочайший уровень защиты.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CertRegistry не просто платформа — это экосистема доверия, где каждый документ
                защищён математически неизменяемыми гарантиями блокчейна, а каждая операция
                прозрачна и верифицируема.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-cyan animate-fade-in">Технологии</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Инновационный стек для максимальной производительности и безопасности
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="glass-card p-8 border-primary/20 hover:border-primary/50 transition-all group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:blur-2xl transition-all" />
                  <Icon name={feature.icon as any} className="text-primary relative z-10" size={48} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-cyan animate-fade-in">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Эксперты в области криптографии, блокчейна и разработки ПО
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="glass-card p-6 text-center border-primary/20 hover:border-primary/50 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto flex items-center justify-center">
                    <Icon name="User" className="text-background" size={32} />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </Card>
            ))}
          </div>
        </section>

        <Card className="glass-card p-12 border-primary/20 text-center animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-primary/20 blur-xl" />
            <Icon name="Rocket" className="text-primary relative z-10 mx-auto" size={56} />
          </div>
          <h2 className="text-4xl font-bold mb-4 glow-cyan">Присоединяйтесь к нам</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Станьте частью будущего цифровой сертификации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Начать сейчас
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Icon name="Mail" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
