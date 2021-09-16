//  join category
const joinCategory = (categoryId, competitorId) =>
  fetch(`/api/categories/${categoryId}/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ competitorId }),
  })

// join event
const joinEvent = (eventId, userId) =>
  fetch(`/api/events/${eventId}/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId }),
  })

const fetching = { joinEvent, joinCategory }

export default fetching
