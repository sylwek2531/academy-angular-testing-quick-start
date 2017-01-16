(function ()
{
    angular.module('app').directive('gravatar', function ()
    {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                gravatar: '=',
                size: '@'
            },
            template: '<img class="gravatar" ng-src="http://www.gravatar.com/avatar/{{ gravCtrl.gravatar }}?s={{ gravCtrl.sizePx }}&d=identicon"/>',

            // template: '<img class="gravatar" ng-src="http://www.gravatar.com/avatar/{{ gravatar }}?s={{ sizePx }}&d=identicon"/>',
            controller: function ()
            {
                var ctrl = this;

                console.log(ctrl.gravatar);
                if (ctrl.size === 'lg') {
                    ctrl.sizePx = '40';
                } else {
                    ctrl.sizePx = '20';
                }
            },

            // link: function (scope)
            // {
            //     console.log(scope.size);
            //     if (scope.size === 'lg') {
            //         scope.sizePx = '40';
            //     } else {
            //         scope.sizePx = '20';
            //     }
            // }

            controllerAs:'gravCtrl',
            bindToController:true
        };
    });

})();
