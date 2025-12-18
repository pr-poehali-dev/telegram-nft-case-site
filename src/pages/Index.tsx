import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [walletConnected, setWalletConnected] = useState(false);

  const nftGifts = [
    {
      id: 1,
      name: 'Cosmic Cube',
      image: 'https://cdn.poehali.dev/projects/49545bcf-1c9b-426a-a10d-0502a99e01b7/files/b65b424a-3e17-410c-9a5b-874287445826.jpg',
      price: '0.5 ETH',
      status: 'Available'
    },
    {
      id: 2,
      name: 'Cyber Genesis',
      image: 'https://cdn.poehali.dev/projects/49545bcf-1c9b-426a-a10d-0502a99e01b7/files/437d2af9-043b-47d3-816e-69fc3dbb179b.jpg',
      price: '0.3 ETH',
      status: 'Available'
    },
    {
      id: 3,
      name: 'Digital Crown',
      image: 'https://cdn.poehali.dev/projects/49545bcf-1c9b-426a-a10d-0502a99e01b7/files/b65b424a-3e17-410c-9a5b-874287445826.jpg',
      price: '0.8 ETH',
      status: 'Limited'
    }
  ];

  const cases = [
    {
      id: 1,
      title: 'CryptoArt Collection',
      description: 'Успешный запуск коллекции из 10,000 уникальных NFT',
      image: 'https://cdn.poehali.dev/projects/49545bcf-1c9b-426a-a10d-0502a99e01b7/files/b19248f3-29ae-4094-b8b9-1157a70b3a2b.jpg',
      result: '+$2.5M за первый месяц',
      metrics: '10K NFT | 3.5K holders'
    },
    {
      id: 2,
      title: 'MetaGaming Assets',
      description: 'Игровые предметы в виде NFT для метавселенной',
      image: 'https://cdn.poehali.dev/projects/49545bcf-1c9b-426a-a10d-0502a99e01b7/files/437d2af9-043b-47d3-816e-69fc3dbb179b.jpg',
      result: '50K активных пользователей',
      metrics: '150K NFT | 8 игр'
    },
    {
      id: 3,
      title: 'Telegram NFT Drop',
      description: 'Интеграция NFT подарков в Telegram бот',
      image: 'https://cdn.poehali.dev/projects/49545bcf-1c9b-426a-a10d-0502a99e01b7/files/b65b424a-3e17-410c-9a5b-874287445826.jpg',
      result: '100K подарков отправлено',
      metrics: '25K users | 4 недели'
    }
  ];

  const handleWalletConnect = () => {
    setWalletConnected(!walletConnected);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 glassmorphism border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 animate-fade-in">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center glow-primary">
              <Icon name="Hexagon" className="text-primary" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NFT Platform
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Главная
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              NFT Подарки
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Кейсы
            </Button>
            <Button 
              onClick={handleWalletConnect}
              className={`gap-2 ${walletConnected ? 'glow-primary' : ''}`}
              variant={walletConnected ? 'default' : 'outline'}
            >
              <Icon name={walletConnected ? 'CheckCircle' : 'Wallet'} size={20} />
              {walletConnected ? 'Подключен' : 'Подключить'}
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in bg-primary/20 text-primary border-primary/30">
            🚀 Web3 Будущее уже здесь
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            NFT Подарки из<br />Telegram
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Создавайте, дарите и управляйте NFT активами прямо через Telegram. 
            Подключите кошелек и начните коллекционировать цифровое искусство.
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" className="gap-2 glow-primary">
              <Icon name="Sparkles" size={20} />
              Начать сейчас
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="PlayCircle" size={20} />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      <section id="nft-gifts" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              Наши достижения
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Кейсы
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Проекты, которые изменили индустрию NFT и Web3
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {nftGifts.map((nft, index) => (
              <Card 
                key={nft.id} 
                className="glassmorphism overflow-hidden group hover:glow-primary transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={nft.image} 
                    alt={nft.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 backdrop-blur-sm">
                      {nft.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {nft.name}
                    <Icon name="Heart" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {nft.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full gap-2" variant="secondary">
                    <Icon name="Gift" size={18} />
                    Подарить в Telegram
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              Наши достижения
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Успешные Кейсы
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Проекты, которые изменили индустрию NFT и Web3
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((item, index) => (
              <Card 
                key={item.id}
                className="glassmorphism overflow-hidden group hover:glow-accent transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-accent font-semibold">
                    <Icon name="TrendingUp" size={18} />
                    {item.result}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="BarChart3" size={16} />
                    {item.metrics}
                  </div>
                  <Button variant="ghost" className="w-full gap-2 group">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto glassmorphism p-12 rounded-2xl glow-primary">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы начать?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Подключите кошелек и получите доступ к эксклюзивным NFT
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleWalletConnect}
                className="gap-2 text-lg px-8"
              >
                <Icon name="Wallet" size={24} />
                {walletConnected ? 'Кошелек подключен' : 'Подключить кошелек'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon name="Hexagon" className="text-primary" size={20} />
                </div>
                <span className="font-bold">NFT Platform</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Web3 платформа для NFT подарков из Telegram
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer transition-colors">NFT Подарки</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Кейсы</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">О платформе</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer transition-colors">Документация</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">FAQ</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Соцсети</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="hover:text-primary">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="hover:text-primary">
                  <Icon name="Github" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="hover:text-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 NFT Platform. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;