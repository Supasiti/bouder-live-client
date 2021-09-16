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

// add to score
const addToScore = (scoreId, key) => {
  const path = `add${key.toLowerCase()}`

  return fetch(`/api/scores/${scoreId}/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  })
}

const fetching = {
  joinEvent,
  joinCategory,
  addToScore,
}

export default fetching
