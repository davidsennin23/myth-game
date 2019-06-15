import { merge, Subject, interval } from "rxjs";
import { debounceTime, map } from 'rxjs/operators';

function cadErrorFade(error) {
    let fader = interval(5000).pipe(debounceTime(4995), map(v => ""));
    error.subject.subscribe(fader);
    return fader;
}

const getExecutionFunction = (obj, old, error) => {

    return function() {
        try {
            old.apply(obj, ...arguments);
            if (error.subject)
                error.subject.next("");
        } catch(e) {
            console.log(e.message);
            if (error.subject)
                error.subject.next(e.message);
        }
    }.bind(obj);

}

class ErrorCatcher {

    constructor() {
        this.registeredFunctions = {};
    }

    _createError = () => {
        return {
            subject: undefined,
            functions: []
        }
    }

    _registerError = (errorName) => {
        let error = this.registeredFunctions[errorName];
        if (!error) {
            this.registeredFunctions[errorName] = error = this._createError();
        }
        return error;
    }

    _registerFunction(error, functionName) {
        if (!error.functions.find(funct => funct == functionName)){
            error.functions.push(functionName);
        }
    }

    registerFunction = (errorName, object, functionName) => {
        let error = this._registerError(errorName);
        this._registerFunction(error, functionName);
        object[functionName] = getExecutionFunction(object, object[functionName], error);
    }

    unregisterFunction = (functionName) => {
        // TO-DO ver o que fazer aqui
    }

    registerErrorObjservers = (errorName, funct) => {
        let error = this.registeredFunctions[errorName];
        if (!error) {
            throw new Error("Erro não cadastrado");
        }
        let subject = error.subject;
        if (!subject) {
            error.subject = subject = new Subject();
            error.fade = cadErrorFade(error);
        }
        if (error.fade) {
            return merge(error.subject, error.fade).subscribe(funct);
        }
        return subject.subscribe(funct);
    }

}

const errorCatcher = new ErrorCatcher();

export default errorCatcher;