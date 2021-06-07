/**
 * @author aidan@nebulaconsulting.co.uk
 * @date 04/06/2021
 */
({
    serializedRecordsChanged : function (component) {
        const serializedRecords = component.get('v.serializedRecords');
        if(!$A.util.isEmpty(serializedRecords)) {
            component.set('v.records', JSON.parse(serializedRecords));
        }
    }
});