$_$wp(1);
const $_$wvd1 = $_$w(1, 0), convertQueryToMap = query => {
        $_$wf(1);
        if ($_$w(1, 1), 0 === query.length) {
            return $_$w(1, 2), '';
        }
        const result = ($_$w(1, 3), new Object(null));
        for (let param of ($_$w(1, 4), query.split('&'))) {
            let [name, value] = ($_$w(1, 5), param.split('='));
            const stk = ($_$w(1, 6), name.split('.'));
            let o = ($_$w(1, 7), result);
            while ($_$w(1, 8), 1 < stk.length) {
                $_$w(1, 9), name = stk.shift();
                if ($_$w(1, 10), 'undefined' === typeof o[name]) {
                    $_$w(1, 11), o[name] = new Object(null);
                }
                $_$w(1, 12), o = o[name];
            }
            $_$w(1, 13), o[stk[0]] = decodeURIComponent(value);
        }
        return $_$w(1, 14), result;
    };
const assert = ($_$w(1, 15), require('assert'));
$_$w(1, 16), $_$tracer.log(convertQueryToMap('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'), 'convertQueryToMap(\'user.name.firstname=B...', 1, 16);
$_$w(1, 17), $_$tracer.log(convertQueryToMap(''), 'convertQueryToMap(\'\')', 1, 17);
$_$wpe(1);