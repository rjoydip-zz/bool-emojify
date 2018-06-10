
const { BoolEmojify } = require('./');

test('BoolEmojify with return', () => {
    const boolEmojify = new BoolEmojify();
    const emojifyTrue = boolEmojify.emojify(true);
    if (emojifyTrue.error) {
        expect(() => {
            throw new Error(emojifyTrue.error);
        }).toThrow();
    } else {
        expect(emojifyTrue.value).toEqual('👆');
    }
    const emojifyFalse = boolEmojify.emojify(false);
    if (emojifyFalse.error) {
        expect(() => {
            throw new Error(emojifyFalse.error);
        }).toThrow();
    } else {
        expect(emojifyFalse.value).toEqual('👇');
    }
});

test('BoolEmojify with callback with', () => {
    const boolEmojify = new BoolEmojify();
    boolEmojify.emojify(true, (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual('👆');
        }
    });
    boolEmojify.emojify(false, (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual('👇');
        }
    });
});

test('BoolEmojify with return with blank string', () => {
    const boolEmojify = new BoolEmojify();
    const emojifyBlank = boolEmojify.emojify('');
    if (emojifyBlank.error) {
        expect(() => {
            throw new Error(emojifyBlank.error);
        }).toThrow();
    } else {
        expect(emojifyBlank.value).toEqual('Data is empty');
    }
});

test('BoolEmojify with callback with blank string', () => {
    const boolEmojify = new BoolEmojify();
    boolEmojify.emojify('', (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual('Data is empty');
        }
    });
});

test('BoolEmojify with callback with blank array', () => {
    const boolEmojify = new BoolEmojify();
    boolEmojify.emojify([], (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual('Data is not boolean type');
        }
    });
});

test('BoolEmojify with callback with blank array', () => {
    const boolEmojify = new BoolEmojify();
    boolEmojify.emojify([], (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual('Data is not boolean type');
        }
    });
});

test('BoolEmojify with return with option', () => {
    const boolEmojify = new BoolEmojify({
        "truthy": '👍',
        "falsy": '👎'
    });
    const emojifyTrue = boolEmojify.emojify(true);
    if (emojifyTrue.error) {
        expect(() => {
            throw new Error(emojifyTrue.error);
        }).toThrow();
    } else {
        expect(emojifyTrue.value).toEqual('👍');
    }
    const emojifyFalse = boolEmojify.emojify(false);
    if (emojifyFalse.error) {
        expect(() => {
            throw new Error(emojifyFalse.error);
        }).toThrow();
    } else {
        expect(emojifyFalse.value).toEqual('👎');
    }
});

test('BoolEmojify with callback with option', () => {
    const boolEmojify = new BoolEmojify({
        "truthy": '👍',
        "falsy": '👎'
    });
    boolEmojify.emojify(true, (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual('👍');
        }
    });
    boolEmojify.emojify(false, (emojify) => {
        if (emojify.error) {
            expect(() => {
                throw new Error(emojify.error);
            }).toThrow();
        } else {
            expect(emojify.value).toEqual('👎');
        }
    });
});