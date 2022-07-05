anime({
        targets: ".circle",
        translateY: function () {
          return anime.random(10, 50);
        },
        duration: function () {
          return anime.random(1000, 3000);
        },
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
        delay: function () {
          return anime.random(0, 1000);
        },
      });
      anime({
        targets: ".cls-1, .cls-2",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1000,
        delay: function (el, i) {
          return i * 100;
        },
        direction: "alternate",
        loop: false,
      });
      anime({
        targets: ".later-text, .welcome-text",
        opacity: 1,
        direction: "alternate",
        loop: false,
        easing: "easeInOutSine",
        duration: 1000,
        delay: 1500,
      });function randomValues() {
        anime({
          targets: ".circle",
          translateY: function () {
            return anime.random(-50, 100);
          },
          duration: function () {
            return anime.random(1000, 3000);
          },
          easing: "easeInOutSine",
          delay: function () {
            return anime.random(100, 1000);
          },
          complete: randomValues,
        });
      }
      randomValues();
      let accountSelectKayitDOM = document.querySelector("#kayit");
      accountSelectKayitDOM.addEventListener("click", function () {
        anime({
          targets: "#active",
          background: "#0075ff",
          translateX: 0,
          duration: 1000,
          easing: "easeInOutBack",
        });
        anime({
          targets: ".account-forms",
          translateX: "-50%",
          duration: 1000,
          easing: "easeInOutBack",
        });
        anime({
          targets: ".account-name,#exit-account",
          color: "#0075ff",
          duration: 1000,
          easing: "easeInOutSine",
        });
      });
      let accountSelectgirisDOM = document.querySelector("#giris");
      accountSelectgirisDOM.addEventListener("click", function () {
        anime({
          targets: "#active",
          translateX: "100%",
          background: "#b90cd6",
          duration: 1000,
          easing: "easeInOutBack",
        });
        anime({
          targets: ".account-forms",
          translateX: 0,
          duration: 1000,
          easing: "easeInOutBack",
        });
        anime({
          targets: ".account-name,#exit-account",
          color: "#b90cd6",
          duration: 1000,
          easing: "easeInOutSine",
        });
      });
      let girisYapDOM = document.querySelector("#giris-yap");
      girisYapDOM.addEventListener("click", function () {
        anime({
          targets: ".gray-back",
          scale: 1,
          duration: 0,
        });
        anime({
          targets: "#active",
          translateX: "100%",
          background: "#b90cd6",
          duration: 0,
        });
        anime({
          targets: ".account-forms",
          translateX: 0,
          duration: 0,
        });
        anime({
          targets: ".account-name,#exit-account",
          color: "#b90cd6",
          duration: 0,
        });
      });
      let kayitOlDOM = document.querySelector("#kayit-ol");
      kayitOlDOM.addEventListener("click", function () {
        anime({
          targets: ".gray-back",
          scale: 1,
          duration: 0,
        });
        anime({
          targets: "#active",
          translateX: 0,
          background: "#0075ff",
          duration: 0,
        });
        anime({
          targets: ".account-forms",
          translateX: "-50%",
          duration: 0,
        });
        anime({
          targets: ".account-name,#exit-account",
          color: "#0075ff",
          duration: 0,
        });
      });
      let exitAccountDOM = document.querySelector("#exit-account");
      exitAccountDOM.addEventListener("click", function () {
        anime({
          targets: ".gray-back",
          scale: 0,
          duration: 0,
        });
      });
      anime({
        targets: ".cls-1, .cls-2",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1000,
        delay: function (el, i) {
          return i * 100;
        },
        direction: "alternate",
        loop: false,
      });
      anime({
        targets: ".later-text, .welcome-text",
        opacity: 1,
        direction: "alternate",
        loop: false,
        easing: "easeInOutSine",
        duration: 1000,
        delay: 1500,
      });