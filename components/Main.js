import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'
import { fetchUser } from '../Redux/actions/index'

export class Main extends Component {
    // componentDidMount(){
    //     this.props.fetchUser();
    // }
    render() {
        const { currentUser } = this.props;
        return (
            <View  style={{ flex: 1}}>
            <Text>
                Hello World!
                {/* {currentUser.name} logged in */}
            </Text>
            </View>
        )
        }
    }
const mapStateToProps = (store) =>({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser},dispatch)


export default (mapStateToProps, mapDispatchProps)(Main);
