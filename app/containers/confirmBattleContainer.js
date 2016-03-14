var React = require('react');

var Battle = require('../components/Battle');
var gitHubHelper = require('../battleUtils/gitHubHelper')


var confirmBattleContainer = React.createClass({

contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  //SETTING THE STATE
 getInitialState: function (players) {
    return {
      isLoading:true,
      playersInfo:[]
    }
  },

  componentDidMount:function(){

  	var query = this.props.location.query;

  	gitHubHelper.getplayerInfo([query.playerOne,query.playerTwo]) //we getback a promise
  				.then(function (players){
  					//console.log('Players',players)
  					this.setState({
  						isLoading:false,
  						playersInfo :[players[0],players[1]]
  					})
  				}.bind(this))

  },

  // componentWillUnmount: function() {
  //   console.log("ParentComponent - componentWillUnmount");
  //   //console.log(this.context.router)    
  //    this.context.router.push({
  //       pathname: '/results',
  //       state: {
  //       playersInfo: this.state.playersInfo
  //     }
  //   })
  // },

  handleInitiatebattle:function(){
     
       console.log('clicked');
      //this.context.router.push('/results/')
     this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },

 render: function(){

 	//console.log(this.props.route.header);

		return (

        //<button type='button' className='btn btn-lg btn-success' onClick= { this.handleInitiatebattle }>Initiate Battle!</button>

			<Battle	 isLoading={this.state.isLoading}
       playersInfo={this.state.playersInfo}
       onInitiatebattle = {this.handleInitiatebattle}/>

			)
	}
});

module.exports = confirmBattleContainer;