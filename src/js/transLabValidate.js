//Validando Email
window.validateEmail = function (email) {
    if (email.indexOf('@') < 0) {
        return false;
    }

    const tokens = email.split('@');
    if (tokens.length != 2) {
        return false;
    }

    if (tokens[1].indexOf('.') < 0) {
        return false;
    }

    const domTokens = tokens[1].split('.');
    if (domTokens.length != 2) {
        return false;
    }
    if (domTokens[0].length < 1) {
        return false
    }
    if (domTokens[1].length < 1) {
        return false
    }
    return true;
};

//Validando Password
window.validatePassword = (password) => {
    if (password.toString().length >= 6 && password.toString().length <= 8) {
        if (isNaN(password) === false) {
            if (password.toString().trim() !== " ") {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}
