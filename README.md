# 🌹 Invitation Site

**English** · [Български](#-сайт-покана)

A playful, romantic invitation card website. It walks a friend or an ex through a short animated story, ends with a date, time and activity picker, and sends the answers straight to your inbox.

## Features

- Black, elegant theme with an animated bouquet of roses
- "Accept / Decline" screens where the decline button runs away and can never be clicked (works with mouse, touch and keyboard focus)
- Calendar with date and time slot selection (in Bulgarian)
- Choice of activities: lunch in the car with a nice view, coffee, a walk in the park, a trip to another city
- Final screen with falling rose petals
- Answers are emailed to you with [EmailJS](https://www.emailjs.com/), no backend needed

## Tech stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [framer-motion](https://www.framer.com/motion/) for animations
- [react-day-picker](https://daypicker.dev/) for the calendar
- [@emailjs/browser](https://www.npmjs.com/package/@emailjs/browser) for sending email
- Hosted on [Vercel](https://vercel.com/)

## Getting started

```bash
git clone https://github.com/<your-username>/invitation-site.git
cd invitation-site
npm install
npm run dev
```

Open the address shown in the terminal (usually `http://localhost:5173`).

## Environment variables

Create a file named `.env.local` in the project root (it is already ignored by Git):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart `npm run dev` after changing this file.

## EmailJS setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. **Email Services** → add a service (for example Gmail) and copy its **Service ID**.
3. **Email Templates** → create a template. Set **To Email** to the address that should receive the answers, and use this content:

   ```
   A new answer to the invitation has arrived!

   Date: {{date}}
   Time: {{time}}
   Places: {{activities}}
   ```

4. Copy the **Template ID**, and your **Public Key** from **Account → General**.

The variable names (`date`, `time`, `activities`) must match the ones sent in `src/sendAnswers.js`.

## Deploy to Vercel

1. Push the project to GitHub.
2. In Vercel choose **Add New → Project** and import the repository (the Vite preset is detected automatically).
3. Add the three `VITE_EMAILJS_*` variables under **Environment Variables**.
4. Press **Deploy**. Every later `git push` to `main` redeploys automatically.

If you change a variable in Vercel, press **Redeploy**, because values are embedded at build time.

## Project structure

```
src/
  components/
    Welcome.jsx        # "Hello" screen
    Roses.jsx          # roses + accept / decline
    RunawayButton.jsx  # the button that runs away
    Invite.jsx         # "Do you want to meet?"
    Calendar.jsx       # date and time picker
    Activities.jsx     # choice of activities
    Final.jsx          # final screen with falling petals
  App.jsx              # step-by-step flow
  sendAnswers.js       # sends the answers via EmailJS
  index.css            # global styles
```

## Notes

- The free EmailJS plan allows around 200 requests per month.
- The EmailJS public key is meant to be public, so it is safe to use in the browser. Still, keep it out of the repository by using `.env.local`.

---

# 🌹 Сайт-покана

[English](#-invitation-site) · **Български**

Игрив, романтичен сайт във формата на картичка-покана. Превежда приятел/ка или бивше гадже през кратка анимирана история, завършва с избор на дата, час и занимание и праща отговорите директно на имейла ти.

## Възможности

- Черна, стилна тема с анимиран букет рози
- Екрани "Приеми / Откажи", при които бутонът за отказ бяга и не може да бъде натиснат (работи с мишка, докосване и клавиатура)
- Календар с избор на дата и час (на български)
- Избор на занимание: обяд в колата на красива гледка, кафе, разходка в парка, пътуване до друг град
- Финален екран с падащи листенца от рози
- Отговорите се изпращат на имейла ти с [EmailJS](https://www.emailjs.com/), без нужда от бекенд

## Технологии

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [framer-motion](https://www.framer.com/motion/) за анимациите
- [react-day-picker](https://daypicker.dev/) за календара
- [@emailjs/browser](https://www.npmjs.com/package/@emailjs/browser) за изпращане на имейл
- Хостинг във [Vercel](https://vercel.com/)

## Как да го стартираш

```bash
git clone https://github.com/<твоето-потребителско-име>/invitation-site.git
cd invitation-site
npm install
npm run dev
```

Отвори адреса, който се показва в терминала (обикновено `http://localhost:5173`).

## Променливи на средата

Създай файл `.env.local` в основната папка на проекта (Git вече го игнорира):

```
VITE_EMAILJS_SERVICE_ID=твоят_service_id
VITE_EMAILJS_TEMPLATE_ID=твоят_template_id
VITE_EMAILJS_PUBLIC_KEY=твоят_public_key
```

След промяна на файла рестартирай `npm run dev`.

## Настройка на EmailJS

1. Направи безплатен акаунт в [emailjs.com](https://www.emailjs.com/).
2. **Email Services** → добави услуга (например Gmail) и копирай **Service ID**.
3. **Email Templates** → създай шаблон. В **To Email** сложи адреса, на който искаш да получаваш отговорите, а за съдържание използвай:

   ```
   Получи се отговор на поканата!

   Дата: {{date}}
   Час: {{time}}
   Места: {{activities}}
   ```

4. Копирай **Template ID**, а **Public Key** вземи от **Account → General**.

Имената на променливите (`date`, `time`, `activities`) трябва да съвпадат с тези, които се пращат от `src/sendAnswers.js`.

## Качване във Vercel

1. Качи проекта в GitHub.
2. Във Vercel избери **Add New → Project** и импортирай репото (настройката за Vite се разпознава автоматично).
3. В **Environment Variables** добави трите `VITE_EMAILJS_*` променливи.
4. Натисни **Deploy**. Всеки следващ `git push` към `main` качва новата версия автоматично.

Ако смениш променлива във Vercel, натисни **Redeploy**, защото стойностите се вграждат при build.

## Структура на проекта

```
src/
  components/
    Welcome.jsx        # екран "Здравей"
    Roses.jsx          # рози + приеми / откажи
    RunawayButton.jsx  # бутонът, който бяга
    Invite.jsx         # "Искаш ли да се видим?"
    Calendar.jsx       # избор на дата и час
    Activities.jsx     # избор на занимание
    Final.jsx          # финален екран с падащи листенца
  App.jsx              # поетапният поток на екраните
  sendAnswers.js       # изпраща отговорите през EmailJS
  index.css            # общи стилове
```

## Бележки

- Безплатният план на EmailJS позволява около 200 заявки на месец.
- Public Key на EmailJS е предвиден да е публичен, така че е безопасно да се ползва в браузъра. Все пак го пази извън репото чрез `.env.local`.
