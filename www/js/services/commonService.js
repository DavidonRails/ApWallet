angular.module('ApWallet')

.factory('REGX', function() {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return {
    validEmail : function(email) {
      return re.test(email);
    }
  }
})

.factory('$localstorage', ['$window', function($window) {
	return {
		set: function(key, value) {
		 $window.localStorage[key] = value;
		},
		get: function(key, defaultValue) {
		 return $window.localStorage[key] || defaultValue;
		},
		setObject: function(key, value) {
		 $window.localStorage[key] = JSON.stringify(value);
		},
		getObject: function(key) {
		 return JSON.parse($window.localStorage[key] || '{}');
		}
	}
}]);

function toparams(obj) {
  var p = [];
  for (var key in obj) {
      p.push(key + '=' + encodeURIComponent(obj[key]));
  }

  return p = p.join('&');
}

function cat_subs(menus) {
  cats = [];
  for (i in menus) {
      category = menus[i];
      cats.push({category_id: category['category_id'], products: category['products']});
      if (category['categories'] && category['categories'].length > 0) {
          cats = cats.concat(cat_subs(category['categories']));
      }
  }
  return cats;
}
