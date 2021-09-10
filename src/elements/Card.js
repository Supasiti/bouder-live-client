/* eslint-disable react/prop-types */

const classList = {
  brand: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  grey: 'bg-gray-300',
  greyLight: 'bg-gray-200',
}

const Card = (props) => {
  const { color } = 'color' in props && props
  const rotation = 'rotation' in props ? '-rotate-6' : ''
  const extraClasses = 'extraClasses' in props ? props.extraClasses : ''

  return (
    <div
      className={`${classList[color]}  w-full h-full 
          shadow-xl rounded-2xl ${extraClasses} 
          transform ${rotation}`}
    >
      {props.children}
    </div>
  )
}

export default Card
