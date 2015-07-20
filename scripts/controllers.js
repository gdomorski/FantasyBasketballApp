  var controllers = {};
  
  controllers.PlayerController = function ($scope){
    $scope.players = [ 
    {name: 'Lebron James', team: 'Cleveland Cavaliers', position: 'Forward'},
    {name:'Stephen Curry', team: 'Golden State Warriors', position: 'Point Guard'},
    {name:'Dwight Howard', team: 'Houston Rockets', position: 'Center/Power Forward'}, 
   
    ];
  }


  practiceApp.controller(controllers)