import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CodeEditorProps {
  initialCode?: string;
  readOnly?: boolean;
}

export default function CodeEditor({ initialCode = '', readOnly = false }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');

  const highlightLua = (code: string) => {
    const keywords = ['function', 'end', 'local', 'if', 'then', 'else', 'for', 'do', 'while', 'return', 'print'];
    let highlighted = code;
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
      highlighted = highlighted.replace(regex, `<span class="text-secondary font-semibold">$1</span>`);
    });
    
    highlighted = highlighted.replace(/(['"])([^'"]*)\1/g, '<span class="text-green-400">$&</span>');
    highlighted = highlighted.replace(/--.*$/gm, '<span class="text-muted-foreground italic">$&</span>');
    highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="text-yellow-400">$1</span>');
    
    return highlighted;
  };

  const runCode = () => {
    setOutput('Код Lua выполнен!\n> Hello from Lua Game Engine\n> Игра запущена успешно');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
      <Card className="flex flex-col bg-card border-border overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-border">
          <div className="flex items-center gap-2">
            <Icon name="Code2" size={16} className="text-primary" />
            <span className="text-sm font-medium">main.lua</span>
          </div>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          {readOnly ? (
            <pre 
              className="font-mono text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: highlightLua(code) }}
            />
          ) : (
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-transparent font-mono text-sm leading-relaxed resize-none focus:outline-none"
              spellCheck={false}
            />
          )}
        </div>
        {!readOnly && (
          <div className="px-4 py-3 border-t border-border flex gap-2">
            <Button onClick={runCode} className="gap-2">
              <Icon name="Play" size={16} />
              Запустить
            </Button>
            <Button variant="outline" className="gap-2">
              <Icon name="Save" size={16} />
              Сохранить
            </Button>
          </div>
        )}
      </Card>

      <Card className="flex flex-col bg-card border-border overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-border">
          <Icon name="Terminal" size={16} className="text-primary" />
          <span className="text-sm font-medium">Вывод</span>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <pre className="font-mono text-sm text-green-400 leading-relaxed">
            {output || '// Нажмите "Запустить" для выполнения кода'}
          </pre>
        </div>
      </Card>
    </div>
  );
}
