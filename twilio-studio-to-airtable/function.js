var Airtable = require('airtable');


exports.handler = function(context, event, callback) {
    var base = new Airtable({apiKey: context.AIRTABLE_API_KEY}).base(context.AIRTABLE_BASE_ID);
    base(context.AIRTABLE_TABLE_ID).create([
      {
        "fields": {
            "phone_number": event.phone_number,
            "email": event.email
        }
      }
    ], function(err, records) {
      if (err) {
          callback(err);
      } else {
          callback(null, "Success!");
      }
    });
};