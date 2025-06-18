const tablinks = document.querySelectorAll('.tab-links');
const tabcontent = document.querySelectorAll('.tab-content');
const msg = document.getElementById('msg');

tablinks.forEach(link => {
    link.addEventListener('click', () => {
        const tab = link.getAttribute('data-tabs'); // match your HTML attribute

        // Remove 'active' from all links and content
        tablinks.forEach(l => l.classList.remove('active'));
        tabcontent.forEach(c => c.classList.remove('active'));

        // Add 'active' to the clicked tab and show the content
        link.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp:0.1
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        scroll.scrollTo(target,{ offset: -50});
      }
    });
  });
});
 const scriptURL = 'https://script.google.com/macros/s/AKfycbwLsnWLZx91npJtzYV_K6QvvQpAmIc5zZWSX5S0ofjexajmmUDPKTj7YK32SX5UywDGsA/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent sucessfully! ✅";
        msg.style.display = "block";
         form.reset();
        setTimeout(function(){
          msg.style.display = "none";
          msg.innerHTML = "";
        }, 3000);
       
      })
      .catch(error => console.error('Error!', error.message))
  })
  