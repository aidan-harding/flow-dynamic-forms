# Screen Flows to update records with children

Until Dynamic Forms are available for standard objects, it is difficult to make a configuration-only custom page to 
create/update a record with its children. We want control over:

 - Which fields are displayed
 - What their labels are
 - Which child records are displayed

The solution here does all that by putting the configuration inside simple Screen Flows.

Each child Screen Flow should have an input variable called Record.