import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    commercialDesignation: '',
    startDate: '',
    activities: '',
    organization: '',
    ogrn: '',
    trademarkApplication: '',
    enterpriseAddress: '',
    legalAddress: '',
    ceoName: '',
    ceoPosition: '',
    email: '',
    contactPerson: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Заявка отправлена! Мы свяжемся с вами для подтверждения данных.');
    }, 2000);
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-primary/20 blur-2xl" />
              <Icon name="FileText" className="text-primary relative z-10 mx-auto" size={64} />
            </div>
            <h1 className="text-5xl font-bold mb-4 glow-cyan">Включение в реестр коммерческих обозначений</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Заполните форму для включения вашего коммерческого обозначения в публичный реестр
            </p>
          </div>

          <Card className="glass-card p-8 border-primary/20 mb-8 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="Info" className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-2">Информация о публикации</h3>
                <p className="text-sm text-muted-foreground">
                  Поля, отмеченные «публикуется в реестре», будут доступны для публичного просмотра.
                  Остальные данные используются только для внутренней обработки заявки и не публикуются.
                </p>
              </div>
            </div>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="glass-card p-8 border-primary/20 animate-slide-up">
              <h2 className="text-2xl font-bold mb-6 text-primary">Основная информация</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="commercialDesignation">
                    Коммерческое обозначение <span className="text-primary">*</span>
                    <span className="text-xs text-muted-foreground ml-2">(публикуется в реестре)</span>
                  </Label>
                  <Input
                    id="commercialDesignation"
                    name="commercialDesignation"
                    value={formData.commercialDesignation}
                    onChange={handleChange}
                    placeholder="Например: Кофейня Утро"
                    required
                    className="bg-muted/50 border-primary/30 focus:border-primary mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="startDate">
                    Дата начала использования <span className="text-primary">*</span>
                    <span className="text-xs text-muted-foreground ml-2">(публикуется в реестре)</span>
                  </Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="bg-muted/50 border-primary/30 focus:border-primary mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="activities">
                    Виды деятельности <span className="text-primary">*</span>
                    <span className="text-xs text-muted-foreground ml-2">(публикуется в реестре)</span>
                  </Label>
                  <Textarea
                    id="activities"
                    name="activities"
                    value={formData.activities}
                    onChange={handleChange}
                    placeholder="Например: Розничная торговля кофе и чаем, услуги кафе"
                    required
                    className="bg-muted/50 border-primary/30 focus:border-primary mt-2 min-h-[100px]"
                  />
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8 border-primary/20 animate-slide-up">
              <h2 className="text-2xl font-bold mb-6 text-primary">Данные владельца</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="organization">
                    Организация владелец <span className="text-primary">*</span>
                    <span className="text-xs text-muted-foreground ml-2">(публикуется в реестре)</span>
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="ООО «Пример» или ИП Иванов И.И."
                    required
                    className="bg-muted/50 border-primary/30 focus:border-primary mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="ogrn">
                    ОГРН / ОГРНИП <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="ogrn"
                    name="ogrn"
                    value={formData.ogrn}
                    onChange={handleChange}
                    placeholder="1234567890123"
                    required
                    className="bg-muted/50 border-primary/30 focus:border-primary mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="trademarkApplication">
                    Заявка на товарный знак (если подана)
                  </Label>
                  <Input
                    id="trademarkApplication"
                    name="trademarkApplication"
                    value={formData.trademarkApplication}
                    onChange={handleChange}
                    placeholder="Номер заявки"
                    className="bg-muted/50 border-primary/30 focus:border-primary mt-2"
                  />
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8 border-primary/20 animate-slide-up">
              <h2 className="text-2xl font-bold mb-6 text-primary">Адреса и контакты</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="enterpriseAddress">
                    Адрес предприятия <span className="text-primary">*</span>
                    <span className="text-xs text-muted-foreground ml-2">(публикуется в реестре)</span>
                  </Label>
                  <Textarea
                    id="enterpriseAddress"
                    name="enterpriseAddress"
                    value={formData.enterpriseAddress}
                    onChange={handleChange}
                    placeholder="Адрес, где используется коммерческое обозначение"
                    required
                    className="bg-muted/50 border-primary/30 focus:border-primary mt-2 min-h-[80px]"
                  />
                </div>

                <div>
                  <Label htmlFor="legalAddress">
                    Юридический адрес владельца <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="legalAddress"
                    name="legalAddress"
                    value={formData.legalAddress}
                    onChange={handleChange}
                    placeholder="Адрес из ЕГРЮЛ/ЕГРИП"
                    required
                    className="bg-muted/50 border-primary/30 focus:border-primary mt-2 min-h-[80px]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="ceoName">
                      ФИО руководителя <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="ceoName"
                      name="ceoName"
                      value={formData.ceoName}
                      onChange={handleChange}
                      placeholder="Иванов Иван Иванович"
                      required
                      className="bg-muted/50 border-primary/30 focus:border-primary mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="ceoPosition">
                      Должность руководителя <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="ceoPosition"
                      name="ceoPosition"
                      value={formData.ceoPosition}
                      onChange={handleChange}
                      placeholder="Генеральный директор"
                      required
                      className="bg-muted/50 border-primary/30 focus:border-primary mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">
                      Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.com"
                      required
                      className="bg-muted/50 border-primary/30 focus:border-primary mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactPerson">
                      Контактное лицо <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="Иванов И.И., +7 900 123-45-67"
                      required
                      className="bg-muted/50 border-primary/30 focus:border-primary mt-2"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8 border-primary/20 animate-fade-in">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">После отправки заявки</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Мы проверим предоставленные данные в течение 1 рабочего дня</li>
                    <li>• Вы получите счёт на оплату на указанный email</li>
                    <li>• После оплаты ваше обозначение будет включено в публичный реестр</li>
                    <li>• Вам будет выдан документ о включении с уникальным номером записи</li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                size="lg"
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </>
                )}
              </Button>
              <Link to="/pricing" className="flex-1">
                <Button type="button" size="lg" variant="outline" className="w-full border-primary/50 hover:bg-primary/10">
                  <Icon name="Info" className="mr-2" size={20} />
                  Посмотреть тарифы
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
