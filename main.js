function filterCards(category) {
  var cards = document.querySelectorAll(".projects-cards .card");
  cards.forEach(function (card) {
    if (category === "All") {
      card.classList.remove("hidden");
    } else if (card.classList.contains(category)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  // Remove 'active' class from all links
  var links = document.querySelectorAll(".project-category button");
  links.forEach(function (link) {
    link.classList.remove("active");
  });

  // Add 'active' class to the clicked link
  var activeLink = document.getElementById(category.toUpperCase());
  activeLink.classList.add("active");
}

// read more in about sec
function showMoreText() {
  var moreText = document.getElementById("moreText");
  var readMoreBtn = document.getElementById("readMoreBtn");
  var projectSec = document.getElementById("project");
  if (moreText.classList.contains("hidden")) {
    moreText.innerHTML = `
      skills in the ever-evolving field of web
            development. Throughout my academic journey, I have undertaken
            numerous projects, leveraging my training to develop innovative
            solutions and refine my understanding of front-end development
            principles. My portfolio showcases a diverse range of projects, each
            demonstrating my ability to translate design concepts into
            responsive and interactive web applications. Driven by a passion for
            creating seamless user experiences, I thrive in collaborative
            environments where I can contribute my expertise while also learning
            from peers. With a strong foundation in both theoretical knowledge
            and practical application, I am equipped to tackle complex
            challenges and deliver solutions that exceed expectations.
    `;
    moreText.classList.remove("hidden");
    readMoreBtn.textContent = "Read Less";
    projectSec.classList.add("marginValue");
  } else {
    moreText.innerHTML = "";
    moreText.classList.add("hidden");
    projectSec.classList.remove("marginValue");
    readMoreBtn.textContent = "Read More";
  }
}

// form section in contact sec

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // منع إرسال النموذج بشكل تلقائي

//     // قم بالحصول على قيم النموذج
//     var name = document.getElementsByName("name")[0].value;
//     var email = document.getElementsByName("email")[0].value;
//     var message = document.getElementsByName("message")[0].value;

//     // إرسال الرسالة باستخدام Email.js
//     emailjs
//       .send("service_ikqrpfd", "template_lcuiv89", {
//         from_name: name,
//         from_email: email,
//         message_html: message,
//       })
//       .then(
//         function (response) {
//           console.log("Success!", response.status, response.text);
//         },
//         function (error) {
//           console.log("Failed...", error);
//         }
//       );
//   });
