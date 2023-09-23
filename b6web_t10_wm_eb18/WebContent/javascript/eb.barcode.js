(function(f,d,e){var c="Rho.Barcode";var b=e.apiReqFor(c);function a(){var g=null;this.getId=function(){return g};if(1==arguments.length&&arguments[0][e.rhoIdParam()]){if(c!=arguments[0][e.rhoClassParam()]){throw"Wrong class instantiation!"}g=arguments[0][e.rhoIdParam()]}else{g=e.nextId()}}e.createPropsProxy(a.prototype,[{propName:"autoEnter",propAccess:"rw"},{propName:"autoTab",propAccess:"rw"},{propName:"hapticFeedback",propAccess:"rw"},{propName:"linearSecurityLevel",propAccess:"rw"},{propName:"scanTimeout",propAccess:"rw"},{propName:"rasterMode",propAccess:"rw"},{propName:"rasterHeight",propAccess:"rw"},{propName:"aimingPattern",propAccess:"rw"},{propName:"aimType",propAccess:"rw"},{propName:"timedAimDuration",propAccess:"rw"},{propName:"sameSymbolTimeout",propAccess:"rw"},{propName:"differentSymbolTimeout",propAccess:"rw"},{propName:"digimarcDecoding",propAccess:"rw"},{propName:"barcodeCount",propAccess:"rw"},{propName:"instantReporting",propAccess:"rw"},{propName:"aimMode",propAccess:"rw"},{propName:"codeIdType",propAccess:"rw"},{propName:"picklistMode",propAccess:"rw"},{propName:"picklistEx",propAccess:"rw"},{propName:"scanMode",propAccess:"rw"},{propName:"sceneDetectionQualifier",propAccess:"rw"},{propName:"characterSetSelection",propAccess:"rw"},{propName:"autoCharacterSetFailureOption",propAccess:"rw"},{propName:"enableGS1",propAccess:"rw"},{propName:"enableHIBCC",propAccess:"rw"},{propName:"enableICCBBA",propAccess:"rw"},{propName:"viewfinderMode",propAccess:"rw"},{propName:"viewfinderX",propAccess:"rw"},{propName:"viewfinderY",propAccess:"rw"},{propName:"viewfinderWidth",propAccess:"rw"},{propName:"viewfinderHeight",propAccess:"rw"},{propName:"viewfinderFeedback",propAccess:"rw"},{propName:"viewfinderFeedbackTime",propAccess:"rw"},{propName:"focusMode",propAccess:"rw"},{propName:"illuminationBrightness",propAccess:"rw"},{propName:"illuminationMode",propAccess:"rw"},{propName:"dpmMode",propAccess:"rw"},{propName:"inverse1dMode",propAccess:"rw"},{propName:"poorQuality1dMode",propAccess:"rw"},{propName:"beamWidth",propAccess:"rw"},{propName:"dbpMode",propAccess:"rw"},{propName:"klasseEins",propAccess:"rw"},{propName:"adaptiveScanning",propAccess:"rw"},{propName:"bidirectionalRedundancy",propAccess:"rw"},{propName:"barcodeDataFormat",propAccess:"rw"},{propName:"dataBufferSize",propAccess:"rw"},{propName:"connectionIdleTimeout",propAccess:"rw"},{propName:"disconnectBtOnDisable",propAccess:"rw"},{propName:"displayBtAddressBarcodeOnEnable",propAccess:"rw"},{propName:"enableTimeout",propAccess:"rw"},{propName:"friendlyName",propAccess:"r"},{propName:"lcdMode",propAccess:"rw"},{propName:"lowBatteryScan",propAccess:"rw"},{propName:"triggerConnected",propAccess:"rw"},{propName:"disableScannerDuringNavigate",propAccess:"rw"},{propName:"decodeVolume",propAccess:"rw"},{propName:"decodeDuration",propAccess:"rw"},{propName:"decodeFrequency",propAccess:"rw"},{propName:"invalidDecodeFrequency",propAccess:"rw"},{propName:"decodeSound",propAccess:"rw"},{propName:"invalidDecodeSound",propAccess:"rw"},{propName:"scannerType",propAccess:"r"},{propName:"allDecoders",propAccess:"rw"},{propName:"aztec",propAccess:"rw"},{propName:"chinese2of5",propAccess:"rw"},{propName:"codabar",propAccess:"rw"},{propName:"codabarClsiEditing",propAccess:"rw"},{propName:"codabarMaxLength",propAccess:"rw"},{propName:"codabarMinLength",propAccess:"rw"},{propName:"codabarNotisEditing",propAccess:"rw"},{propName:"codabarRedundancy",propAccess:"rw"},{propName:"code11",propAccess:"rw"},{propName:"code11checkDigitCount",propAccess:"rw"},{propName:"code11maxLength",propAccess:"rw"},{propName:"code11minLength",propAccess:"rw"},{propName:"code11redundancy",propAccess:"rw"},{propName:"code11reportCheckDigit",propAccess:"rw"},{propName:"code128",propAccess:"rw"},{propName:"code128checkIsBtTable",propAccess:"rw"},{propName:"code128ean128",propAccess:"rw"},{propName:"code128isbt128",propAccess:"rw"},{propName:"code128isbt128ConcatMode",propAccess:"rw"},{propName:"code128maxLength",propAccess:"rw"},{propName:"code128minLength",propAccess:"rw"},{propName:"code128other128",propAccess:"rw"},{propName:"code128redundancy",propAccess:"rw"},{propName:"code128securityLevel",propAccess:"rw"},{propName:"compositeAb",propAccess:"rw"},{propName:"compositeAbUccLinkMode",propAccess:"rw"},{propName:"compositeAbUseUpcPreambleCheckDigitRules",propAccess:"rw"},{propName:"compositeC",propAccess:"rw"},{propName:"code39",propAccess:"rw"},{propName:"code39code32Prefix",propAccess:"rw"},{propName:"code39convertToCode32",propAccess:"rw"},{propName:"code39fullAscii",propAccess:"rw"},{propName:"code39maxLength",propAccess:"rw"},{propName:"code39minLength",propAccess:"rw"},{propName:"code39redundancy",propAccess:"rw"},{propName:"code39reportCheckDigit",propAccess:"rw"},{propName:"code39securityLevel",propAccess:"rw"},{propName:"code39verifyCheckDigit",propAccess:"rw"},{propName:"code93",propAccess:"rw"},{propName:"code93maxLength",propAccess:"rw"},{propName:"code93minLength",propAccess:"rw"},{propName:"code93redundancy",propAccess:"rw"},{propName:"d2of5",propAccess:"rw"},{propName:"d2of5maxLength",propAccess:"rw"},{propName:"d2of5minLength",propAccess:"rw"},{propName:"d2of5redundancy",propAccess:"rw"},{propName:"datamatrix",propAccess:"rw"},{propName:"dotCode",propAccess:"rw"},{propName:"dotCodeInverse",propAccess:"rw"},{propName:"dotCodeMirror",propAccess:"rw"},{propName:"gridMatrix",propAccess:"rw"},{propName:"gridMatrixInverse",propAccess:"rw"},{propName:"gridMatrixMirror",propAccess:"rw"},{propName:"ean13",propAccess:"rw"},{propName:"ean8",propAccess:"rw"},{propName:"ean8convertToEan13",propAccess:"rw"},{propName:"hanXin",propAccess:"rw"},{propName:"hanXinInverse",propAccess:"rw"},{propName:"i2of5",propAccess:"rw"},{propName:"i2of5convertToEan13",propAccess:"rw"},{propName:"i2of5reducedQuietZone",propAccess:"rw"},{propName:"i2of5febraban",propAccess:"rw"},{propName:"i2of5maxLength",propAccess:"rw"},{propName:"i2of5minLength",propAccess:"rw"},{propName:"i2of5redundancy",propAccess:"rw"},{propName:"i2of5reportCheckDigit",propAccess:"rw"},{propName:"i2of5verifyCheckDigit",propAccess:"rw"},{propName:"korean3of5",propAccess:"rw"},{propName:"korean3of5redundancy",propAccess:"rw"},{propName:"korean3of5maxLength",propAccess:"rw"},{propName:"korean3of5minLength",propAccess:"rw"},{propName:"macroPdf",propAccess:"rw"},{propName:"macroPdfBufferLabels",propAccess:"rw"},{propName:"macroPdfConvertToPdf417",propAccess:"rw"},{propName:"macroPdfExclusive",propAccess:"rw"},{propName:"macroMicroPdf",propAccess:"rw"},{propName:"macroMicroPdfBufferLabels",propAccess:"rw"},{propName:"macroMicroPdfConvertToMicroPdf",propAccess:"rw"},{propName:"macroMicroPdfExclusive",propAccess:"rw"},{propName:"macroMicroPdfReportAppendInfo",propAccess:"rw"},{propName:"mailMark",propAccess:"rw"},{propName:"matrix2of5",propAccess:"rw"},{propName:"matrix2of5maxLength",propAccess:"rw"},{propName:"matrix2of5minLength",propAccess:"rw"},{propName:"matrix2of5reportCheckDigit",propAccess:"rw"},{propName:"matrix2of5verifyCheckDigit",propAccess:"rw"},{propName:"maxiCode",propAccess:"rw"},{propName:"microPdf",propAccess:"rw"},{propName:"microQr",propAccess:"rw"},{propName:"msi",propAccess:"rw"},{propName:"msiCheckDigits",propAccess:"rw"},{propName:"msiCheckDigitScheme",propAccess:"rw"},{propName:"msiMaxLength",propAccess:"rw"},{propName:"msiMinLength",propAccess:"rw"},{propName:"msiRedundancy",propAccess:"rw"},{propName:"msiReportCheckDigit",propAccess:"rw"},{propName:"pdf417",propAccess:"rw"},{propName:"signature",propAccess:"rw"},{propName:"signatureImageHeight",propAccess:"rw"},{propName:"signatureImageWidth",propAccess:"rw"},{propName:"signatureImageQuality",propAccess:"rw"},{propName:"ausPostal",propAccess:"rw"},{propName:"canPostal",propAccess:"rw"},{propName:"dutchPostal",propAccess:"rw"},{propName:"japPostal",propAccess:"rw"},{propName:"ukPostal",propAccess:"rw"},{propName:"ukPostalReportCheckDigit",propAccess:"rw"},{propName:"us4state",propAccess:"rw"},{propName:"us4stateFics",propAccess:"rw"},{propName:"usPlanet",propAccess:"rw"},{propName:"usPlanetReportCheckDigit",propAccess:"rw"},{propName:"usPostNet",propAccess:"rw"},{propName:"usPostNetReportCheckDigit",propAccess:"rw"},{propName:"qrCode",propAccess:"rw"},{propName:"gs1dataBar",propAccess:"rw"},{propName:"gs1dataBarExpanded",propAccess:"rw"},{propName:"gs1dataBarLimited",propAccess:"rw"},{propName:"gs1LimitedSecurityLevel",propAccess:"rw"},{propName:"gs1QrCode",propAccess:"rw"},{propName:"gs1Datamatrix",propAccess:"rw"},{propName:"tlc39",propAccess:"rw"},{propName:"trioptic39",propAccess:"rw"},{propName:"trioptic39Redundancy",propAccess:"rw"},{propName:"upcEanBookland",propAccess:"rw"},{propName:"upcEanBooklandFormat",propAccess:"rw"},{propName:"upcEanConvertGs1dataBarToUpcEan",propAccess:"rw"},{propName:"upcEanCoupon",propAccess:"rw"},{propName:"upcEanCouponReport",propAccess:"rw"},{propName:"upcEanLinearDecode",propAccess:"rw"},{propName:"upcEanRandomWeightCheckDigit",propAccess:"rw"},{propName:"upcEanRetryCount",propAccess:"rw"},{propName:"upcEanSecurityLevel",propAccess:"rw"},{propName:"upcEanSupplemental2",propAccess:"rw"},{propName:"upcEanSupplemental5",propAccess:"rw"},{propName:"upcEanSupplementalMode",propAccess:"rw"},{propName:"upca",propAccess:"rw"},{propName:"upcaPreamble",propAccess:"rw"},{propName:"upcaReportCheckDigit",propAccess:"rw"},{propName:"upce0",propAccess:"rw"},{propName:"upce0convertToUpca",propAccess:"rw"},{propName:"upce0preamble",propAccess:"rw"},{propName:"upce0reportCheckDigit",propAccess:"rw"},{propName:"upce1",propAccess:"rw"},{propName:"upce1convertToUpca",propAccess:"rw"},{propName:"upce1preamble",propAccess:"rw"},{propName:"upce1reportCheckDigit",propAccess:"rw"},{propName:"webcode",propAccess:"rw"},{propName:"webcodeDecodeGtSubtype",propAccess:"rw"},{propName:"rsmModelNumber",propAccess:"r"},{propName:"rsmSerialNumber",propAccess:"r"},{propName:"rsmDateOfManufacture",propAccess:"r"},{propName:"rsmDateOfService",propAccess:"r"},{propName:"rsmBluetoothAddress",propAccess:"r"},{propName:"rsmFirmwareVersion",propAccess:"r"},{propName:"rsmDeviceClass",propAccess:"r"},{propName:"rsmBatteryStatus",propAccess:"r"},{propName:"rsmBatteryCapacity",propAccess:"r"},{propName:"rsmBatteryId",propAccess:"r"},{propName:"rsmBluetoothAuthentication",propAccess:"rw"},{propName:"rsmBluetoothEncryption",propAccess:"rw"},{propName:"rsmBluetoothPinCode",propAccess:"rw"},{propName:"rsmBluetoothPinCodeType",propAccess:"rw"},{propName:"rsmBluetoothReconnectionAttempts",propAccess:"rw"},{propName:"rsmBluetoothBeepOnReconnectAttempt",propAccess:"rw"},{propName:"rsmBluetoothHidAutoReconnect",propAccess:"rw"},{propName:"rsmBluetoothFriendlyName",propAccess:"rw"},{propName:"rsmBluetoothInquiryMode",propAccess:"rw"},{propName:"rsmBluetoothAutoReconnect",propAccess:"rw"},{propName:"rsmForceSavePairingBarcode",propAccess:"rw"},{propName:"rsmLowBatteryIndication",propAccess:"rw"},{propName:"rsmLowBatteryIndicationCycle",propAccess:"rw"},{propName:"rsmScanLineWidth",propAccess:"rw"},{propName:"rsmGoodScansDelay",propAccess:"rw"},{propName:"rsmDecodeFeedback",propAccess:"rw"},{propName:"rsmIgnoreCode128Usps",propAccess:"rw"},{propName:"rsmScanTriggerWakeup",propAccess:"rw"},{propName:"rsmMems",propAccess:"rw"},{propName:"rsmProximityEnable",propAccess:"rw"},{propName:"rsmProximityContinuous",propAccess:"rw"},{propName:"rsmProximityDistance",propAccess:"rw"},{propName:"rsmPagingEnable",propAccess:"rw"},{propName:"rsmPagingBeepSequence",propAccess:"rw"},{propName:"pairAfterScannerReboot",propAccess:"rw"},{propName:"disconnectOnExit",propAccess:"rw"},{propName:"connectionIdleTime",propAccess:"rw"},{propName:"decodeLEDFeedback",propAccess:"rw"},{propName:"decodeLEDTime",propAccess:"rw"},{propName:"decodeLEDFeedbackMode",propAccess:"rw"},{propName:"decodeScreenNotification",propAccess:"rw"},{propName:"decodeScreenNotificationTime ",propAccess:"rw"},{propName:"decodeScreenTranslucencyLevel",propAccess:"rw"},{propName:"oneDQuietZoneLevel",propAccess:"rw"},{propName:"poorQualityDecodeEffortLevel",propAccess:"rw"},{propName:"zoom",propAccess:"rw"},{propName:"triggerType",propAccess:"rw"}],b,function(){return this.getId()});e.createMethodsProxy(a.prototype,[{methodName:"enable",nativeName:"enable",persistentCallbackIndex:1,valueCallbackIndex:3},{methodName:"setautoCharacterSetPreference",nativeName:"setautoCharacterSetPreference",valueCallbackIndex:1},{methodName:"getautoCharacterSetPreference",nativeName:"getautoCharacterSetPreference",valueCallbackIndex:0},{methodName:"registerBluetoothStatus",nativeName:"registerBluetoothStatus",persistentCallbackIndex:0,valueCallbackIndex:2},{methodName:"addConnectionListener",nativeName:"addConnectionListener",persistentCallbackIndex:0,valueCallbackIndex:2},{methodName:"removeConnectionListener",nativeName:"removeConnectionListener",valueCallbackIndex:0},{methodName:"start",nativeName:"start",valueCallbackIndex:0},{methodName:"stop",nativeName:"stop",valueCallbackIndex:0},{methodName:"disable",nativeName:"disable",valueCallbackIndex:0},{methodName:"resetToDefault",nativeName:"resetToDefault",valueCallbackIndex:0},{methodName:"isParamSupported",nativeName:"isParamSupported",valueCallbackIndex:1},{methodName:"getSupportedProperties",nativeName:"getSupportedProperties",persistentCallbackIndex:0,valueCallbackIndex:2},{methodName:"take",nativeName:"take",persistentCallbackIndex:1,valueCallbackIndex:3},{methodName:"commandRemoteScanner",nativeName:"commandRemoteScanner",valueCallbackIndex:1},{methodName:"getProperty",nativeName:"getProperty",persistentCallbackIndex:1,valueCallbackIndex:3},{methodName:"getProperties",nativeName:"getProperties",persistentCallbackIndex:1,valueCallbackIndex:3},{methodName:"getAllProperties",nativeName:"getAllProperties",persistentCallbackIndex:0,valueCallbackIndex:2},{methodName:"setProperty",nativeName:"setProperty",valueCallbackIndex:2},{methodName:"setProperties",nativeName:"setProperties",valueCallbackIndex:1}],b,function(){return this.getId()});e.createRawPropsProxy(a.prototype,[]);a.AIMINGPATTERN_OFF="OFF";a.AIMINGPATTERN_ON="ON";a.AIMMODE_DOT="dot";a.AIMMODE_NONE="none";a.AIMMODE_RETICLE="reticle";a.AIMMODE_SLAB="slab";a.AIMTYPE_CONTINUOUS_READ="continuousRead";a.AIMTYPE_PRESENTATION="presentation";a.AIMTYPE_PRESS_AND_RELEASE="pressAndRelease";a.AIMTYPE_PRESS_AND_SUSTAIN="pressAndSustain";a.AIMTYPE_TIMED_HOLD="timedHold";a.AIMTYPE_TIMED_RELEASE="timedRelease";a.AIMTYPE_TRIGGER="trigger";a.ALL_THRICE="allThrice";a.ALL_TWICE="allTwice";a.AUTO="AUTO";a.BEAM_NARROW="narrow";a.BEAM_NORMAL="normal";a.BEAM_WIDE="wide";a.BOOKLAND_ISBN10="isbn10";a.BOOKLAND_ISBN13="isbn13";a.CODE11_CHECKDIGIT_NONE="none";a.CODE11_CHECKDIGIT_ONE="one";a.CODE11_CHECKDIGIT_TWO="two";a.CODE128ISBT_ALWAYS="always";a.CODE128ISBT_AUTO="auto";a.CODE128ISBT_NEVER="never";a.CODEIDTYPE_AIM="AIM";a.CODEIDTYPE_NONE="NONE";a.CODEIDTYPE_SYMBOL="SYMBOL";a.COUPONREPORT_BOTH="BOTH";a.COUPONREPORT_NEW="NEW";a.COUPONREPORT_OLD="OLD";a.DBP_COMPOSITE="composite";a.DBP_NORMAL="normal";a.DOTCODEINVERSE_AUTO="AUTO";a.DOTCODEINVERSE_DISABLED="DISABLED";a.DOTCODEINVERSE_ENABLED="ENABLED";a.DOTCODEMIRROR_AUTO="AUTO";a.DOTCODEMIRROR_DISABLED="DISABLED";a.DOTCODEMIRROR_ENABLED="ENABLED";a.FOCUS_AUTO="auto";a.FOCUS_FIXED="fixed";a.FORMAT_BINARY="binary";a.FORMAT_TEXT="text";a.GB18030="GB18030";a.GRIDMATRIXINVERSE_AUTO="AUTO";a.GRIDMATRIXINVERSE_DISABLED="DISABLED";a.GRIDMATRIXINVERSE_ENABLED="ENABLED";a.GRIDMATRIXMIRROR_AUTO="AUTO";a.GRIDMATRIXMIRROR_DISABLED="DISABLED";a.GRIDMATRIXMIRROR_ENABLED="ENABLED";a.HANXININVERSE_AUTO="AUTO";a.HANXININVERSE_DISABLED="DISABLED";a.HANXININVERSE_ENABLED="ENABLED";a.HARD="hard";a.I2OF5_VERIFY_NONE="none";a.I2OF5_VERIFY_OPCC="opcc";a.I2OF5_VERIFY_USS="uss";a.ILLUMINATION_ALWAYS_OFF="alwaysOff";a.ILLUMINATION_ALWAYS_ON="alwaysOn";a.ILLUMINATION_AUTO="auto";a.INVERSE_AUTO="auto";a.INVERSE_DISABLED="disabled";a.INVERSE_ENABLED="enabled";a.ISO_8859_1="ISO88591";a.LEDMODE_BOTH="both";a.LEDMODE_DISABLE="disable";a.LEDMODE_LOCAL="local";a.LEDMODE_REMOTE="remote";a.LEVEL_1="LEVEL_1";a.LEVEL_2="LEVEL_2";a.LEVEL_3="LEVEL_3";a.LEVEL_4="LEVEL_4";a.LONG_AND_SHORT="longAndShort";a.MSI_CHECKDIGITS_MOD10="mod10";a.MSI_CHECKDIGITS_MOD11="mod11";a.MSI_CHECKDIGITS_ONE="one";a.MSI_CHECKDIGITS_TWO="two";a.NONE="AUTO";a.PASR_DISABLE="DISABLE";a.PASR_ENABLE="ENABLE";a.PICKLISTEX_DISABLED="disabled";a.PICKLISTEX_HARDWARE_RETICLE="hardwareReticle";a.PICKLISTEX_SOFTWARE_RETICLE="softwareReticle";a.PICKLIST_DISABLED="disabled";a.PICKLIST_HARDWARE_RETICLE="hardwareReticle";a.PICKLIST_SOFTWARE_RETICLE="softwareReticle";a.PQD_LEVEL_0="level_0";a.PQD_LEVEL_1="level_1";a.PQD_LEVEL_2="level_2";a.PQD_LEVEL_3="level_3";a.QZ_LEVEL_0="level_0";a.QZ_LEVEL_1="level_1";a.QZ_LEVEL_2="level_2";a.QZ_LEVEL_3="level_3";a.RASTER_CYCLONE="cyclone";a.RASTER_NONE="none";a.RASTER_OPEN_ALWAYS="openAlways";a.RASTER_SMART="smart";a.REDUNDANCY_AND_LENGTH="redundancyAndLength";a.RSM_AUTORECONNECT_NONE="none";a.RSM_AUTORECONNECT_ON_OUT_OF_RANGE="onOutOfRange";a.RSM_AUTORECONNECT_ON_POWER="onPower";a.RSM_AUTORECONNECT_ON_POWER_OUT_OF_RANGE="onPowerOutOfRange";a.SCANMODE_MULTI_BARCODE="multi_barcode";a.SCANMODE_SINGLE_BARCODE="single_barcode";a.SCANMODE_UDI="udi";a.SCENEDETECTIONQUALIFIER_NONE="NONE";a.SCENEDETECTIONQUALIFIER_PROXIMITY_SENSOR_INPUT="PROXIMITY_SENSOR_INPUT";a.SHORT_OR_CODABAR="shortOrCodabar";a.SOFT_ALWAYS="softAlways";a.SOFT_ONCE="softOnce";a.Shift_JIS="SHIFTJIS";a.UCC_ALWAYS="always";a.UCC_AUTO="auto";a.UCC_NEVER="never";a.UPCA_PREAMBLE_COUNTRY="countryAndSystemChars";a.UPCA_PREAMBLE_NONE="none";a.UPCA_PREAMBLE_SYSTEMCHAR="systemChar";a.UPCE0_PREAMBLE_COUNTRY="countryAndSystemChars";a.UPCE0_PREAMBLE_NONE="none";a.UPCE0_PREAMBLE_SYSTEMCHAR="systemChar";a.UPCE1_PREAMBLE_COUNTRY="countryAndSystemChars";a.UPCE1_PREAMBLE_NONE="none";a.UPCE1_PREAMBLE_SYSTEMCHAR="systemChar";a.UPCEAN_379="378or379";a.UPCEAN_439="414or419or434or439";a.UPCEAN_979="978or979";a.UPCEAN_ALWAYS="always";a.UPCEAN_AUTO="auto";a.UPCEAN_NONE="none";a.UPCEAN_SMART="smart";a.UTF_8="UTF8";a.VF_FEEDBACK_DISABLED="disabled";a.VF_FEEDBACK_ENABLED="enabled";a.VF_FEEDBACK_RETICLE="reticle";a.VIEWFINDER_DISABLED="disabled";a.VIEWFINDER_DYNAMIC_RETICLE="dynamicReticle";a.VIEWFINDER_ENABLED="enabled";a.VIEWFINDER_STATIC_RETICLE="staticReticle";e.createPropsProxy(a,[],b);e.createMethodsProxy(a,[{methodName:"enumerate",nativeName:"enumerate",persistentCallbackIndex:0,valueCallbackIndex:2}],b);e.createPropsProxy(a,[{propName:"defaultInstance:getDefault:setDefault",propAccess:"rw",customSet:function(g){if(!g||"function"!=typeof g.getId){throw"Default object should provide getId method!"}a.setDefaultID(g.getId())}},{propName:"defaultID:getDefaultID:setDefaultID",propAccess:"rw"}],b);a.getId=function(){return a.getDefaultID()};e.createPropsProxy(a,[{propName:"autoEnter",propAccess:"rw"},{propName:"autoTab",propAccess:"rw"},{propName:"hapticFeedback",propAccess:"rw"},{propName:"linearSecurityLevel",propAccess:"rw"},{propName:"scanTimeout",propAccess:"rw"},{propName:"rasterMode",propAccess:"rw"},{propName:"rasterHeight",propAccess:"rw"},{propName:"aimingPattern",propAccess:"rw"},{propName:"aimType",propAccess:"rw"},{propName:"timedAimDuration",propAccess:"rw"},{propName:"sameSymbolTimeout",propAccess:"rw"},{propName:"differentSymbolTimeout",propAccess:"rw"},{propName:"digimarcDecoding",propAccess:"rw"},{propName:"barcodeCount",propAccess:"rw"},{propName:"instantReporting",propAccess:"rw"},{propName:"aimMode",propAccess:"rw"},{propName:"codeIdType",propAccess:"rw"},{propName:"picklistMode",propAccess:"rw"},{propName:"picklistEx",propAccess:"rw"},{propName:"scanMode",propAccess:"rw"},{propName:"sceneDetectionQualifier",propAccess:"rw"},{propName:"characterSetSelection",propAccess:"rw"},{propName:"autoCharacterSetFailureOption",propAccess:"rw"},{propName:"enableGS1",propAccess:"rw"},{propName:"enableHIBCC",propAccess:"rw"},{propName:"enableICCBBA",propAccess:"rw"},{propName:"viewfinderMode",propAccess:"rw"},{propName:"viewfinderX",propAccess:"rw"},{propName:"viewfinderY",propAccess:"rw"},{propName:"viewfinderWidth",propAccess:"rw"},{propName:"viewfinderHeight",propAccess:"rw"},{propName:"viewfinderFeedback",propAccess:"rw"},{propName:"viewfinderFeedbackTime",propAccess:"rw"},{propName:"focusMode",propAccess:"rw"},{propName:"illuminationBrightness",propAccess:"rw"},{propName:"illuminationMode",propAccess:"rw"},{propName:"dpmMode",propAccess:"rw"},{propName:"inverse1dMode",propAccess:"rw"},{propName:"poorQuality1dMode",propAccess:"rw"},{propName:"beamWidth",propAccess:"rw"},{propName:"dbpMode",propAccess:"rw"},{propName:"klasseEins",propAccess:"rw"},{propName:"adaptiveScanning",propAccess:"rw"},{propName:"bidirectionalRedundancy",propAccess:"rw"},{propName:"barcodeDataFormat",propAccess:"rw"},{propName:"dataBufferSize",propAccess:"rw"},{propName:"connectionIdleTimeout",propAccess:"rw"},{propName:"disconnectBtOnDisable",propAccess:"rw"},{propName:"displayBtAddressBarcodeOnEnable",propAccess:"rw"},{propName:"enableTimeout",propAccess:"rw"},{propName:"friendlyName",propAccess:"r"},{propName:"lcdMode",propAccess:"rw"},{propName:"lowBatteryScan",propAccess:"rw"},{propName:"triggerConnected",propAccess:"rw"},{propName:"disableScannerDuringNavigate",propAccess:"rw"},{propName:"decodeVolume",propAccess:"rw"},{propName:"decodeDuration",propAccess:"rw"},{propName:"decodeFrequency",propAccess:"rw"},{propName:"invalidDecodeFrequency",propAccess:"rw"},{propName:"decodeSound",propAccess:"rw"},{propName:"invalidDecodeSound",propAccess:"rw"},{propName:"scannerType",propAccess:"r"},{propName:"allDecoders",propAccess:"rw"},{propName:"aztec",propAccess:"rw"},{propName:"chinese2of5",propAccess:"rw"},{propName:"codabar",propAccess:"rw"},{propName:"codabarClsiEditing",propAccess:"rw"},{propName:"codabarMaxLength",propAccess:"rw"},{propName:"codabarMinLength",propAccess:"rw"},{propName:"codabarNotisEditing",propAccess:"rw"},{propName:"codabarRedundancy",propAccess:"rw"},{propName:"code11",propAccess:"rw"},{propName:"code11checkDigitCount",propAccess:"rw"},{propName:"code11maxLength",propAccess:"rw"},{propName:"code11minLength",propAccess:"rw"},{propName:"code11redundancy",propAccess:"rw"},{propName:"code11reportCheckDigit",propAccess:"rw"},{propName:"code128",propAccess:"rw"},{propName:"code128checkIsBtTable",propAccess:"rw"},{propName:"code128ean128",propAccess:"rw"},{propName:"code128isbt128",propAccess:"rw"},{propName:"code128isbt128ConcatMode",propAccess:"rw"},{propName:"code128maxLength",propAccess:"rw"},{propName:"code128minLength",propAccess:"rw"},{propName:"code128other128",propAccess:"rw"},{propName:"code128redundancy",propAccess:"rw"},{propName:"code128securityLevel",propAccess:"rw"},{propName:"compositeAb",propAccess:"rw"},{propName:"compositeAbUccLinkMode",propAccess:"rw"},{propName:"compositeAbUseUpcPreambleCheckDigitRules",propAccess:"rw"},{propName:"compositeC",propAccess:"rw"},{propName:"code39",propAccess:"rw"},{propName:"code39code32Prefix",propAccess:"rw"},{propName:"code39convertToCode32",propAccess:"rw"},{propName:"code39fullAscii",propAccess:"rw"},{propName:"code39maxLength",propAccess:"rw"},{propName:"code39minLength",propAccess:"rw"},{propName:"code39redundancy",propAccess:"rw"},{propName:"code39reportCheckDigit",propAccess:"rw"},{propName:"code39securityLevel",propAccess:"rw"},{propName:"code39verifyCheckDigit",propAccess:"rw"},{propName:"code93",propAccess:"rw"},{propName:"code93maxLength",propAccess:"rw"},{propName:"code93minLength",propAccess:"rw"},{propName:"code93redundancy",propAccess:"rw"},{propName:"d2of5",propAccess:"rw"},{propName:"d2of5maxLength",propAccess:"rw"},{propName:"d2of5minLength",propAccess:"rw"},{propName:"d2of5redundancy",propAccess:"rw"},{propName:"datamatrix",propAccess:"rw"},{propName:"dotCode",propAccess:"rw"},{propName:"dotCodeInverse",propAccess:"rw"},{propName:"dotCodeMirror",propAccess:"rw"},{propName:"gridMatrix",propAccess:"rw"},{propName:"gridMatrixInverse",propAccess:"rw"},{propName:"gridMatrixMirror",propAccess:"rw"},{propName:"ean13",propAccess:"rw"},{propName:"ean8",propAccess:"rw"},{propName:"ean8convertToEan13",propAccess:"rw"},{propName:"hanXin",propAccess:"rw"},{propName:"hanXinInverse",propAccess:"rw"},{propName:"i2of5",propAccess:"rw"},{propName:"i2of5convertToEan13",propAccess:"rw"},{propName:"i2of5reducedQuietZone",propAccess:"rw"},{propName:"i2of5febraban",propAccess:"rw"},{propName:"i2of5maxLength",propAccess:"rw"},{propName:"i2of5minLength",propAccess:"rw"},{propName:"i2of5redundancy",propAccess:"rw"},{propName:"i2of5reportCheckDigit",propAccess:"rw"},{propName:"i2of5verifyCheckDigit",propAccess:"rw"},{propName:"korean3of5",propAccess:"rw"},{propName:"korean3of5redundancy",propAccess:"rw"},{propName:"korean3of5maxLength",propAccess:"rw"},{propName:"korean3of5minLength",propAccess:"rw"},{propName:"macroPdf",propAccess:"rw"},{propName:"macroPdfBufferLabels",propAccess:"rw"},{propName:"macroPdfConvertToPdf417",propAccess:"rw"},{propName:"macroPdfExclusive",propAccess:"rw"},{propName:"macroMicroPdf",propAccess:"rw"},{propName:"macroMicroPdfBufferLabels",propAccess:"rw"},{propName:"macroMicroPdfConvertToMicroPdf",propAccess:"rw"},{propName:"macroMicroPdfExclusive",propAccess:"rw"},{propName:"macroMicroPdfReportAppendInfo",propAccess:"rw"},{propName:"mailMark",propAccess:"rw"},{propName:"matrix2of5",propAccess:"rw"},{propName:"matrix2of5maxLength",propAccess:"rw"},{propName:"matrix2of5minLength",propAccess:"rw"},{propName:"matrix2of5reportCheckDigit",propAccess:"rw"},{propName:"matrix2of5verifyCheckDigit",propAccess:"rw"},{propName:"maxiCode",propAccess:"rw"},{propName:"microPdf",propAccess:"rw"},{propName:"microQr",propAccess:"rw"},{propName:"msi",propAccess:"rw"},{propName:"msiCheckDigits",propAccess:"rw"},{propName:"msiCheckDigitScheme",propAccess:"rw"},{propName:"msiMaxLength",propAccess:"rw"},{propName:"msiMinLength",propAccess:"rw"},{propName:"msiRedundancy",propAccess:"rw"},{propName:"msiReportCheckDigit",propAccess:"rw"},{propName:"pdf417",propAccess:"rw"},{propName:"signature",propAccess:"rw"},{propName:"signatureImageHeight",propAccess:"rw"},{propName:"signatureImageWidth",propAccess:"rw"},{propName:"signatureImageQuality",propAccess:"rw"},{propName:"ausPostal",propAccess:"rw"},{propName:"canPostal",propAccess:"rw"},{propName:"dutchPostal",propAccess:"rw"},{propName:"japPostal",propAccess:"rw"},{propName:"ukPostal",propAccess:"rw"},{propName:"ukPostalReportCheckDigit",propAccess:"rw"},{propName:"us4state",propAccess:"rw"},{propName:"us4stateFics",propAccess:"rw"},{propName:"usPlanet",propAccess:"rw"},{propName:"usPlanetReportCheckDigit",propAccess:"rw"},{propName:"usPostNet",propAccess:"rw"},{propName:"usPostNetReportCheckDigit",propAccess:"rw"},{propName:"qrCode",propAccess:"rw"},{propName:"gs1dataBar",propAccess:"rw"},{propName:"gs1dataBarExpanded",propAccess:"rw"},{propName:"gs1dataBarLimited",propAccess:"rw"},{propName:"gs1LimitedSecurityLevel",propAccess:"rw"},{propName:"gs1QrCode",propAccess:"rw"},{propName:"gs1Datamatrix",propAccess:"rw"},{propName:"tlc39",propAccess:"rw"},{propName:"trioptic39",propAccess:"rw"},{propName:"trioptic39Redundancy",propAccess:"rw"},{propName:"upcEanBookland",propAccess:"rw"},{propName:"upcEanBooklandFormat",propAccess:"rw"},{propName:"upcEanConvertGs1dataBarToUpcEan",propAccess:"rw"},{propName:"upcEanCoupon",propAccess:"rw"},{propName:"upcEanCouponReport",propAccess:"rw"},{propName:"upcEanLinearDecode",propAccess:"rw"},{propName:"upcEanRandomWeightCheckDigit",propAccess:"rw"},{propName:"upcEanRetryCount",propAccess:"rw"},{propName:"upcEanSecurityLevel",propAccess:"rw"},{propName:"upcEanSupplemental2",propAccess:"rw"},{propName:"upcEanSupplemental5",propAccess:"rw"},{propName:"upcEanSupplementalMode",propAccess:"rw"},{propName:"upca",propAccess:"rw"},{propName:"upcaPreamble",propAccess:"rw"},{propName:"upcaReportCheckDigit",propAccess:"rw"},{propName:"upce0",propAccess:"rw"},{propName:"upce0convertToUpca",propAccess:"rw"},{propName:"upce0preamble",propAccess:"rw"},{propName:"upce0reportCheckDigit",propAccess:"rw"},{propName:"upce1",propAccess:"rw"},{propName:"upce1convertToUpca",propAccess:"rw"},{propName:"upce1preamble",propAccess:"rw"},{propName:"upce1reportCheckDigit",propAccess:"rw"},{propName:"webcode",propAccess:"rw"},{propName:"webcodeDecodeGtSubtype",propAccess:"rw"},{propName:"rsmModelNumber",propAccess:"r"},{propName:"rsmSerialNumber",propAccess:"r"},{propName:"rsmDateOfManufacture",propAccess:"r"},{propName:"rsmDateOfService",propAccess:"r"},{propName:"rsmBluetoothAddress",propAccess:"r"},{propName:"rsmFirmwareVersion",propAccess:"r"},{propName:"rsmDeviceClass",propAccess:"r"},{propName:"rsmBatteryStatus",propAccess:"r"},{propName:"rsmBatteryCapacity",propAccess:"r"},{propName:"rsmBatteryId",propAccess:"r"},{propName:"rsmBluetoothAuthentication",propAccess:"rw"},{propName:"rsmBluetoothEncryption",propAccess:"rw"},{propName:"rsmBluetoothPinCode",propAccess:"rw"},{propName:"rsmBluetoothPinCodeType",propAccess:"rw"},{propName:"rsmBluetoothReconnectionAttempts",propAccess:"rw"},{propName:"rsmBluetoothBeepOnReconnectAttempt",propAccess:"rw"},{propName:"rsmBluetoothHidAutoReconnect",propAccess:"rw"},{propName:"rsmBluetoothFriendlyName",propAccess:"rw"},{propName:"rsmBluetoothInquiryMode",propAccess:"rw"},{propName:"rsmBluetoothAutoReconnect",propAccess:"rw"},{propName:"rsmForceSavePairingBarcode",propAccess:"rw"},{propName:"rsmLowBatteryIndication",propAccess:"rw"},{propName:"rsmLowBatteryIndicationCycle",propAccess:"rw"},{propName:"rsmScanLineWidth",propAccess:"rw"},{propName:"rsmGoodScansDelay",propAccess:"rw"},{propName:"rsmDecodeFeedback",propAccess:"rw"},{propName:"rsmIgnoreCode128Usps",propAccess:"rw"},{propName:"rsmScanTriggerWakeup",propAccess:"rw"},{propName:"rsmMems",propAccess:"rw"},{propName:"rsmProximityEnable",propAccess:"rw"},{propName:"rsmProximityContinuous",propAccess:"rw"},{propName:"rsmProximityDistance",propAccess:"rw"},{propName:"rsmPagingEnable",propAccess:"rw"},{propName:"rsmPagingBeepSequence",propAccess:"rw"},{propName:"pairAfterScannerReboot",propAccess:"rw"},{propName:"disconnectOnExit",propAccess:"rw"},{propName:"connectionIdleTime",propAccess:"rw"},{propName:"decodeLEDFeedback",propAccess:"rw"},{propName:"decodeLEDTime",propAccess:"rw"},{propName:"decodeLEDFeedbackMode",propAccess:"rw"},{propName:"decodeScreenNotification",propAccess:"rw"},{propName:"decodeScreenNotificationTime ",propAccess:"rw"},{propName:"decodeScreenTranslucencyLevel",propAccess:"rw"},{propName:"oneDQuietZoneLevel",propAccess:"rw"},{propName:"poorQualityDecodeEffortLevel",propAccess:"rw"},{propName:"zoom",propAccess:"rw"},{propName:"triggerType",propAccess:"rw"}],b,function(){return this.getId()});e.createMethodsProxy(a,[{methodName:"enable",nativeName:"enable",persistentCallbackIndex:1,valueCallbackIndex:3},{methodName:"setautoCharacterSetPreference",nativeName:"setautoCharacterSetPreference",valueCallbackIndex:1},{methodName:"getautoCharacterSetPreference",nativeName:"getautoCharacterSetPreference",valueCallbackIndex:0},{methodName:"registerBluetoothStatus",nativeName:"registerBluetoothStatus",persistentCallbackIndex:0,valueCallbackIndex:2},{methodName:"addConnectionListener",nativeName:"addConnectionListener",persistentCallbackIndex:0,valueCallbackIndex:2},{methodName:"removeConnectionListener",nativeName:"removeConnectionListener",valueCallbackIndex:0},{methodName:"start",nativeName:"start",valueCallbackIndex:0},{methodName:"stop",nativeName:"stop",valueCallbackIndex:0},{methodName:"disable",nativeName:"disable",valueCallbackIndex:0},{methodName:"resetToDefault",nativeName:"resetToDefault",valueCallbackIndex:0},{methodName:"isParamSupported",nativeName:"isParamSupported",valueCallbackIndex:1},{methodName:"getSupportedProperties",nativeName:"getSupportedProperties",persistentCallbackIndex:0,valueCallbackIndex:2},{methodName:"take",nativeName:"take",persistentCallbackIndex:1,valueCallbackIndex:3},{methodName:"commandRemoteScanner",nativeName:"commandRemoteScanner",valueCallbackIndex:1},{methodName:"getProperty",nativeName:"getProperty",persistentCallbackIndex:1,valueCallbackIndex:3},{methodName:"getProperties",nativeName:"getProperties",persistentCallbackIndex:1,valueCallbackIndex:3},{methodName:"getAllProperties",nativeName:"getAllProperties",persistentCallbackIndex:0,valueCallbackIndex:2},{methodName:"setProperty",nativeName:"setProperty",valueCallbackIndex:2},{methodName:"setProperties",nativeName:"setProperties",valueCallbackIndex:1}],b,function(){return this.getId()});e.createRawPropsProxy(a,[]);e.namespace(c,a)})(Rho.jQuery,Rho,Rho.util);