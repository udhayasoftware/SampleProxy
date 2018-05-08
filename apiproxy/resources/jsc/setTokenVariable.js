 var jsonResponse = JSON.parse(context.getVariable("tokenResponse.content"));
 context.setVariable("baasAuthToken", jsonResponse['access_token']);