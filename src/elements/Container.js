import { PropTypes } from 'prop-types'

const Container = (props) => (
  <div className="p-4 w-full lg:max-w-5xl xl:max-w-7xl mx-auto">
    {props.children}
  </div>
)
Container.propTypes = {
  children: PropTypes.node,
}
export default Container
