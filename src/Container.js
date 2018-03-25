import React from 'react';
import PropTypes from 'prop-types';
import SideBar from './common/SideBar';
import TopNavigation from './common/TopNavigation';
import Dashboard from './dashboard/Dashboard';
import Footer from './common/Footer';

class Container extends React.Component {
    static get propTypes() {
        return {
            bodyClassName: PropTypes.string
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            menuVisible: true
        }

        this.handleMenuToggle = this.handleMenuToggle.bind(this);
    }

    handleMenuToggle() {
        console.log("handleMenuToggle triggered! bodyClassName=" + this.props.bodyClassName);

        if (document.body.classList.contains("nav-md")) {
            this.setState({ menuVisible: false });
        } else {
            this.setState({ menuVisible: true });
        }

        document.body.classList.toggle('nav-md');
        document.body.classList.toggle('nav-sm');
        
        /*
		if ($BODY.hasClass('nav-md')) {
			$SIDEBAR_MENU.find('li.active ul').hide();
			$SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
		} else {
			$SIDEBAR_MENU.find('li.active-sm ul').show();
			$SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
		}

        $BODY.toggleClass('nav-md nav-sm');

        setContentHeight();

        $('.dataTable').each ( function () { $(this).dataTable().fnDraw(); });
        */
    }

    render() {
        return (
            <div className="container body">
                <div className="main_container">
                    <SideBar menuVisible={this.state.menuVisible}/>
                    <TopNavigation handleMenuToggle={this.handleMenuToggle}/>
                    <Dashboard/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Container;