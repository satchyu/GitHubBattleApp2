var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var promptContainer = require('../containers/promptContainer');
var confirmBattleContainer = require('../containers/confirmBattleContainer');
var ResultsContainer = require('../containers/ResultsContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header='Player 1' component = {promptContainer} />
      <Route path='playerTwo/:playerOne' header='Player 2' component={promptContainer}/>
      <Route path='battle' header='BATTLE GROUND' component = {confirmBattleContainer} />
      <Route path='results' component={ResultsContainer} />

    </Route>
  </Router>

 );



module.exports = routes;