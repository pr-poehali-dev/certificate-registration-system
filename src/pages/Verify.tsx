import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function Verify() {
  const [certId, setCertId] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);

    setTimeout(() => {
      setVerificationResult({
        id: certId || 'CERT-2025-001234',
        valid: true,
        name: 'Сертификат соответствия ISO 9001',
        owner: 'ООО "Технологии Будущего"',
        issueDate: '2025-01-15',
        expiryDate: '2026-01-15',
        documents: 3,
        hash: 'a7f3b2c9d8e1f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4',
      });
      setIsVerifying(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-primary/20 blur-2xl" />
              <Icon name="Search" className="text-primary relative z-10 mx-auto" size={64} />
            </div>
            <h1 className="text-5xl font-bold mb-4 glow-cyan">Проверка сертификата</h1>
            <p className="text-xl text-muted-foreground">
              Введите номер сертификата для проверки его подлинности
            </p>
          </div>

          <Card className="glass-card p-8 border-primary/20 mb-8 animate-slide-up">
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="cert-id" className="text-lg">
                  Номер сертификата
                </Label>
                <Input
                  id="cert-id"
                  type="text"
                  placeholder="CERT-2025-XXXXXX"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  className="bg-muted/50 border-primary/30 focus:border-primary text-lg h-14"
                  required
                />
                <p className="text-sm text-muted-foreground">
                  Формат: CERT-YYYY-NNNNNN (например, CERT-2025-001234)
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity h-14 text-lg"
                disabled={isVerifying}
              >
                {isVerifying ? (
                  <>
                    <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                    Проверяем...
                  </>
                ) : (
                  <>
                    <Icon name="Search" className="mr-2" size={20} />
                    Проверить сертификат
                  </>
                )}
              </Button>
            </form>
          </Card>

          {verificationResult && (
            <Card className="glass-card p-8 border-primary/20 animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/20 blur-xl" />
                  <Icon
                    name={verificationResult.valid ? 'CheckCircle' : 'XCircle'}
                    className={`relative z-10 ${
                      verificationResult.valid ? 'text-green-400' : 'text-red-400'
                    }`}
                    size={48}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">
                    {verificationResult.valid ? 'Сертификат действителен' : 'Сертификат недействителен'}
                  </h2>
                  <Badge className={verificationResult.valid ? 'bg-green-500/20 text-green-400 border-green-500/50' : 'bg-red-500/20 text-red-400 border-red-500/50'}>
                    {verificationResult.valid ? 'Проверка пройдена' : 'Проверка не пройдена'}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4 border-t border-primary/20 pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Номер сертификата</div>
                    <div className="font-mono text-primary">{verificationResult.id}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Владелец</div>
                    <div className="font-semibold">{verificationResult.owner}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Дата выдачи</div>
                    <div>{verificationResult.issueDate}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Действителен до</div>
                    <div>{verificationResult.expiryDate}</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-1">Название</div>
                  <div className="font-semibold text-lg">{verificationResult.name}</div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Хэш блокчейна</div>
                  <div className="glass-card p-4 rounded font-mono text-xs break-all text-primary">
                    {verificationResult.hash}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Files" size={16} className="text-primary" />
                  <span>Прикреплено документов: {verificationResult.documents}</span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Download" size={18} className="mr-2" />
                  Скачать детали
                </Button>
                <Button variant="outline" className="flex-1 border-primary/50 hover:bg-primary/10">
                  <Icon name="Share2" size={18} className="mr-2" />
                  Поделиться
                </Button>
              </div>
            </Card>
          )}

          <Card className="glass-card p-8 border-primary/20 mt-8 animate-fade-in">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <Icon name="Info" className="text-primary" size={24} />
              Как проверить сертификат?
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p>1. Введите номер сертификата в поле выше</p>
              <p>2. Нажмите кнопку "Проверить сертификат"</p>
              <p>3. Система проверит подлинность в блокчейне</p>
              <p>4. Получите детальную информацию о сертификате</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
