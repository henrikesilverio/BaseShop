<template>
  <v-toolbar color="primary" max-height="64" dark>
    <v-col cols="6">
      <v-select v-model="brand" class="mt-7" label="Marcas" :items="brands" dense outlined multiple>
        <template v-slot:selection="{ item, index }">
          <v-chip small v-if="index <= 1">
            <span>{{ item }}</span>
          </v-chip>
          <span v-if="index === 2" class="grey--text caption">(+{{ brand.length - 2 }} outros)</span>
        </template>
      </v-select>
    </v-col>
    <v-col cols="6">
      <v-select
        v-model="category"
        class="mt-7"
        label="Categorias"
        :items="categories"
        dense
        outlined
        multiple
      >
        <template v-slot:selection="{ item, index }">
          <v-chip small v-if="index === 0">
            <span>{{ item }}</span>
          </v-chip>
          <span v-if="index === 2" class="grey--text caption">(+{{ category.length - 1 }} outros)</span>
        </template>
      </v-select>
    </v-col>
  </v-toolbar>
</template>

<script>
export default {
  name: "ProductFilter",

  data: () => ({
    brand: "",
    category: "",
    brands: ["Adidas", "Dell", "Ryzem", "Sansung", "LG"],
    categories: ["Tenis", "Computadores", "Informatica", "TVs", "Monitores"]
  }),

  watch: {
    multiple(val) {
      if (val) this.model = [this.model];
      else this.model = this.model[0] || "Foo";
    }
  }
};
</script>