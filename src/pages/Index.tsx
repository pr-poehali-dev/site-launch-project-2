import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
      description: "Спасибо! Куратор группы свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const teamMembers = [
    { 
      name: 'Анна Смирнова', 
      role: 'Куратор группы', 
      description: 'Опыт в образовании 10+ лет',
      image: 'https://cdn.poehali.dev/projects/857c13b6-d84e-4e1b-8605-d1d263a37463/files/e2947cc6-6872-4fb0-a4ea-6a992fb3e701.jpg'
    },
    { 
      name: 'Иван Петров', 
      role: 'Студент', 
      description: 'Специализация: Frontend разработка',
      image: 'https://cdn.poehali.dev/projects/857c13b6-d84e-4e1b-8605-d1d263a37463/files/aa11fb50-2887-42c7-a78a-929810a8dae4.jpg'
    },
    { 
      name: 'Мария Иванова', 
      role: 'Студент', 
      description: 'Специализация: UX/UI дизайн',
      image: 'https://cdn.poehali.dev/projects/857c13b6-d84e-4e1b-8605-d1d263a37463/files/93f03cf8-7e06-41fa-8885-717f73a3d342.jpg'
    },
    { 
      name: 'Дмитрий Козлов', 
      role: 'Студент', 
      description: 'Специализация: Backend разработка',
      image: 'https://cdn.poehali.dev/projects/857c13b6-d84e-4e1b-8605-d1d263a37463/files/aa11fb50-2887-42c7-a78a-929810a8dae4.jpg'
    },
    { 
      name: 'Елена Соколова', 
      role: 'Студент', 
      description: 'Специализация: Data Science',
      image: 'https://cdn.poehali.dev/projects/857c13b6-d84e-4e1b-8605-d1d263a37463/files/93f03cf8-7e06-41fa-8885-717f73a3d342.jpg'
    }
  ];

  const schedule = [
    { day: 'Понедельник', time: '18:00 - 20:00', subject: 'JavaScript Advanced', room: 'Онлайн' },
    { day: 'Среда', time: '18:00 - 20:00', subject: 'React & TypeScript', room: 'Онлайн' },
    { day: 'Пятница', time: '18:00 - 20:00', subject: 'Практикум: Проекты', room: 'Онлайн' },
    { day: 'Суббота', time: '14:00 - 16:00', subject: 'Code Review', room: 'Онлайн' }
  ];

  const achievements = [
    { icon: 'Users', value: '25', label: 'Студентов' },
    { icon: 'BookOpen', value: '12', label: 'Курсов' },
    { icon: 'Award', value: '18', label: 'Выпускников' },
    { icon: 'Trophy', value: '5', label: 'Проектов' }
  ];

  return (
    <div className="min-h-screen bg-background smooth-scroll">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={28} className="text-primary" />
              <h2 className="text-2xl font-bold">TechGroup 2025</h2>
            </div>
            <div className="flex gap-6">
              <button onClick={() => handleScroll('home')} className="text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => handleScroll('team')} className="text-foreground hover:text-primary transition-colors">
                Команда
              </button>
              <button onClick={() => handleScroll('schedule')} className="text-foreground hover:text-primary transition-colors">
                Расписание
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
          <Badge className="mb-4 text-lg px-4 py-2">Группа веб-разработки 2025</Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Учимся. Создаём. <span className="text-primary">Развиваемся</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Мы — команда студентов и профессионалов, которые вместе изучают современные технологии веб-разработки 
            и создают реальные проекты
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => handleScroll('team')}>
              Познакомиться с командой
            </Button>
            <Button size="lg" variant="outline" onClick={() => handleScroll('schedule')}>
              <Icon name="Calendar" size={20} className="mr-2" />
              Расписание
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
            {achievements.map((item, index) => (
              <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <Icon name={item.icon as any} size={32} className="text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">О нашей группе</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" className="text-primary" />
                  Наша миссия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Создать дружную команду профессионалов, которые не только изучают теорию, но и применяют знания 
                  на практике. Мы верим в силу совместного обучения и взаимопомощи.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Rocket" className="text-primary" />
                  Что мы изучаем
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  React, TypeScript, Node.js, современные подходы к разработке, работа в команде, Git, 
                  тестирование и деплой приложений. Каждый месяц — новый реальный проект в портфолио.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Lightbulb" className="text-primary" />
                  Наши достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  За последние полгода наша группа реализовала 5 полноценных веб-приложений, включая интернет-магазин, 
                  систему управления задачами и образовательную платформу. Три наших выпускника уже работают в IT-компаниях, 
                  а остальные активно проходят собеседования. Мы гордимся каждым членом команды и их прогрессом!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Расписание занятий</h2>
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <Card 
                key={index} 
                className="animate-fade-in hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="Calendar" className="text-primary" size={20} />
                        <h3 className="text-xl font-semibold">{item.day}</h3>
                      </div>
                      <p className="text-lg font-medium text-primary">{item.subject}</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" className="text-muted-foreground" size={18} />
                        <span className="text-muted-foreground">{item.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" className="text-muted-foreground" size={18} />
                        <span className="text-muted-foreground">{item.room}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Связаться с нами</h2>
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <p className="text-center text-muted-foreground mb-6">
                Хотите присоединиться к группе или задать вопрос? Напишите нам!
              </p>
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
                    placeholder="Расскажите о себе или задайте вопрос..."
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
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="GraduationCap" size={24} />
                TechGroup 2025
              </h3>
              <p className="text-sm opacity-80">
                Учебная группа по веб-разработке. Создаём проекты и развиваем навыки вместе.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Контакты куратора</h3>
              <div className="space-y-2">
                <a href="tel:+79991234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </a>
                <a href="mailto:curator@techgroup.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Mail" size={18} />
                  <span>curator@techgroup.ru</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Icon name="Github" size={24} />
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Icon name="Send" size={24} />
                </a>
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Icon name="Users" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-sm opacity-80">
              © 2025 TechGroup. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;