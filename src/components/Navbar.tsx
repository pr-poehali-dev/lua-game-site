import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Navbar() {
  const menuItems = [
    { name: 'Главная', icon: 'Home' },
    { name: 'Редактор', icon: 'Code2' },
    { name: 'Обучение', icon: 'BookOpen' },
    { name: 'Сообщество', icon: 'Users' },
    { name: 'Примеры', icon: 'Gamepad2' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold">LuaGame<span className="text-primary">Dev</span></span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name={item.icon} size={16} />
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="LogIn" size={16} />
              Войти
            </Button>
            <Button size="sm" className="gap-2">
              <Icon name="Rocket" size={16} />
              Начать
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
