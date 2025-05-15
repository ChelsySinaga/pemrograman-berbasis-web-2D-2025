document.getElementById("projectForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const project = document.getElementById("project").value.trim();
    const budget = document.getElementById("budget").value.trim();

    if (!name || !email || !project || !budget) {
      alert("Semua kolom harus diisi!");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Email tidak valid!");
      return;
    }

  });

  document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('projectForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    form.reset();

   
    alert("Pesan berhasil dikirim!");
  });
});

  
  const descText = document.getElementById("descriptionText");
  if (document.body.classList.contains("dark-mode")) {
    descText.classList.remove("text-muted");
    descText.classList.add("text-light");
  } else {
    descText.classList.remove("text-light");
    descText.classList.add("text-muted");
  }

 function toggleMode() {
  const body = document.body;
  const isDark = body.classList.contains("bg-dark");

  body.classList.toggle("bg-light", isDark);
  body.classList.toggle("text-dark", isDark);
  body.classList.toggle("bg-dark", !isDark);
  body.classList.toggle("text-light", !isDark);

  document.querySelectorAll('.text-muted').forEach(el => {
    el.classList.toggle('text-muted', isDark);
    el.classList.toggle('text-light', !isDark);
  });

  document.querySelectorAll('.bg-white').forEach(el => {
    el.classList.toggle('bg-white', isDark);
    el.classList.toggle('bg-secondary', !isDark);
  });
}