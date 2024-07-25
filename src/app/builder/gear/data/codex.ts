export interface AspectData {
    name: string;
    new: boolean;
    type: string;
    legendary: boolean;
    campaign: boolean;
    dungeon?: string;
    location?: string;
    class?: string;
    filters?: string[];
    description: string;
  }
  
  export const codex: AspectData[] = [
    {
      name: "Accelerating Aspect",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Attack Speed",
        "Core"
      ],
      description: "Critical Strikes with Core Skills increase your Attack Speed by [10-25%] for 5 seconds."
    },
    {
      name: "Aspect of Abundant Energy",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Crackling Energy"
      ],
      description: "Crackling Energy has a [35-50%] chance to chain to an additional enemy."
    },
    {
      name: "Aspect of Accursed Touch",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Lucky Hit",
        "Vulnerable"
      ],
      description: "Lucky Hit: Up to a [20-35%] chance for your Skills to inflict Vampiric Curse on enemies. Enemies afflicted with Vampiric Curse are also Vulnerable.\n\nVampiric Curse's stored souls deal [20-50%] increased damage."
    },
    {
      name: "Aspect of Adaptability",
      new: false,
      type: "Resource",
      legendary: true,
      campaign: false,
      filters: [
        "Resource"
      ],
      description: "When cast below 50% Maximum Resource, Basic Skills generate 3 of your\r\nPrimary Resource, once per cast.\n\r\nWhen cast at or above 50% Maximum Resource, Basic Skills deal x [20-80%] increased damage."
    },
    {
      name: "Aspect of Ancestral Charge",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Charge calls forth 4 Ancients who also Charge, dealing x [20-35%] of normal damage."
    },
    {
      name: "Aspect of Ancestral Echoes",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Ancient Reservoir",
      location: "Hawezar",
      filters: [
        "Lucky Hit"
      ],
      description: "Lucky Hit: Damaging enemies with Leap, Upheaval, or Whirlwind have up to a [45-60%] chance to summon an Ancient to perform the same Skill."
    },
    {
      name: "Aspect of Ancestral Force",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Sunken Ruins",
      location: "Scosglen",
      description: "Hammer of the Ancients quakes outward and its damage is increased by x [2-17%] ."
    },
    {
      name: "Aspect of Ancient Flame",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Attack Speed"
      ],
      description: "While both bonuses from Esu's Ferocity Key Passive are active, your Attack Speed is increased by [35-50%] ."
    },
    {
      name: "Aspect of Anemia",
      class: "Barbarian",
      new: false,
      type: "Utility",
      legendary: false,
      campaign: false,
      dungeon: "Kor Dragan Barracks",
      location: "Fractured Peaks",
      filters: [
        "Lucky Hit",
        "Bleed",
        "Stun"
      ],
      description: "Lucky Hit: Damaging Bleeding or Vulnerable enemies has a [15-30]% chance to Stun them for 2 seconds."
    },
    {
      name: "Aspect of Armageddon",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Immobilize"
      ],
      description: "A hail of Meteorites falls during Inferno, dealing [X] Fire Damage on impact. Your Meteorites Immobilize enemies for 3 seconds."
    },
    {
      name: "Aspect of Arrow Storms",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Howling Warren",
      location: "Scosglen",
      filters: [
        "Lucky Hit"
      ],
      description: "Lucky Hit: Your Marksman Skills have up to a 25% chance to create an Arrow Storm at the enemy’s location, dealing [X] Physical damage over 3 seconds.\n\nYour Arrow Storms deal [25-35%] increased damage."
    },
    {
      name: "Aspect of Artful Initiative",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "When you spend 75 Energy you release a cluster of exploding Stun Grenades that deal [X] total Physical damage and Stun enemies for 1 second.\n\nYour Grenade Skills deal [25-45%] increased damage."
    },
    {
      name: "Aspect of Audacity",
      new: false,
      type: "Utility",
      legendary: false,
      campaign: false,
      filters: [
        "Close Enemies",
        "Stun"
      ],
      description: "When there are at least 5 Close enemies, Stun them for [3-4] seconds. This can only occur once every 20 seconds."
    },
    {
      name: "Aspect of Berserk Fury",
      class: "Barbarian",
      new: false,
      type: "Resource",
      legendary: true,
      campaign: false,
      filters: [
        "Berserking"
      ],
      description: "You gain [1-6] Fury per second while Berserking."
    },
    {
      name: "Aspect of Berserk Ripping",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Mournfield",
      location: "Dry Steppes",
      filters: [
        "Berserking",
        "Bleed"
      ],
      description: "Dealing direct damage while Berserking inflicts [15-30%] of the Base damage as additional Bleeding damage over 5 seconds."
    },
    {
      name: "Aspect of Binding Embers",
      class: "Sorcerer",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Immobilized"
      ],
      description: "Flame Shield lets you move unhindered through enemies and Immobilize them for [1.5-3.0] seconds."
    },
    {
      name: "Aspect of Biting Cold",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: true,
      dungeon: "Forgotten Depths",
      location: "Dry Steppes",
      filters: [
        "Freeze",
        "Vulnerable"
      ],
      description: "When you Freeze an enemy there is a [25-40%] chance to make them Vulnerable for 3 seconds."
    },
    {
      name: "Aspect of Branching Volleys",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Shadowed Plunge",
      location: "Hawezar",
      description: "Increase the damage of arrows that ricochet from Barrage from 40% to [50-80%] . Barrage's arrows have a [30-60%] chance to split into 2 arrows whenever they ricochet."
    },
    {
      name: "Aspect of Bul-Kathos",
      class: "Barbarian",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Light's Refuge",
      location: "Hawezar",
      filters: [
        "Damage Reduction"
      ],
      description: "Leap creates an Earthquake that deals [X] Physical damage over 4 seconds. While standing in Earthquakes, you gain [10-25%] increased Damage Reduction."
    },
    {
      name: "Aspect of Burning Rage",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Berserking"
      ],
      description: "While Berserking, you deal [X] Fire damage every second to surrounding enemies."
    },
    {
      name: "Aspect of Bursting Bones",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Path of the Blind",
      location: "Dry Steppes",
      description: "When a segment of Bone Prison is destroyed or expires, it deals [X] damage in an area around itself."
    },
    {
      name: "Aspect of Bursting Venoms",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Lucky Hit",
        "Poison"
      ],
      description: "Lucky Hit: Poison Imbued Skills have up to a 15% chance to create a toxic pool that deals [X] Poisoning damage over 3 seconds to enemies within. While standing in the pool, your Poison Imbuement Skill has no Cooldown and no charge limit."
    },
    {
      name: "Aspect of Concentration",
      class: "Sorcerer",
      new: true,
      type: "Defensive",
      legendary: true,
      campaign: false,
      description: "Casting a Conjuration Skill grants you [15-25%] Damage Reduction for 5 seconds."
    },
    {
      name: "Aspect of Concussive Strikes",
      new: true,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Daze"
      ],
      description: "Lucky Hit: Damaging an enemy has up to a 20% chance to Daze them for 2 seconds.\n\nYou deal x [5-20%] increased damage to Dazed enemies."
    },
    {
      name: "Aspect of Conflagration",
      class: "Sorcerer",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Light's Watch",
      location: "Fractured Peaks",
      filters: [
        "Burn"
      ],
      description: "While channeling Incinerate, your Burning damage is increased by x [25-40%] .\n\nEnemies damaged by Incinerate explode, Burning all surrounding enemies for [X] over 6 seconds. This effect occurs once per 3 seconds."
    },
    {
      name: "Aspect of Control",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Sunken Library",
      location: "Kehjistan",
      filters: [
        "Freeze",
        "Immobilize",
        "Stun"
      ],
      description: "You deal x [20-35%] more damage to Immobilized, Stunned, or Frozen enemies."
    },
    {
      name: "Aspect of Corruption",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: true,
      dungeon: "Renegade's Retreat",
      location: "Kehjistan",
      filters: [
        "Vulnerable",
        "Imbuement"
      ],
      description: "Your Imbuement Skill effects have x [25-40%] increased potency against Vulnerable enemies."
    },
    {
      name: "Aspect of Cruel Sustenance",
      class: "Rogue",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Heal"
      ],
      description: "Explosions from the Victimize Key Passive Heal you for [X] Life for each enemy damaged, up to a maximum of [X] Life."
    },
    {
      name: "Aspect of Cyclonic Force",
      class: "Druid",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Collapsed Vault",
      location: "Kehjistan",
      filters: [
        "Damage Reduction"
      ],
      description: "Cyclone Armor also provides Physical Damage Reduction. In addition, Cyclone Armor will be applied to all Nearby Allies."
    },
    {
      name: "Aspect of Decay",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Each time the Shadowblight Key Passive deals damage to enemies, it increases the next Shadowblight's damage within 10 seconds by x [30-45%] , stacking up to 5 times."
    },
    {
      name: "Aspect of Disobedience",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Halls of the Damned",
      location: "Kehjistan",
      description: "You gain [0.4-0.7%] increased Armor for 4 seconds when you deal any form of damage, stacking up to [25-40%] ."
    },
    {
      name: "Aspect of Vocalized Empowerment",
      class: "Barbarian",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Sirocco Caverns",
      location: "Kehjistan",
      description: "Your Shout Skills generate [5-10] Primary Resource per second while active."
    },
    {
      name: "Aspect of Vocalized Empowerment",
      class: "Druid",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Sirocco Caverns",
      location: "Kehjistan",
      description: "Your Shout Skills generate [5-10] Primary Resource per second while active."
    },
    {
      name: "Aspect of Efficiency",
      class: "Sorcerer",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Domhainne Tunnels",
      location: "Scosglen",
      filters: [
        "Core"
      ],
      description: "Casting a Basic Skill reduces the Mana cost of your next Core or Mastery Skill by [10-25%] ."
    },
    {
      name: "Aspect of Elements",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Gain x [20-30%] increased damage to a set of damage types for 7 seconds. This effect alternates between 2 sets:\n• Fire, Lightning, and Physical.\n• Cold, Poison, and Shadow."
    },
    {
      name: "Aspect of Elusive Menace",
      class: "Rogue",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Dodge",
        "Close Enemies"
      ],
      description: "While you have both bonuses from the Close Quarters Combat Key Passive active, your Dodge Chance increases by [4-7%] whenever you're hit by an enemy. Successfully Dodging resets this bonus."
    },
    {
      name: "Aspect of Empowering Reaper",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Flooded Depths",
      location: "Scosglen",
      description: "Damaging enemies with Sever has a [10-25%] chance to spawn a pool of Blight under the target that deals x [40-100%] bonus damage. This effect can only happen once every 3 seconds."
    },
    {
      name: "Aspect of Encircling Blades",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Forsaken Quarry",
      location: "Fractured Peaks",
      description: "Flurry damages enemies in a circle around you and deals x [15-30%] increased damage."
    },
    {
      name: "Aspect of Encroaching Wrath",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "After spending 100 Fury, your next Weapon Mastery Skills within 5 seconds deals x [40-70%] increased damage."
    },
    {
      name: "Aspect of Engulfing Flames",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Burn"
      ],
      description: "You deal [15-30%] increased Burning damage to enemies below 50% Life. Additionally, you deal [70-100%] increased Burning damage to enemies while they are affected by more Damage Over Time than their total Life."
    },
    {
      name: "Aspect of Explosive Mist",
      class: "Necromancer",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      description: "Blood Mist triggers Corpse Explosion on surrounding Corpses. When Blood Mist detonates a Corpse, its Cooldown is reduced by [0.1-0.6] seconds."
    },
    {
      name: "Aspect of Explosive Verve",
      class: "Rogue",
      new: false,
      type: "Utility",
      legendary: false,
      campaign: false,
      dungeon: "Derelict Lodge",
      location: "Fractured Peaks",
      filters: [
        "Movement Speed"
      ],
      description: "Your Grenade Skills count as Trap Skills. Whenever you arm a Trap or drop Grenades, you gain [10-25%] increased Movement speed for 3 seconds."
    },
    {
      name: "Aspect of Exposed Flesh",
      class: "Necromancer",
      new: false,
      type: "Resource",
      legendary: true,
      campaign: false,
      filters: [
        "Lucky Hit",
        "Vulnerable"
      ],
      description: "Lucky Hit: Up to a 10% chance to generate [35-50] Essence when hitting a Vulnerable enemy."
    },
    {
      name: "Aspect of Fevered Mauling",
      class: "Druid",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      filters: [
        "Damage Reduction"
      ],
      description: "When you hit at least 1 enemy with Maul, increase its Attack Speed by [1-2.5%] and you gain [1-4%] Damage reduction for 5 seconds, stacking up to 5 times."
    },
    {
      name: "Aspect of Fierce Winds",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Shout",
        "Dust Devils"
      ],
      description: "Your Shout Skills create 3 Dust Devils that deal [X] damage to enemies along their path.\nYour Dust Devils are [5-20%] bigger and deal 1% increased damage for each 1% their size is increased."
    },
    {
      name: "Aspect of Fortune",
      class: "Sorcerer",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Lucky Hit",
        "Barrier"
      ],
      description: "Your Lucky Hit Chance is increased by [10-25%] while you have a Barrier active."
    },
    {
      name: "Aspect of Frenzied Dead",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Attack Speed"
      ],
      description: "Each time one of your Summoning Minions damages an enemy, they gain [10-15%] Attack Speed for 3 seconds, up to [30-45%] ."
    },
    {
      name: "Aspect of Frosty Strides",
      new: false,
      type: "Utility",
      legendary: false,
      campaign: false,
      filters: [
        "Vulnerable",
        "Freeze",
        "Cold Damage"
      ],
      description: "While below [45-55%] Life, Evade Freezes Close enemies, deals [X] Cold Damage to them, and makes them Vulnerable for 3 seconds."
    },
    {
      name: "Aspect of Frozen Memories",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "The Avalanche Key Passive now applies to 2 additional casts."
    },
    {
      name: "Aspect of Frozen Orbit",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Frozen Orb explodes 2 additional times at its destination for [45-60%] of its damage."
    },
    {
      name: "Aspect of the Frozen Wake",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Chill"
      ],
      description: "While Ice Armor is active, you leave behind exploding Ice Spikes that deal [X] damage. Your Ice Spikes Chill enemies for 15%."
    },
    {
      name: "Aspect of Giant Strides",
      class: "Barbarian",
      new: false,
      type: "Resource",
      legendary: true,
      campaign: false,
      description: "Reduces the Cooldown of Leap by [2.5-5] seconds per enemy hit, up to a maximum of 9 seconds. Hitting a Boss with Leap provides the maximum cooldown reduction."
    },
    {
      name: "Aspect of Grasping Veins",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Corrupted Grotto",
      location: "Kehjistan",
      description: "Gain [10-25%] increased Critical Strike Chance for 6 seconds when you cast Corpse Tendrils. You deal x [20-50%] bonus Critical Strike Damage to enemies damaged by Corpse Tendrils."
    },
    {
      name: "Aspect of Grasping Whirlwind",
      class: "Barbarian",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Pull"
      ],
      description: "Whirlwind periodically Pulls enemies to you."
    },
    {
      name: "Aspect of Hardened Bones",
      class: "Necromancer",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Damage Reduction"
      ],
      description: "You and your Minions gain [10-25%] increased Damage Reduction."
    },
    {
      name: "High Velocity Aspect",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      description: "Barrage arrows now pierce through 1 enemy. Barrage has [10-25%] increased Attack Speed."
    },
    {
      name: "Aspect of Hungry Blood",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Each cast of Blood Lance will launch an additional Blood Lance at a Nearby enemy when it first hits an enemy that is already lanced, dealing [33-48%] of normal damage."
    },
    {
      name: "Aspect of Imitated Imbuement",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Your Shadow Clones also mimic the Imbuements applied to your Skills. Casting an Imbuement Skill grants your active Shadow Clone x [5-20%] increased damage for 9 seconds."
    },
    {
      name: "Aspect of Inner Calm",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: true,
      dungeon: "Raethwind Wilds",
      location: "Scosglen",
      description: "Deal x [5-10%] increased damage. Triple this bonus after standing still for 3 seconds."
    },
    {
      name: "Aspect of Lethal Dusk",
      class: "Rogue",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Evade",
        "Stealth"
      ],
      description: "Evading through an enemy infected by Shadow Imbuement grants Stealth for 4 seconds. Breaking Stealth Heals you for [10-25%] of your Maximum Life."
    },
    {
      name: "Aspect of Limitless Rage",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Core"
      ],
      description: "Each point of Fury you generate while at Maximum Fury grants your next Core Skill within 5 seconds x [1-2%] increased damage, up to x [15-30%] ."
    },
    {
      name: "Aspect of Mending Stone",
      class: "Druid",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Sealed Archives",
      location: "Dry Steppes",
      filters: [
        "Barrier"
      ],
      description: "The duration of Earthen Bulwark is increased by 6 seconds. In addition, killing an enemy with a Skill replenishes [X] of your active Earthen Bulwark's Barrier."
    },
    {
      name: "Aspect of Metamorphic Stone",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Core"
      ],
      description: "Boulder is now a Core Skill and costs 40 Spirit to cast dealing [90-120%] of normal damage."
    },
    {
      name: "Aspect of Might",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: true,
      dungeon: "Dark Ravine",
      location: "Dry Steppes",
      filters: [
        "Damage Reduction"
      ],
      description: "Basic Skills grant 20% Damage Reduction for [2-7] seconds."
    },
    {
      name: "Aspect of Natural Balance",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Casting a Storm Skill grants your Earth Skills [30-45%] Critical Strike Damage for 4 seconds.\n\nCasting an Earth Skill increases the Critical Strike Chance of Storm Skills by [8-12%] for 4 seconds."
    },
    {
      name: "Aspect of Nature's Savagery",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Werewolf Skills function as Storm Skills and Werebear Skills function as Earth Skills for the Nature's Fury Key Passive."
    },
    {
      name: "Aspect of Noxious Ice",
      class: "Rogue",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Chill",
        "Poison",
        "Freeze"
      ],
      description: "Chilled enemies Poisoned by Poison Imbuement will be further Chilled for 20% per second. You deal x [15-30%] additional Poison damage to Frozen enemies."
    },
    {
      name: "Aspect of Numbing Wrath",
      class: "Barbarian",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Heathen's Keep",
      location: "Hawezar",
      filters: [
        "Fortify"
      ],
      description: "Each point of Fury generated while at Maximum Fury grants [X] Fortify."
    },
    {
      name: "Aspect of Occult Dominion",
      class: "Necromancer",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      description: "Your maximum number of Skeletal Warriors and Skeletal Mages is increased by 2."
    },
    {
      name: "Aspect of Overwhelming Currents",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Unstable Currents has a [25-40%] chance to cast an additional Shock Skill."
    },
    {
      name: "Aspect of Perpetual Stomping",
      class: "Barbarian",
      new: false,
      type: "Mobility",
      legendary: false,
      campaign: false,
      dungeon: "Charnel House",
      location: "Dry Steppes",
      description: "Damaging an enemy with Kick or Ground Stomp resets Leap's Cooldown."
    },
    {
      name: "Aspect of Pestilent Points",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Basic",
        "Imbuement"
      ],
      description: "Every 3rd cast of Puncture is Poison Imbued with [105-150%] of normal potency."
    },
    {
      name: "Aspect of Piercing Cold",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Dead Man's Dredge",
      location: "Fractured Peaks",
      description: "Ice Shards pierce [3-9] times, dealing [25-10%] less damage per subsequent enemy hit."
    },
    {
      name: "Aspect of Piercing Static",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Wretched Delve",
      location: "Scosglen",
      description: "Charged Bolts pierce, but deal x [70-40%] less damage to targets hit after the first."
    },
    {
      name: "Aspect of Plunging Darkness",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Rimescar Cavern",
      location: "Fractured Peaks",
      description: "Bone Prison spawns a pool of Blight that deals x [80-125%] bonus damage over 6 seconds."
    },
    {
      name: "Aspect of Potent Blood",
      class: "Necromancer",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Betrayer's Row",
      location: "Dry Steppes",
      description: "Blood Orbs grant [10-25] Essence."
    },
    {
      name: "Aspect of Quickening Fog",
      class: "Rogue",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Daze"
      ],
      description: "You automatically drop a Smoke Grenade at the end of Dash. Smoke Grenades reduce Dash's cooldown by [0.5-0.65] seconds for each enemy hit, up to [1.50-1.95] seconds."
    },
    {
      name: "Aspect of Quicksand",
      class: "Druid",
      new: false,
      type: "Utility",
      legendary: false,
      campaign: false,
      dungeon: "Feral's Den",
      location: "Scosglen",
      filters: [
        "Slow"
      ],
      description: "Damage from Earth Skills Slow enemies hit by [20-50%] for 5 seconds."
    },
    {
      name: "Aspect of Rathma's Chosen",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Overpower",
        "Attack Speed"
      ],
      description: "Whenever your Blood Skills Overpower you gain [35-50%] Attack Speed for 4 seconds."
    },
    {
      name: "Aspect of Reanimation",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: true,
      dungeon: "Aldurwood",
      location: "Scosglen",
      description: "Your Minions gain increased damage while alive, up to x [25-40%] after 10 seconds."
    },
    {
      name: "Aspect of Repeating",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Rapid Fire has a [30-45%] chance to ricochet to another target."
    },
    {
      name: "Aspect of Retaliation",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Seaside Descent",
      location: "Dry Steppes",
      filters: [
        "Fortify",
        "Core"
      ],
      description: "Your Core Skills deal up to [15-30%] increased damage based on your amount of Fortify."
    },
    {
      name: "Aspect of Retribution",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Abandoned Mineworks",
      location: "Kehjistan",
      filters: [
        "Stun"
      ],
      description: "Distant enemies have a 10% chance to be Stunned for 2 seconds when they hit you.\n\nYou deal x [15-30%] increased damage to Stunned and Knocked Down enemies."
    },
    {
      name: "Aspect of Searing Wards",
      class: "Sorcerer",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Mana"
      ],
      description: "After spending [125-80] Mana your next Firewall is free to cast and will destroy incoming Small Missiles."
    },
    {
      name: "Aspect of Serration",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "The Ossified Essence Key Passive also increases the Critical Strike Damage of your Bone Skills by x1% per Essence above 50, up to x [25-40%] ."
    },
    {
      name: "Aspect of Shared Misery",
      new: false,
      type: "Utility",
      legendary: false,
      campaign: false,
      dungeon: "Oblivion",
      location: "Hawezar",
      filters: [
        "Lucky Hit"
      ],
      description: "Lucky Hit: When you hit a Crowd Controlled enemy, there is up to a [35-50%] chance for that Crowd Control effect to spread to another unaffected enemy."
    },
    {
      name: "Aspect of Shattered Stars",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Burn"
      ],
      description: "Meteorites fall around Meteor, dealing [30-45%] of Meteor's damage. Your Meteorites additionally Burn enemies they hit for [X] damage over 6 seconds."
    },
    {
      name: "Aspect of Shielding Storm",
      class: "Necromancer",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Barrier"
      ],
      description: "Each time that Bone Storm damages an enemy, gain a Barrier equal to [1-6%] of your Maximum Life for 10 seconds."
    },
    {
      name: "Aspect of Singed Extremities",
      class: "Sorcerer",
      new: false,
      type: "Utility",
      legendary: false,
      campaign: false,
      dungeon: "Earthen Wound",
      location: "Hawezar",
      filters: [
        "Immobilize",
        "Slow"
      ],
      description: "After lmmobilize or Stun wears off, enemies are Slowed by [45-60%] for 4 seconds."
    },
    {
      name: "Aspect of Siphoned Victuals",
      class: "Rogue",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Leviathan's Maw",
      location: "Hawezar",
      filters: [
        "Lucky Hit",
        "Vulnerable",
        "Core"
      ],
      description: "Lucky Hit: Damaging a Vulnerable enemy with a Non-Basic Skill has a [5-20%] chance to drop a Healing Potion."
    },
    {
      name: "Aspect of Slaughter",
      new: false,
      type: "Mobility",
      legendary: true,
      campaign: false,
      filters: [
        "Movement Speed"
      ],
      description: "You gain 20% Movement Speed. Lose this bonus for [5.0-2.5] seconds after taking damage."
    },
    {
      name: "Aspect of Splintering Energy",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Crumbling Hekma",
      location: "Kehjistan",
      description: "Casting Lightning Spear always spawns an additional Lightning Spear and increases your damage with Shock Skills by x [10-25%] for 3 seconds."
    },
    {
      name: "Aspect of Stolen Vigor",
      class: "Rogue",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Heal"
      ],
      description: "Each stack of Momentum Key Passive Heals you for [X] Life per second and grants you 5% Damage Reduction."
    },
    {
      name: "Aspect of Sundered Ground",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      description: "Every 25 seconds, your next Upheaval cast is guaranteed to Overpower and deals x [10-25%] increased damage. This timer is reduced by 4 seconds when Upheaval Overpowers a Boss or an Elite enemy."
    },
    {
      name: "Aspect of Surprise",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Evade",
        "Stun"
      ],
      description: "When you Evade or Shadow Step, you leave behind a cluster of exploding Stun Grenades that deal [X] total Physical damage and Stun enemies for 1 second.\n\nYour Grenade Skills deal [25-40%] more damage."
    },
    {
      name: "Aspect of Swelling Curse",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Hive",
      location: "Scosglen",
      description: "Bone Spirit's Critical Strike Chance is increased by + [10-25%] . Your Maximum Essence is increased by 2 for each enemy hit for 15 seconds."
    },
    {
      name: "Aspect of Synergy",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Using an Agility Skill reduces the Cooldown of your next Subterfuge Skill by 20%. Using a Subterfuge Skill increases the damage of your next Agility Skill by x [35-50%] ."
    },
    {
      name: "Aspect of Tempering Blows",
      class: "Barbarian",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Defiled Catacomb",
      location: "Fractured Peaks",
      filters: [
        "Fortify",
        "Weapon Swap"
      ],
      description: "After swapping weapons 5 times, gain [X] Fortify."
    },
    {
      name: "Aspect Of Tenuous Destruction",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      description: "Deal [25-40%] increased damage while you have no Defensive Skills on your Action Bar."
    },
    {
      name: "Aspect of The Aftershock",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Landslide's earth pillars each strike a second time and deal an additional [5.5-13%] bonus damage per hit."
    },
    {
      name: "Aspect of the Alpha",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Your Wolf Companions are now Werewolf Companions. Werewolf Companions deal x [100-130%] additional damage and can spread Rabies."
    },
    {
      name: "Aspect of the Blurred Beast",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Poison"
      ],
      description: "While dashing, Shred seeks out Nearby Poisoned enemies and deals x [25-40%] increased damage to them."
    },
    {
      name: "Aspect of the Bounding Conduit",
      class: "Sorcerer",
      new: true,
      type: "Mobility",
      legendary: false,
      campaign: false,
      dungeon: "Komdor Temple",
      location: "Dry Steppes",
      filters: [
        "Movement Speed"
      ],
      description: "Teleport's Cooldown is reduced by [1.0-2.5] seconds. After Teleporting, Crackling Energy hits 2 additional enemies for 5 seconds."
    },
    {
      name: "Aspect of the Calm Breeze",
      class: "Druid",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Grinning Labyrinth",
      location: "Dry Steppes",
      filters: [
        "Lucky Hit"
      ],
      description: "Wind Shear now deals [X] Poisoning damage over 4 seconds.\nLucky Hit: Wind Shear has up to a [6-12%] chance to fully restore your Spirit."
    },
    {
      name: "Aspect of the Changeling's Debt",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Conclave",
      location: "Kehjistan",
      filters: [
        "Poison",
        "Werebear",
        "Werewolf",
        "Crowd Controlled"
      ],
      description: "You deal [25-55%] increased damage while hitting a Poisoned enemy as a Werebear or a Crowd Controlled enemy as a Werewolf."
    },
    {
      name: "Aspect of the Crowded Sage",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Close Enemies"
      ],
      description: "You have 8% increased Dodge Chance. Successful Dodges restore [5-20%] of your Maximum Life."
    },
    {
      name: "Aspect of the Damned",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Uldur's Cave",
      location: "Kehjistan",
      description: "You deal x [ 35-50%] increased Shadow damage to enemies afflicted by any Curse."
    },
    {
      name: "Aspect of the Dark Howl",
      class: "Druid",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Immobilize",
        "Poison"
      ],
      description: "Debilitating Roar is now a Werewolf Skill. In addition, Debilitating Roar will Immobilize Poisoned enemies for [2.5-4] seconds."
    },
    {
      name: "Aspect of the Deflecting Barrier",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Lost Keep",
      location: "Hawezar",
      filters: [
        "Barrier"
      ],
      description: "While you have a Barrier active, there is a [5-15%] chance to ignore incoming direct damage from Distant enemies."
    },
    {
      name: "Aspect of the Dire Whirlwind",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Garan Hold",
      location: "Scosglen",
      description: "Whirlwind's Critical Strike Chance is increased by [3-8%] for each second it is channeled, up to [9-24%] ."
    },
    {
      name: "Aspect of the Embalmer",
      class: "Necromancer",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      description: "Consuming a Corpse has a [15-30%] chance to spawn a Blood Orb."
    },
    {
      name: "Aspect of the Expectant",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Underroot",
      location: "Scosglen",
      filters: [
        "Core"
      ],
      description: "After attacking enemies with a Basic Skill, increase the damage of your next Core Skill cast within 5 seconds by x [5-10%] , up to x30%."
    },
    {
      name: "Aspect of the Frozen Tundra",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "While Deep Freeze is active, exploding Ice Spikes form in the area, dealing [X] Cold Damage. Your Ice Spikes have [50%] increased explosion radius."
    },
    {
      name: "Aspect of the Iron Warrior",
      class: "Barbarian",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Carrion Fields",
      location: "Dry Steppes",
      filters: [
        "Unstoppable",
        "Damage Reduction"
      ],
      description: "Iron Skin grants Unstoppable, and [25-35%] Damage Reduction."
    },
    {
      name: "Aspect of the Long Shadow",
      class: "Necromancer",
      new: false,
      type: "Resource",
      legendary: true,
      campaign: false,
      description: "Lucky Hit: Your Shadow Damage Over Time effects have a [15-30%] chance to generate 3 Essence. Damage from your Shadowblight Key Passive will always generate 2 Essence."
    },
    {
      name: "Aspect of Metamorphosis",
      new: false,
      type: "Mobility",
      legendary: true,
      campaign: false,
      filters: [
        "Unstoppable"
      ],
      description: "When you Evade you turn into a cloud of bats, becoming Unstoppable for 2.5 seconds. Enemies along your path take [X] Physical damage and are inflicted with Vampiric Curse. Evade's Cooldown is increased by [10-5] seconds."
    },
    {
      name: "Aspect of the Moonrise",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Basic Skill",
        "Attack Speed",
        "Movement Speed"
      ],
      description: "Damaging an enemy with a Basic Skill grants you 4% Attack Speed for 10 seconds, stacking up to 5 times. Upon reaching maximum stacks, you enter a Vampiric Bloodrage, gaining x [40-80%] Basic Skill damage and 15% Movement Speed for 10 seconds."
    },
    {
      name: "Aspect of the Protector",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Lost Archives",
      location: "Fractured Peaks",
      filters: [
        "Barrier"
      ],
      description: "Damaging an Elite enemy grants you a Barrier absorbing up to [X] damage for 10 seconds. This effect can only happen once every 20 seconds."
    },
    {
      name: "Aspect of the Rampaging Werebeast",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Endless Gates",
      location: "Hawezar",
      description: "The duration of Grizzly Rage is increased by [3-8] seconds. In addition, Critical Strikes while Grizzly Rage is active increase your Critical Strike Damage by 10% for the duration, up to  a maximum of 200%."
    },
    {
      name: "Aspect of the Relentless Armsmaster",
      class: "Barbarian",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Calibel's Mine",
      location: "Scosglen",
      description: "Gain [35-65%] increased Fury Generation and 15% reduced Fury cost to your Skills while all damage bonuses from the Walking Arsenal Key Passive are active."
    },
    {
      name: "Aspect of Shredding Blades",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Vulnerable"
      ],
      description: "Ice Blades' chance to apply Vulnerable is increased by 20% and the Vulnerable duration is increased by 4 seconds. You gain x [15-30%] Vulnerable Damage."
    },
    {
      name: "Aspect of the Stampede",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Gain 1 additional Companion. In addition, your Companion Skills deal [15-30%] bonus damage."
    },
    {
      name: "Aspect of the Tempest",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Blind Burrows",
      location: "Hawezar",
      description: "Hurricane damage is increased by [10.5-18%] each second while active."
    },
    {
      name: "Aspect of the Trampled Earth",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Trample now summons 6 Landslide pillars of earth during its duration that deal [70-100%] normal damage. Trample is now also a Nature Magic and Earth Skill."
    },
    {
      name: "Aspect of the Umbral",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Champion's Demise",
      location: "Dry Steppes",
      description: "Restore [1-6] of your Primary Resource when you Crowd Control an enemy."
    },
    {
      name: "Aspect of the Unbroken Tether",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Chain Lightning has a [25-40%] chance to chain 5 additional times."
    },
    {
      name: "Aspect of the Unsatiated",
      class: "Druid",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Tormented Ruins",
      location: "Fractured Peaks",
      description: "After killing an enemy with Shred, you gain 20 Spirit. Your Werewolf Skills deal [20-35%] increased damage when cast above 50 Spirit."
    },
    {
      name: "Aspect of the Unwavering",
      class: "Sorcerer",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Putrid Aquifer",
      location: "Kehjistan",
      description: "Taking direct damage has a [2-7%] chance to reset the Cooldown of one of your Defensive Skills."
    },
    {
      name: "Aspect of the Ursine Horror",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Belfry Zakara",
      location: "Hawezar",
      description: "Pulverize is now also an Earth Skill. After casting Pulverize, tectonic spikes continue to deal [X] damage over 2 seconds."
    },
    {
      name: "Aspect of the Void",
      class: "Necromancer",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Pull"
      ],
      description: "Blight's defiled area, when spawned, pulls in enemies around the affected area."
    },
    {
      name: "Aspect of the Wildrage",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Your Companions gain the bonuses from the Bestial Rampage Key Passive."
    },
    {
      name: "Aspect of Three Curses",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: true,
      dungeon: "Serpent's Lair",
      location: "Hawezar",
      filters: [
        "Healthy"
      ],
      description: "Increases the Critical Strike Damage of Meteor and Fireball by x [25-40%] . Double this bonus against Healthy targets."
    },
    {
      name: "Aspect of Torment",
      class: "Necromancer",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Black Asylum",
      location: "Zones",
      description: "Critical Strikes with Bone Skills increase your Essence Regeneration by x [95-170%] for 4 seconds."
    },
    {
      name: "Aspect of Ultimate Shadow",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Bone Storm and Blood Wave are also Darkness Skills, deal Shadow damage, and gain additional effects: \nEnemies damaged by Bone Storm take [X] Shadow Damage over 2 seconds.\nBlood Wave creates Desecrated Ground as it travels, dealing [X] Shadow damage over 4 seconds."
    },
    {
      name: "Aspect of Uncanny Treachery",
      class: "Rogue",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: true,
      dungeon: "Demon's Wake",
      location: "Scosglen",
      filters: [
        "Daze",
        "Stealth"
      ],
      description: "Dealing damage to a Dazed enemy with an Agility Skill grants Stealth for 4 seconds.\n\nWhen Stealth breaks, you gain [10-15%] Dodge Chance for 2 seconds."
    },
    {
      name: "Aspect of Voracious Rage",
      class: "Barbarian",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Hallowed Ossuary",
      location: "Fractured Peaks",
      filters: [
        "Core"
      ],
      description: "Killing an enemy or hitting a Boss with a Core Skill refunds [15-30%] of its base Fury cost. Can only happen once per Skill cast."
    },
    {
      name: "Aspect of Unstable Imbuements",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: true,
      dungeon: "Whispering Vault",
      location: "Dry Steppes",
      description: "When casting an Imbuement Skill you trigger an explosion around yourself, applying the Imbuement effects and dealing [X] damage of the same type."
    },
    {
      name: "Aspect of Untimely Death",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Heal",
        "Overpower"
      ],
      description: "Each percent of your Maximum Life you Heal beyond 100% grants you x0.5% bonus Critical Strike Damage on your next Critical Strike, up to a x [30-60%] bonus."
    },
    {
      name: "Aspect of Volatile Shadows",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Ancient's Lament",
      location: "Dry Steppes",
      description: "When a Dark Shroud shadow is removed, you trigger an explosion that deals [X] Shadow damage and applies Shadow Imbuement to each enemy it hits."
    },
    {
      name: "Aphotic Aspect",
      class: "Necromancer",
      new: true,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Minions",
        "Shadow",
        "Stun"
      ],
      description: "Skeletal Priests empower your Skeletal Warriors' attacks to deal Shadow Damage and have a [5-20%] chance to Stun enemies for 1.5 seconds."
    },
    {
      name: "Assimilation Aspect",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Dodge"
      ],
      description: "You have 8% increased Dodge Chance. When you Dodge, Fortify for [5-10%] of your Maximum Life."
    },
    {
      name: "Balanced Aspect",
      class: "Druid",
      new: false,
      type: "Resource",
      legendary: true,
      campaign: false,
      description: "Increases your Maximum Spirit by [50-80] and Spirit Generation by 20% while Grizzly Rage is active."
    },
    {
      name: "Ballistic Aspect",
      class: "Druid",
      new: false,
      type: "Utility",
      legendary: false,
      campaign: false,
      dungeon: "Whispering Pines",
      location: "Scosglen",
      filters: [
        "Fortify",
        "Skill Rank"
      ],
      description: "When you have Fortify your Earth Skills gain +2 Ranks."
    },
    {
      name: "Battle Caster's Aspect",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Lucky Hit: When your Conjuration Skills hit you have up to a [25-40%] chance to gain +1 Rank to your Conjuration skills for 12 seconds. This can stack up to 5 times."
    },
    {
      name: "Battle-Mad Aspect",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Berserking",
        "Weapon Swap"
      ],
      description: "Gain Berserking for [1.5-4.0] seconds after swapping weapons 8 times."
    },
    {
      name: "Bear Clan Berserker's Aspect",
      class: "Barbarian",
      new: false,
      type: "Resource",
      legendary: true,
      campaign: false,
      filters: [
        "Berserking"
      ],
      description: "Killing an enemy while Berserking has a 40% chance to grant [17-32%] increased Cooldown Reduction to your Brawling Skills for 2 seconds."
    },
    {
      name: "Bladedancer's Aspect",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: true,
      dungeon: "Jalal's Vigil",
      location: "Scosglen",
      description: "Twisting Blades orbit for a short time after they return to you, dealing x [50-80%] of Twisting Blade's return damage per hit."
    },
    {
      name: "Blast-Trapper's Aspect",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: true,
      dungeon: "Kor Valar Ramparts",
      location: "Fractured Peaks",
      filters: [
        "Lucky Hit",
        "Vulnerable"
      ],
      description: "Lucky Hit: Dealing damage to enemies affected by your Trap skills has a [15-30%] chance to cause an explosion that deals [X] Shadow Damage and applies Vulnerable for 2 seconds."
    },
    {
      name: "Blighted Aspect",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Akkhan's Grasp",
      location: "Hawezar",
      description: "You deal [60-120%] increased damage for 6 seconds after the Shadowblight Key Passive damages enemies 10 times."
    },
    {
      name: "Blood Boiling Aspect",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: true,
      filters: [
        "Overpower"
      ],
      description: "When your Core Skills Overpower an enemy, you spawn 3 Volatile Blood Drops. Collecting a Volatile Blood Drop causes it to explode, dealing [X] Physical damage around you.\n\nEvery 20 seconds, your next Skill is guaranteed to Overpower."
    },
    {
      name: "Blood Getter's Aspect",
      class: "Necromancer",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      description: "Your Skeletal Priests also empower you at [55-70%] effectiveness."
    },
    {
      name: "Blood Seeker's Aspect",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Mercy's Reach",
      location: "Fractured Peaks",
      description: "Blood Lance deals x [10-25%] increased damage to its primary target per lanced enemy."
    },
    {
      name: "Blood-bathed Aspect",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Hoarfrost Demise",
      location: "Fractured Peaks",
      description: "Blood Surge's nova echoes again after a short delay, dealing x [30-15%] less damage."
    },
    {
      name: "Blood-soaked Aspect",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Movement Speed"
      ],
      description: "Blood Mist leaves a trail of Desecrated Ground that lasts for 4 seconds and deals [X] Shadow damage per second. Gain 20% Movement Speed while Blood Mist is active."
    },
    {
      name: "Bold Chieftain's Aspect",
      class: "Barbarian",
      new: false,
      type: "Resource",
      legendary: true,
      campaign: false,
      description: "Whenever you cast a Shout Skill, its Cooldown is reduced by [1.0-2.0] seconds per Nearby enemy, up to a maximum of 6 seconds."
    },
    {
      name: "Bold Chieftain's Aspect",
      class: "Druid",
      new: false,
      type: "Resource",
      legendary: true,
      campaign: false,
      description: "Whenever you cast a Shout Skill, its Cooldown is reduced by [1.0-2.0] seconds per Nearby enemy, up to a maximum of 6 seconds."
    },
    {
      name: "Brawler's Aspect",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Haunted Refuge",
      location: "Hawezar",
      description: "Enemies damaged by Kick or Charge will explode if they are killed within the next 2 seconds, dealing [X] damage to surrounding enemies."
    },
    {
      name: "Cadaverous Aspect",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Core"
      ],
      description: "Consuming a Corpse increases the damage of your next Core Skill by [5-10%] , up to [25-50%] ."
    },
    {
      name: "Charged Aspect",
      class: "Sorcerer",
      new: false,
      type: "Mobility",
      legendary: false,
      campaign: false,
      dungeon: "Maddux Watch",
      location: "Scosglen",
      filters: [
        "Movement Speed",
        "Crackling Energy"
      ],
      description: "Collecting Crackling Energy increases your Movement Speed by [10-20%] for 8 seconds."
    },
    {
      name: "Cheat's Aspect",
      class: "Rogue",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Luban's Rest",
      location: "Scosglen",
      filters: [
        "Movement Speed"
      ],
      description: "You take [10-25%] less damage from Crowd Controlled enemies. Whenever a Crowd Controlled enemy deals direct damage to you, gain 15% Movement Speed for 2 seconds."
    },
    {
      name: "Coldbringer's Aspect",
      class: "Necromancer",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Chill"
      ],
      description: "Every 8 seconds, your Skeletal Mages cast a blizzard that deals [X] Cold damage and continuously Chills enemies for 8% over 6 seconds."
    },
    {
      name: "Conceited Aspect",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Barrier"
      ],
      description: "Deal x [10-25%] increased damage while you have a Barrier active."
    },
    {
      name: "Crashstone Aspect",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: true,
      dungeon: "Stockades",
      location: "Scosglen",
      description: "Earth Skills deal [25-40%] more Critical Strike Damage to Crowd Controlled enemies."
    },
    {
      name: "Craven Aspect",
      new: false,
      type: "Mobility",
      legendary: false,
      campaign: false,
      filters: [
        "Movement Speed"
      ],
      description: "You gain [25-40%] increased Movement Speed when moving away from Slowed or Chilled enemies."
    },
    {
      name: "Death Wish Aspect",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: true,
      dungeon: "Penitent Cairns",
      location: "Scosglen",
      filters: [
        "Thorns",
        "Berserking"
      ],
      description: "Gain [X] Thorns while Berserking."
    },
    {
      name: "Devilish Aspect",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Core"
      ],
      description: "After generating 100 Fury, your next direct damage creates 2 Dust Devils that deal [X] damage to enemies along their path."
    },
    {
      name: "Dire Wolf's Aspect",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Movement Speed",
        "Heal"
      ],
      description: "Grizzly Rage now Shapeshifts you into a Dire Werewolf. As a Dire Werewolf you gain [10-25%] Movement Speed instead of Damage Reduction and [20-50%] Spirit cost reduction bonus. In addition, kills Heal you for 10% of your Maximum Life."
    },
    {
      name: "Dust Devil's Aspect",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Whirlwind leaves behind Dust Devils that deal [X] damage to enemies in their path."
    },
    {
      name: "Earthguard Aspect",
      class: "Druid",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      description: "Gain [10-25%] bonus amount to your next Earthen Bulwark for each enemy you Crowd Control up to a maximum of 100%."
    },
    {
      name: "Earthquake Aspect",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Ground Stomp creates an Earthquake damaging enemies for [X] Physical Damage over 4 seconds. While standing in Earthquakes, you deal x [10-25%] increased damage."
    },
    {
      name: "Earthstriker's Aspect",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Maugan's Works",
      location: "Hawezar",
      filters: [
        "Overpower",
        "Weapon Swap"
      ],
      description: "After swapping weapons 8 times, your next non-Basic Skill will Overpower and deal x [15-30%] increased Overpower damage."
    },
    {
      name: "Edgemaster's Aspect",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Oldstones",
      location: "Scosglen",
      description: "Skills deal up to x [5-20%] increased damage based on your available Primary Resource when cast, receiving the maximum benefit while you have full Primary Resource."
    },
    {
      name: "Elementalist's Aspect",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Pallid Delve",
      location: "Dry Steppes",
      filters: [
        "Core",
        "Mastery",
        "Critical Strike Chance"
      ],
      description: "Core Skills cast at or above 100 Mana gain a [25-40%] increased Critical Strike Chance."
    },
    {
      name: "Eluding Aspect",
      new: false,
      type: "Utility",
      legendary: false,
      campaign: false,
      dungeon: "Caldera Gate",
      location: "Fractured Peaks",
      filters: [
        "Injured",
        "Unstoppable"
      ],
      description: "Becoming lnjured while Crowd Controlled grants you Unstoppable for 4 seconds. This effect has a [40-25] second Cooldown."
    },
    {
      name: "Encased Aspect",
      class: "Sorcerer",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Heal"
      ],
      description: "While Deep Freeze is active, you restore [15-30%] of your Maximum Life and Mana per second."
    },
    {
      name: "Energizing Aspect",
      class: "Rogue",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Sanguine Chapel",
      location: "Fractured Peaks",
      description: "Damaging an Elite enemy with a Basic Skill generates 4 Energy.\n\nGain [25-40] Energy after killing an Elite enemy with a Basic Skill."
    },
    {
      name: "Enshrouding Aspect",
      class: "Rogue",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Ghoa Ruins",
      location: "Hawezar",
      filters: [
        "Damage Reduction"
      ],
      description: "Gain a free Dark Shroud shadow every 2 seconds when standing still. Each Dark Shroud shadow grants [2.5-4.0%] increased Damage Reduction."
    },
    {
      name: "Escape Artist's Aspect",
      class: "Rogue",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Dodge"
      ],
      description: "Upon taking damage from surrounding enemies, you drop a Smoke Grenade and Dodge the next [2-7] attacks within 10 seconds. This effect can only occur once every 20 seconds."
    },
    {
      name: "Everliving Aspect",
      class: "Sorcerer",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Vulnerable"
      ],
      description: "You take [10-25%] less damage from Crowd Controlled or Vulnerable enemies."
    },
    {
      name: "Exploiter's Aspect",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Unstoppable"
      ],
      description: "You have 20% increased Crowd Control Duration. While enemies are Unstoppable, you deal x [25-40%] increased damage to them."
    },
    {
      name: "Fastblood Aspect",
      class: "Necromancer",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Iron Hold",
      location: "Hawezar",
      description: "Blood Orbs reduce your Ultimate Cooldown by [1-2.5] seconds."
    },
    {
      name: "Flamethrower's Aspect",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      description: "Incinerate splits into 3 beams, each dealing [70-85%] of normal damage."
    },
    {
      name: "Flamewalker's Aspect",
      class: "Sorcerer",
      new: false,
      type: "Mobility",
      legendary: false,
      campaign: false,
      dungeon: "Cultist Refuge",
      location: "Fractured Peaks",
      filters: [
        "Movement Speed"
      ],
      description: "Coming in contact with your Firewall grants you [10-25%] Movement Speed for 6 seconds."
    },
    {
      name: "Flesh-Rending Aspect",
      class: "Necromancer",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Nostrava Deepwood",
      location: "Fractured Peaks",
      description: "When Decompose explodes, gain [25-40] Essence."
    },
    {
      name: "Frostbitten Aspect",
      class: "Rogue",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Chill",
        "Freeze"
      ],
      description: "Enemies hit by your Grenade Skills have a chance equal to your Critical Strike Chance to be Frozen for 2 seconds.\n\nYou deal x [10-25%] increased Critical Strike Damage against Frozen or Stunned enemies."
    },
    {
      name: "Frostblitz Aspect",
      class: "Sorcerer",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      description: "Frost Nova gains an additional Charge but the Cooldown per Charge is increased by [55-30%] ."
    },
    {
      name: "Ghostwalker Aspect",
      new: false,
      type: "Mobility",
      legendary: false,
      campaign: true,
      dungeon: "Broken Bulwark",
      location: "Scosglen",
      filters: [
        "Unstoppable",
        "Movement Speed"
      ],
      description: "While Unstoppable and for 4 seconds after, you gain [10-25%] increased Movement Speed and can move freely through enemies."
    },
    {
      name: "Glacial Aspect",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "When you cast Blizzard it will periodically spawn exploding Ice Spikes that deal [X] damage. Your Ice Spikes deal [15%] increased damage to Frozen enemies."
    },
    {
      name: "Aspect of Gore Quills",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Blood Orb"
      ],
      description: "Casting Blood Lance will consume Blood Orbs to also conjure lances from them. Each additional Blood Lance deals [20-50%] of normal damage and prioritizes targeting un-lanced enemies."
    },
    {
      name: "Gravitational Aspect",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Ball Lightning orbits around you and deals x [10-25%] increased damage."
    },
    {
      name: "Hectic Aspect",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      description: "After casting 5 Basic Skills, one of your active Cooldowns is reduced by [1-2] seconds."
    },
    {
      name: "Hulking Aspect",
      class: "Necromancer",
      new: false,
      type: "Utility",
      legendary: false,
      campaign: false,
      dungeon: "Sepulcher of The Forsworn",
      location: "Kehjistan",
      description: "Your Golem has a [2-12%] chance to reduce its active Cooldown by 2 seconds and a [1-6%] chance to spawn a Corpse each time it damages an enemy with its normal attack."
    },
    {
      name: "Icy Alchemist's Aspect",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Lucky Hit",
        "Chill",
        "Freeze"
      ],
      description: "Lucky Hit: Shadow Imbued Skills have up to a 75% chance to release an explosion that deals [X] Cold damage to the target and surrounding enemies, Chilling them for 25%. If they were already Chilled or Frozen, increase this damage by x100%."
    },
    {
      name: "Incendiary Aspect",
      class: "Sorcerer",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Tomb of the Saints",
      location: "Kehjistan",
      filters: [
        "Lucky Hit",
        "Burn"
      ],
      description: "Lucky Hit: Damage from your Pyromancy skills has up to a [7-22%] chance to restore 10 Mana."
    },
    {
      name: "Infiltrator's Aspect",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Poison",
        "Stealth"
      ],
      description: "Poison Trap no longer breaks Stealth and triggers no Cooldown or arm time while you are in Stealth. All Poision Traps activate when you exit Stealth and Poison Trap's Cooldown will be [8-5] seconds per trap placed."
    },
    {
      name: "Iron Blood Aspect",
      class: "Barbarian",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Forgotten Ruins",
      location: "Kehjistan",
      filters: [
        "Damage Reduction",
        "Bleed"
      ],
      description: "Gain [2-5%] Damage Reduction for each Nearby Bleeding enemy up to [10-25%] maximum."
    },
    {
      name: "Juggernaut's Aspect",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      description: "Gain [X] Armor, but your Evade has 100% increased Cooldown."
    },
    {
      name: "Lightning Dancer's Aspect",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Lightning Storm Critical Strikes spawn 3 Dancing Bolts that seek enemies in the area dealing [X] Lightning damage."
    },
    {
      name: "Luckbringer Aspect",
      class: "Barbarian",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Lucky Hit",
        ""
      ],
      description: "Gain [10-25%] increased Lucky Hit Chance while all damage bonuses from the Walking Arsenal Key Passive are active."
    },
    {
      name: "Mage-Lord's Aspect",
      class: "Sorcerer",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Damage Reduction"
      ],
      description: "The Vyr's Mastery Key Passive also grants x [6.0-9.0%] Damage Reduction, tripled while fighting a Close enemy."
    },
    {
      name: "Mangled Aspect",
      class: "Druid",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Immortal Emanation",
      location: "Fractured Peaks",
      description: "While in Werebear form, you gain [10-25] Spirit every 8 seconds."
    },
    {
      name: "Mangler's Aspect",
      class: "Rogue",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Lucky Hit",
        "Vulnerable"
      ],
      description: "Lucky Hit: Dealing direct damage to a Vulnerable enemy has up to a [30-45%] chance to Daze them for 2 seconds."
    },
    {
      name: "Mighty Storm's Aspect",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "The Earthen Might Key Passive also applies to your Storm Skills."
    },
    {
      name: "Needleflare Aspect",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: true,
      dungeon: "Yshari Sanctum",
      location: "Kehjistan",
      description: "Thorns damage dealt has a [25-40%] chance to deal damage to all enemies around you and your Minions."
    },
    {
      name: "Nighthowler's Aspect",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Forbidden City",
      location: "Fractured Peaks",
      filters: [
        "Shout",
        "Critical Strike Chance",
        "Companion"
      ],
      description: "Blood Howl is now a Shout Skill and increases Critical Strike Chance by [5-10%] . In addition, Blood Howl also affects Nearby Companions and Players for 3 seconds."
    },
    {
      name: "Opportunist's Aspect",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: true,
      dungeon: "Prison of Caldeum",
      location: "Kehjistan",
      filters: [
        "Stealth",
        "Stun"
      ],
      description: "When you enter or break Stealth, you drop a cluster of exploding Stun Grenades around you that deal [X] Physical damage and Stun enemies for 1 second.\n\nYour Grenade Skills deal [25-40%] more damage."
    },
    {
      name: "Osseous Gale Aspect",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Bone Storm consumes up to 8 Corpses to increase its duration by up to [5-12.5] seconds."
    },
    {
      name: "Overcharged Aspect",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Mariner's Refuge",
      location: "Scosglen",
      filters: [
        "Lucky Hit"
      ],
      description: "Lucky Hit: Up to a [15-25%] chance when dealing Lightning damage to overload the target for 3 seconds, causing any direct damage you deal to them to pulse [X] additional damage to surrounding enemies."
    },
    {
      name: "Prodigy's Aspect",
      class: "Sorcerer",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Witchwater",
      location: "Hawezar",
      description: "Using a Cooldown restores [10-25] Mana."
    },
    {
      name: "Protecting Aspect",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Healthy"
      ],
      description: "When hit while not Healthy, a magical bubble is summoned around you for [2.5-5.0] seconds. While standing in the bubble, Players are Immune. Can only occur once every 90 seconds."
    },
    {
      name: "Rapid Aspect",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Buried Halls",
      location: "Dry Steppes",
      filters: [
        "Attack Speed"
      ],
      description: "Basic Skills gain [15-30%] Attack Speed."
    },
    {
      name: "Ravager's Aspect",
      class: "Rogue",
      new: false,
      type: "Mobility",
      legendary: true,
      campaign: false,
      description: "Shadow Step has an additional Charge. Killing an enemy with Shadow Step refunds a Charge and increases the damage of Shadow Step by x [2.5-10%] for 2 seconds, up to x [10-40%] ."
    },
    {
      name: "Ravenous Aspect",
      class: "Rogue",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Shifting City",
      location: "Dry Steppes",
      filters: [
        "Vulnerable"
      ],
      description: "Killing a Vulnerable enemy grants you x [55-70%] increased Energy Regeneration for 4 seconds."
    },
    {
      name: "Raw Might Aspect",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "After you hit 15 enemies with your Shapeshifting Skills, your next Werebear Skill will deal x [40-55%] more damage and Stun enemies for 3 seconds."
    },
    {
      name: "Recharging Aspect",
      class: "Sorcerer",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Zenith",
      location: "Fractured Peaks",
      description: "Each time Chain Lightning bounces, gain [1-3] Mana."
    },
    {
      name: "Relentless Berserker's Aspect",
      class: "Barbarian",
      new: false,
      type: "Utility",
      legendary: false,
      campaign: false,
      dungeon: "Hakan's Refuge",
      location: "Kehjistan",
      filters: [
        "Lucky Hit",
        "Berserking",
        "Core"
      ],
      description: "Lucky Hit: Damaging an enemy with a Core Skill has up to a [15-30%] chance to extend the duration of Berserking by 2 second. Double this duration if it was a Critical Strike."
    },
    {
      name: "Requiem Aspect",
      class: "Necromancer",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: true,
      dungeon: "Vault of the Forsaken",
      location: "Scosglen",
      description: "You gain [2.0-7.0] Maximum Essence per active Minion."
    },
    {
      name: "Resistant Assailant's Aspect",
      class: "Rogue",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      filters: [
        "Resistance",
        "Elite"
      ],
      description: "Breaking Concealment grants 10% Resistance and Maximum Resistance to all elements for 6 seconds.\n\nKilling an Elite enemy reduces Concealment's cooldown by [6-12] seconds."
    },
    {
      name: "Rotting Aspect",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Decompose can chain and burst up to 2 additional targets. Explosions from Decompose deals x15-30% increased damage."
    },
    {
      name: "Runeworker's Conduit Aspect",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Critical Strikes with Storm Skills that you cast charge the air around you for 2 seconds causing a Lightning Bolt to periodically hit an enemy in the area for [X] Lightning damage. This duration can be extended by additional Critical Strikes."
    },
    {
      name: "Sacrificial Aspect",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Ruins of Eridu",
      location: "Hawezar",
      description: "Your Sacrifice bonuses are increased by x [35-50%] ."
    },
    {
      name: "Seismic-shift Aspect",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Earth Spike gains x [35-50%] bonus damage, launches spikes in a line, and has a [2-1] second Cooldown."
    },
    {
      name: "Serpentine Aspect",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "You may have 1 additional Hydra active, and Hydra's duration is increased by [10-25%] ."
    },
    {
      name: "Shadowslicer Aspect",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Twisted Hollow",
      location: "Scosglen",
      description: "Dash spawns a Shadow Clone that also casts Dash, dealing [150-300%] of the Base damage."
    },
    {
      name: "Shattered Aspect",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Freeze"
      ],
      description: "Explosions from the Shatter Key Passive deal [30-45%] increased damage."
    },
    {
      name: "Shattered Spirit's Aspect",
      class: "Necromancer",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      filters: [
        "Essence"
      ],
      description: "Casting Bone Spirit also launches 18 Bone Splinters in all directions, dealing x [200-500%] increased damage and generating 6 Essence per enemy hit."
    },
    {
      name: "Shepherd's Aspect",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Bloodsoaked Crag",
      location: "Dry Steppes",
      filters: [
        "Core",
        "Companion"
      ],
      description: "Core and Wrath Skills deal an additional [5-10%] damage per Companion you have."
    },
    {
      name: "Shockwave Aspect",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Pulverize creates a shockwave that travels forward, dealing [70-100%] of its damage to targets in the path."
    },
    {
      name: "Skinwalker's Aspect",
      class: "Druid",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: true,
      location: "Kehjistan",
      filters: [
        "Fortify"
      ],
      description: "When you use a Shapeshifting Skill that changes your form, gain [X] Life. If you are at full Life, gain the same amount as Fortify."
    },
    {
      name: "Skullbreaker's Aspect",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Stun",
        "Bleed"
      ],
      description: "Stunning a Bleeding enemy deals [25-40%] of their total Bleeding amount to them as Physical damage."
    },
    {
      name: "Slaking Aspect",
      class: "Barbarian",
      new: false,
      type: "Resource",
      legendary: false,
      campaign: false,
      dungeon: "Maulwood",
      location: "Fractured Peaks",
      filters: [
        "Lucky Hit",
        "Bleed"
      ],
      description: "Lucky Hit: You have up to a [45-60%] chance to gain 20 Fury when a Core Skill deals direct damage to at least one Bleeding enemy. Your Maximum Fury is increased by [5-20] ."
    },
    {
      name: "Smiting Aspect",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Healthy",
        "Injured"
      ],
      description: "You have x [13-20%] increased Critical Strike Chance against Injured enemies. While you are Healthy, you gain x [25-40%] increased Crowd Control Duration."
    },
    {
      name: "Snap Frozen Aspect",
      class: "Rogue",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Chill",
        "Freeze",
        "Barrier"
      ],
      description: "Each Chilled or Frozen enemy you Evade through grants you a Barrier that absorbs [X] damage for 5 seconds, absorbing up to a maximum of [X] damage."
    },
    {
      name: "Snowguard's Aspect",
      class: "Sorcerer",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: true,
      location: "Hawezar",
      filters: [
        "Damage Reduction"
      ],
      description: "While within your own Blizzard and for 3 seconds after leaving it, you take [15-30%] less damage."
    },
    {
      name: "Snowveiled Aspect",
      class: "Sorcerer",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Sarat's Lair",
      location: "Scosglen",
      filters: [
        "Unstoppable"
      ],
      description: "Casting Ice Armor makes you Unstoppable and grants 30% bonus Armor for [3.5-5.0] seconds."
    },
    {
      name: "Splintering Aspect",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: true,
      location: "Dry Steppes",
      filters: [
        "Vulnerable"
      ],
      description: "Bone Spear's primary attack makes enemies hit beyond the first Vulnerable for 3 seconds. Bone Shards from Bone Spear deal [30-60%] bonus damage to Vulnerable enemies and pierce them."
    },
    {
      name: "Stable Aspect",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "While Unstable Currents is not active, your Shock Skills have a [6.5-114%] chance to trigger a free cast from it."
    },
    {
      name: "Starlight Aspect",
      new: false,
      type: "Resource",
      legendary: true,
      campaign: false,
      filters: [
        "Heal"
      ],
      description: "Gain [25-40] of your Primary Resource for every 20% of your Life that you Heal."
    },
    {
      name: "Steadfast Berserker's Aspect",
      class: "Barbarian",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Lucky Hit",
        "Fortify",
        "Berserking"
      ],
      description: "Lucky Hit: Up to a 35% chance to gain [X] Fortify whenever you deal direct damage while Berserking."
    },
    {
      name: "Storm Swell Aspect",
      class: "Sorcerer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Onyx Hold",
      location: "Dry Steppes",
      filters: [
        "Vulnerable"
      ],
      description: "You deal x [15-30%] increased damage to Vulnerable enemies while you have a Barrier."
    },
    {
      name: "Stormchaser's Aspect",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Tornado will seek up to [1-3] targets."
    },
    {
      name: "Stormclaw's Aspect",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Anica's Claim",
      location: "Fractured Peaks",
      description: "Critical Strikes with Shred deal [15-30%] of the damage dealt as Lightning damage to the target and surrounding enemies."
    },
    {
      name: "Stormshifter's Aspect",
      class: "Druid",
      new: false,
      type: "Utility",
      legendary: false,
      campaign: true,
      location: "Kehjistan",
      filters: [
        "Skill Rank"
      ],
      description: "While Hurricane is active, gain +2 Ranks to your Shapeshifting Skills."
    },
    {
      name: "Subterranean Aspect",
      class: "Druid",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Earth Skill",
        "Poison"
      ],
      description: "Poison Creeper's active also casts Landslide in a circle around you. Earth Skills deal x [15-30%] increased damage to Poisoned enemies."
    },
    {
      name: "Symbiotic Aspect",
      class: "Druid",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      description: "When the Nature's Fury Key Passive triggers a free Skill, your non Ultimate Cooldowns of the opposite type are reduced by [2.5-5] seconds."
    },
    {
      name: "Tidal Aspect",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Blood Wave fires two additional waves, each dealing [50-35%] less damage then the previous."
    },
    {
      name: "Torturous Aspect",
      class: "Necromancer",
      new: false,
      type: "Utility",
      legendary: false,
      campaign: false,
      dungeon: "Deserted Underpass",
      location: "Kehjistan",
      filters: [
        "Stun"
      ],
      description: "Iron Maiden is now also a Darkness Skill and deals Shadow damage. Enemies afflicted by your Iron Maiden have a [10-25]% chance to be Stunned for 1 second when they deal direct damage."
    },
    {
      name: "Toxic Alchemist's Aspect",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      filters: [
        "Lucky Hit",
        "Poison"
      ],
      description: "Lucky Hit: Shadow Imbued Skills have up to a 75% chance to create a toxic explosion that applies [X] Poisoning damage over 5 seconds to the target and surrounding enemies. If they were already Poisoned, increase this damage by x100%."
    },
    {
      name: "Trickshot Aspect",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Bastion of Faith",
      location: "Hawezar",
      description: "Whenever Penetrating Shot damages an enemy, 2 additional arrows split off to either side. These side arrows deal [10-25%] of Penetrating Shot's Base damage and do not split."
    },
    {
      name: "Trickster's Aspect",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: true,
      location: "Dry Steppes",
      filters: [
        "Stun"
      ],
      description: "Caltrops also throw a cluster of exploding Stun Grenades that deal [X] total Physical damage and Stun enemies for 1 second.\n\nYour Grenade Skills deal [25-40%] more damage."
    },
    {
      name: "Umbrous Aspect",
      class: "Rogue",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: false,
      filters: [
        "Lucky Hit"
      ],
      description: "Lucky Hit: Critical Strikes have up to a [45-60%] chance to grant a free Dark Shroud shadow."
    },
    {
      name: "Undying Aspect",
      new: false,
      type: "Defensive",
      legendary: true,
      campaign: true,
      filters: [
        "Heal"
      ],
      description: "When you cast a Skill, you heal for [0.5-2.0]% Life. Double this bonus while below 50% Life."
    },
    {
      name: "Unyielding Commander's Aspect",
      class: "Necromancer",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Faceless Shrine",
      location: "Hawezar",
      filters: [
        "Damage Reduction",
        "Attack Speed"
      ],
      description: "While Army of the Dead is active, your Minions gain [70-100%] increased damage and take 90% reduced damage."
    },
    {
      name: "Vengeful Aspect",
      class: "Rogue",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Inferno",
      location: "Kehjistan",
      filters: [
        "Lucky Hit",
        "Vulnerable"
      ],
      description: "Lucky Hit: Damaging a Vulnerable enemy has a 25% chance to create an Arrow Storm at the enemy's location, dealing [X] Physical damage over 3 seconds.\n\nYour Arrow Storms deal x [30-40%] more damage."
    },
    {
      name: "Veteran Brawler's Aspect",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: false,
      campaign: false,
      dungeon: "Heretics Asylum",
      location: "Kehjistan",
      filters: [
        "Core"
      ],
      description: "Each time a Core Skill deals direct damage to an enemy, your next Charge, Leap, or Kick deals x [4-8%] increased damage, up to x [20-40%] ."
    },
    {
      name: "Vigorous Aspect",
      class: "Druid",
      new: false,
      type: "Defensive",
      legendary: false,
      campaign: false,
      dungeon: "Steadfast Barracks",
      location: "Hawezar",
      filters: [
        "Damage Reduction"
      ],
      description: "Gain [7.5-15%] Damage Reduction while Shapeshifted into a Werewolf."
    },
    {
      name: "Virulent Aspect",
      class: "Druid",
      new: false,
      type: "Utility",
      legendary: false,
      campaign: false,
      filters: [
        "Cooldown"
      ],
      description: "When Rabies infects an enemy, reduce its cooldown by [0.2-0.8] seconds. This cooldown reduction is tripled when infecting Elites."
    },
    {
      name: "Wanton Rupture Aspect",
      class: "Barbarian",
      new: false,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Your Rupture does not remove the Bleeding damage from enemies. This can occur once every [40-25] seconds."
    },
    {
      name: "Weapon Master's Aspect",
      class: "Barbarian",
      new: false,
      type: "Utility",
      legendary: true,
      campaign: false,
      filters: [
        "Lucky Hit",
        "Stun"
      ],
      description: "Your Weapon Mastery Skills have an additional Charge. Lucky Hit: Damaging an enemy with a Weapon Mastery Skill has up to a [40-55%] chance to Stun them for 2 seconds."
    },
    {
      name: "Wind Striker Aspect",
      new: false,
      type: "Mobility",
      legendary: false,
      campaign: false,
      dungeon: "Shivta Ruins",
      location: "Kehjistan",
      filters: [
        "Movement Speed"
      ],
      description: "Critical Strikes grant [8.5-16.0%] Movement Speed for 1 second, up to 6 seconds."
    },
    {
      name: "Windlasher Aspect",
      class: "Barbarian",
      new: true,
      type: "Offensive",
      legendary: true,
      campaign: false,
      description: "Casting Double Swing creates a Dust Devil that deals [X] damage to enemies in its path."
    },
    {
      name: "Aspect of Avoidance",
      class: "Spiritborn",
      new: true,
      type: "Defensive",
      legendary: false,
      campaign: false,
      filters: [
        "Dodge"
      ],
      description: "Whenever an enemy hits you, your Dodge Chance against that enemy increases by [4-7%] . Successfully Dodging resets this bonus."
    },
    {
      name: "Aspect of Deflection",
      class: "Spiritborn",
      new: true,
      type: "Defensive",
      legendary: false,
      campaign: false,
      description: "While active, Counterattack reflects incoming Razor Wings back out again. Other Small Missiles arer also deflected back at enemies and deal [25-30%] of Counterattack's Base damage on impact."
    },
    {
      name: "Aspect of Endurance",
      class: "Spiritborn",
      new: true,
      type: "Defensive",
      legendary: false,
      campaign: false,
      filters: [
        "Resolve",
        "Ferocity"
      ],
      description: "Your Resolve has a [2-5%] chance to not be lost when you are hit for each stack of Ferocity you have."
    },
    {
      name: "Aspect of Forest Power",
      class: "Spiritborn",
      new: true,
      type: "Defensive",
      legendary: false,
      campaign: false,
      filters: [
        "Gorilla",
        "Barrier",
        "Armor",
        "Resistance"
      ],
      description: "Lucky Hit: Up to a 25% chance to create a Mystic Circle for 10 seconds. Casting a Gorilla Skill in Mystic Circles empowers them to periodically grant you a Barrier for 25% of your Maximum Life which increases your Armor and Maximum Resistances by [5-15%] while active."
    },
    {
      name: "Aspect of Interdiction",
      class: "Spiritborn",
      new: true,
      type: "Defensive",
      legendary: false,
      campaign: false,
      filters: [
        "Block Chance",
        "Resolve"
      ],
      description: "Gain [1-10%] Block Chance per Resolve stack."
    },
    {
      name: "Aspect of Invigoration Will",
      class: "Spiritborn",
      new: true,
      type: "Defensive",
      legendary: false,
      campaign: false,
      filters: [
        "Resolve",
        "Maximum Life"
      ],
      description: "Losing a stack of Resolve has a 10% chance to Heal you for [5-10%] of your Maximum Life."
    },
    {
      name: "Aspect of Kinetic Suppression",
      class: "Spiritborn",
      new: true,
      type: "Defensive",
      legendary: false,
      campaign: false,
      filters: [
        "Resolve",
        "Mobility"
      ],
      description: "Casting a Non-Basic Mobility Skill grants [1-6] Resolve and causes your next Concussive Stomp to strike in a circle."
    },
    {
      name: "Aspect of Layered Wards",
      class: "Spiritborn",
      new: true,
      type: "Defensive",
      legendary: false,
      campaign: false,
      filters: [
        "Block Reduction",
        "Barrier"
      ],
      description: "Your Block Reduction is increased by [25-40%] while you have a Barrier."
    },
    {
      name: "Aspect of Temporal Incisions",
      class: "Spiritborn",
      new: true,
      type: "Defensive",
      legendary: false,
      campaign: false,
      filters: [
        "Incarnate"
      ],
      description: "Casting Rushing Claw extends the durations of your active Incarnate Skill effects by [0.5-2] seconds."
    },
    {
      name: "Aspect of Tenacity",
      class: "Spiritborn",
      new: true,
      type: "Defensive",
      legendary: false,
      campaign: false,
      filters: [
        "Resolve"
      ],
      description: "You gain Resolve for each [30-15] Vigor you gain over 100."
    },
    {
      name: "Bruiser's Aspect",
      class: "Spiritborn",
      new: true,
      type: "Defensive",
      legendary: false,
      campaign: false,
      filters: [
        "Armor",
        "Thorns"
      ],
      description: "Gain [5%] increased Armor and [7-60] Thorns per [1%] missing Maximum Health."
    },
    {
      name: "Raider's Aspect",
      class: "Spiritborn",
      new: true,
      type: "Defensive",
      legendary: false,
      campaign: false,
      filters: [
        "Poison",
        "Heal",
        "Maximum Life"
      ],
      description: "Heal for [1-16%] Maximum Life when you Poison a Healthy enemy."
    },
    {
      name: "Aspect of Bristling Vengeance",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Payback",
        "Thorns"
      ],
      description: "Payback now echoes forward and additionally deals [100-130%] of your Thorns damage to enemies."
    },
    {
      name: "Aspect of Combined Strikes",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Basic Skill"
      ],
      description: "Each different Basic Skill you cast increases all of your damage by [10-25%] for 10 seconds."
    },
    {
      name: "Aspect of Falling Feathers",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Mobility Skill",
        "Evade"
      ],
      description: "Moving with a Mobility Skill or Evade drops Spirit Feathers along you which each deal [X] Lightning damage on impact."
    },
    {
      name: "Aspect of Infestation",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Centipede Skill",
        "Poison"
      ],
      description: "Lucky Hit: Centipede Skills have up to a 35% chance to spawn a Pestilent Swarm from the target which deals [X] Poison damage per hit. Pestilent Swarms now also deal 100% of their Base damage as Poisoning damage over 6 seconds."
    },
    {
      name: "Aspect of Pestilence",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      description: "Stinger spawns a Pestilence Swarm at its target location which deals [35-65%] of Stinger's Base damage per hit. Pestilent Swarms now last 100% longer and spiral outwards."
    },
    {
      name: "Aspect of Plains Power",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Ferocity"
      ],
      description: "Lucky Hit: Up to a 25% chance to create a Mystic Circle for 10 seconds. Casting a Jaguar Skill in Mystic Circles empowers them to keep your Ferocity at Maximum and increase your damage by [3-6%] per stack while you remain within."
    },
    {
      name: "Aspect of Potent Exchange",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Resolve",
        "Ferocity",
        "Dodge"
      ],
      description: "Gain 1 Resolve when you Dodge an attack. Your Potency Skills consume 2 Resolve to deal [10-25%] increased damage."
    },
    {
      name: "Aspect of Rallying Reversal",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Ferocity"
      ],
      description: "You have [25-100%] chance to gain 1 Ferocity when you Crowd Control an enemy."
    },
    {
      name: "Aspect of Recalling Feathers",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Focus Skill"
      ],
      description: "Casting a Focus Skill recalls Nearby Spirit Feathers which deal [X] Lightning damage to enemies along their way. If there are no Nearby Spirit Feathers, the cast instead spawns 10 randomly around you."
    },
    {
      name: "Aspect of Redirecting Force",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Critical Strike Damage",
        "Block Chance"
      ],
      description: "Gain increased Critical Strike Damage equal [50-190%] of your Block Chance. Blocking doubles this bonus for 10 seconds."
    },
    {
      name: "Aspect of Simple Reprisal",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Basic Skill",
        "Payback"
      ],
      description: "When you cast the 3rd attack of your Basic Skills you have a [10-25%] chance to unleash Payback."
    },
    {
      name: "Aspect of Unyielding Hits",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Gorilla Skill",
        "Armor"
      ],
      description: "Casting a Gorilla Skill adds [21-36%] of your Armor to all attacks for 3 seconds."
    },
    {
      name: "Aspect of Wild Claws",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      description: "Rake manifests a Spirit Jaguar which also casts Rake at a random enemy, dealing [35-45%] Base damage."
    },
    {
      name: "Bristleback Aspect",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Dodge",
        "Block",
        "Thorns"
      ],
      description: "When you Dodge or Block an attack you trigger [200-350%] Thorns attacks against the attacker."
    },
    {
      name: "Fell Soothsayer's Aspect",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Incarnate Skill",
        "Invulnerable"
      ],
      description: "When you cast an Incarnate Skill enemies around you become Vulnerable for [2-5] seconds."
    },
    {
      name: "Insatiable Aspect",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Touch of Death"
      ],
      description: "Kills extend the duration of your active Touch of Death swarms by 0.5 seconds. When a swarm is replaced early it bursts for [1-2%] of the damage it would have done."
    },
    {
      name: "Reaper's Aspect",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Poison",
        "Critical Strike Chance",
        "Eagle Skill"
      ],
      description: "Enemies you Poison have 100% Reduced Healing and your Eagle Skills gain [10-25%] increased Critical Strike Chance against them."
    },
    {
      name: "Rebounding Aspect",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      description: "Quill Volley's feathers explode upon reaching their apex for [25-39%] of its Base damage then return to where they were cast."
    },
    {
      name: "Ruthless Aspect",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Critical Strike Chance",
        "Jaguar Skill"
      ],
      description: "Your Critical Strike Chance with Jaguar Skills is increased against enemies by [1-8.5%] for each 10% of their missing Life."
    },
    {
      name: "Starving Ravager's Aspect",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      description: "Ravager no longer has a duration and instead drains [25-10] Vigor every second. When you do not have enough Vigor then Ravager ends."
    },
    {
      name: "Tormentor's Aspect",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      filters: [
        "Thorns",
        "Poison"
      ],
      description: "Enemies who move while Poisoned by you additionally take [50-190%] of your Thorns damage per second."
    },
    {
      name: "Unrelenting Aspect",
      class: "Spiritborn",
      new: true,
      type: "Offensive",
      legendary: false,
      campaign: false,
      description: "Every 3rd consecutive Crushing Hand smashes an additional 10 times around you dealing [25-40%] of its Base damage per hit."
    },
    {
      name: "Aspect of Alacrity",
      class: "Spiritborn",
      new: true,
      type: "Resource",
      legendary: false,
      campaign: false,
      filters: [
        "Cooldown Reduction"
      ],
      description: "Your Skills Cooldown [10-40%] faster while moving."
    },
    {
      name: "Aspect of Empowered Feathers",
      class: "Spiritborn",
      new: true,
      type: "Resource",
      legendary: false,
      campaign: false,
      filters: [
        "Eagle Skill",
        "Mobility Skill"
      ],
      description: "Lucky Hit: Eagle Skills have up to a [25-30%] chance to summon a Spirit Feather. You can collect Spirit Feathers to reduce your Mobility Skill Cooldowns by 0.5 seconds."
    },
    {
      name: "Aspect of Exhilaration",
      class: "Spiritborn",
      new: true,
      type: "Resource",
      legendary: false,
      campaign: false,
      filters: [
        "Vulnerable",
        "Ferocity"
      ],
      description: "Lucky Hit: Hitting a Vulnerable enemy has up to a [25-32%] chance to reduce your Evade Cooldown by 5 seconds. Each stack of Ferocity you have increases this chance by 5%."
    },
    {
      name: "Aspect of Apprehension",
      class: "Spiritborn",
      new: true,
      type: "Utility",
      legendary: false,
      campaign: false,
      filters: [
        "Slow",
        "Fear"
      ],
      description: "Once an enemy is Slowed by at least 80%, they also become Feared for 3 seconds. You deal [25-40%] increased damage to Feared enemies."
    },
    {
      name: "Aspect of Binding Morass",
      class: "Spiritborn",
      new: true,
      type: "Utility",
      legendary: false,
      campaign: false,
      filters: [
        "Slow"
      ],
      description: "Dealing indirect damage to an enemy progressively Slows them by [5-20%] for 3 seconds, up to 80%."
    },
    {
      name: "Aspect of Reactive Armor",
      class: "Spiritborn",
      new: true,
      type: "Utility",
      legendary: false,
      campaign: false,
      filters: [
        "Block Chance"
      ],
      description: "Gain 10% Block Chance. Blocking an attack from a Close enemy has a [30-60%] chance to cast a free Concussive Stomp at them."
    },
    {
      name: "Aspect of Soil Power",
      class: "Spiritborn",
      new: true,
      type: "Utility",
      legendary: false,
      campaign: false,
      filters: [
        "Centipede Skill",
        "Poison",
        "Crowd Control"
      ],
      description: "Lucky Hit: Up to a 25% chance to create a Mystic Circle for 10 seconds. Casting a Centipede Skill in Mystic Circles empowers them to periodically apply [X] Poisoning damage over 6 seconds to enemies within while extending any Crowd Controls affecting them."
    },
    {
      name: "Aspect of Turbulence",
      class: "Spiritborn",
      new: true,
      type: "Utility",
      legendary: false,
      campaign: false,
      description: "Soar casts Vortex at its landing location and deals [15-30%] increased damage."
    },
    {
      name: "Duelist's Aspect",
      class: "Spiritborn",
      new: true,
      type: "Utility",
      legendary: false,
      campaign: false,
      filters: [
        "Ferocity"
      ],
      description: "Maximum Ferocity increased by [1-4] ."
    },
    {
      name: "Menacing Aspect",
      class: "Spiritborn",
      new: true,
      type: "Utility",
      legendary: false,
      campaign: false,
      description: "Scourge continuously affects enemies around you for [3-6] seconds."
    },
    {
      name: "Aspect of Fleet Wings",
      class: "Spiritborn",
      new: true,
      type: "Mobility",
      legendary: false,
      campaign: false,
      filters: [
        "Movement Speed",
        "Incarnate Skill"
      ],
      description: "Razor Wings is now also an Incarnate Skill with:\nPassive: You are Unhindered.\nActive: You gain [15-30%] increased Movement Speed per active Razor Wing."
    },
    {
      name: "Aspect of Haste",
      class: "Spiritborn",
      new: true,
      type: "Mobility",
      legendary: false,
      campaign: false,
      filters: [
        "Movement Speed"
      ],
      description: "Every second while moving gain [10-25%] Bonus Movement Speed for 2 seconds, up to [30-75%] ."
    },
    {
      name: "Aspect of Momentum",
      class: "Spiritborn",
      new: true,
      type: "Mobility",
      legendary: false,
      campaign: false,
      filters: [
        "Core Skill"
      ],
      description: "After you Evade, your next Core Skill dashes to your target and does [5-20%] increased damage."
    },
    {
      name: "Aspect of Sky Power",
      class: "Spiritborn",
      new: true,
      type: "Mobility",
      legendary: false,
      campaign: false,
      description: "Lucky Hit: Up to a 25% chance to create a Mystical Circle for 10 seconds.\nCasting an Eagle Skill in Mystic Circles empowers them to move with you and explode for [X] Lightning damage when you Evade."
    }
  ];