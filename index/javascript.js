'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(LikeButton), domContainer);

//function Welcome(props) {
//  return <h1>Hello, {props.name}</h1>;
//}
//
//const element = <Welcome name="Sara" />;
//ReactDOM.render(element, document.getElementById('root'));
