//Object of supporter packs, point packs and other known purchases you can do in the shop.
const data = [{
  packs12500: ["Ruler-of-Wraeclast"],
  packs1500: ["Eternal"],
  packs1100: ["Highgate"],
  packs900: ["Conqueror"],
  packs500: ["Grandmaster"],
  packs480: ["Incinerator","Atlas-Core","Orion","Crucible","Dominator","Kitava"],
  packs440: ["Phoenix","Ascendant"],
  packs240: ["Ravager","Harvest-Core","Judicator","Empyrean","Subjugator","Beast"],
  packs220: ["Chimera","Sovereign"],
  packs200: ["Master"],
  packs160: ["Annihilator","Abyss-Core","Eyrie","Vanguard","Redeemer","Eclipse"],
  packs130: ["Vaal"],
  packs120: ["Warrior"],
  packs110: ["Hydra","Challenger","Divine"],
  packs100: ["Nullifier","Breach-Core","Crusader","Assassin","Scholar","Legion","Journeyman","Silver"],
  packs90: ["Aesir-Demigod","Soulkeeper-Demigod","Primordial-Dread","Triumphant-Liege","Wyrmlord","Supreme-Emberkeep","Sanguine-Reaper","Grand-Arcanist","Rogue-Overseer", "Knightlord"],
  packs60: ["Soulkeeper-Vizier","Aesir-Warrior","Intrepid-Liege","Knightmaster","Rogue-Stalker","Ancient-Dread","Elite-Emberkeep","Wyrmcaller","Savage-Reaper","Esteemed-Arcanist","Imperator", "Silver-Crescent","Deadly-Renegade","Elite-Faithsworn","Master-Spellblade","Imperial-Eagle","Insatiable-Malice","Divine-Benevolence","Elite-Fateweaver","Elder-Darkseer","Grand-Sanctum","Eternal-Damnation","Sentinel-Overlord","Bane-Lich","Cult-of-Apocalypse","Blood-Guardian","Delve-Core","Basilisk","Pitfighter","Seeker","Sunspire","Doomguard","Master-Undertaker","Master-Soultaker","Shadowstalker","Dreadforge","Grand-Conquest","High-Council","Aplha-Harpy","Aplha-Manticore","Abyssal-Imp","Abyssal-Lich","Harbinger","Outlaw","Legacy","Breachlord","Axiom", "Alpha-Manticore", "Master-Soulstealer"],
  packs50: ["Minotaur", "Aspirant", "Apprentice", "Survivor", "Regal", "Bronze"],
  packs30: ["Aesir","Soulkeeper","Dread","Rogue","Liege","Knight","Emberkeep","Wyrm","Reaper","Arcanist","Sun", "Crescent", "Renegade", "Faithsworn", "Spellblade", "Eagle", "Malice", "Benevolence", "Fateweaver", "Darkseer", "Sanctum", "Damnation", "Sentinel", "Lich", "Cult-of-Darkness", "Blood Knight", "Vagabond", "Sunstone", "DoomCrow", "Undertaker", "Soultaker", "Stalker", "Forge", "Harpy", "Manticore", "Portent", "Classic", "Oriath", "Breachspawn", "Awekening", "Open Beta", "Soulstealer"],
  points: ["1065-Point", "516-Point", "200-Point", "100-Point", "50-Point"],
  special: ["Child's-Play-Angelic-Mask", "Koala", "Comic", "Brazil", "Early", "First-Blood"],
  vault_Pass: {
    pass30: ["Kirac's-Vault-Pass"],
  }
}];
const packs = document.querySelectorAll("h5.packageName");
const supporterPacks = data[0]
let total = 0;
let matchedPacks = []
let purchasedPacks = []
let outputMsg = ""
let errorMsg = ""

const matchPacks = () => {
  packs.forEach((name, i, arr) => {
    const tName = name.innerHTML.trim().replace(/\s/g , "-").replace("-Pack", "").replace("-Supporter", "");
    purchasedPacks.push(tName)
    //Check for 12500$ supporter packs
    supporterPacks.packs12500.forEach((pack) => {
      if (tName === pack) {
        total += 12500;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $12500`);
      }
    })
    //Check for 1500$ supporter packs
    supporterPacks.packs1500.forEach((pack) => {
      if (tName === pack) {
        total += 1500;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $1500`);
      }
    })
    //Check for 1100$ supporter packs
    supporterPacks.packs1100.forEach((pack) => {
      if (tName === pack) {
        total += 1100;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $1100`);
      }
    })
    //Check for 900$ supporter packs
    supporterPacks.packs900.forEach((pack) => {
      if (tName === pack) {
        total += 900;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $900`);
      }
    })
    //Check for 500$ supporter packs
    supporterPacks.packs500.forEach((pack) => {
      if (tName === pack) {
        total += 500;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $500`);
      }
    })
    //Check for 480$ supporter packs
    supporterPacks.packs480.forEach((pack) => {
      if (tName === pack) {
        total += 480;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $480`);
      }
    })
    //Check for 440$ supporter packs
    supporterPacks.packs440.forEach((pack) => {
      if (tName === pack) {
        total += 440;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $440`);
      }
    })
    //Check for 240$ supporter packs
    supporterPacks.packs240.forEach((pack) => {
      if (tName === pack) {
        total += 240;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $240`);
      }
    })
    //Check for 220$ supporter packs
    supporterPacks.packs220.forEach((pack) => {
      if (tName === pack) {
        total += 220;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $220`);
      }
    })
    //Check for 200$ supporter packs
    supporterPacks.packs200.forEach((pack) => {
      if (tName === pack) {
        total += 200;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $200`);
      }
    })
    //Check for 160$ supporter packs
    supporterPacks.packs160.forEach((pack) => {
      if (tName === pack) {
        total += 160;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $160`);
      }
    })
    //Check for 130$ supporter packs
    supporterPacks.packs130.forEach((pack) => {
      if (tName === pack) {
        total += 130;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $130`);
      }
    })
    //Check for 120$ supporter packs
    supporterPacks.packs120.forEach((pack) => {
      if (tName === pack) {
        total += 120;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $120`);
      }
    })
    //Check for 110$ supporter packs
    supporterPacks.packs110.forEach((pack) => {
      if (tName === pack) {
        total += 110;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $110`);
      }
    })
    //Check for 100$ supporter packs
    supporterPacks.packs100.forEach((pack) => {
      if (tName === pack) {
        total += 100;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $100`);
      }
    })
    //Check for 90$ supporter packs
    supporterPacks.packs90.forEach((pack) => {
      if (tName === pack) total += 90;
    })
    //Check for 60$ supporter packs
    supporterPacks.packs60.forEach((pack) => {
      if (tName === pack) {
        total += 60;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $60`);
      }
    })
    //Check for 50$ supporter packs
    supporterPacks.packs50.forEach((pack) => {
      if (tName === pack) {
        total += 50;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $50`);
      }
    })
    //Check for 30$ supporter packs
    supporterPacks.packs30.forEach((pack) => {
      if (tName === pack) {
        total += 30;
        matchedPacks.push(tName)
        console.log(`${pack} matched with your purchase: ${tName} on line ${i + 1}. You paid $30`);
      }
    })

    //Check for Vault pass
    supporterPacks.vault_Pass.pass30.forEach((pass) => {
      if (tName === pass && pass === "Kirac's-Vault-Pass"){
        total += 30;
        matchedPacks.push(tName)
        console.log(`${pass} matched with your purchase: ${tName} on line ${i + 1}. You paid $30`);
      } 
    })
    //Check for special purchases: 
    supporterPacks.special.forEach((entry) => {
      if (tName === entry && entry === "Child's-Play-Angelic-Mask"){
        total += 5;
        matchedPacks.push(tName)
        console.log(`${entry} matched with your purchase: ${tName} on line ${i + 1}. You paid $5`);
      }
      else if (tName.includes(entry) && entry === "Comic"){
        total += 4;
        matchedPacks.push(tName)
        console.log(`${entry} matched with your purchase: ${tName} on line ${i + 1}. You paid $4`);
      } 
      else if (tName.includes(entry) && entry === "Early"){
        total += 10;
        matchedPacks.push(tName)
        console.log(`${entry} matched with your purchase: ${tName} on line ${i + 1}. You paid $10`);
      }
      else if (tName.includes(entry) && entry === "Koala"){
        total += 14;
        matchedPacks.push(tName)
        console.log(`${entry} matched with your purchase: ${tName} on line ${i + 1}. You paid $14`);
      }
      else if (tName.includes(entry) && entry === "firstBlood"){
        total += 20;
        matchedPacks.push(tName)
        console.log(`${entry} matched with your purchase: ${tName} on line ${i + 1}. You paid $20`);
      }
      else if (tName.includes(entry) && entry === "Brazil"){
        total += 40;
        matchedPacks.push(tName)
        console.log(`${entry} matched with your purchase: ${tName} on line ${i + 1}. You paid $40`);
      }
    })

    //Check for Point Packs:
    supporterPacks.points.forEach((pointPack) => {
      if (tName === pointPack && pointPack === "1065-Point"){
        total += 100;
        matchedPacks.push(tName)
        console.log(`${pointPack} matched with your purchase: ${tName} on line ${i + 1}. You paid $100`);
      } 
      else if (tName === pointPack && pointPack === "516-Point"){
        total += 50;
        matchedPacks.push(tName)
        console.log(`${pointPack} matched with your purchase: ${tName} on line ${i + 1}. You paid $50`);
      }
      else if (tName === pointPack && pointPack === "200-Point"){
        total += 20;
        matchedPacks.push(tName)
        console.log(`${pointPack} matched with your purchase: ${tName} on line ${i + 1}. You paid $20`);
      } 
      else if (tName === pointPack && pointPack === "100-Point"){
        total += 10;
        matchedPacks.push(tName)
        console.log(`${pointPack} matched with your purchase: ${tName} on line ${i + 1}. You paid $10`);
      }
      else if (tName === pointPack && pointPack === "50-Point"){
        total += 5;
        matchedPacks.push(tName)
        console.log(`${pointPack} matched with your purchase: ${tName} on line ${i + 1}. You paid $5`);
      }  
    })
  })
}
matchPacks();

//Check for missing items
Array.prototype.diff = function(a) {
  return this.filter(function(i) {return a.indexOf(i) < 0;});
};

//Print to screen amount spent and/or missing items
let missingPacks = purchasedPacks.diff(matchedPacks)

if (missingPacks !== "") {
  console.log(`Total spent: $${total}`);
  console.log(`these packs are missing a match: ${missingPacks}`);
  alert(`You spent a total of $${total} \n \n these packs are missing a match: ${missingPacks}`)
} else {
  console.log(`Total spent: $${total}`);
  console.log("All purchases matched with known available packs/points")
  alert(`You spent a total of $${total} \n \n All purchases matched with known available packs/points`)
}