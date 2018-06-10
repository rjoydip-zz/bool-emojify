'use strict';

class BoolEmojify {
    constructor(option) { 
        this.option = option || {
            truthy: '👆',
            falsy: '👇'
        };
    }

    isBoolean(val) {
        return typeof val === 'boolean';
    }

    emojify(data, cb) {
        const payload = {
            error: null,
            value: null
        };

        if (this.isBoolean(data) && data !== '') {
            payload.value = data ? this.option.truthy : this.option.falsy;
        } else {
            if(data === '') {
                payload.error = 'Data is empty';
            } else {
                payload.error = 'Data is not boolean type';
            }
        }

        if (cb) return cb(payload);
        else return payload;
    }
}

module.exports = Object.assign(new BoolEmojify(), { BoolEmojify });