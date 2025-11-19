import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  const benefits = [
    {
      icon: 'Shield',
      title: 'Фиксация приоритета',
      description: 'Закрепление даты начала использования коммерческого обозначения для подтверждения прав',
    },
    {
      icon: 'Scale',
      title: 'Юридическая защита',
      description: 'Преимущество в споре согласно п.6 ст.1252 ГК РФ — право на средство индивидуализации, возникшее раньше',
    },
    {
      icon: 'Clock',
      title: 'Экономия времени',
      description: 'Включение в реестр за несколько минут против 6-8 месяцев регистрации товарного знака',
    },
    {
      icon: 'FileText',
      title: 'Формирование досье',
      description: 'Помощь в подготовке комплекта документов для подтверждения прав при необходимости',
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <section className="mb-24 animate-fade-in">
          <div className="text-center mb-12">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-primary/20 blur-2xl" />
              <Icon name="BookOpen" className="text-primary relative z-10 mx-auto" size={64} />
            </div>
            <h1 className="text-5xl font-bold mb-4 glow-cyan">О Реестре коммерческих обозначений</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Реестр создан для поддержки закрепления прав на используемые в России коммерческие обозначения,
              содействия их защите и подтверждения факта применения при необходимости.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center glow-cyan animate-fade-in">
              Зачем нужен реестр
            </h2>
            <Card className="glass-card p-12 border-primary/20 animate-slide-up mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Коммерческое обозначение, предусмотренное Гражданским кодексом РФ, служит для индивидуализации предприятий. 
                Исключительное право на него возникает с началом использования и приобретения известности на определённой территории. 
                Регистрация не требуется — как и для объектов авторского права.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Однако, в отличие от них, для коммерческих обозначений не предусмотрена официальная процедура фиксации приоритета, 
                например, через реестр или иной уполномоченный орган. Между тем, такая возможность была бы полезна, 
                особенно в случае судебных споров.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-primary">Включение в Реестр российских коммерческих обозначений позволяет зафиксировать дату начала 
                использования бренда и подтвердить приоритет его применения.</strong>
              </p>
            </Card>

            <Card className="glass-card p-12 border-primary/20 animate-slide-up">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Gavel" className="text-primary flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Правовое обоснование</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Важным основанием для создания реестра стало положение <strong>п. 6 ст. 1252 ГК РФ</strong>, 
                    устанавливающее приоритет того средства индивидуализации, на которое исключительное право возникло ранее.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Это создаёт риски для заявителей товарных знаков: если конкурент начнёт использовать схожее 
                    коммерческое обозначение до регистрации вашего знака, он может получить исключительные права на него 
                    и оспорить вашу регистрацию. При этом срок рассмотрения заявки на товарный знак составляет <strong className="text-primary">6–8 месяцев</strong> — 
                    время, в течение которого другой субъект может начать использовать аналогичное название 
                    и закрепить за собой право на него.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 glow-cyan animate-fade-in">Преимущества включения в реестр</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Защита ваших прав на коммерческое обозначение
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="glass-card p-8 border-primary/20 hover:border-primary/50 transition-all group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:blur-2xl transition-all" />
                  <Icon name={benefit.icon as any} className="text-primary relative z-10" size={48} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card p-12 border-primary/20 animate-fade-in">
              <div className="text-center mb-8">
                <Icon name="AlertCircle" className="text-primary mx-auto mb-4" size={56} />
                <h2 className="text-3xl font-bold mb-4 glow-cyan">Важно знать</h2>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <Icon name="Check" className="text-primary inline mr-2" size={20} />
                  Включение в Реестр помогает избежать ситуации, когда вас опередят с использованием названия
                </p>
                <p>
                  <Icon name="Check" className="text-primary inline mr-2" size={20} />
                  Мы оказываем помощь в формировании комплекта документов — «Досье коммерческого обозначения» — для подтверждения ваших прав при необходимости
                </p>
                <p>
                  <Icon name="Check" className="text-primary inline mr-2" size={20} />
                  Стоимость включения обозначения в Реестр — <strong className="text-primary">250 рублей в месяц</strong> или <strong className="text-primary">2550 рублей при оплате за год</strong>
                </p>
              </div>
            </Card>
          </div>
        </section>

        <Card className="glass-card p-12 border-primary/20 text-center animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-primary/20 blur-xl" />
            <Icon name="Rocket" className="text-primary relative z-10 mx-auto" size={56} />
          </div>
          <h2 className="text-4xl font-bold mb-4 glow-cyan">Защитите свой бренд сегодня</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Зафиксируйте дату начала использования и получите преимущество в споре
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Включить в реестр
              </Button>
            </Link>
            <Link to="/faq">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Icon name="HelpCircle" size={20} className="mr-2" />
                Часто задаваемые вопросы
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}