import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Dashboard() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        alert('Файл слишком большой. Максимум 50 МБ');
        return;
      }
      setSelectedFile(file);
      simulateUpload();
    }
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const certificates = [
    {
      id: 'CERT-2025-001234',
      name: 'Сертификат соответствия',
      status: 'active',
      validUntil: '2026-01-15',
      documents: 3,
    },
    {
      id: 'CERT-2025-001156',
      name: 'Лицензия на деятельность',
      status: 'processing',
      validUntil: '2025-12-20',
      documents: 2,
    },
    {
      id: 'CERT-2024-009821',
      name: 'Техническая документация',
      status: 'expired',
      validUntil: '2024-11-30',
      documents: 5,
    },
  ];

  const statusColors = {
    active: 'bg-green-500/20 text-green-400 border-green-500/50',
    processing: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
    expired: 'bg-red-500/20 text-red-400 border-red-500/50',
  };

  const statusLabels = {
    active: 'Активен',
    processing: 'В обработке',
    expired: 'Истёк',
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 glow-cyan">Личный кабинет</h1>
          <p className="text-muted-foreground">Управляйте своими сертификатами и документами</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card p-6 border-primary/20 animate-slide-up">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl" />
                <Icon name="FileCheck" className="text-primary relative z-10" size={40} />
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Всего сертификатов</div>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6 border-green-500/20 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 blur-xl" />
                <Icon name="CheckCircle" className="text-green-400 relative z-10" size={40} />
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">1</div>
                <div className="text-sm text-muted-foreground">Активных</div>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6 border-yellow-500/20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500/20 blur-xl" />
                <Icon name="Clock" className="text-yellow-400 relative z-10" size={40} />
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">1</div>
                <div className="text-sm text-muted-foreground">В обработке</div>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="certificates" className="animate-slide-up">
          <TabsList className="bg-muted/50 mb-6">
            <TabsTrigger value="certificates" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Award" size={18} className="mr-2" />
              Мои сертификаты
            </TabsTrigger>
            <TabsTrigger value="upload" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="Upload" size={18} className="mr-2" />
              Загрузить документы
            </TabsTrigger>
            <TabsTrigger value="payment" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Icon name="CreditCard" size={18} className="mr-2" />
              Оплата
            </TabsTrigger>
          </TabsList>

          <TabsContent value="certificates" className="space-y-4">
            {certificates.map((cert, index) => (
              <Card
                key={cert.id}
                className="glass-card p-6 border-primary/20 hover:border-primary/50 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{cert.name}</h3>
                      <Badge className={statusColors[cert.status as keyof typeof statusColors]}>
                        {statusLabels[cert.status as keyof typeof statusLabels]}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="Hash" size={14} />
                        <span>ID: {cert.id}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={14} />
                        <span>Действителен до: {cert.validUntil}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Files" size={14} />
                        <span>Документов: {cert.documents}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Просмотр
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="upload">
            <Card className="glass-card p-8 border-primary/20">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 glow-cyan">Загрузка документов</h3>
                  <p className="text-muted-foreground">Максимальный размер файла: 50 МБ</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="doc-name">Название документа</Label>
                    <Input
                      id="doc-name"
                      placeholder="Например: Паспорт, Лицензия..."
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={handleFileSelect}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="relative inline-block mb-4">
                        <div className="absolute inset-0 bg-primary/20 blur-xl" />
                        <Icon name="Upload" className="text-primary relative z-10 mx-auto" size={48} />
                      </div>
                      <p className="text-lg font-semibold mb-2">
                        {selectedFile ? selectedFile.name : 'Выберите файл или перетащите сюда'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Поддерживаются форматы: PDF, DOC, DOCX, JPG, PNG
                      </p>
                    </label>
                  </div>

                  {uploadProgress > 0 && (
                    <div className="space-y-2 animate-fade-in">
                      <div className="flex justify-between text-sm">
                        <span>Загрузка...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} className="h-2" />
                    </div>
                  )}

                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    disabled={!selectedFile || uploadProgress < 100}
                  >
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить на регистрацию
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="payment">
            <Card className="glass-card p-8 border-primary/20">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 glow-cyan">Оплата сертификата</h3>
                  <p className="text-muted-foreground">Выберите тариф и завершите оплату</p>
                </div>

                <div className="space-y-4 mb-8">
                  <Card className="glass-card p-6 border-primary/50 cursor-pointer hover:border-primary transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Базовый</h4>
                        <p className="text-sm text-muted-foreground">1 сертификат, срок 1 год</p>
                      </div>
                      <div className="text-2xl font-bold text-primary">2,999₽</div>
                    </div>
                  </Card>

                  <Card className="glass-card p-6 border-secondary/50 cursor-pointer hover:border-secondary transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Профессиональный</h4>
                        <p className="text-sm text-muted-foreground">До 5 сертификатов, срок 1 год</p>
                      </div>
                      <div className="text-2xl font-bold text-secondary">9,999₽</div>
                    </div>
                  </Card>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity py-6 text-lg">
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Перейти к оплате
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
