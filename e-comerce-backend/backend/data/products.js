const products = [
  {
    name: "Almond Gold",
    imageUrl:
      "https://img.playbook.com/dPUyzfElQaLlKL9VbSVjUwMQKi-2ynGEob-MPVh43Dw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzRhYTYzNjFh/LTdmZWEtNDJkZi05/OGM4LTMwMzBlYzRj/NGQyYg",
    description:
      "Best quality Almond Gold Item Description Almonds are packed with vitamins, minerals, protein, and fiber, and are associated with a number of health benefits. Being a source of vitamin E, copper, magnesium, and high-quality protein, just a handful of almonds contains one-eighth of our necessary daily protein. Kashmir Almonds are often referred to as the ‘King of Fruits.",
    price: 720,
    countInStock: 15,
    category: "products",
  },
  {
    name: "Almond Super",
    imageUrl:
      "https://img.playbook.com/f9hxjHKvjPn21XdiVLy9HNqwOmcVVxcTV4mfqILbgFM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzEwZDQwMTVl/LWNlZTMtNDU0YS1i/ODIyLThhZmE0YTAy/NDQ1Yg",
    description:
      "One of our best sellers, Super Almonds are highly nutritious nuts known for the health benefits. The numerous health benefits of it make them an essential part of an adult’s as well as a kid’s diet. For gaining the best health and vitality, begin your day with a handful of our Mamra Badam.",
    price: 780,
    countInStock: 10,
    category: "products",
  },
  {
    name: "Figs",
    imageUrl:
      "https://img.playbook.com/J1v_BCqfdBBHXSz8jr1X9PeT-hlsP2wDS9AOSj4k9ow/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzkxNjViNTRm/LTEyZDctNDYyZS1i/MzNlLTcwNjA3Y2Fh/YzI4NA",
    description:
    "Anjeer fruit or Figs are extremely sweet fruits with edible and soft crunchy seeds. Although Anjeer fruits can be consumed fresh or dried and in fact, it is commonly consumed as a dried fruit as dried ones are available all through the year. Anjeer is referred to as nature’s candy as it is rich in natural sugars",
       price: 1300,
    countInStock: 5,
    category: "products",
  },
  {
    name: "Cashewnuts(W-320)",
    imageUrl:
      "https://img.playbook.com/6kbW_FN34rJ1qlRFB4U12lduj2Js5ti4ulGjf_fBksM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzljZGQwZTUx/LTUwY2YtNGU4YS05/NmNjLWVlNmFhMThh/N2IwNg",
    description:
    "Welcome to the world of The Nut Flavour, where you can find the highest quality dried fruits and wholesome snacks that will help you maintain your diet by providing you with a nutritious mid-day pleasure. Do not mistake us for simply another dry fruit company because our mission is to improve your quality of life and extend your lifespan. Cashews have long been regarded as an excellent source of nutrients.",
     price: 720,
    countInStock: 10,
    category: "products",
  },
  {
    name: "Pista gold",
    imageUrl:
      "https://img.playbook.com/tsoelNIj1oSFk-s7JFWdJSNymn4hfU0U4xLNbqb2rOA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2VkZWZiZWE5/LTIwYmEtNGEzZC1i/NTVkLWM2OTI0ZDNk/ZDRmMA",
    description:
    "We, at Farmley, source all the nuts & dry fruits directly from the farms which are hygienically packed in a HACCP certified unit. WHY FARMLEY CALIFORNIA PISTACHIOS - We pack pistachios which are handpicked, 100% natural and free from adulteration. ENJOY YUMMY SNACKING: Farmley's roasted & salted pistachio is here to greet you into the world of SUPERFOOD snacking with no compromise on TASTE! HEALTH BENEFITS: Pistachios are high in protein, fiber, and antioxidants.",
          price: 1200,
    countInStock: 4,
    category: "products",
  },
  {
    name: "Thomson Kismis",
    imageUrl:
      "https://img.playbook.com/kuMv-OLM8P7Uj9IqoZd9Kdy6HVmQg1bugdtmG0klrY0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzU4ZDJjZjYy/LWQyZDgtNDcyZS1i/ZTY3LTJjMzBhNGE3/NDExOQ",
    description:
      "Kismis/Raisins Golden Long is a great energy booster. This Kismish is packed with energy, rich in fiber, iron, B complex vitamins, and minerals.",
    price: 240,
    countInStock: 10,
    category: "products",
  },

  {
    name: "Sonaka Kismis",
    imageUrl:
      "https://img.playbook.com/WdOzhwnzfXEuni5WOn7S39JNtTzyBHyJAA0AZnkOW1c/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I5MGIzMTRm/LThkMWEtNGYxYy1i/MTJiLWMxNGU2M2Qz/NWNmMg",
    description:
    "Premium Raisins (Green Kismish) Afghan wonder is a great energy booster. This Green Kismish is packed with energy, rich in fiber, iron, B complex vitamins, and minerals.",
      price: 220,
    countInStock: 10,
    category: "products",
  },

  {
    name: "Thomson Black Kismis",
    imageUrl:
      "https://img.playbook.com/K7Ee7eum9niOlKQU6-4_UPyJ4UAuDOvx9ICDVOpYwmE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2QyZjAzYTk3/LTU1MjUtNDRjMC05/MWY5LTFjYzA1MmI4/Y2Y1ZQ",
    description:
    "Black raisin, the most popular variety of dried grape, is widely known for its sugary taste and juicy flavor. But the truth is that this tiny fruit has much more to offer to us. Black raisins are healthy, they’re convenient, and inexpensive. Black Raisins are low-calorie dried fruits and contain antioxidants, fiber, and minerals. Eating raisins every day helps you meet your daily requirement for iron. Black Kismis is rich in iron, B vitamins, and potassium. Nutritious raisins add zest to salads.",
         price: 200,
    countInStock: 10,
    category: "products",
  },

  {
    name: "Afgan Black kismis(Seed)",
    imageUrl:
      "https://img.playbook.com/22WHdCmruFjvUGlnFGIYmAbC1VyMCPylLjY_jTc2w-w/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2U3ZWVjMjM5/LTNhNzUtNDY2NC05/Y2ExLWE4YzVkM2Ni/ODZjMg",
    description:
    "Black raisin, the most popular variety of dried grape, is widely known for its sugary taste and juicy flavor. But the truth is that this tiny fruit has much more to offer to us. Black raisins are healthy, they’re convenient, and inexpensive. Black Raisins are low-calorie dried fruits and contain antioxidants, fiber, and minerals. Eating raisins every day helps you meet your daily requirement for iron. Black Kismis is rich in iron, B vitamins, and potassium. Nutritious raisins add zest to salads. Flavor your salad and yogurt with them or add raisins to any muffin, cake, or pancake batter for healthy antioxidants. Mixing raisins with peanuts, cashews, almonds, and other dried fruits or seeds gives you a healthy, between-meal snack.",
       price: 400,
    countInStock: 10,
    category: "products",
  },

  {
    name: "Cashewnuts(W-240)",
    imageUrl:
      "https://img.playbook.com/IGHqbJCjxPF3Tgq1bi0K9DsmivCOvbflCCzOkl9j3VU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q4NGUxMzZm/LTE4ZWYtNDY5YS1h/MTY5LWMyY2MzNDJi/MzQzZQ",
    description:
    "The Cashews helps in producing healthy amount of melanin that enhanced the color of your hair & works as a sunscreen for your skin.",
      price: 680,
    countInStock: 10,
    category: "products",
  },

  {
    name: "Figs small",
    imageUrl:
      "https://img.playbook.com/cTm4Wg4ffpuyS9vgzp6u6cOqX8HihNs-96Kk01Y2BGE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M4ZTQxNzYz/LWVhYzItNDE2NS1h/YmZhLWE0OTRkYmRj/MGE4NQ",
    description:
    "Anjeer fruit or Figs are extremely sweet fruits with edible and soft crunchy seeds. Although Anjeer fruits can be consumed fresh or dried and in fact, it is commonly consumed as a dried fruit as dried ones are available all through the year. Anjeer is referred to as nature’s candy as it is rich in natural sugars",
       price: 800,
    countInStock: 10,
    category: "products",
  },

  {
    name: "Pista small",
    imageUrl:
      "https://img.playbook.com/fDdet4nJ7vZVNkDgXP0377DZJd4oBcNahTuU32pTc5k/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzI1ZmE5MzQy/LTM4N2ItNGQ1ZS1i/MzU3LTkxMWE3ZWRj/ZDhhZQ",
    description:
    "Nutri Binge Vitals Pistachios is a superfood.that is a good source of Protein, Vitamin E, Magnesium, fibre and antioxidants. Pistachios are also known to have anti-inflammatory properties.The best part is you get this in an airtight zip lock pouch that can make storage easy and keep the products fresh and yum. Whether you are at home or want to consume snacks on the go, Nutri Binge Vitals Pistachios will be there for you.",
       price: 1000,
    countInStock: 10,
    category: "products",
  },
];

module.exports = products;
