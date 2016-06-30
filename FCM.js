import { HTTP } from 'meteor/http';

if (Meteor.isServer) {

  Meteor.methods({
    "FCM.push": function (opt) {

      let fcmHost = 'https://fcm.googleapis.com/fcm/send';

      params = {
        headers:
        {
          "Content-Type":"application/json",
          "Authorization":"key=MyAuthorizationKeyFromFCMCloudMessagingSettings123456789"
        },
        data:
        {
          "registration_ids":opt.regIDs,
          "data":
          {
            "text":opt.text
          }
        }

      };

      HTTP.call( 'POST', fcmHost, params, function( error, response ) {
          if ( error ) {
            console.log( error );
          } else {
            console.log(response.content);
            console.log( 'Push success send!' );
          }
      });
    }
  });
}
