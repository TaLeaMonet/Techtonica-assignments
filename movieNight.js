function movieNight(names){
    let attending = [];

  if (names.includes('David')){
    attending.push('David');
  }

  if (names.includes('Alex') && attending.includes('David')) {
    attending.push('Alex');
  }

  if (names.includes('Ming') && names.includes('Priya') && attending.includes('David') === false) {
    attending.push('Ming');
  }

  if (names.includes('Priya') && attending.includes('Ming')){
    attending.push('Priya');
  }

  if (names.includes('Breanna') && attending.length >= 2){
    attending.push('Breanna');
  }

return attending;
}

movieNight(['David', 'Alex', 'Breanna', 'Ming', 'Priya']);