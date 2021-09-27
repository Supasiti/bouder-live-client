//  join category
const joinCategory = async (categoryId, competitorId) => {
  let res
  try {
    res = await fetch(`/api/categories/${categoryId}/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ competitorId }),
    })
  } catch (err) {
    console.error(err)
  }
  const data = await res.json()
  return data
}

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

const api = {
  joinEvent,
  joinCategory,
  addToScore,
}

export default api
