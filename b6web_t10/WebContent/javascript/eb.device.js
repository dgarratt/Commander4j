(function(f,d,e){var b="Rho.Device";var a=e.apiReqFor(b);function c(){var g=null;this.getId=function(){return g};if(1==arguments.length&&arguments[0][e.rhoIdParam()]){if(b!=arguments[0][e.rhoClassParam()]){throw"Wrong class instantiation!"}g=arguments[0][e.rhoIdParam()]}else{g=e.nextId()}}e.createPropsProxy(c.prototype,[],a,function(){return this.getId()});e.createMethodsProxy(c.prototype,[],a,function(){return this.getId()});e.createRawPropsProxy(c.prototype,[]);e.createPropsProxy(c,[],a);e.createMethodsProxy(c,[{methodName:"calibrate",nativeName:"calibrate",persistentCallbackIndex:0,valueCallbackIndex:2},{methodName:"suspend",nativeName:"suspend",persistentCallbackIndex:0,valueCallbackIndex:2},{methodName:"powerOff",nativeName:"powerOff",persistentCallbackIndex:0,valueCallbackIndex:2},{methodName:"idle",nativeName:"idle",persistentCallbackIndex:0,valueCallbackIndex:2},{methodName:"wake",nativeName:"wake",persistentCallbackIndex:0,valueCallbackIndex:2},{methodName:"acquirePartialWakeLock",nativeName:"acquirePartialWakeLock",valueCallbackIndex:0},{methodName:"releasePartialWakeLock",nativeName:"releasePartialWakeLock",valueCallbackIndex:0},{methodName:"reboot",nativeName:"reboot",persistentCallbackIndex:1,valueCallbackIndex:3},{methodName:"navigationBarVisibility",nativeName:"navigationBarVisibility",valueCallbackIndex:1}],a);e.namespace(b,c)})(Rho.jQuery,Rho,Rho.util);