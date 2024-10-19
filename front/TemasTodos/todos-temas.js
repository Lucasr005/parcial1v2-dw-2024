document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:3000/temas', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        const temas = await response.json();
        const temasList = document.getElementById('temasList');

        temas.forEach(tema => {
            const li = document.createElement('li');
            li.textContent = tema.temasList;
            temasList.appendChild(li);
        });
    } else {
        document.getElementById('temasList').element.textContent = 'Error al cargar los temas';
    }
});

