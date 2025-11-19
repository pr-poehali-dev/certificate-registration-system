import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: 'Shield',
      title: 'Закрепление прав',
      description: 'Фиксация даты начала использования и подтверждение приоритета применения бренда',
    },
    {
      icon: 'Clock',
      title: 'Быстрая регистрация',
      description: 'Включение в реестр за несколько минут — быстрее, чем регистрация товарного знака',
    },
    {
      icon: 'FileCheck',
      title: 'Юридическая защита',
      description: 'Доказательство приоритета по п.6 ст.1252 ГК РФ при судебных спорах',
    },
    {
      icon: 'Globe',
      title: 'Публичный доступ',
      description: 'Информация о вашем обозначении доступна для проверки третьими лицами',
    },
  ];

  const stats = [
    { value: '250₽', label: 'Стоимость в месяц' },
    { value: '2550₽', label: 'При оплате за год' },
    { value: '6-8 мес', label: 'Срок регистрации ТЗ' },
    { value: '<5 мин', label: 'Включение в реестр' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-6">
              <div className="px-6 py-2 glass-card rounded-full border border-primary/50 animate-pulse-glow">
                <span className="text-primary text-sm font-semibold">🚀 Официальный реестр коммерческих обозначений</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-cyan leading-tight">
              Реестр коммерческих
              <br />
              <span className="text-secondary glow-purple">обозначений России</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Закрепите права на ваш бренд и зафиксируйте дату начала использования. Защита приоритета быстрее, чем регистрация товарного знака.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity animate-pulse-glow">
                  <Icon name="Rocket" size={24} className="mr-2" />
                  Включить в реестр
                </Button>
              </Link>
              <Link to="/verify">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
                  <Icon name="Search" size={24} className="mr-2" />
                  Проверить обозначение
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary opacity-50" />
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary glow-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-cyan">
              Зачем включать в реестр
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Защита прав на коммерческое обозначение согласно ГК РФ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="glass-card p-6 hover:border-primary/50 transition-all group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4 inline-block">
                  <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:blur-2xl transition-all" />
                  <Icon name={feature.icon as any} className="text-primary relative z-10" size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-cyan">
              Защитите свой бренд сейчас
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Зафиксируйте дату начала использования до того, как это сделает конкурент
            </p>
            <Link to="/register">
              <Button size="lg" className="text-lg px-12 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity animate-pulse-glow">
                <Icon name="ArrowRight" size={24} className="mr-2" />
                Включить в реестр — 250₽/мес
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}