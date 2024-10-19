
document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
  
    const response = await fetch('http://localhost:3000/temas', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  
    const temas = await response.json();
  
    const temasList = document.getElementById('temasList');
    temas.forEach(tema => {
      const li = document.createElement('li');
      li.textContent = tema.titulo;
      temasList.appendChild(li);
    });
  });