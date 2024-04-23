const add_user_btn  = document.querySelector("#add_user");
const submit        = document.querySelector("#submit");
const form_wrapp    = document.querySelector(".form");
const form          = document.querySelector("form");


add_user_btn.addEventListener('click', function(){
  form_wrapp.style.display = form_wrapp.style.display == 'block' ? 'none' : 'block';
})

form.addEventListener('submit', function(e){
  e.preventDefault();
  let erros = '';
  const img = document.querySelector("#image");
  const name = document.querySelector("#name").value;
  const occupation = document.querySelector("#occupation").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const description = document.querySelector("#description").value;
  const facebook = document.querySelector("#facebook").value;
  const twitter = document.querySelector("#twitter").value;
  const instagram = document.querySelector("#instagram").value;
  const linkedin = document.querySelector("#linkedin").value;
  
  if(name != '' && occupation != '' && email != '' && phone != '' && description != ''){
    document.querySelector(".card-wrapper .name").textContent = name;
    document.querySelector(".card-wrapper .occupation").textContent = occupation;
    document.querySelector(".card-wrapper p").textContent = description;
    document.querySelector(".card-wrapper .phone").textContent = phone;
    document.querySelector(".card-wrapper .email").textContent = email;
    document.querySelector(".card-wrapper .facebook").setAttribute('href', facebook);
    document.querySelector(".card-wrapper .twitter").setAttribute('href', twitter);
    document.querySelector(".card-wrapper .instagram").setAttribute('href', instagram);
    document.querySelector(".card-wrapper .linkedin").setAttribute('href', linkedin);
    document.querySelector('.profile-img img').setAttribute('src', window.URL.createObjectURL(img.files[0]))
  }
  else {
    alert("all fields are required")
  }


  
});