var React = require('react');
var ActionCreators = require("../../actions/ActionCreators");
var Footer = React.createClass({
    
    render: function() {
        return (
            <div className="row">
                <div className="footer">
                    <p className="footerText">© 2015 - Founders &amp; Coders</p>
                </div>
            </div>
        );
    }
});

module.exports = Footer;