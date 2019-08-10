import $ from "jquery"

export function getTodos(successCallback, errorCallback) {
    $.ajax({
        type: "GET",
        url: "/",
        dataType: "json",
        success: successCallback,
        error: errorCallback
    });
}

export function createTodo(todo, successCallback, errorCallback) {
    $.ajax({    
        type: "POST",
        url: "/create",
        contentType: "application/json",
        data: JSON.stringify(todo),
        success: successCallback,
        error: errorCallback
    });
}

export function deleteTodo(todo, successCallback, errorCallback) {
    $.ajax({    
        type: "DELETE",
        url: "/delete",
        contentType: "application/json",
        data: JSON.stringify(todo),
        success: successCallback,
        error: errorCallback
    });
}

export function changeStatus(todo, successCallback, errorCallback) {
    $.ajax({    
        type: "UPDATE",
        url: "/status",
        contentType: "application/json",
        data: JSON.stringify(todo),
        success: successCallback,
        error: errorCallback
    });
}

// export function changePriority(todo, successCallback, errorCallback) {
//     $.ajax({    
//         type: "UPDATE",
//         url: "/star",
//         contentType: "application/json",
//         data: JSON.stringify(todo),
//         success: successCallback,
//         error: errorCallback
//     });
// }

function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = $.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');

$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

