sap.ui.controller("zemptable.EMPTABLE", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zemptable.EMPTABLE
*/
	onInit: function() {
		
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("model/empTable.json");
		
		this.getView().setModel(oModel);
		
		var oTable = this.getView().byId("idTable");
		
		var oTemplate = new sap.m.ColumnListItem({
			cells : [
				new sap.m.Text({text : "{name}"}),
				new sap.m.Text({text : "{dept}"}),
				new sap.m.Text({text : "{role}"})
			]
		})
		oTable.bindAggregation("items", "/", oTemplate);
		
	var oModel2 = new sap.ui.model.xml.XMLModel();
	oModel2.loadData("model/empTable.xml");
	
	this.getView().setModel(oModel2,"m2");
	
	sap.ui.localResources("i18n");
	var orModel = new sap.ui.model.resource.ResourceModel({
		bundleName : "i18n.mySource"
	});
	
	this.getView().setModel(orModel, "i18n");
	
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zemptable.EMPTABLE
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zemptable.EMPTABLE
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zemptable.EMPTABLE
*/
//	onExit: function() {
//
//	}

});