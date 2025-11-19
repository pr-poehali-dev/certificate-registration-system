import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: 'Месячная подписка',
      price: '250',
      period: 'месяц',
      description: 'Попробуйте сервис и оцените преимущества',
      features: [
        'Включение в публичный реестр',
        'Фиксация даты начала использования',
        'Подтверждение включения в реестр',
        'Доступ к публичной записи',
        'Техподдержка email',
        'Базовая консультация',
      ],
      popular: false,
      icon: 'Calendar',
      savings: null,
    },
    {
      name: 'Годовая подписка',
      price: '2550',
      period: 'год',
      description: 'Выгодная долгосрочная защита бренда',
      features: [
        'Включение в публичный реестр',
        'Фиксация даты начала использования',
        'Подтверждение включения в реестр',
        'Доступ к публичной записи',
        'Приоритетная поддержка',
        'Расширенная консультация',
        'Помощь в формировании досье',
        'Экономия 450₽ в год',
      ],
      popular: true,
      icon: 'Star',
      savings: '450₽',
    },
  ];

  const whatIncluded = [
    {
      icon: 'Database',
      title: 'Публичная запись в реестре',
      description: 'Ваше коммерческое обозначение, дата начала использования, виды деятельности и владелец',
    },
    {
      icon: 'FileCheck',
      title: 'Официальное подтверждение',
      description: 'Документ о включении в реестр с уникальным номером записи',
    },
    {
      icon: 'Shield',
      title: 'Юридическая поддержка',
      description: 'Консультации по защите прав и применению коммерческих обозначений согласно ГК РФ',
    },
    {
      icon: 'FolderOpen',
      title: 'Формирование досье',
      description: 'Помощь в подготовке комплекта документов для подтверждения прав (годовая подписка)',
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="px-6 py-2 glass-card rounded-full border border-primary/50">
              <span className="text-primary text-sm font-semibold">💎 Прозрачные цены</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 glow-cyan">Стоимость включения в реестр</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простые и понятные тарифы без скрытых платежей
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`glass-card p-8 relative overflow-hidden animate-slide-up ${
                plan.popular
                  ? 'border-primary shadow-lg shadow-primary/20 md:scale-105'
                  : 'border-primary/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-bold animate-pulse-glow">
                    Рекомендуем
                  </div>
                </div>
              )}

              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 blur-xl" />
                <Icon name={plan.icon as any} className="text-primary relative z-10" size={48} />
              </div>

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-primary glow-cyan">
                    {plan.price}₽
                  </span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                {plan.savings && (
                  <div className="text-sm text-primary font-semibold">
                    Экономия {plan.savings} по сравнению с месячной оплатой
                  </div>
                )}
              </div>

              <Link to="/register">
                <Button
                  className={`w-full mb-8 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  Включить в реестр
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </Link>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-cyan animate-fade-in">Что входит в стоимость</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный комплекс услуг для защиты вашего коммерческого обозначения
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whatIncluded.map((item, index) => (
              <Card
                key={item.title}
                className="glass-card p-6 border-primary/20 hover:border-primary/50 transition-all group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:blur-2xl transition-all" />
                    <Icon name={item.icon as any} className="text-primary relative z-10" size={32} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="glass-card p-12 border-primary/20 max-w-4xl mx-auto mb-12 animate-fade-in">
          <div className="flex items-start gap-6">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-primary/20 blur-xl" />
              <Icon name="Calculator" className="text-primary relative z-10" size={48} />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 glow-cyan">Сравните с регистрацией товарного знака</h2>
              <div className="space-y-3 text-lg text-muted-foreground">
                <p>
                  <Icon name="Clock" className="text-primary inline mr-2" size={20} />
                  Товарный знак: <strong>6-8 месяцев</strong> на регистрацию vs <strong className="text-primary">5 минут</strong> в нашем реестре
                </p>
                <p>
                  <Icon name="Wallet" className="text-primary inline mr-2" size={20} />
                  Товарный знак: <strong>от 30 000₽</strong> vs <strong className="text-primary">250₽/месяц</strong> в реестре
                </p>
                <p>
                  <Icon name="Shield" className="text-primary inline mr-2" size={20} />
                  Коммерческое обозначение: защита с момента начала использования + фиксация даты в реестре
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="glass-card p-12 border-primary/20 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 glow-cyan">Нужна консультация?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для получения подробной информации о коммерческих обозначениях и процедуре включения в реестр
            </p>
            <Link to="/contacts">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
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