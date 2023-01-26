import { mailOptions, transporter } from "../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  discordUser: "Discord",
  facebookUser: "Facebook",
  mailUser: "Mail",
  message: "Message",
  service: "Service",
  project: "Project",
  price: "Price",
  currency: "Currency",
  userRef: "User Reference By"
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Order</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
};

async function sendDiscordMessage(data) {
  const response = await fetch("https://discord.com/api/webhooks/1063431403980722217/"+process.env.DISCORD_WEBHOOK_KEY, {
    method: "POST",
    body: JSON.stringify({
      embeds: [
        {
          type: "rich",
          title: data.subject,
          footer: {
            text: Date(),
          },
          fields: [
            {
              name: "Project",
              value: data.html.project,
              inline: false,
            },
            {
              name: "Service",
              value: data.html.service,
              inline: false,
            },
            {
              name: "Price",
              value: data.html.price + " " + data.html.currency,
              inline: false,
            },
            data.html.discordUser?{
              name: "Client Discord",
              value: data.html.discordUser,
              inline: false,
            }:{
              name: "Client Discord",
              value: "null",
              inline: false,
            },
            data.html.mailUser?{
              name: "Client Mail",
              value: data.html.mailUser,
              inline: false,
            }:{
              name: "Client Mail",
              value: "null",
              inline: false,
            },
            data.html.facebookUser?{
              name: "Client Facebook",
              value: data.html.facebookUser,
              inline: false,
            }:{
              name: "Client Facebook",
              value: "null",
              inline: false,
            },
            data.html.message?{
              name: "Client Message",
              value: data.html.message,
              inline: false,
            }:{
              name: "Client Message",
              value: "null",
              inline: false,
            },
            data.html.userRef?{
              name: "Client referenced by",
              value: data.html.userRef,
              inline: false,
            }:{
              name: "Client referenced by",
              value: "null",
              inline: false,
            }
          ],
        },
      ],
  
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

}

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data) {
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      await sendDiscordMessage(data)
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        ...generateEmailContent(data.html),
        
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};
export default handler;
