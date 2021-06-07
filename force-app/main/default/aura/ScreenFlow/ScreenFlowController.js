/**
 * @author aidan@nebulaconsulting.co.uk
 * @date 07/06/2021
 */
({

    doInit : function(component) {
        component.find("theFlow").startFlow(component.get('v.flowDeveloperName'), [{
            name: 'Record',
            type: 'SObject',
            value: component.get('v.record')
        }]);
    }
});