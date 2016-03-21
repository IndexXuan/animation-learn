/**
 *  Animation Queue mudule
 *  ---------------------------------------------
 *  Author : IndexXuan(https://github.com/IndexXuan)
 *  Mail   : indexxuan@gmail.com
 *  Date   : Mon 21 Mar 2016 03:50:02 PM CST
 */

"use strict"

class AnimationQueue {
    constructor(animators) {
        status = 'ready'
        this.animators = animators || []
    }

    append(...args) {
        this.animators.push.apply(this.animators, args)
    }

    flush() {
        if (this.animators.length) {
            let self = this

            function play() {
                let animator = self.animators.shift()

                if (animator instanceof Animator) {
                    animator.start(() => {
                        if (self.animators.length) {
                            play()
                        }
                    })
                } else {
                    animator.apply(self)
                    if (self.animators.length) {
                        play()
                    }
                }
            }
            play()
        }
    }
}
