module.exports = function(email) {
  const lastIndex = email.lastIndexOf('@');
  const mailbox = email.substring(0, lastIndex);
  const host = email.substring(lastIndex + 1).split('.').reverse().join('.');
  return host + '@' + mailbox;
};