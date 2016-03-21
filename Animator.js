/**
 *  Animation module
 *  ---------------------------------------------
 *  Author : IndexXuan(https://github.com/IndexXuan)
 *  Mail   : indexxuan@gmail.com
 *  Date   : Mon 21 Mar 2016 02:43:34 PM CST
 */


class Animator {
    constructor(duration, progress, easing) {
        this.duration = duration
        this.progress = progress
        this.easing = easing || function(p) { return p }
    }

    start(finished) {
        let startTime = Date.now()
        let duration = this.duration,
            self = this
        requestAnimationFrame(function step()  {
            let p = (Date.now() - startTime) / duration
            let next = true

            if (p < 1.0) {
                self.progress(self.easing(p), p)
            } else {
                if (typeof finished === 'function') {
                    next = finished() === false
                } else {
                    next = finished === false
                }

                if (!next) {
                    self.progress(self.easing(1.0), 1.0)
                } else {
                    startTime += duration
                    self.progress(self.easing(p), p)
                }
            }

            if (next) requestAnimationFrame(step)
        })
    }
}
