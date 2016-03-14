var axiosObj = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username){
	return axiosObj.get('https://api.github.com/users/' + username + param);
}


function getRepos (username) {
  //console.log('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100')
  return axiosObj.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars (repos) {
  //console.log('repos',repos)
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData (player) {
  console.log(player.followers)
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores (players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

var helpers={

	getplayerInfo :function(players){ // returns a promise

		return axiosObj.all(players.map(function(username) {
			return getUserInfo(username)
		})).then(function(info){
			//console.log('INFO',info)
			return info.map(function(user) {
				return user.data;
			})
		}).catch(function(){
			console.warn('Error in PlayerInfo',err)
		})
 	},

 	playersBattle: function (players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    console.log('playerOneData',playerOneData)
    console.log('playerTwoData',playerTwoData)
    return axiosObj.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)

  	    })
  }


};

module.exports = helpers;