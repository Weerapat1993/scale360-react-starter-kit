import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ${name}Actions, ${name}Selector } from '../../core/${name}';

class ${name_pascal} extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        ${name_pascal}
      </div>
    )
  }
}

//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = (state, ownProps) => ({
  ${name}: get${name_pascal}Filter()
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  ${name}Actions: bindActionCreators(${name}Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(${name_pascal});
