  var controllers = {};
  
  controllers.PlayerController = function ($scope){
    $scope.players = [ 
    {name: 'Lebron James', team: 'Cleveland Cavaliers', position: 'Forward', points: '25.3'},
    {name:'Stephen Curry', team: 'Golden State Warriors', position: 'Point Guard', points: '23.8'},
    {name:'Dwight Howard', team: 'Houston Rockets', position: 'Center/Power Forward', points: '15.8'},
    {name:'Kobe Bryant', team: 'Los Angeles Lakers', position: 'Guard', points: '22.3'}, 
    {name:'Damian Lillard', team: 'Portland Trailblazers', position: 'Point Guard', points: '21.0'}
   
    ];
  }


  practiceApp.controller(controllers)