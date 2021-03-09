const React = require("react");

class NavigationPath extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("hola estoy haciendo click");
  }
  render() {
    return (
      <div
        className="main_container"
        onClick={() => console.log("hola aca estamos")}
      >
        <div className="">
          aca va la imagen
          {/* <img src={this.props.thumbnail} alt={this.props.title}/> */}
        </div>
        {/* <div className="">
          <span className="">precio</span>
          shipping
          <p className="">titulo</p>
        </div>
        <div className="">ubicacion</div> */}
      </div>
    );
  }
}

export default NavigationPath;
