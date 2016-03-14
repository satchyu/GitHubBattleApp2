var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Loading = require('./Loading');

var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');


function Battle(props){
	
	return props.isLoading === true 
	?
	  <Loading text='Getting Players Details' speed='500'/>	     
	: <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
	  	<h1>Confirm Players</h1>
	  	<div className='col-sm-8 col-sm-offset-2'>
	  	  <UserDetailsWrapper header='Player 1'>
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
	  	  <UserDetailsWrapper header='Player 2'>
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
	  	</div>
	  	<div className='col-sm-8 col-sm-offset-2'>
	  		<div className='col-sm-12' style={styles.space}>
			    <button type='button' className='btn btn-lg btn-success' onClick= { props.onInitiatebattle }>Initiate Battle!</button>
	  		</div>
	  		
	  		<div className='col-sm-12' style={styles.space}>
	  		  <Link to='/playerOne'>
              	<button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
              </Link>
	  		</div>
	  	</div>
	  </div>
	

}

Battle.propTypes = { 
 
  isLoading:PropTypes.bool.isRequired,
  playersInfo:PropTypes.array.isRequired,
  onInitiatebattle:PropTypes.func.isRequired,

}

module.exports = Battle;

