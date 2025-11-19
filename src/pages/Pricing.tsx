import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: 'Стартовый',
      price: '1,999',
      period: 'месяц',
      description: 'Идеально для тестирования системы',
      features: [
        '1 сертификат в месяц',
        'Загрузка до 10 документов',
        'Техподдержка email',
        'Срок действия 6 месяцев',
        'Базовая верификация',
      ],
      popular: false,
      icon: 'Rocket',
    },
    {
      name: 'Профессиональный',
      price: '9,999',
      period: 'месяц',
      description: 'Для активного использования',
      features: [
        'До 5 сертификатов в месяц',
        'Загрузка до 50 документов',
        'Приоритетная поддержка 24/7',
        'Срок действия 1 год',
        'Расширенная верификация',
        'API доступ',
        'Персональный менеджер',
      ],
      popular: true,
      icon: 'Zap',
    },
    {
      name: 'Корпоративный',
      price: 'Договорная',
      period: '',
      description: 'Для крупных организаций',
      features: [
        'Неограниченно сертификатов',
        'Неограниченная загрузка',
        'Выделенная линия поддержки',
        'Бессрочные сертификаты',
        'Полная кастомизация',
        'Приоритетный API',
        'Интеграция с корп. системами',
        'SLA 99.99%',
      ],
      popular: false,
      icon: 'Building',
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
          <h1 className="text-5xl font-bold mb-4 glow-cyan">Выберите свой тариф</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Гибкие планы для любых потребностей. Без скрытых платежей.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`glass-card p-8 relative overflow-hidden animate-slide-up ${
                plan.popular
                  ? 'border-primary shadow-lg shadow-primary/20'
                  : 'border-primary/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-bold animate-pulse-glow">
                    Популярный
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
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary glow-cyan">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground">₽/{plan.period}</span>
                  )}
                </div>
              </div>

              <Link to="/auth">
                <Button
                  className={`w-full mb-8 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {plan.price === 'Договорная' ? 'Связаться с нами' : 'Выбрать план'}
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

        <Card className="glass-card p-12 border-primary/20 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 glow-cyan">Нужно больше возможностей?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для индивидуального предложения, соответствующего вашим требованиям
            </p>
            <Link to="/contacts">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Mail" size={20} className="mr-2" />
                Связаться с отделом продаж
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
