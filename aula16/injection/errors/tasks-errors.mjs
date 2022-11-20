export const errors = {
    INVALID_TASK_ID: invalidTaskId,
    NOT_FOUND: notFound,
    NOT_AUTHORIZE: notAuthorize
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