(function(f,c,d){var b="Rho.Remotenotification";var a=d.apiReqFor(b);function e(){var g=null;this.getId=function(){return g};if(1==arguments.length&&arguments[0][d.rhoIdParam()]){if(b!=arguments[0][d.rhoClassParam()]){throw"Wrong class instantiation!"}g=arguments[0][d.rhoIdParam()]}else{g=d.nextId()}}d.createPropsProxy(e.prototype,[{propName:"isConnected",propAccess:"r"},{propName:"isEnabled",propAccess:"r"},{propName:"isDefaultDevice",propAccess:"r"},{propName:"isLEDSupported",propAccess:"r"},{propName:"isBeepSupported",propAccess:"r"},{propName:"isVibrateSupported",propAccess:"r"},{propName:"modelNumber",propAccess:"r"},{propName:"friendlyName",propAccess:"r"},{propName:"connectionType",propAccess:"r"},{propName:"deviceType",propAccess:"r"},{propName:"ledcolor",propAccess:"rw"},{propName:"ledonTime",propAccess:"rw"},{propName:"ledoffTime",propAccess:"rw"},{propName:"ledrepeatCount",propAccess:"rw"},{propName:"vibrationDuration",propAccess:"rw"}],a,function(){return this.getId()});d.createMethodsProxy(e.prototype,[{methodName:"enable",nativeName:"enable",valueCallbackIndex:0},{methodName:"clearproperties",nativeName:"clearproperties",valueCallbackIndex:0},{methodName:"disable",nativeName:"disable",valueCallbackIndex:0},{methodName:"cancelNotification",nativeName:"cancelNotification",valueCallbackIndex:0},{methodName:"notify",nativeName:"notify",valueCallbackIndex:1}],a,function(){return this.getId()});d.createRawPropsProxy(e.prototype,[]);e.BLUETOOTH_SSI="BLUETOOTH_SSI";e.IMAGER="IMAGER";e.PLUGGABLE="PLUGGABLE";e.UNDEFINED="UNDEFINED";e.VIBRATOR="VIBRATOR";d.createPropsProxy(e,[],a);d.createMethodsProxy(e,[{methodName:"enumerate",nativeName:"enumerate",persistentCallbackIndex:0,valueCallbackIndex:2}],a);d.createPropsProxy(e,[{propName:"defaultInstance:getDefault:setDefault",propAccess:"rw",customSet:function(g){if(!g||"function"!=typeof g.getId){throw"Default object should provide getId method!"}e.setDefaultID(g.getId())}},{propName:"defaultID:getDefaultID:setDefaultID",propAccess:"rw"}],a);e.getId=function(){return e.getDefaultID()};d.createPropsProxy(e,[{propName:"isConnected",propAccess:"r"},{propName:"isEnabled",propAccess:"r"},{propName:"isDefaultDevice",propAccess:"r"},{propName:"isLEDSupported",propAccess:"r"},{propName:"isBeepSupported",propAccess:"r"},{propName:"isVibrateSupported",propAccess:"r"},{propName:"modelNumber",propAccess:"r"},{propName:"friendlyName",propAccess:"r"},{propName:"connectionType",propAccess:"r"},{propName:"deviceType",propAccess:"r"},{propName:"ledcolor",propAccess:"rw"},{propName:"ledonTime",propAccess:"rw"},{propName:"ledoffTime",propAccess:"rw"},{propName:"ledrepeatCount",propAccess:"rw"},{propName:"vibrationDuration",propAccess:"rw"}],a,function(){return this.getId()});d.createMethodsProxy(e,[{methodName:"enable",nativeName:"enable",valueCallbackIndex:0},{methodName:"clearproperties",nativeName:"clearproperties",valueCallbackIndex:0},{methodName:"disable",nativeName:"disable",valueCallbackIndex:0},{methodName:"cancelNotification",nativeName:"cancelNotification",valueCallbackIndex:0},{methodName:"notify",nativeName:"notify",valueCallbackIndex:1}],a,function(){return this.getId()});d.createRawPropsProxy(e,[]);d.namespace(b,e)})(Rho.jQuery,Rho,Rho.util);