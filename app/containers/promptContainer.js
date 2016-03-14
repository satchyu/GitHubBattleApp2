var React = require('react');
var Prompt = require('../components/Prompt');



var promptContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  //SETTING THE STATE
  getInitialState: function () {
    return {
      username: ''
    }
  },
  //RESETTING THE STATE
  handleUpdateUser:function(e){

   	this.setState({
   		username :e.target.value
   	})

  },

  //HANDLING THE ROUTING on Submit
  handleSubmitUser:function(e){
  	 e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {

    	 //this.context.router.push('/')
      var pathname =
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })
    } else {
    	//this.context.router.push('/')
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },

 render: function(){
 	
 	return(

 		<Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />

 		)
 }

});

module.exports = promptContainer;