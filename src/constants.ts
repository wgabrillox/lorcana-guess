export const AH = "";

// Misc info
// Name is The Bystander Collection Sans Medium
// Subtitle is Brandon Text Condensed
// Bold Types is Brandon Text Condensed Black Italic Keyword Ability name is Brandon Text Condensed Black
// Keyword ability reminder text is Brandon Text Condensed Medium Italic
// Flavor Text is Brandon Text Condensed Medium Italic

export const IMAGES = {
  baseInkEmpty:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715095314/base-ink-empty.png",
  inkableEmpty:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715128575/inkable-empty_zvmzrs.png",
  nonInkableEmpty:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715095314/non-inkable-empty.png",
  baseCard:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715095314/base-card.png",
  steelBanner:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715196336/steel-banner_rkzfia.png",
  steelCharStats:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715197294/steelCharStats_qinmcw.png",
};

// export const CARD_TYPES = [
//   {value: 'Character', label: 'Character'},
//   {value: 'Character', label: 'Character'},
//   {value: 'Character', label: 'Character'},
//   {value: 'Character', label: 'Character'},
// ]

export const mockData = [
  {
    artist: "Agnes Christianson",
    setName: "Into the Inklands",
    setNum: 3,
    color: "Amber",
    image: "https://lorcana-api.com/images/99_puppies/99_puppies-large.png",
    cost: 5,
    inkable: false,
    name: "99 Puppies",
    type: "Action",
    rarity: "Uncommon",
    flavorText:
      '"Two, four, six, plus three is nine, plus two is 11 . . ."\n-Roger',
    cardNum: 24,
    bodyText: "Whenever one of your characters quests this turn, gain 1 lore.",
    setId: "INK",
  },
  {
    artist: "Heidi Neunhoffer",
    setName: "Into the Inklands",
    setNum: 3,
    color: "Steel",
    image: "https://lorcana-api.com/images/ba-boom!/ba-boom!-large.png",
    cost: 2,
    inkable: true,
    name: "Ba-Boom!",
    type: "Action",
    rarity: "Common",
    flavorText: "Bigger than your average boom!",
    cardNum: 196,
    bodyText: "Deal 2 damage to chosen character or location",
    setId: "INK",
  },
  {
    artist: "Cam Kendell",
    setName: "Into the Inklands",
    classifications: "Dreamborn, Hero",
    abilities: "Bodyguard",
    setNum: 3,
    color: "Amber",
    image:
      "https://lorcana-api.com/images/baloo/von_bruinwald_xiii/baloo-von_bruinwald_xiii-large.png",
    cost: 3,
    inkable: false,
    name: "Baloo - von Bruinwald XIII",
    type: "Character",
    lore: 1,
    rarity: "Rare",
    cardNum: 1,
    bodyText:
      "Bodyguard (This character may enter play exerted. An opposing character who challenges one of your characters must choose one with Bodyguard if able.)\n\nLet's Make Like A Tree - When this character is banished, gain 2 lore.",
    willpower: 3,
    strength: 0,
    setId: "INK",
  },
  {
    artist: "Randy Bishop",
    setName: "The First Chapter",
    classifications: "Storyborn, Hero",
    setNum: 1,
    color: "Steel",
    image:
      "https://lorcana-api.com/images/aladdin/cornered_swordsman/aladdin-cornered_swordsman-large.png",
    cost: 2,
    inkable: true,
    name: "Aladdin - Cornered Swordsman",
    type: "Character",
    lore: 2,
    rarity: "Common",
    flavorText:
      '"Oh ho! So the street rat found a sword and a backbone!" \n-Razoul',
    cardNum: 171,
    willpower: 1,
    strength: 2,
    setId: "TFC",
  },
  {
    artist: "Valerio Buonfantino",
    setName: "Into the Inklands",
    setNum: 3,
    color: "Amber",
    image:
      "https://lorcana-api.com/images/tiana's_palace/tiana's_palace-large.png",
    cost: 3,
    inkable: false,
    name: "Tiana's Palace - Jazz Restaurant",
    moveCost: 2,
    type: "Location",
    lore: 1,
    rarity: "Uncommon",
    flavorText: "In New Orleans, dreams can come true.",
    cardNum: 34,
    bodyText: "Night Out - Characters can't be challenged while here.",
    willpower: 8,
    setId: "INK",
  },
  {
    artist: "Andreas Rocha",
    setName: "Into the Inklands",
    setNum: 3,
    color: "Ruby",
    image:
      "https://lorcana-api.com/images/agrabah/marketplace/agrabah-marketplace-large.png",
    cost: 3,
    inkable: true,
    name: "Agrabah - Marketplace",
    moveCost: 1,
    type: "Location",
    lore: 2,
    rarity: "Common",
    flavorText:
      '"Welcome to Agrabah, city of mystery, of enchantment, and the finest merchandise this side of the river."\n-Merchant',
    cardNum: 134,
    willpower: 5,
    setId: "INK",
  },
];
