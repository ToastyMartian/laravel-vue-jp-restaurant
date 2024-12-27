# laravel-vue-jp-restaurant
A basic website for a Japanese themed restaurant to practice Laravel + Vue

## Requirements

- PHP 8.4+
- Node.js 20+
- Composer 2
- DBEngin/Laragon or other DB hosting

## Install and configure project

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed
```

## Run server + frontend

```bash
php artisan serve
npm run dev
```
