function multiTable(number) {
  let tab = '';
  for (let i = 1; i < 11; i++) {
    tab += (str(i) + ' * ' + str(number) + ' = ' + str(i*number) + '\n')
  }
  return tab;
}
