import React from 'react';
import PropTypes from 'prop-types';

class TopNavigationToggle extends React.Component {
    static get propTypes() {
        return {
            handleMenuToggle: PropTypes.func
        }
    }
    constuctor() {
        this.setState({
            data: null
        });

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
		console.log('clicked - menu toggle');
        alert("clicked - menu toggle");

        this.props.handleMenuToggle();
    }

    componentDidMount() {
        this.setState({
            data: "Hello"
        });
    }

    render() {
        return (
            <div className="nav toggle">
              <a id="menu_toggle" onClick={this.props.handleMenuToggle}><i className="fa fa-bars"></i></a>
            </div>
          );
    }
}

export default TopNavigationToggle;