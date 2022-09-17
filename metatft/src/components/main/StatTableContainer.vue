<template>
  <div class="test">
    <div class="test2">
      <div class="test2-1">
        Select View:
        <div class="test2-1-1">
          <div class="test2-1-2">Table</div>
          <div class="test2-1-3">Graph</div>
        </div>
      </div>
      <div class="test2-2">
        <div class="test2-2-1">Item Filters:</div>
        <div class="test2-2-2">+</div>
      </div>
      <div class="test2-3">Select an Item for more details</div>
    </div>
    <div class="test3">
      <table>
        <thead>
          <th><div class="table_item">Item</div></th>
          <th><div class="table_tier">Tier</div></th>
          <th><div class="table_avg">Avg Place</div></th>
          <th><div class="table_winrate">Winrate</div></th>
          <th><div class="table_frequency">Frequency</div></th>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item">
            <td>
              <div class="table_item">
                <img @click="showModal" :src="item.src" alt="itemImg" />
                <div @click="showModal" class="itemName">{{ item.name }}</div>
              </div>
            </td>
            <td><div class="table_tier">S</div></td>
            <td><div class="table_avg">3.53</div></td>
            <td><div class="table_winrate">22.9%</div></td>
            <td><div class="table_frequency">24,258 (2.5%)</div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
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
      ],
    };
  },
  methods: {
    showModal() {
      console.log('showModal()');
    },
  },
};
</script>

<style scoped>
.test {
  display: flex;
  background-color: skyblue;
  max-width: 1140px;
}
.test2 {
  display: flex;
  background-color: cadetblue;
  min-height: 100px;
  padding: 10px;
  margin: 0px 5px 0px 0px;
  flex-direction: column;
  text-align: left;
  font-size: 13px;
}
.test2-1,
.test2-2,
.test2-3 {
  width: 180px;
}
.test2-1 {
  margin: 0px 0px 10px 0px;
  height: 44.5;
}
.test2-1-1 {
  display: flex;
  padding-top: 5px;
}
.test2-1-2,
.test2-1-3 {
  border: 1px solid black;
  margin: 2px 5px 2px 2px;
  min-width: 55px;
  background-color: rgb(30, 84, 86);
  border-radius: 8px;
  text-align: center;
  padding: 6px 4px;
}
.test2-2 {
  display: flex;
  height: 28px;
  align-items: center;
  font-weight: 400;
}
.test2-2-2 {
  margin: 2px 0px 2px 5px;
  width: 24px;
  height: 24px;
  font-size: 16px;
  text-align: center;
  /* make center way 2
    display: flex;
    justify-content: center;*/
}
.test2-3 {
  display: flex;
  height: 42px;
  text-align: center;
  font-size: 14px;
}
.test3 {
  background-color: darkcyan;
  margin: 0px 0px 1rem 0px;
  width: 100%;
  font-size: 13px;
}
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
th .table_item {
  min-width: 170px;
  max-width: 170px;
  text-align: left;
}
.table_tier {
  display: flex;
}
.table_avg {
}
.table_winrate {
}
.table_frequency {
  text-align: right;
}
td .table_item {
  display: flex;
  align-items: center;
}
td .table_item img {
  margin: 0px 5px 0px 0px;
  width: 32px;
  height: 32px;
}
td .table_tier {
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
td .table_avg {
  font-size: 16px;
  color: rgb(205, 246, 127);
}
td .table_winrate {
  font-size: 14px;
}
td .table_frequency {
  text-align: right;
  font-size: 14px;
}
td .table_item:hover {
  cursor: pointer;
}
</style>
