export const AH = "";

// Misc info
// Name is The Bystander Collection Sans Medium
// Subtitle is Brandon Text Condensed
// Bold Types is Brandon Text Condensed Black Italic Keyword Ability name is Brandon Text Condensed Black
// Keyword ability reminder text is Brandon Text Condensed Medium Italic
// Flavor Text is Brandon Text Condensed Medium Italic

interface ImagesList {
  [key: string]: string;
}

export const IMAGES: ImagesList = {
  baseInkEmpty:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715095314/base-ink-empty.png",
  inkableEmpty:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715128575/inkable-empty_zvmzrs.png",
  nonInkableEmpty:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715095314/non-inkable-empty.png",
  baseCard:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715095314/base-card.png",
  steelBanner:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715357391/steel-banner_rkzfia.png",
  steelCharStats:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715197294/steelCharStats_qinmcw.png",
  amberBanner:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715283653/amber-banner_lnxbo7.png",
  amberCharStats:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715284192/amberCharStats_acdgva.png",
  amethystBanner:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715287048/amethyst-banner_gnhxaf.png",
  amethystCharStats:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715287048/amethystCharStats_p9i8hc.png",
  sapphireBanner:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715289037/sapphire-banner_i6sfvt.png",
  sapphireCharStats:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715289037/sapphireCharStats_p7whpu.png",
  emeraldBanner:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715308793/emerald-banner_eu7pxa.png",
  emeraldCharStats:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715308793/emeraldCharStats_zoqhau.png",
  rubyBanner:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715309523/ruby-banner_flcqce.png",
  rubyCharStats:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715309523/rubyCharStats_nwjyvq.png",
  descriptionBase:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715368615/description-base_fwep0q.png",
  lore1:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715624093/lore1_h6ewf5.png",
  lore2:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715624093/lore2_snb2sj.png",
  lore3:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715624093/lore3_xu17jk.png",
  lore4:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715624093/lore4_heaxye.png",
  steel:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715788012/steel_c7zk4x.png",
  emerald:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715788012/emerald_wjjasb.png",
  amber:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715788012/amber_ovg06s.png",
  amethyst:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715788012/amethyst_gaokms.png",
  sapphire:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715788012/sapphire_c0wg4s.png",
  ruby: "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715788012/ruby_zyi7cb.png",
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
    artist: "Kasia Brzezinska",
    setName: "Rise of the Floodborn",
    setNum: 2,
    color: "Amethyst",
    image:
      "https://lorcana-api.com/images/binding_contract/binding_contract-large.png",
    cost: 4,
    inkable: false,
    name: "Binding Contract",
    type: "Item",
    rarity: "Uncommon",
    flavorText: "Just a standard form, nothing to worry about.",
    cardNum: 65,
    bodyText:
      "For All Eternity: {e}, {e} one of you character - Exert chosen character.",
    setId: "ROF",
  },
  {
    artist: "Jake Parker",
    setName: "Rise of the Floodborn",
    setNum: 2,
    color: "Ruby",
    image:
      "https://lorcana-api.com/images/teeth_and_ambitious/teeth_and_ambitious-large.png",
    cost: 2,
    inkable: true,
    name: "Teeth and Ambitions",
    type: "Action - Song",
    rarity: "Rare",
    flavorText:
      "Of course, quid pro quo, you're expected To take certain duties on board",
    cardNum: 130,
    bodyText:
      "(A character with cost 2 or more can {e} to sing this song for free.)\nDeal 2 damage to chosen character of yours to deal 2 damaged to another chosen character.",
    setId: "ROF",
  },
  // {
  //   artist: "Heidi Neunhoffer",
  //   setName: "Into the Inklands",
  //   setNum: 3,
  //   color: "Steel",
  //   image: "https://lorcana-api.com/images/ba-boom!/ba-boom!-large.png",
  //   cost: 2,
  //   inkable: true,
  //   name: "Ba-Boom!",
  //   type: "Action",
  //   rarity: "Common",
  //   flavorText: "Bigger than your average boom!",
  //   cardNum: 196,
  //   bodyText: "Deal 2 damage to chosen character or location",
  //   setId: "INK",
  // },
  {
    artist: "Adrianne Gumaya",
    setName: "The First Chapter",
    classifications: "Storyborn, Villain, Pirate, Captain",
    setNum: 1,
    color: "Steel",
    image:
      "https://lorcana-api.com/images/captain_hook/captain_of_the_jolly_roger/captain_hook-captain_of_the_jolly_roger-large.png",
    cost: 4,
    inkable: false,
    name: "Captain Hook - Captain of the Jolly Roger",
    type: "Character",
    lore: 1,
    rarity: "Rare",
    flavorText:
      "\"A pretty sight, Mr. Smee. We'll pot 'em like sitting ducks.\"",
    cardNum: 173,
    bodyText:
      "Double The Powder - When you play this character, you may return an action card named Fire the Cannons! from your discard to your hand.",
    willpower: 4,
    strength: 3,
    setId: "TFC",
  },
  // {
  //   artist: "Cam Kendell",
  //   setName: "Into the Inklands",
  //   classifications: "Dreamborn, Hero",
  //   abilities: "Bodyguard",
  //   setNum: 3,
  //   color: "Amber",
  //   image:
  //     "https://lorcana-api.com/images/baloo/von_bruinwald_xiii/baloo-von_bruinwald_xiii-large.png",
  //   cost: 3,
  //   inkable: false,
  //   name: "Baloo - von Bruinwald XIII",
  //   type: "Character",
  //   lore: 1,
  //   rarity: "Rare",
  //   cardNum: 1,
  //   bodyText:
  //     "Bodyguard (This character may enter play exerted. An opposing character who challenges one of your characters must choose one with Bodyguard if able.)\n\nLet's Make Like A Tree - When this character is banished, gain 2 lore.",
  //   willpower: 3,
  //   strength: 0,
  //   setId: "INK",
  // },
  {
    artist: "Richelle Canto",
    setName: "Into the Inklands",
    classifications: "Storyborn, Ally",
    abilities: "Ward",
    setNum: 3,
    color: "Sapphire",
    image:
      "https://lorcana-api.com/images/audrey_ramirez/the_engineer/audrey_ramirez-the_engineer-large.png",
    cost: 5,
    inkable: true,
    name: "Audrey Ramirez - The Engineer",
    type: "Character",
    lore: 2,
    rarity: "Rare",
    flavorText: '"How\'d you break this thing, anyway?"',
    cardNum: 137,
    bodyText:
      "Ward (Opponents can't choose this character except to challenge.)\n\nSpare Parts - Whenever this character quests, ready one of your items.",
    willpower: 5,
    strength: 2,
    setId: "INK",
  },
  // {
  //   artist: "Randy Bishop",
  //   setName: "The First Chapter",
  //   classifications: "Storyborn, Hero",
  //   setNum: 1,
  //   color: "Steel",
  //   image:
  //     "https://lorcana-api.com/images/aladdin/cornered_swordsman/aladdin-cornered_swordsman-large.png",
  //   cost: 2,
  //   inkable: true,
  //   name: "Aladdin - Cornered Swordsman",
  //   type: "Character",
  //   lore: 2,
  //   rarity: "Common",
  //   flavorText:
  //     '"Oh ho! So the street rat found a sword and a backbone!" \n-Razoul',
  //   cardNum: 171,
  //   willpower: 1,
  //   strength: 2,
  //   setId: "TFC",
  // },
  {
    artist: "Lauren Walsh",
    setName: "The First Chapter",
    classifications: "Storyborn, Hero, Prince",
    abilities: "Ward",
    setNum: 1,
    color: "Emerald",
    image:
      "https://lorcana-api.com/images/aladdin/prince_ali/aladdin-prince_ali-large.png",
    cost: 2,
    inkable: true,
    name: "Aladdin - Prince Ali",
    type: "Character",
    lore: 1,
    rarity: "Common",
    flavorText:
      "Fabulously wealthy. Practically untouchable. Genuinely inauthentic.",
    cardNum: 69,
    bodyText:
      "Ward (Opponents can't choose this character except to challenge.) ",
    willpower: 2,
    strength: 2,
    setId: "TFC",
  },
];

export const mockDataLocations = [
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
    artist: "Nicolas Ky",
    setName: "Into the Inklands",
    abilities: "Rush",
    setNum: 3,
    color: "Ruby",
    image:
      "https://lorcana-api.com/images/jolly_roger/hook's_ship/jolly_roger-hook's_ship-large.png",
    cost: 1,
    inkable: false,
    name: "Jolly Roger - Hook's Ship",
    moveCost: 2,
    type: "Location",
    rarity: "Uncommon",
    cardNum: 135,
    bodyText:
      "Look Alive, You Swabs! - Characters gain Rush while here. (They can challenge the turn they're played.)\n\nAll Hands On Deck! - Your Pirate characters may move here for free.",
    willpower: 5,
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
