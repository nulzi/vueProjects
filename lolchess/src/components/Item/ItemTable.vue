<template>
  <div class="table-container">
    <table>
      <thead>
        <th><div class="table-item">Item</div></th>
        <th><div class="table-tier">Tier</div></th>
        <th><div class="table-avg">Avg Place</div></th>
        <th><div class="table-winrate">Winrate</div></th>
        <th><div class="table-frequency">Frequency</div></th>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td>
            <div class="table-item">
              <div class="help-tip">
                <a>
                  <img
                    :src="item.src"
                    alt="itemImg"
                    width="28"
                    height="28"
                    @click="this.$emit('open', 0)"
                  />
                </a>
                <div class="tip-container">
                  <div class="tip-name-container">
                    <p class="tip-name">{{ item.name }}</p>
                  </div>
                  <p class="tip-detail">
                    <br />
                    <strong> +200ap +200hp </strong>
                    <img
                      :src="this.GetItem(1)"
                      alt="recipeitem1"
                      width="15"
                      height="15"
                    />
                    +
                    <img
                      :src="this.GetItem(7)"
                      alt="recipeitem2"
                      width="15"
                      height="15"
                    />
                  </p>
                </div>
              </div>
              <div class="itemName">
                <a>{{ item.name }}</a>
              </div>
            </div>
          </td>
          <td><div class="table-tier">S</div></td>
          <td><div class="table-avg">3.53</div></td>
          <td><div class="table-winrate">22.9%</div></td>
          <td><div class="table-frequency">24,258 (2.5%)</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import alldata from '../../assets/data.json';

export default {
  data() {
    return {
      items: [
        {
          name: "Zeke's Herald",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/17.png',
          about:
            'Combat start: Grant 30% Attack Speed to the holder and allies within 1 hex in the same row.​​[Aura item]',
        },
        {
          name: "Protector's Vow",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/45.png',
          about:
            'Grant 15 bonus starting Mana. Once per combat: At 50% Health, allies within 3 hexes gain a 20% maximum Health shield that lasts up to 2 seconds. Shielded allies gain 15 Armor and 15 Magic Resist for the rest of combat.​​[Aura item]',
        },
        {
          name: 'Shroud of Stillness',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/59.png',
          about:
            'Combat start: Shoot a beam that increases the maximum Mana of affected enemies by 35% until they cast.[Unique - only 1 per champion]',
        },
        {
          name: 'Sunfire Cape',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/57.png',
          about:
            'Grant 150 bonus Health. Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum Health as true damage over 10 seconds, and reducing healing by 50% for the duration.[Unique - only 1 per champion]',
        },
        {
          name: 'Hand Of Justice',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/49.png',
          about:
            'Grant 2 effects: +15 Attack Damage and +15 Ability Power.15% Omnivamp.Each round, randomly double 1 of these effects.',
        },
        {
          name: 'Bloodthirster',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/16.png',
          about:
            'Grant 25% Omnivamp.Once per combat: At 40% Health, gain a 25% maximum Health shield that lasts up to 5 seconds.',
        },
        {
          name: "Zeke's Herald",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/17.png',
          about:
            'Combat start: Grant 30% Attack Speed to the holder and allies within 1 hex in the same row.​​[Aura item]',
        },
        {
          name: "Protector's Vow",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/45.png',
          about:
            'Grant 15 bonus starting Mana. Once per combat: At 50% Health, allies within 3 hexes gain a 20% maximum Health shield that lasts up to 2 seconds. Shielded allies gain 15 Armor and 15 Magic Resist for the rest of combat.​​[Aura item]',
        },
        {
          name: 'Shroud of Stillness',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/59.png',
          about:
            'Combat start: Shoot a beam that increases the maximum Mana of affected enemies by 35% until they cast.[Unique - only 1 per champion]',
        },
        {
          name: 'Sunfire Cape',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/57.png',
          about:
            'Grant 150 bonus Health. Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum Health as true damage over 10 seconds, and reducing healing by 50% for the duration.[Unique - only 1 per champion]',
        },
        {
          name: 'Hand Of Justice',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/49.png',
          about:
            'Grant 2 effects: +15 Attack Damage and +15 Ability Power.15% Omnivamp.Each round, randomly double 1 of these effects.',
        },
        {
          name: 'Bloodthirster',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/16.png',
          about:
            'Grant 25% Omnivamp.Once per combat: At 40% Health, gain a 25% maximum Health shield that lasts up to 5 seconds.',
        },
        {
          name: "Zeke's Herald",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/17.png',
          about:
            'Combat start: Grant 30% Attack Speed to the holder and allies within 1 hex in the same row.​​[Aura item]',
        },
        {
          name: "Protector's Vow",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/45.png',
          about:
            'Grant 15 bonus starting Mana. Once per combat: At 50% Health, allies within 3 hexes gain a 20% maximum Health shield that lasts up to 2 seconds. Shielded allies gain 15 Armor and 15 Magic Resist for the rest of combat.​​[Aura item]',
        },
        {
          name: 'Shroud of Stillness',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/59.png',
          about:
            'Combat start: Shoot a beam that increases the maximum Mana of affected enemies by 35% until they cast.[Unique - only 1 per champion]',
        },
        {
          name: 'Sunfire Cape',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/57.png',
          about:
            'Grant 150 bonus Health. Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum Health as true damage over 10 seconds, and reducing healing by 50% for the duration.[Unique - only 1 per champion]',
        },
        {
          name: 'Hand Of Justice',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/49.png',
          about:
            'Grant 2 effects: +15 Attack Damage and +15 Ability Power.15% Omnivamp.Each round, randomly double 1 of these effects.',
        },
        {
          name: 'Bloodthirster',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/16.png',
          about:
            'Grant 25% Omnivamp.Once per combat: At 40% Health, gain a 25% maximum Health shield that lasts up to 5 seconds.',
        },
        {
          name: "Zeke's Herald",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/17.png',
          about:
            'Combat start: Grant 30% Attack Speed to the holder and allies within 1 hex in the same row.​​[Aura item]',
        },
        {
          name: "Protector's Vow",
          src: 'https://cdn.metatft.com/file/metatft/set7/items/45.png',
          about:
            'Grant 15 bonus starting Mana. Once per combat: At 50% Health, allies within 3 hexes gain a 20% maximum Health shield that lasts up to 2 seconds. Shielded allies gain 15 Armor and 15 Magic Resist for the rest of combat.​​[Aura item]',
        },
        {
          name: 'Shroud of Stillness',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/59.png',
          about:
            'Combat start: Shoot a beam that increases the maximum Mana of affected enemies by 35% until they cast.[Unique - only 1 per champion]',
        },
        {
          name: 'Sunfire Cape',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/57.png',
          about:
            'Grant 150 bonus Health. Every 2 seconds, an enemy within 2 hexes is burned for 10% of their maximum Health as true damage over 10 seconds, and reducing healing by 50% for the duration.[Unique - only 1 per champion]',
        },
        {
          name: 'Hand Of Justice',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/49.png',
          about:
            'Grant 2 effects: +15 Attack Damage and +15 Ability Power.15% Omnivamp.Each round, randomly double 1 of these effects.',
        },
        {
          name: 'Bloodthirster',
          src: 'https://cdn.metatft.com/file/metatft/set7/items/16.png',
          about:
            'Grant 25% Omnivamp.Once per combat: At 40% Health, gain a 25% maximum Health shield that lasts up to 5 seconds.',
        },
      ],
    };
  },
  methods: {
    showDetail() {
      this.modalOpen = 1;
    },
    GetItem(item) {
      // console.log(item);
      for (let j in alldata.items) {
        if (item == alldata.items[j].id) {
          return `https://raw.communitydragon.org/latest/game/${alldata.items[
            j
          ].icon
            .toLowerCase()
            .slice(0, -4)}.png`;
        }
      }
    },
  },
};
</script>

<style scoped>
table {
  border-spacing: 0;
  width: 100%;
}
th,
td {
  padding: 0.4rem 0.6rem;
  border-bottom: 1px solid #313236;
  border-left: 0;
  border-right: 0;
  margin: 0;
}
.table-container {
  overflow: auto;
  height: 590px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.table-container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
th .table-item {
  min-width: 170px;
  max-width: 170px;
  text-align: left;
}
.table-tier {
  display: flex;
}
.table-frequency {
  text-align: right;
}
td .table-item {
  display: flex;
  align-items: center;
}
td .table-item img {
  margin: 0px 5px 0px 0px;
  width: 32px;
  height: 32px;
}
td .table-tier {
  background-color: #ff7e83;
  color: #111;
  font-weight: 600;
  font-size: 18px;
  width: 28px;
  height: 28px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
}
td .table-avg {
  font-size: 16px;
  color: rgb(15, 67, 73);
}
td .table-winrate {
  font-size: 14px;
}
td .table-frequency {
  text-align: right;
  font-size: 14px;
}
.tip-container {
  position: relative;
  top: -70px;
  left: 40px;
}
.tip-name-container {
  position: relative;
  top: -3px;
  left: 5px;
}
.help-tip {
  font-size: 14px;
  line-height: 26px;
}
.help-tip:hover .tip-detail,
.help-tip:hover .tip-name {
  display: block;
  transform-origin: 100% 0%;
  -webkit-animation: fadeIn 0.3s ease-in-out;
  animation: fadeIn 0.3s ease-in-out;
}
.tip-detail,
.tip-name {
  display: none;
  text-align: left;
  background-color: #1e2021;
  padding: 10px;
  /* detail window width */
  width: 150px;
  position: absolute;
  z-index: 1;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 13px;
  line-height: 1;
}
.tip-detail img {
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  border-radius: 50%;
}
.help-tip strong {
  color: rgb(31, 132, 144);
}
.tip-name {
  font-size: 8px;
  width: auto;
  white-space: nowrap;
  position: absolute;
  z-index: 2;
  padding: 5px;
}
</style>
