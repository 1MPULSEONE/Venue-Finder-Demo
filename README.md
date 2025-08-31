# Venue Finder Demo

Демо-приложение для поиска площадок с фильтрацией и избранным.

## Требования

- **Node.js** 18+
- **pnpm** 10.15.0 (указано в `packageManager`)

## Установка и запуск

```bash
# Установка зависимостей
pnpm install

# Разработка
pnpm dev

# Продакшн сборка
pnpm build
pnpm start
```

## Основные технологии

- **Next.js 15** — React фреймворк
- **Tailwind CSS 4** — стилизация
- **Jotai** — state management (избранное)
- **nuqs** — синхронизация фильтров с URL
- **Feature-Sliced Design** — архитектура

## Структура

- `/src/app` — роуты (главная, каталог)
- `/src/shared` — общие компоненты и утилиты
- `/src/entities` — бизнес-сущности (Venue)
- `/src/features` — функциональность (фильтры, избранное)
- `/src/widgets` — составные блоки интерфейса
