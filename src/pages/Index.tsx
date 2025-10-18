import { useState } from 'react';
import Navbar from '@/components/Navbar';
import CodeEditor from '@/components/CodeEditor';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');

  const exampleCode = `-- Простая игра на Lua
function love.load()
  player = {
    x = 400,
    y = 300,
    speed = 200
  }
end

function love.update(dt)
  if love.keyboard.isDown('right') then
    player.x = player.x + player.speed * dt
  end
  if love.keyboard.isDown('left') then
    player.x = player.x - player.speed * dt
  end
end

function love.draw()
  love.graphics.circle('fill', player.x, player.y, 25)
  love.graphics.print('Score: 0', 10, 10)
end`;

  const tutorials = [
    { title: 'Основы Lua', level: 'Начальный', duration: '2 часа', icon: 'Book' },
    { title: 'Создание игровых объектов', level: 'Средний', duration: '3 часа', icon: 'Box' },
    { title: 'Физика и коллизии', level: 'Продвинутый', duration: '4 часа', icon: 'Zap' },
  ];

  const gameExamples = [
    { name: 'Платформер', desc: 'Классический 2D платформер', downloads: '1.2k' },
    { name: 'Шутер', desc: 'Top-down shooter', downloads: '890' },
    { name: 'RPG', desc: 'Ролевая игра с диалогами', downloads: '2.1k' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent"></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Платформа для создания игр
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Создавай игры на <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Lua</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Мощный редактор кода, обучающие материалы и сообщество разработчиков в одном месте
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" className="gap-2 text-lg px-8">
                  <Icon name="Play" size={20} />
                  Начать разработку
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
                  <Icon name="Github" size={20} />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Редактор кода</h2>
              <p className="text-muted-foreground text-lg">
                Встроенный IDE с подсветкой синтаксиса и мгновенным запуском
              </p>
            </div>
            <div className="max-w-6xl mx-auto h-[600px]">
              <CodeEditor initialCode={exampleCode} />
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Обучение</h2>
              <p className="text-muted-foreground text-lg">
                От основ до продвинутых техник разработки игр
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tutorials.map((tutorial, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border-border">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <Icon name={tutorial.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline">{tutorial.level}</Badge>
                    <Badge variant="outline" className="gap-1">
                      <Icon name="Clock" size={12} />
                      {tutorial.duration}
                    </Badge>
                  </div>
                  <Button variant="ghost" className="w-full gap-2 mt-2">
                    Начать курс
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Примеры игр</h2>
              <p className="text-muted-foreground text-lg">
                Готовые проекты для изучения и модификации
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {gameExamples.map((game, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border-border">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Gamepad2" size={48} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
                  <p className="text-muted-foreground mb-4">{game.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Icon name="Download" size={14} />
                      {game.downloads}
                    </div>
                    <Button size="sm" variant="outline" className="gap-2">
                      <Icon name="Code2" size={14} />
                      Открыть
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Сообщество</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Присоединяйся к 10,000+ разработчикам игр на Lua
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">10K+</div>
                  <div className="text-muted-foreground">Разработчиков</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-secondary">500+</div>
                  <div className="text-muted-foreground">Опубликованных игр</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">1M+</div>
                  <div className="text-muted-foreground">Строк кода</div>
                </div>
              </div>
              <div className="flex gap-4 justify-center mt-12">
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Discord
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Send" size={20} />
                  Telegram
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Github" size={20} />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 px-4 bg-muted/30">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 LuaGameDev. Создавай игры с удовольствием 🎮</p>
        </div>
      </footer>
    </div>
  );
}