import React from 'react';

class TitleBar extends React.Component {
    render() {
        return (
            <div className="navbar nav_title noBorder">
              <a href="index.html" className="site_title"><i className="fa fa-paw"></i> <span>Gentelella Alela!</span></a>
            </div>
        );
    }
}

export default TitleBar;