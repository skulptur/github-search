import { intervalToDuration, formatDuration } from 'date-fns'

export const dateToTimeAgo = (date: Date) => {
  const duration = intervalToDuration({
    start: date,
    end: new Date(),
  })

  const timeAgo = formatDuration({ years: duration.years, months: duration.months, days: duration.days })

  return timeAgo ? timeAgo + ' ago' : ''
}
