goUser = () => {
  userProfile.style.display = 'block';
  buttons.style.display = 'none';
  FAQ.style.display = 'none';
  balance.style.display = 'none';
  balanceCalculator.style.display = 'none';
}

goBalance = () => {
  userProfile.style.display = 'none';
  buttons.style.display = 'none';
  FAQ.style.display = 'none';
  balance.style.display = 'block';
  balanceCalculator.style.display = 'none';
}

goBalanceCalculator = () => {
  userProfile.style.display = 'none';
  buttons.style.display = 'none';
  FAQ.style.display = 'none';
  balance.style.display = 'none';
  balanceCalculator.style.display = 'block';
}

goFAQ = () => {
  userProfile.style.display = 'none';
  buttons.style.display = 'none';
  FAQ.style.display = 'block';
  balance.style.display = 'none';
  balanceCalculator.style.display = 'none';
}

goButtons = () => {
  userProfile.style.display = 'none';
  buttons.style.display = 'block';
  FAQ.style.display = 'none';
  balance.style.display = 'none';
  balanceCalculator.style.display = 'none';
}