import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Test from "../Test.js";
import { getuser } from "../action/action";

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getuser());
    }
  };
};
const mapStateToProps = state => {
  return {
    userData: state
  };
};

const TestConatiner = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Test)
);
export default TestConatiner;
