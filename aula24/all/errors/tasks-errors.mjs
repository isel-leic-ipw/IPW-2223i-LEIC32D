export const errors = {
    INVALID_TASK_ID: invalidTaskId,
    NOT_FOUND: notFound,
    NOT_AUTHORIZE: notAuthorize,
    INVALID_CREDENTIALS: invalidCredentials
    
}


function invalidTaskId(id) {
    return {
        code: "e1",
        error: `${id.toString()} is not a valid id`
    }
}

function notFound(id) {
    return {
        code: "e2",
        error: `${id} not found`
    }
}

function notAuthorize() {
    return {
        code: "e3",
        error: `is not authorize`
    }
}

function invalidCredentials(username) {
    return {
        code: "e4",
        error: `username or password not a valid`
    }
}