(function ()
{
    'use strict';

    angular.module('app')
            .controller('ExperimentsCtrl', function (Messages, Experiments)
            {
                var ctrl = this;
                ctrl.title = 'Experiments Page';
                ctrl.body = 'This is the about ctrl body';

                Experiments.getExperiments()
                        .then(function (result)
                        {
                            ctrl.experiments = result.data;
                        });

                ctrl.getMessage = function ()
                {
                    ctrl.message = Messages.getMessage();

                };

            });

})();
