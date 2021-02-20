import React from 'react';
import { connect } from "react-redux";
import { compose } from "recompose";

const connectedProps = (state) => ({

});

const connectionActions = {

}


var connector = connect(connectedProps, connectionActions);


class NotFound extends React.Component {

    render() {
        return <div>
            Page Not Found
    </div>
    }
}

export default connector(compose()(NotFound));