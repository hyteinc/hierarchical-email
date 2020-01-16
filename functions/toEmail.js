module.exports = function(email) {
  const index = email.indexOf('@');
  if(index === -1) { return email; }
  const mailbox = email.substring(index + 1);
  const host = email.substring(0, index).split('.').reverse().join('.');
  return mailbox + '@' + host;
};