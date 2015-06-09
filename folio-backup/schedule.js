// Angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// Main controller and access to firebase

.controller('mainController', function($scope, $firebase) {

// Application code will go here

var ref = new Firebase("https://intense-torch-8620.firebaseio.com/days");
var fb = $firebase(ref);

// sync as object
var syncObject = fb.$asObject();

  // three way data binding
  syncObject.$bindTo($scope, 'days');

// function to set the default data
$scope.reset = function() {

    fb.$set({
        monday: {
            name: 'Monday',
            slots: {
                0123: {
                    time: '12:30pm',
                    booked: false
                },
                0133: {
                    time: '10:00am',
                    booked: false
                },
                0400: {
                    time: '4:00pm',
                    booked: false
                }
            }
        },
        tuesday: {
            name: 'Tuesday',
            slots: {
                0110: {
                    time: '11:00am',
                    booked: false
                },
                0120: {
                    time: '12:00pm',
                    booked: false
                },
                0400: {
                    time: '4:00pm',
                    booked: false
                }
            }
        },
        wednesday: {
            name: 'Wednesday',
            slots: {
                0123: {
                    time: '12:30pm',
                    booked: false
                },
                0133: {
                    time: '10:00am',
                    booked: false
                },
                0400: {
                    time: '4:00pm',
                    booked: false
                }
            }
        }
        // },
        // thursday: {
        //  name: 'Thursday',
        //  slots: {
        //      0900: {
        //          time: '9:00am',
        //          booked: false
        //      },
        //      0110: {
        //          time: '11:00am',
        //          booked: false
        //      }
        //  }
        // },
        // friday: {
        //  name: 'Friday',
        //  slots: {
        //      0900: {
        //          time: '9:00am',
        //          booked: false
        //      },
        //      0110: {
        //          time: '11:00am',
        //          booked: false
        //      }
        //  }
        // }
    });

};

});