/**
 * @author aidan@nebulaconsulting.co.uk
 * @date 03/06/2021
 */
({

    doInit : function(component) {
        if($A.util.isEmpty(component.get('v.contacts'))) {
            const getContactsAction = component.get('c.getContacts');

            getContactsAction.setCallback(this, function (response) {
                const state = response.getState();
                if (state === "SUCCESS") {
                    const contacts = response.getReturnValue();
                    component.set('v.contacts', contacts);
                    let flows = component.find("theFlow");
                    if(!$A.util.isEmpty(flows)) {
                        if(!$A.util.isArray(flows)) {
                            flows = [flows];
                        }
                    }
                    flows.forEach(function(thisFlow, i) {
                        thisFlow.startFlow("Contact_Form", [{name: 'Contact', type: 'SObject', value: contacts[i]}]);
                    });
                }
            });

            $A.enqueueAction(getContactsAction);
        }
    }
});