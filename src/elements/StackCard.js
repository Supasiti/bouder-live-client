const classList = {
  brand: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  grey: 'bg-gray-300',
}

const StackCard = (props) => {
  const { color } = 'color' in props && props
  const { rotation } = 'rotation' in props && props

  if (rotation) {
    return (
      <div
        className={`${classList[color]} w-full h-full shadow-xl rounded-2xl 
          transform -rotate-6`}
      ></div>
    )
  }
  return (
    <div
      className={`${classList[color]} w-full h-full shadow-xl rounded-2xl`}
    ></div>
  )
}

export default StackCard
