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

// add top
const addTop = (scoreId) =>
  fetch(`/api/scores/${scoreId}/addTop`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  })

const fetching = {
  joinEvent,
  joinCategory,
  addTop,
}

export default fetching
