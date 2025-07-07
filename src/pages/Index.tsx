import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🎮 САНС
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Character Creator
              </Badge>
            </div>
            <nav className="flex items-center space-x-6">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#creator"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Создать персонажа
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Мои творения
              </a>
              <a
                href="#save"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Сохранение
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Создай своего персонажа
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Погрузись в мир творчества! Настраивай внешность, добавляй анимации
            и создавай уникальных персонажей в стиле Санс.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 hover-lift animate-pulse-slow"
            >
              <Icon name="Sparkles" className="mr-2" />
              Создать персонажа
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 hover-lift"
            >
              <Icon name="Eye" className="mr-2" />
              Посмотреть галерею
            </Button>
          </div>
        </div>
      </section>

      {/* Character Creator Preview */}
      <section id="creator" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            🎨 Конструктор персонажей
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Character Preview */}
            <Card className="bg-gradient-to-br from-blue-100 to-purple-100 border-2 border-blue-200 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" />
                  Предпросмотр персонажа
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-48 h-48 mx-auto bg-white rounded-lg border-2 border-blue-200 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="/img/439b8533-432f-4a8d-a6b6-261d5b6d75a7.jpg"
                    alt="Персонаж Sans"
                    className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-300 animate-float"
                  />
                </div>
                <div className="flex justify-center gap-2 mb-4">
                  <Button variant="outline" size="sm">
                    <Icon name="RotateCcw" className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Play" className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Pause" className="w-4 h-4" />
                  </Button>
                </div>
                <Badge variant="secondary">Анимация: Размахивание</Badge>
              </CardContent>
            </Card>

            {/* Character Customization */}
            <Card className="border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Paintbrush" />
                  Настройка внешности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="face" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="face">Лицо</TabsTrigger>
                    <TabsTrigger value="hair">Волосы</TabsTrigger>
                    <TabsTrigger value="clothes">Одежда</TabsTrigger>
                    <TabsTrigger value="animation">Анимация</TabsTrigger>
                  </TabsList>

                  <TabsContent value="face" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Форма лица
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите форму" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="round">Круглое</SelectItem>
                          <SelectItem value="oval">Овальное</SelectItem>
                          <SelectItem value="square">Квадратное</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Цвет кожи
                      </label>
                      <div className="flex gap-2">
                        {[
                          "#FDBCB4",
                          "#F1C27D",
                          "#E0AC69",
                          "#C68642",
                          "#8D5524",
                        ].map((color) => (
                          <div
                            key={color}
                            className="w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="hair" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Прическа
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите прическу" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="short">Короткие</SelectItem>
                          <SelectItem value="long">Длинные</SelectItem>
                          <SelectItem value="spiky">Колючие</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>

                  <TabsContent value="clothes" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Стиль одежды
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm">
                          🧥 Куртка
                        </Button>
                        <Button variant="outline" size="sm">
                          👕 Футболка
                        </Button>
                        <Button variant="outline" size="sm">
                          👔 Рубашка
                        </Button>
                        <Button variant="outline" size="sm">
                          🎽 Майка
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="animation" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Поза персонажа
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите позу" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="idle">Стоит</SelectItem>
                          <SelectItem value="wave">Размахивает</SelectItem>
                          <SelectItem value="jump">Прыгает</SelectItem>
                          <SelectItem value="dance">Танцует</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Скорость анимации
                      </label>
                      <Slider
                        defaultValue={[50]}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            🎭 Галерея персонажей
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card
                key={item}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-blue-100 hover:border-blue-300"
              >
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                    <img
                      src={
                        item <= 3
                          ? `/img/${item === 1 ? "439b8533-432f-4a8d-a6b6-261d5b6d75a7" : item === 2 ? "6f91a0d3-b16f-4660-8e78-0c91f6747950" : "70e7da2d-2e05-41f6-889d-4366d6083405"}.jpg`
                          : `/img/439b8533-432f-4a8d-a6b6-261d5b6d75a7.jpg`
                      }
                      alt={`Персонаж ${item}`}
                      className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-2">
                    Персонаж #{item}
                  </h3>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="text-xs">
                      {item % 2 === 0 ? "Танцует" : "Размахивает"}
                    </Badge>
                    <Button size="sm" variant="ghost" className="p-2">
                      <Icon name="Heart" className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Icon name="Plus" className="mr-2" />
              Показать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Save Section */}
      <section id="save" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            💾 Сохранение и экспорт
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Icon name="Save" />
                  Сохранить персонажа
                </CardTitle>
                <CardDescription>
                  Сохраните вашего персонажа в галерею для дальнейшего
                  редактирования
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Название персонажа
                  </label>
                  <input
                    type="text"
                    placeholder="Мой крутой персонаж"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Icon name="Save" className="mr-2" />
                  Сохранить в галерею
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Icon name="Download" />
                  Экспорт персонажа
                </CardTitle>
                <CardDescription>
                  Скачайте персонажа в различных форматах для использования
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Формат экспорта</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите формат" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="png">PNG (изображение)</SelectItem>
                      <SelectItem value="gif">GIF (анимация)</SelectItem>
                      <SelectItem value="json">JSON (данные)</SelectItem>
                      <SelectItem value="svg">SVG (вектор)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Размер</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите размер" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">256x256</SelectItem>
                      <SelectItem value="medium">512x512</SelectItem>
                      <SelectItem value="large">1024x1024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Download" className="mr-2" />
                  Скачать персонажа
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🎮 САНС
          </div>
          <p className="text-gray-400 mb-4">
            Создавай, настраивай, анимируй — воплощай свои идеи в жизнь!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Github" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Twitter" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Instagram" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
