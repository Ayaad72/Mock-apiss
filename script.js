function signIn(){
    let outh2EndPoint = "https://accounts.google.com/o/oauth2/v2/auth"

    let form = document.createElement("form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", outh2EndPoint)

    let params = {
        "client_id":"",
        "redirect_uri":"http://127.0.0.1:5500/profile.html",
        "response_type":"token",
        "scope":"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly",
        "include_granted_scopes":true,
        'state':'pass-through-value'
    }
    for (var p in params){
        let input = document.createElement("input");
        input.setAttribute('tyoe', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);

        form.appendChild(input);
    }
    document.body.appendChild(form);

    form.submit()
}

