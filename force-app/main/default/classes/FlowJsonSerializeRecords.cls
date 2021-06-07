/**
 * @author aidan@nebulaconsulting.co.uk
 * @date 04/06/2021
 * @description (if required)
 */

public with sharing class FlowJsonSerializeRecords {

    @InvocableMethod(Label='JSON Serialize Records')
    public static List<String> jsonSerializeRecords(List<List<SObject>> records) {
        List<String> results = new List<String>();
        for(List<SObject> theseRecords : records) {
            results.add(JSON.serialize(theseRecords));
        }
        return results;
    }
}