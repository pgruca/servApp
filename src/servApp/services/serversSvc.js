angular.module("servApp").factory("serversSvc", function($filter){

    var actualId = 5;

    var newServer = function(id){
        return {
            id: id,
            apps: []
        }
    }

    var findTheLeastLoadedServer = function(){
        for(var i = 0; i<2; i++){
            var res = $filter('filter')(serversSvc.servers, function(server){
                return server.apps.length === i;
            });
            if(res.length > 0) return res;
        }
    }

    var findServersWithApp = function(app){
        var res = [];
        serversSvc.servers.forEach(function(server, index){
            server.apps.forEach(function(localApp){
                if(localApp.name === app.name) res.push(index);
            });
        });
        return res;
    }

    var removeApp = function(server, app){
        server.apps.forEach(function(localApp, index){
            if(localApp.name === app.name){
                server.apps.splice(index, 1);
            }
        });
    }

    var serversSvc = {
        servers: [
            {id: 1, apps:[]},
            {id: 2, apps:[]},
            {id: 3, apps:[]},
            {id: 4, apps:[]}
        ],
        addServer: function () {
            this.servers.push(newServer(actualId));
            actualId++;
        },
        mountApp: function (app) {
            var servers = findTheLeastLoadedServer();
            if(!servers){
                alert('All servers are busy');
            }
            var first = servers[0];
            first.apps.push(app);
        },
        unmountApp: function (app) {
            var serversWithApp = findServersWithApp(app);
            var last = serversWithApp.length - 1;
            removeApp(this.servers[serversWithApp[last]], app)
        }
    };
    return serversSvc;
});


