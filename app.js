// styles.js
var styles= {
  button: {
    color: 'black',
    border: '1px solid black',
    borderRadius: '4px',
    textAlign: 'center',
    margin: '20px 0',
    padding: '10px',
    width: '150px'
  },
  buttonDisabled: {
    color: 'lightgrey'
  }
};

// Button.js
var Button = React.createClass({

  
  render: function() {

    var buttonStyles = _.extend({},
      styles.button,
      this.props.disabled && styles.buttonDisabled
    );
    
    return <div style={buttonStyles}>React button!</div>
  }

});


var App = React.createClass({

  componentDidMount: function() {
    var self = this;
    window.onresize = function() { self.setState({ ww: window.innerWidth }); }
  },

  getInitialState: function() {

    return {
      disabled: false,
      ww: window.innerWidth
    };
  },

  render: function() {

    return (
      <div>
        <Button disabled={this.state.disabled} />
        <p style={ {
          fontSize: this.state.ww / 20,
          opacity: this.state.ww / 1200
        } }>hella foo</p>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
