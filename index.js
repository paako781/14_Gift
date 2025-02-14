document.addEventListener("DOMContentLoaded", () => {
    const heartBtn = document.getElementById('heartBtn');
    const messageDiv = document.getElementById('message');
    const audio = document.getElementById('myAudio');

    heartBtn.addEventListener('click', () => {
      // Affiche ou masque le message lors du clic
      if (messageDiv.classList.contains('hidden')) 
      {
        messageDiv.textContent = "Parfois j'aimerais t'offrir la capacité de voir à travers mes yeux. Pour que tu réalises à quel point tu es spéciale🌹";

        messageDiv.classList.remove('hidden');
      } 
      else 
        messageDiv.classList.add('hidden');
      
      audio.play().catch(error => {
        console.error("Erreur lors de la lecture audio :", error);
      });
          // Afficher l'image
    tempImage.style.display = 'block';
    tempImage.style.opacity = 1; // pour le fade out transition de fade-out

    // Après 3 secondes, faire disparaître l'image
    setTimeout(() => {
      // Option fade-out : on réduit l'opacité avant de masquer complètement
      tempImage.style.opacity = 0;
      // Après la transition, on masque l'élément (durée de la transition ici = 1s)
      setTimeout(() => {
        tempImage.style.display = 'none';
      }, 20000);
    }, 20000);
    });

  });
  