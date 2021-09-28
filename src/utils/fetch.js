// assign problems
// argument: {eventId: ..., assignments:...}
const assignProblems = (data) =>
  fetch(`/api/categories/assign`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })

//  join category
// argument : { categoryId, competitorId }
const joinCategory = ({ categoryId, competitorId }) =>
  fetch(`/api/categories/${categoryId}/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ competitorId }),
  })

//  create a category
// argument: {...category, eventId}
const createCategory = (data) =>
  fetch('/api/categories', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })

// join event
const joinEvent = ({ eventId, userId }) =>
  fetch(`/api/events/${eventId}/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId }),
  })

// add to score
// argument: {scoreId, key}
const addToScore = ({ scoreId, key }) => {
  const path = `add${key.toLowerCase()}`

  return fetch(`/api/scores/${scoreId}/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  })
}

// create event
const createEvent = (data) =>
  fetch(`/api/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

// delete problem
const deleteProblem = (id) =>
  fetch(`/api/problems/${id}`, {
    method: 'DELETE',
  })

// delete category
const deleteCategory = (id) =>
  fetch(`/api/categories/${id}`, {
    method: 'DELETE',
  })

// create problem
// argument: {...problem, eventId}
const createProblem = (data) =>
  fetch('/api/problems', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })

// user login
// argument: {email, password}
const login = (data) =>
  fetch('/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

// update event
const updateEvent = (data) => {
  const { eventId, ...eventData } = data
  const result = fetch(`/api/events/${eventId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData),
  })
  return result
}

const api = {
  createCategory,
  createEvent,
  createProblem,
  deleteProblem,
  deleteCategory,
  joinEvent,
  joinCategory,
  login,
  addToScore,
  assignProblems,
  updateEvent,
}

export default api
