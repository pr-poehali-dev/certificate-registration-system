import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const faqs = [
    {
      question: 'Как зарегистрироваться в системе?',
      answer: 'Нажмите кнопку "Войти" в верхнем меню, выберите вкладку "Регистрация" и заполните необходимые данные. После подтверждения email вы получите полный доступ к системе.',
    },
    {
      question: 'Какие документы можно загружать?',
      answer: 'Система поддерживает форматы PDF, DOC, DOCX, JPG и PNG. Максимальный размер одного файла - 50 МБ. Вы можете загружать любые документы, необходимые для регистрации и получения сертификата.',
    },
    {
      question: 'Как долго действует сертификат?',
      answer: 'Срок действия сертификата зависит от выбранного тарифа: Стартовый - 6 месяцев, Профессиональный - 1 год, Корпоративный - по согласованию (возможны бессрочные сертификаты).',
    },
    {
      question: 'Как проверить подлинность сертификата?',
      answer: 'Перейдите на страницу "Проверить сертификат" и введите уникальный номер сертификата. Система мгновенно проверит его в блокчейне и предоставит полную информацию о действительности.',
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем банковские карты (Visa, MasterCard, Мир), электронные кошельки, банковские переводы и оплату через систему быстрых платежей (СБП).',
    },
    {
      question: 'Можно ли вернуть деньги?',
      answer: 'Да, мы предоставляем 14-дневную гарантию возврата средств, если вы не удовлетворены нашим сервисом. Свяжитесь с поддержкой для оформления возврата.',
    },
    {
      question: 'Безопасны ли мои данные?',
      answer: 'Абсолютно. Мы используем шифрование на уровне банков, все данные хранятся на защищенных серверах, а история операций записывается в блокчейн для максимальной прозрачности и безопасности.',
    },
    {
      question: 'Что такое блокчейн-верификация?',
      answer: 'Каждый сертификат регистрируется в распределенной блокчейн-сети, что делает невозможным его подделку или изменение. Это гарантирует подлинность и неизменяемость документов.',
    },
    {
      question: 'Как работает API доступ?',
      answer: 'API доступен на тарифах Профессиональный и Корпоративный. Он позволяет интегрировать нашу систему с вашими приложениями для автоматической верификации и управления сертификатами.',
    },
    {
      question: 'Как связаться с поддержкой?',
      answer: 'Поддержка доступна через email (support@certregistry.com), телефон (+7 495 123-45-67) или чат на сайте. Время работы: круглосуточно для тарифов Профессиональный и Корпоративный.',
    },
  ];

  const categories = [
    { icon: 'FileText', title: 'Регистрация', count: 3 },
    { icon: 'CreditCard', title: 'Оплата', count: 2 },
    { icon: 'Shield', title: 'Безопасность', count: 2 },
    { icon: 'Code', title: 'API', count: 3 },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-primary/20 blur-2xl" />
            <Icon name="HelpCircle" className="text-primary relative z-10 mx-auto" size={64} />
          </div>
          <h1 className="text-5xl font-bold mb-4 glow-cyan">Часто задаваемые вопросы</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Найдите ответы на популярные вопросы о работе с системой
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {categories.map((category, index) => (
            <Card
              key={category.title}
              className="glass-card p-6 text-center hover:border-primary/50 transition-all cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative inline-block mb-3">
                <div className="absolute inset-0 bg-primary/20 blur-xl" />
                <Icon name={category.icon as any} className="text-primary relative z-10" size={32} />
              </div>
              <h3 className="font-semibold mb-1">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.count} вопросов</p>
            </Card>
          ))}
        </div>

        <Card className="glass-card p-8 border-primary/20 max-w-4xl mx-auto mb-12 animate-slide-up">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-primary/20">
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <Card className="glass-card p-12 border-primary/20 max-w-4xl mx-auto text-center animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-primary/20 blur-xl" />
            <Icon name="MessageCircle" className="text-primary relative z-10 mx-auto" size={48} />
          </div>
          <h2 className="text-3xl font-bold mb-4 glow-cyan">Не нашли ответ?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Наша команда поддержки всегда готова помочь вам с любыми вопросами
          </p>
          <Link to="/contacts">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Mail" size={20} className="mr-2" />
              Связаться с поддержкой
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
