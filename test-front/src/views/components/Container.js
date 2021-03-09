import React from "react";
import SearchHeader from "./SearchHeader";

class Container extends React.Component {
  // console.log(props)
  render() {
    return (
      <div>
        <SearchHeader />
        <div>
          <div className={this.props.children ? "container_main_body" : ""}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
