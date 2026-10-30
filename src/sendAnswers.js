import emailjs from '@emailjs/browser'

const labels = {
  'car-lunch': 'Обяд в колата на красива гледка',
  coffee: 'Кафе',
  park: 'Разходка в парка',
  trip: 'Пътуване до друг град',
}

export function sendAnswers({ date, time, activities }) {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      date: date.toLocaleDateString('bg-BG', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      time,
      activities: activities.map((id) => labels[id]).join(', '),
    },
    { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
  )
}