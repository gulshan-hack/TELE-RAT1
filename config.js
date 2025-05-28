const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8124110252:AAELaCAv2rcKGBb1bMPCtHhnQq1NgJ1735A',
  id: isNaN(parsedId) ? 6079971194 : parsedId // replace 12345.. with your telegram chat id
};
