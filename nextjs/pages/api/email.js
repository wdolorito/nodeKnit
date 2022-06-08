export default function handler(req, res) {
// generate app specific password at https://myaccount.google.com/apppasswords
// create .env.local with the following:
//  ENV_LOCAL_USER="aUser@gmail.com"
//  ENV_LOCAL_PASS="abcdefghijklmnop"

  const user = process.env.ENV_LOCAL_USER
  const pass = process.env.ENV_LOCAL_PASS
  const send = require('gmail-send')({
    user: user,
    pass: pass,
    to:   user,
  })
  
  if (req.method === 'POST') {
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message

    send({
      replyTo: email,
      subject: subject,
      text:    name + ' has sent a message:\n\n' + message
    }, function (error, result, full) {
      if(error) res.redirect('/emailed/false')
      console.log('sending email from ' + name + ' with address: ' + email)
      res.redirect('/emailed/true')
    })
  }
}
