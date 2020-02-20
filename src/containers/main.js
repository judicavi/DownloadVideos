import { connect } from "react-redux";
import { withRouter } from "react-router";
import Main from "./../component/main";

const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = (state, props) => bindActionCreators({}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
