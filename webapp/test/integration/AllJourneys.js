jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"mcl/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"mcl/test/integration/pages/Worklist",
		"mcl/test/integration/pages/Object",
		"mcl/test/integration/pages/NotFound",
		"mcl/test/integration/pages/Browser",
		"mcl/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "mcl.view."
	});

	sap.ui.require([
		"mcl/test/integration/WorklistJourney",
		"mcl/test/integration/ObjectJourney",
		"mcl/test/integration/NavigationJourney",
		"mcl/test/integration/NotFoundJourney",
		"mcl/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});