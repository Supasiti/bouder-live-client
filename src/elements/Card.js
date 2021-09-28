import { PropTypes } from 'prop-types'

const bgColour = {
  brand: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  grey: 'bg-gray-300',
  greyLight: 'bg-gray-200',
  greyLighter: 'bg-gray-100',
}

const classList = (props) => {
  const { color } = 'color' in props && props
  const rotation = 'rotation' in props ? '-rotate-6' : ''
  const shadow = 'shadow' in props ? props.shadow : true
  const extraClasses = 'extraClasses' in props ? props.extraClasses : ''

  return `${bgColour[color]}  w-full h-full 
    ${shadow && 'shadow-xl'} rounded-2xl ${extraClasses} 
    transform ${rotation}`
}

const Card = (props) => <div className={classList(props)}>{props.children}</div>

Card.propTypes = {
  children: PropTypes.node,
}

export default Card
