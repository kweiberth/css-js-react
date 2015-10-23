



var styles = {
  button: {
    color: 'black',
    border: '1px solid black',
    borderRadius: '4px',
    margin: '20px 0',
    padding: '10px',
    textAlign: 'center',
    width: '150px'
  },
  buttonDisabled: {
    color: 'lightgrey'
  }
};
















var Button = React.createClass({

  render: function() {

    var buttonStyles = _.extend({},
      styles.button,
      this.props.disabled && styles.buttonDisabled
    );
    
    return ( 
      <div style={buttonStyles}>React button!</div>
    );
  }

});













var App = React.createClass({

  handleDisable: function() {
    this.setState({
      disabled: !this.state.disabled
    });
  },

  componentDidMount: function() {
    window.onresize = function() { 
      this.setState({ ww: window.innerWidth }); 
    }.bind(this);
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

        <form onChange={this.handleDisable}>
          <input type="checkbox"></input>disable
        </form>

        <span style={{
          fontSize: this.state.ww / 8, 
          opacity: this.state.disabled ? 1 : this.state.ww / 750
        }}>
          hella foo
        </span>

      </div>
    );
  }
});











ReactDOM.render(
  <App />,
  document.getElementById('app')
);
