var jsonResponse = JSON.parse(context.getVariable("serviceCallResponse.content"));
delete jsonResponse['application'];
delete jsonResponse['uri'];
delete jsonResponse['timestamp'];
delete jsonResponse['action'];
delete jsonResponse['params'];
delete jsonResponse['path'];
delete jsonResponse['duration'];
delete jsonResponse['organization'];
delete jsonResponse['applicationName'];
jsonResponse['entities'].forEach(function (data){
    delete data['type'];
    delete data['created'];
    delete data['modified'];
    delete data['metadata'];
});
context.setVariable("response.content", JSON.stringify(jsonResponse));
//context.setVariable("response", context.getVariable("serviceCallResponse"))