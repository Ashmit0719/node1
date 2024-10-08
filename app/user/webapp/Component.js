/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "app/user/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("app.user.Component", {
            metadata: {
                manifest: "json"
            },
    
            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
    
                // enable routing
                this.getRouter().initialize();
    
                // set the device model
                this.setModel(models.createDeviceModel(), "device");
    
                // load custom CSS
                jQuery.sap.includeStyleSheet(sap.ui.require.toUrl("app/user/webapp/css/style.css"));
            }
        });
    }
    );
    