angular.module('ApWallet')
.service('UserService', function() {
    var self = this;

    this.setUser = function(data) {
        console.log("service :", data.user_data)
        window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('user_id', data.user_data.user_id);
        window.localStorage.setItem('full_name', data.user_data.full_name);
        window.localStorage.setItem('user_email', data.user_data.user_email);
    };

    this.getUser = function() {
        return {
            token               : window.localStorage.getItem('token'),
            user_id             : window.localStorage.getItem('user_id'),
            full_name           : window.localStorage.getItem('full_name'),
            user_email          : window.localStorage.getItem('user_email')
        };
    };
});