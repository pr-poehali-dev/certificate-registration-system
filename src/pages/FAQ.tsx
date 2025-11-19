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
      category: 'Основы',
      questions: [
        {
          question: 'Что такое коммерческое обозначение?',
          answer: 'Коммерческое обозначение — это средство индивидуализации предприятия, которое используют индивидуальные предприниматели и юридические лица для выделения своего бизнеса среди конкурентов. Оно может быть словесным (например, «Шоурум Гирлянда»), изобразительным или комбинированным.',
        },
        {
          question: 'Чем коммерческое обозначение отличается от товарного знака и фирменного наименования?',
          answer: 'Фирменное наименование — официальное имя организации (например, ООО «Стиль Лаб»), используется в договорах, уставе, налоговой отчётности. Товарный знак служит для индивидуализации товаров и услуг, защищается свидетельством Роспатента на 10 лет. Коммерческое обозначение — используется для индивидуализации предприятия как имущественного комплекса (магазина, аптеки, кафе), право на него возникает с момента начала использования и приобретения известности.',
        },
        {
          question: 'Как возникает право на коммерческое обозначение?',
          answer: 'Согласно статье 1539 ГК РФ, исключительное право на коммерческое обозначение возникает с началом его применения, действует при условии, что обозначение обладает различительной способностью, известно на определённой территории и не нарушает права третьих лиц. Право подтверждается фактическим использованием: вывеской, рекламой, договорами, публикациями.',
        },
      ],
    },
    {
      category: 'Регистрация',
      questions: [
        {
          question: 'Можно ли зарегистрировать коммерческое обозначение?',
          answer: 'Прямой государственной регистрации коммерческих обозначений в России не предусмотрено. Однако владельцы могут зафиксировать факт использования через добровольные реестры, в том числе частные. Включение в такой реестр позволяет подтвердить дату начала использования, указать на добросовестность и приоритет, предъявить информацию третьим лицам.',
        },
        {
          question: 'Зачем фиксировать использование коммерческого обозначения?',
          answer: 'По правилу п. 6 ст. 1252 ГК РФ преимущество в споре имеет то средство индивидуализации, на которое исключительное право возникло раньше. Это означает, что даже если вы подали заявку на товарный знак, но другой предприниматель начнёт использовать схожее название как коммерческое обозначение — он может оспорить вашу регистрацию. Фиксация помогает избежать рисков потери названия и доказать приоритет.',
        },
        {
          question: 'Может ли коммерческое обозначение быть на латинице?',
          answer: 'Да. Законодательство не ограничивает алфавит. Обозначение может содержать английские слова, транслитерацию или смешанный текст (например, Coffee Lab, Style Up).',
        },
      ],
    },
    {
      category: 'Использование',
      questions: [
        {
          question: 'Можно ли использовать слова «Россия», «Национальный» и т.п.?',
          answer: 'Да, если это не вводит потребителей в заблуждение относительно принадлежности предприятия государству. Например, «Кофейня Россия» — допустимо, если нет признаков госпринадлежности.',
        },
        {
          question: 'А герб или флаг в вывеске?',
          answer: 'Нет. Использование государственной символики регулируется Федеральным конституционным законом. Размещение герба РФ на вывеске частного предприятия запрещено.',
        },
        {
          question: 'Можно ли защитить название интернет-магазина?',
          answer: 'Да, если интернет-магазин признаётся предприятием в смысле ст. 132 ГК РФ — как имущественный комплекс, приносящий прибыль. При этом важно доказать масштаб использования: наличие клиентской базы, рекламы, отзывов, домена.',
        },
        {
          question: 'Как использовать коммерческое обозначение?',
          answer: 'Оно может размещаться на вывесках, в документах (бланках, счетах), в рекламе и соцсетях, на упаковке товаров, в контрактах.',
        },
      ],
    },
    {
      category: 'Передача и защита',
      questions: [
        {
          question: 'Можно ли передавать право на коммерческое обозначение?',
          answer: 'Да, но только вместе с предприятием — по договору купли-продажи, аренды или коммерческой концессии (франшизы). Отдельно от бизнеса коммерческое обозначение не передаётся.',
        },
        {
          question: 'Что делать, если название скопировали?',
          answer: 'Соберите доказательства раннего использования (договоры, фото, скриншоты). Направьте нарушителю претензию с требованием прекратить использование. При отказе — подайте иск в арбитражный суд о запрете использования и взыскании убытков.',
        },
        {
          question: 'Можно ли использовать два обозначения для одного предприятия?',
          answer: 'Нет. По закону одно предприятие может иметь только одно коммерческое обозначение. Если на вывеске несколько элементов — они должны рассматриваться как единое комбинированное обозначение.',
        },
      ],
    },
    {
      category: 'Сочетание с другими средствами',
      questions: [
        {
          question: 'А если у меня есть зарегистрированный товарный знак?',
          answer: 'Тогда дополнительная фиксация в реестре коммерческих обозначений не обязательна, но может усилить позиции при спорах.',
        },
        {
          question: 'Можно ли защитить название продукта как коммерческое обозначение?',
          answer: 'Нет. Для маркировки товаров используется только товарный знак. Коммерческое обозначение защищает название предприятия, а не отдельных продуктов.',
        },
      ],
    },
    {
      category: 'Стоимость',
      questions: [
        {
          question: 'Стоимость включения в Реестр коммерческих обозначений',
          answer: '250 рублей в месяц или 2550 рублей при оплате за год (экономия 15%). Услуга включает: фиксацию даты начала использования, выдачу подтверждения, доступ к публичной записи, помощь в формировании «Досье коммерческого обозначения».',
        },
      ],
    },
  ];

  const categories = [
    { icon: 'BookOpen', title: 'Основы', count: 3 },
    { icon: 'FileText', title: 'Регистрация', count: 3 },
    { icon: 'Briefcase', title: 'Использование', count: 4 },
    { icon: 'Shield', title: 'Защита', count: 3 },
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
            Всё о коммерческих обозначениях и работе с реестром
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

        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((section, sectionIndex) => (
            <div key={section.category} className="animate-slide-up" style={{ animationDelay: `${sectionIndex * 0.1}s` }}>
              <h2 className="text-2xl font-bold mb-4 text-primary">{section.category}</h2>
              <Card className="glass-card p-8 border-primary/20">
                <Accordion type="single" collapsible className="w-full">
                  {section.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${sectionIndex}-${index}`} className="border-primary/20">
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
            </div>
          ))}
        </div>

        <Card className="glass-card p-12 border-primary/20 max-w-4xl mx-auto mt-12 text-center animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-primary/20 blur-xl" />
            <Icon name="MessageCircle" className="text-primary relative z-10 mx-auto" size={48} />
          </div>
          <h2 className="text-3xl font-bold mb-4 glow-cyan">Не нашли ответ?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения подробной консультации по вашему вопросу
          </p>
          <Link to="/contacts">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Mail" size={20} className="mr-2" />
              Задать вопрос
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
