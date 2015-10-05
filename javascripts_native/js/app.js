(function(global) {
    'use strict';

    /**
     *
     * Animation
     * - Increase the target margin
     *
     * @event click
     *
     */
    var Animation = (function() {

        function Animation(config) {
            this.target = document.getElementById(config.target);
            this.trigger = document.getElementById(config.trigger);
            this.marginSize = config.marginSize;
            this.duration = config.duration;
        }

        Animation.prototype.init = function() {
            this.trigger.addEventListener('click', this.slide.bind(this), false);
        };

        Animation.prototype.slide = function() {
            var self = this;

            (function slideRight() {
                var currentPosition = (self.target.style.marginLeft) ? parseInt(self.target.style.marginLeft) : 0;

                if (currentPosition < 300) {
                    self.target.style.marginLeft = currentPosition + 1 + 'px';
                    setTimeout(slideRight, self.marginSize / self.duration);
                }
            })();
        };

        global.Animation = Animation;

        return Animation;
    })();


    /**
     *
     * DocumentReady
     * - Instance creation
     *
     * @event DOMContentLoaded
     *
     */
    var DocumentReady = (function() {

        function DocumentReady() {}

        DocumentReady.prototype.init = function() {
            document.addEventListener('DOMContentLoaded', function() {
                this.createAnimation();
            }.bind(this));
        };

        DocumentReady.prototype.createAnimation = function() {
            var animation = new Animation({
                target: 'js-box',
                trigger: 'js-btn',
                marginSize: 200,
                duration: 300
            });
            animation.init();
        };

        global.DocumentReady = DocumentReady;

        return DocumentReady;
    })();

    var documentReady = new DocumentReady();
    documentReady.init();

})(window);
