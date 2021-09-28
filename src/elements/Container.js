import { PropTypes } from 'prop-types'

const Container = (props) => {
  const extra = 'extraClasses' in props ? props.extraClasses : ''
  const classList = `w-full lg:max-w-5xl xl:max-w-7xl mx-auto ${extra}`

  return <div className={classList}>{props.children}</div>
}
Container.propTypes = {
  children: PropTypes.node,
  extraClasses: PropTypes.string,
}
export default Container
