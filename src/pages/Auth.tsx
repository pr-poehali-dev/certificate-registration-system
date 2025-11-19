import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-24">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-block mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl" />
                <Icon name="Shield" className="text-primary relative z-10 mx-auto" size={56} />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2 glow-cyan">Добро пожаловать</h1>
            <p className="text-muted-foreground">Войдите или создайте новый аккаунт</p>
          </div>

          <Card className="glass-card p-8 border-primary/20 animate-slide-up">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50">
                <TabsTrigger value="login" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Вход
                </TabsTrigger>
                <TabsTrigger value="register" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Регистрация
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleAuth} className="space-y-6">
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
                    <Label htmlFor="password">Пароль</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" size={18} />
                        Входим...
                      </>
                    ) : (
                      <>
                        <Icon name="LogIn" className="mr-2" size={18} />
                        Войти
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleAuth} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="reg-name">Полное имя</Label>
                    <Input
                      id="reg-name"
                      type="text"
                      placeholder="Иван Иванов"
                      required
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-email">Email</Label>
                    <Input
                      id="reg-email"
                      type="email"
                      placeholder="example@mail.com"
                      required
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-password">Пароль</Label>
                    <Input
                      id="reg-password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-confirm">Подтвердите пароль</Label>
                    <Input
                      id="reg-confirm"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="bg-muted/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" size={18} />
                        Создаём аккаунт...
                      </>
                    ) : (
                      <>
                        <Icon name="UserPlus" className="mr-2" size={18} />
                        Зарегистрироваться
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Регистрируясь, вы соглашаетесь с{' '}
              <a href="#" className="text-primary hover:underline">
                условиями использования
              </a>{' '}
              и{' '}
              <a href="#" className="text-primary hover:underline">
                политикой конфиденциальности
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
