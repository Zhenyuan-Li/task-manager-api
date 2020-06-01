const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: '112127554@qq.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    // html: ''
  })
}

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: '112127554@qq.com',
    subject: 'Sorry for your leaving.',
    text: `Good bye, ${name}, Would you tell me why you leave here?`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
}