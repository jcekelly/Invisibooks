// const mailjet = require ('node-mailjet')
// .connect('1d77e1646541638fd3218ce7d083c619', '76dc3c018f0c0be6fad5e526ad3acf67')
// const request = mailjet
// .post("send", {'version': 'v3.1'})
// .request({
//   "Messages":[
//     {
//       "From": {
//         "Email": "jacobcekelly@gmail.com",
//         "Name": "Jacob"
//       },
//       "To": [
//         {
//           "Email": "jacobcekelly@gmail.com",
//           "Name": "Jacob"
//         }
//       ],
//       "Subject": "Greetings from Mailjet.",
//       "TextPart": "My first Mailjet email",
//       "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
//       "CustomID": "AppGettingStartedTest"
//     }
//   ]
// })
// request
//   .then((result) => {
//     console.log(result.body)
//   })
//   .catch((err) => {
//     console.log(err.statusCode)
//   })
