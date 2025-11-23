import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [emailError, setEmailError] = useState('');
  const { toast } = useToast();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const validateEmail = (email: string) => {
    return email.includes('@');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setEmailError('Email должен содержать символ @');
      return;
    }
    
    setEmailError('');
    toast({
      title: "Сообщение отправлено!",
      description: "Спасибо за ваше сообщение. Я свяжусь с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const portfolioItems = [
    { 
      title: 'Проект 1', 
      description: 'Веб-приложение для управления задачами',
      image: 'https://cdn.poehali.dev/projects/857c13b6-d84e-4e1b-8605-d1d263a37463/files/09c04970-3be8-48a4-ad64-7422baa16d81.jpg'
    },
    { 
      title: 'Проект 2', 
      description: 'Корпоративный сайт с современным дизайном',
      image: 'https://cdn.poehali.dev/projects/857c13b6-d84e-4e1b-8605-d1d263a37463/files/610377e2-7a2e-4804-81a3-55f9bae9366c.jpg'
    },
    { 
      title: 'Проект 3', 
      description: 'Мобильное приложение для фитнеса',
      image: 'https://cdn.poehali.dev/projects/857c13b6-d84e-4e1b-8605-d1d263a37463/files/079418d5-4731-4010-a0c8-6bc04b0463f5.jpg'
    },
    { 
      title: 'Проект 4', 
      description: 'E-commerce платформа',
      image: 'https://cdn.poehali.dev/projects/857c13b6-d84e-4e1b-8605-d1d263a37463/files/09c04970-3be8-48a4-ad64-7422baa16d81.jpg'
    },
    { 
      title: 'Проект 5', 
      description: 'Система аналитики данных',
      image: 'https://cdn.poehali.dev/projects/857c13b6-d84e-4e1b-8605-d1d263a37463/files/610377e2-7a2e-4804-81a3-55f9bae9366c.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Портфолио</h2>
            <div className="flex gap-6">
              <button onClick={() => handleScroll('home')} className="text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => handleScroll('about')} className="text-foreground hover:text-primary transition-colors">
                Обо мне
              </button>
              <button onClick={() => handleScroll('portfolio')} className="text-foreground hover:text-primary transition-colors">
                Портфолио
              </button>
              <button onClick={() => handleScroll('contact')} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Привет, я <span className="text-primary">Творец</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Создаю современные веб-приложения с чистым дизайном и отличным пользовательским опытом
          </p>
          <Button size="lg" onClick={() => handleScroll('portfolio')} className="animate-scale-in">
            Посмотреть работы
          </Button>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Обо мне</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Я веб-разработчик с более чем 5-летним опытом создания современных и функциональных веб-приложений. 
              Моя специализация включает React, TypeScript и современные фреймворки для создания быстрых и отзывчивых интерфейсов.
            </p>
            <p>
              Я верю в силу минималистичного дизайна и чистого кода. Каждый проект для меня — это возможность создать 
              что-то уникальное и полезное, что решает реальные задачи пользователей.
            </p>
            <p>
              В свободное время изучаю новые технологии, делюсь знаниями в профессиональном сообществе и работаю 
              над open-source проектами.
            </p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Портфолио</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Контакты</h2>
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (emailError) setEmailError('');
                    }}
                    required
                    placeholder="your@email.com"
                    className={emailError ? 'border-destructive' : ''}
                  />
                  {emailError && <p className="text-sm text-destructive mt-1">{emailError}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Ваше сообщение..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Контакты</h3>
              <div className="space-y-2">
                <a href="tel:+79991234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </a>
                <a href="mailto:example@mail.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Mail" size={18} />
                  <span>example@mail.ru</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Icon name="Github" size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Icon name="Linkedin" size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Icon name="Send" size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">О проекте</h3>
              <p className="text-sm opacity-80">
                Портфолио создано с использованием современных технологий и лучших практик веб-разработки
              </p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-sm opacity-80">
              © 2025 Портфолио. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;