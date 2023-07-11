import { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorPage from 'pages/error.page';

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error) {
    this.setState({
      error,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}

ErrorHandler.propTypes = {
  children: PropTypes.node,
};

export default ErrorHandler;
