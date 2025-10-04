function ToHome(){
  const toggleElement = document.getElementById('Home');
  if (toggleElement.style.display === 'none' || toggleElement.style.display === '') {
        toggleElement.style.display = 'block';
  } else {
        toggleElement.style.display = 'none';
  }
