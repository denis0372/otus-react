import React, { PureComponent } from "react"; 
import { connect } from "react-redux"; 
import { Link } from "react-router-dom"; 
import { AppState } from '@/rdx/reducer'; 
import { isEmpty } from "ramda"; 
import { loginSlice } from "@/rdx/login";

const mapStateToProps = ({ login }: AppState) => ({
  ...login,
});

const mapDispatchToProps = {
  logout: loginSlice.actions.logout,
};

export type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export class UserComponent extends PureComponent<Props> { 

    render() {
      const { username } = this.props;
      return isEmpty(username) ? (
        <h3>
          Please <Link to="/login">login</Link>
        </h3>
      ) : (
      <div>
        <h1>Hello, {username}!</h1>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}


export const User = connect(mapStateToProps, mapDispatchToProps)(UserComponent); 
