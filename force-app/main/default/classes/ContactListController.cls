/**
 * @author aidan@nebulaconsulting.co.uk
 * @date 03/06/2021
 * @description (if required)
 */

public with sharing class ContactListController {

    @AuraEnabled
    public static List<Contact> getContacts(Id accountId) {
        return [SELECT FirstName, LastName FROM Contact WHERE AccountId = '001J000002cWo2gIAC'];
    }
}