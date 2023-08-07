const questions = [
  {
    question: "Siapakah Proklamator Kemerdekaan Indonesia?",
    options: ["Soekarno", "Hatta", "Sutomo"],
    answer: "Soekarno",
  },
  {
    question: "Kapan Indonesia merdeka?",
    options: ["10 November 1945", "27 Desember 1949", "17 Agustus 1945"],
    answer: "17 Agustus 1945",
  },
  {
    question: "Apa nama lagu kebangsaan Indonesia?",
    options: ["Garuda Pancasila", "Indonesia Raya", "Maju Tak Gentar"],
    answer: "Indonesia Raya",
  },
  {
    question: "Siapa penjahit bendera Merah Putih yang dikibarkan saat Proklamasi?",
    options: ["R.A Kartini", "S.K Trimurti", "Fatmawati"],
    answer: "Fatmawati",
  },
  {
    question: "Teks Proklamasi diketik oleh?",
    options: ["B.M Diah", "Sayuti Melik", "Radjiman Wedyodiningrat"],
    answer: "Sayuti Melik",
  },
  {
    question: "Pembacaan Tek Proklamasi 17 Agustus 1945 berlangsung di...",
    options: ["Jalan Pegangsaan Timur 56", "Jalan Merdeka Selatan", "Jalan Pegangsaan Timur 53"],
    answer: "Jalan Pegangsaan Timur 56",
  },
  {
    question: "Negara yang pertama kali mengakui kedaulatan Indonesia setelah merdeka adalah...",
    options: ["Palestina", "Mesir", "Arab Saudi"],
    answer: "Mesir",
  },
  {
    question: "Ketua Badan Penyelidik Usaha Kemerdekaan Indonesia(BPUPKI) adalah...",
    options: ["Sutan syahrir", "Tan Malaka", "Radjiman Wedyodiningrat"],
    answer: "Radjiman Wedyodiningrat",
  },
  {
    question: "Pengibaran bendera Merah Putih dilakukan oleh...",
    options: ["S. Suhud & Cudanco Latief Hendraningrat", "Muwardi & D.R Sucipto", "Yusuf Kanto & Chaerul Saleh"],
    answer: "S. Suhud & Cudanco Latief Hendraningrat",
  },
  {
    question: "Untuk mewujudkan janjinya memberikan kemerdekaan kepada Indonesia, Jepang membentuk organisasi ...",
    options: ["PPKI", "BPUPKI", "PETA"],
    answer: "BPUPKI",
  },
  // Tambahkan pertanyaan lainnya sesuai keinginan
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");

function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";
    questions[currentQuestionIndex].options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("btn", "btn-secondary", "mr-2", "mb-2");
      optionsElement.appendChild(button);

      button.addEventListener("click", function () {
        checkAnswer(option);
      });
    });
  } else {
    endGame();
  }
}

function checkAnswer(selectedOption) {
  const selectedAnswer = questions[currentQuestionIndex].answer;
  if (selectedOption === selectedAnswer) {
    score++;
  }
  currentQuestionIndex++;
  showQuestion();
}

function endGame() {
  questionElement.textContent = "Permainan Selesai!";
  optionsElement.innerHTML = "";
  scoreElement.textContent = "Skor Anda: " + score;
  scoreElement.style.display = "block";
  showPreview();
}

function showPreview() {
  const previewElement = document.getElementById("preview");
  const previewListElement = document.getElementById("preview-list");
  previewListElement.innerHTML = "";

  questions.forEach((question, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = question.question + " - Jawaban: " + question.answer;
    if (index < questions.length - 1) {
      listItem.classList.add("mb-2");
    }
    previewListElement.appendChild(listItem);
  });

  previewElement.style.display = "block";
}

showQuestion();
