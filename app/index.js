// //var app = document.getElementById('app');
// //app.innerHTML='Hello Dheraj';
 var React = require('react');
 var ReactDOM = require('react-dom');

// //var Hello = React.createClass({
// //    render: function () {
// //      return (
// //        <div> Hello World from Dheeraj</div>
// //      )
// //    }
// //});

// //ReactDOM.render(<Hello />, document.getElementById('app'));

// /////////////////////
// //Example of props
// ////////////////////
// // var HelloUser = React.createClass({
// //   render: function(){
// //     return (
// //       <div> Hello, {this.props.name}</div>
// //     )
// //   }
// // });
// //  ReactDOM.render(<HelloUser name="Tyler"/>, document.getElementById('app'));
// //
// ///////////////////////////////////////////
// //Example of parent- Child Compoment
// //////////////////////////////////////////
// // var FriendsContainer = React.createClass({
// //
// //   render: function(){
// //     var name = 'Dheeraj Vatti'
// //     var friends = ['Milind', 'Mradul', 'Sahitya']
// //     return (
// //           <div>
// //           <h3> Name: {name} </h3>
// //           <ShowList names={friends} />
// //           </div>
// //     )
// //   }
// //
// // });
// // var ShowList = React.createClass({
// //   render: function(){
// //     var listItems = this.props.names.map(function(friend){
// //       return <li> {friend} </li>;
// //     });
// //     return (
// //       <div>
// //         <h3> Friends </h3>
// //         <ul>
// //           {listItems}
// //         </ul>
// //       </div>
// //     )
// //   }
// // });
// //
// // ReactDOM.render(<FriendsContainer />, document.getElementById('app'));

// ///////////////////////////////////////////
// //Using pure functions to return some UI ---> fn(d) = V
// //////////////////////////////////////////


// var USER_DATA = {
// 	name: 'Dheeraj Vatti',
// 	userName: 'dheerajVatti',
// 	imageURL: 'https://farm2.staticflickr.com/1684/24722653021_d86c46f905_k.jpg'
// }

// var ProfilePic = React.createClass({
// 	render: function() {
// 		return ( < img src = {this.props.imageURL}	style = {
// 				{
// 					height: 100,
// 					width: 100
// 				}
// 			}
// 			/>
// 		)
// 	}
// });

// var ProfileLink = React.createClass({
// 	render: function() {
// 		return ( < div >
// 			< a href = {
// 				'https://github.com/' + this.props.userName
// 			} > {
// 				this.props.userName
// 			} < /a> < /div>
// 		)
// 	}
// });

// var ProfileName = React.createClass({
// 	render: function() {
// 		return ( < div > {
// 			this.props.profileName
// 		} < /div>)
// 	}
// });

// var Avatar = React.createClass({
// 	render: function() {
// 		return ( < div >
// 			< ProfileName profileName = {
// 				this.props.user.name
// 			}
// 			/> < ProfilePic imageURL = {
// 				this.props.user.imageURL
// 			}
// 			/> < ProfileLink userName = {
// 				this.props.user.userName
// 			}
// 			/> < /div>
// 		)
// 	}
// });

// ReactDOM.render( < Avatar user = {
// 			USER_DATA
// 		}
// 		/> , document.getElementById('app'));


// 		//////////////////////////////////////////////
// 		//REACT ROUTER
// 		////////////////////////////////////////////

 

 var routes = require('./config/routes')
 ReactDOM.render(
 	routes,document.getElementById('app')
 	);

 ////////////////////////////////////////

 
