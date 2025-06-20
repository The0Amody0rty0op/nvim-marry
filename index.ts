// 💀 Life Simulator: Never Marry Edition (Async Version)
// Philosophy in code. Not just logic — a message.

console.log("🧠 Booting Life...");

setTimeout(() => {
  // === EXAMPLE 1 ===
  let marry = -1000;
  console.log("💍 Marriage started with:", marry);

  setTimeout(() => {
    // === EXAMPLE 2 ===
    let self = 1000;

    function drainLoop() {
      self -= marry;
      console.log("🩸 Draining... Current self:", self);

      if (self <= 0) {
        console.log("💀 Self is gone. You broke in silence.");
        return;
      }

      // continue draining
      setTimeout(drainLoop, 500);
    }

    drainLoop();

    // === EXAMPLE 3 ===
    setTimeout(() => {
      class Life {
        self = 10000n;

        constructor(using) {
          switch (using) {
            case "marry":
              this.self -= 0xfefn;
              console.log("⚠️ Marriage detected. Self reduced to:", this.self.toString());
              break;

            default:
              console.log("🌱 Choosing freedom. Self will grow...");
              this.growSelf();
          }
        }

        async growSelf() {
          while (this.self < 999999n) {
            await new Promise(r => setTimeout(r, 300));
            this.self += 1000n;
            console.log("📈 Growing... Self:", this.self.toString());
          }
        }
      }

      const lifePath = new Life("marry");
      console.log("🧾 Final Life Output:", lifePath.self.toString());

      // === EXAMPLE 4 ===
      setTimeout(() => {
        console.log("\n🔁 Starting eternal loop check...");

        let user = { life: "loop" };

        if (user.life === "loop") {
          console.log("🔄 You're stuck in a system loop. Breaking the pattern...");
          setTimeout(() => {
            console.log("☠️ Breaking...");
            setTimeout(() => {
              console.log("💣 Die(); // System exited");
            }, 800);
          }, 800);
        }
      }, 1000);

    }, 1500);

  }, 1200);

}, 800);
