const barbers = [
    {
      name: "Csapó Álmos",
      image: "images/almos.jpg", // Itt cseréld a valódi kép elérési útjára!
      email: "almos@norulzbarber.hu",
      phone: "+36 30 123 4567",
      clients: 85,
      works: [
        "images/almos-work1.jpg", // Itt cseréld saját munkafotóra!
        "images/almos-work2.jpg"
      ],
      bio: "Álmos a stílusos és precíz férfi hajvágás, valamint a modern szakállformázás specialistája. Minden vendégének segít megtalálni a legjobb megjelenést."
    },
    {
      name: "Borbély-1",
      image: "images/borbely1.jpg", // Itt cseréld a valódi kép elérési útjára!
      email: "borbely1@norulzbarber.hu",
      phone: "+36 30 765 4321",
      clients: 49,
      works: [
        "images/borbely1-work1.jpg",
        "images/borbely1-work2.jpg"
      ],
      bio: "Borbély-1 a klasszikus borbélyfodrászat mestere. Szakértője a hagyományos borotválásnak és a személyre szabott hajvágásoknak."
    }
  ];
  
  const container = document.getElementById("barbers-list");
  
  barbers.forEach(barber => {
    const card = document.createElement("div");
    card.className = "profile-card";
    card.innerHTML = `
      <img src="${barber.image}" alt="${barber.name} profilképe" style="width:100%;border-radius:8px;">
      <h2>${barber.name}</h2>
      <p><b>Email:</b> <a href="mailto:${barber.email}">${barber.email}</a></p>
      <p><b>Telefon:</b> <a href="tel:${barber.phone.replace(/\\s+/g, '')}">${barber.phone}</a></p>
      <p><b>Kiszolgált kliensek:</b> ${barber.clients}</p>
      <p>${barber.bio}</p>
      <div class="works-gallery">
        ${barber.works.map(src => `<img src="${src}" alt="Munka" style="width:80px;border-radius:4px;margin:4px;">`).join("")}
      </div>
    `;
    container.appendChild(card);
  });
  