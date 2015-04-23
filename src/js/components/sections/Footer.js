var React = require('react');
var ActionCreators = require("../../actions/ActionCreators");
var Footer = React.createClass({

    render: function() {
        return (
            <div className="row">
                <div className="footer">
                    <div className="founder col-md-6">    
                        <p className="footerText">© 2015 - Founders &amp; Coders </p>    
                    </div>
                    <div className="squish col-md-6">
                        <a className="social" href="http://www.squishlearning.com">
                        	<img src="./img/squish_final.png" title="Squish Learning" alt="Squish Learning" width="85px" height="25px"/>
                        </a>                    
                        <a className="social" href="https://twitter.com/squishlearning">
                            <img src="./img/twitter.png" title="Twitter" alt="Twitter" width="22px" height="22px"/>
                        </a>
                        <a className="social" href="https://www.linkedin.com/groups/Squish-Learning-8283361?home=&gid=8283361&trk=anet_ug_hm" >
                            <img src="./img/linkedin.png" title="LinkedIn" alt="LinkedIn" width="22px" height="22px" />
                        </a>
                        <p className="contactSquish"> General Enquires: contactsquish@gmail.com  </p>
                      </div>
                </div>
            </div>
        );
    }
});

module.exports = Footer;