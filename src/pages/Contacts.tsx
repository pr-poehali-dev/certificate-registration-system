import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Contacts() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    }, 1500);
  };

  const contacts = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'support@certregistry.com',
      link: 'mailto:support@certregistry.com',
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Инновационная, 42',
      link: null,
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      value: 'Круглосуточно, 24/7',
      link: null,
    },
  ];

  const socials = [
    { icon: 'Github', name: 'GitHub', link: '#' },
    { icon: 'Twitter', name: 'Twitter', link: '#' },
    { icon: 'Linkedin', name: 'LinkedIn', link: '#' },
    { icon: 'Youtube', name: 'YouTube', link: '#' },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-primary/20 blur-2xl" />
            <Icon name="MessageSquare" className="text-primary relative z-10 mx-auto" size={64} />
          </div>
          <h1 className="text-5xl font-bold mb-4 glow-cyan">Свяжитесь с нами</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы всегда рады ответить на ваши вопросы и помочь с любыми задачами
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <div className="space-y-6">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold mb-6 glow-cyan">Контактная информация</h2>
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <Card
                    key={contact.title}
                    className="glass-card p-6 border-primary/20 hover:border-primary/50 transition-all group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:blur-2xl transition-all" />
                        <Icon name={contact.icon as any} className="text-primary relative z-10" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1 text-lg">{contact.title}</h3>
                        {contact.link ? (
                          <a
                            href={contact.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="glass-card p-6 border-primary/20 animate-slide-up">
              <h3 className="font-semibold mb-4 text-lg">Мы в социальных сетях</h3>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    className="w-12 h-12 glass-card border-primary/30 hover:border-primary flex items-center justify-center rounded-lg transition-all hover:scale-110 group"
                  >
                    <Icon
                      name={social.icon as any}
                      className="text-primary group-hover:scale-110 transition-transform"
                      size={20}
                    />
                  </a>
                ))}
              </div>
            </Card>
          </div>

          <Card className="glass-card p-8 border-primary/20 animate-slide-up">
            <h2 className="text-2xl font-bold mb-6 glow-cyan">Отправить сообщение</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иван Иванов"
                  required
                  className="bg-muted/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  required
                  className="bg-muted/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Тема</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Вопрос по тарифам"
                  required
                  className="bg-muted/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Textarea
                  id="message"
                  placeholder="Расскажите подробнее о вашем вопросе..."
                  required
                  className="bg-muted/50 border-primary/30 focus:border-primary min-h-[150px] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <Icon name="Loader2" className="mr-2 animate-spin" size={18} />
                    Отправляем...
                  </>
                ) : (
                  <>
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить сообщение
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>

        <Card className="glass-card p-8 border-primary/20 max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-start gap-6">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-primary/20 blur-xl" />
              <Icon name="Info" className="text-primary relative z-10" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Служба поддержки</h3>
              <p className="text-muted-foreground leading-relaxed">
                Наша команда поддержки работает круглосуточно и готова помочь вам с любыми вопросами.
                Среднее время ответа на email — менее 2 часов. Для срочных вопросов рекомендуем звонить
                по телефону или использовать чат на сайте.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
