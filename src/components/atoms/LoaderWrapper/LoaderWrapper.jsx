import React from 'react'
import PropTypes from 'prop-types'

const LoaderWrapper = ({ loading, children }) => {
  return loading ? (
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  ) : (
    <>{children}</>
  )
}

LoaderWrapper.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
}

LoaderWrapper.defaultProps = {
  loading: false,
}

export default LoaderWrapper
