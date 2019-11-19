import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer">
                <div className="Number"> 1 left</div>
                    <div className="tabBav">
                       <div>all</div>
                       <div>Active</div>
                       <div>Completed</div>
                    </div>
                        <button>clear Completed</button>
                    </div>
         );
    }
}
 
export default Footer;