import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions';
class UsersList extends Component{
    componentWillMount(){
        this.props.fetchUsers();
    }
    fetchUser(){
        return this.props.users.map(user => {
            return(
                <div key={user.id}  className={"card card-block "+user.id}>
                    <h4 className="card-title">{user.name}</h4>
                    <p className="card-text">work for apple</p>
                    <a className="btn btn-primary">Email</a>
                </div>
            )
        });

    }
    render(){
        console.log(this.props.users);
        if(!this.props.users[0]){
            return <h2>load</h2>
        }
        return(
            <div className="user-list">
                {this.fetchUser()}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        users:state.users
    }
}
export default connect(mapStateToProps,actions)(UsersList);