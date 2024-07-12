export const genericAnswers = [
  "bodyText",
  "color",
  "cost",
  "inkable",
  "name",
  "type",
  "lore",
  "strength",
  "willpower",
  "moveCost",
];

export const cardAnswersHard = [
  "setName",
  "classifications",
  "cardNum",
  "rarity",
];

interface ImagesList {
  [key: string]: string;
}

export const colorIconBackgroundColor: { [key: string]: string } = {
  amber: "rgba(244, 179, 1, 0.3);",
  amethyst: "rgba(128, 56, 123, 0.3);",
  ruby: "rgba(210, 11, 46, 0.3)",
  steel: "rgba(159, 169, 179, 0.3)",
  sapphire: "rgba(2, 137, 195, 0.3)",
  emerald: "rgba(41, 138, 52, 0.3)",
};

export const IMAGES: ImagesList = {
  baseInkEmpty:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715095314/Lorcana%20Guess/base-ink-empty.png",
  inkableEmpty:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715128575/Lorcana%20Guess/inkable-empty_zvmzrs.png",
  nonInkableEmpty:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715095314/Lorcana%20Guess/non-inkable-empty.png",
  baseCard:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715095314/Lorcana%20Guess/base-card.png",
  steelBanner:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715357391/Lorcana%20Guess/steel-banner_rkzfia.png",
  steelCharStats:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715197294/Lorcana%20Guess/steelCharStats_qinmcw.png",
  amberBanner:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715283653/Lorcana%20Guess/amber-banner_lnxbo7.png",
  amberCharStats:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715284192/Lorcana%20Guess/amberCharStats_acdgva.png",
  amethystBanner:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715287048/Lorcana%20Guess/amethyst-banner_gnhxaf.png",
  amethystCharStats:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715287048/Lorcana%20Guess/amethystCharStats_p9i8hc.png",
  sapphireBanner:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715289037/Lorcana%20Guess/sapphire-banner_i6sfvt.png",
  sapphireCharStats:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715289037/Lorcana%20Guess/sapphireCharStats_p7whpu.png",
  emeraldBanner:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715308793/Lorcana%20Guess/emerald-banner_eu7pxa.png",
  emeraldCharStats:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715308793/Lorcana%20Guess/emeraldCharStats_zoqhau.png",
  rubyBanner:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715309523/Lorcana%20Guess/ruby-banner_flcqce.png",
  rubyCharStats:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715309523/Lorcana%20Guess/rubyCharStats_nwjyvq.png",
  descriptionBase:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715368615/Lorcana%20Guess/description-base_fwep0q.png",
  lore1:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715624093/Lorcana%20Guess/lore1_h6ewf5.png",
  lore2:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715624093/Lorcana%20Guess/lore2_snb2sj.png",
  lore3:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715624093/Lorcana%20Guess/lore3_xu17jk.png",
  lore4:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715624093/Lorcana%20Guess/lore4_heaxye.png",
  steel:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715788012/Lorcana%20Guess/steel_c7zk4x.png",
  emerald:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715788012/Lorcana%20Guess/emerald_wjjasb.png",
  amber:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715788012/Lorcana%20Guess/amber_ovg06s.png",
  amethyst:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715788012/Lorcana%20Guess/amethyst_gaokms.png",
  sapphire:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715788012/Lorcana%20Guess/sapphire_c0wg4s.png",
  ruby: "https://res.cloudinary.com/dhtbrbpni/image/upload/v1715788012/Lorcana%20Guess/ruby_zyi7cb.png",
  baseLocation:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1716411144/Lorcana%20Guess/locationBase_xdrurl.png",
  locationDescription:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1716568900/Lorcana%20Guess/location-description-base_r26uyx.png",
  amberLocation:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1716410194/Lorcana%20Guess/amberLocation_uizmqm.png",
  amethystLocation:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1716587032/Lorcana%20Guess/amethyst-banner_dd9kgm.png",
  rubyLocation:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1716588553/Lorcana%20Guess/rubyLocation_j77gaq.png",
  emeraldLocation:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1716590494/Lorcana%20Guess/emeraldLocation_ysdpmy.png",
  sapphireLocation:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1716591724/Lorcana%20Guess/sapphireLocation_p3q2bk.png",
  steelLocation:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1716592401/Lorcana%20Guess/steelLocation_xlvamk.png",
  locationLore1:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1716936698/Lorcana%20Guess/locationLore1_zmymaj.png",
  locationLore2:
    "https://res.cloudinary.com/dhtbrbpni/image/upload/v1716936698/Lorcana%20Guess/locationLore2_qnnlu6.png",
};
