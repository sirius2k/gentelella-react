import React from 'react';
import SideBar from './layout/sidebar/SideBar';
import TopNavigation from './layout/TopNavigation';
import Dashboard from './dashboard/Dashboard';
import Footer from './layout/Footer';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuVisible: true
        }

        this.handleMenuToggle = this.handleMenuToggle.bind(this);
    }

    handleMenuToggle() {
        console.log("Menu toggle clicked bodyClassName=" + document.body.className);

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