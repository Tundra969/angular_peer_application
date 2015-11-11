/**
 * Created by samuelmoss on 11/11/15.
 */
myApp.directive('profileInfo',
    function(){
        return {
            restrict: "E",
            scope: {
                info: "="
            },
            templateUrl:"assets/views/profileinfo.html"
        }
    }
);