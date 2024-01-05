document.addEventListener('DOMContentLoaded', function() {
    const login = document.querySelector('.login-form');
    login.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = {
        email: this.elements.email.value,
        password: this.elements.password.value
      };
      if (!formData.email || !formData.password) {
        alert('Toate câmpurile trebuie completate!');
        return;
      }
      console.log(formData);
      this.reset();
    });
  });
  
