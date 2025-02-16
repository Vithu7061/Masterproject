<template>

  <v-row style="position: fixed; background-color: #ffffff; z-index: 999;">
    <header>
      <h1>Sociebite</h1>
      <nav>
        <a href="#">Login</a>
        <a>|</a>
        <a href="#">List Products</a>
      </nav>
    </header>


    <div class="search-bars">
      <div class="search-bar">
        <input type="text" placeholder="Product, Keyword or Company">
        <span>|</span>
        <input type="text" placeholder="City, Postal code">
        <span>|</span>
        <input type="text" placeholder="Distance">
        <v-btn>Search</v-btn>
      </div>
    </div>
  </v-row>

  <v-row class="contentrow">
    <v-col class="productlist" width=30vW>
      <v-card @Click="" class="job-card">
        <h3>Productname</h3>
        <p><strong>Company/User</strong></p>
        <p>Postalcode Location</p>
        <p><strong>Price in €</strong></p>
        <button>Buy</button>
      </v-card>

      <v-card class="job-card">
        <h3>Productname</h3>
        <p><strong>Company/User</strong></p>
        <p>Postalcode Location</p>
        <p><strong>Price in €</strong></p>
        <button>Buy</button>
      </v-card>

      <v-card class="job-card">
        <h3>Productname</h3>
        <p><strong>Company/User</strong></p>
        <p>Postalcode Location</p>
        <p><strong>Price in €</strong></p>
        <button>Buy</button>
      </v-card>

      <v-card class="job-card">
        <h3>Productname</h3>
        <p><strong>Company/User</strong></p>
        <p>Postalcode Location</p>
        <p><strong>Price in €</strong></p>
        <button>Buy</button>
      </v-card>

      <v-card class="job-card">
        <h3>Productname</h3>
        <p><strong>Company/User</strong></p>
        <p>Postalcode Location</p>
        <p><strong>Price in €</strong></p>
        <button>Buy</button>
      </v-card>

    </v-col>
    <v-col class="product" width=30vW>
      <div class="job-card-detail" overflow-y-auto>
          <h3>Sushi Abends</h3>
          <p><strong>Noori Sushi</strong></p>
          <p>45141 Essen</p>
        <div class="scroll">
        <p>In deiner Gemüse-Box findest du eine bunte Mischung aus vielen verschiedenen Sorten
          an Bio-Gemüse, zum Kochen oder roh verzehren. Egal ob krumm, schief oder zu klein. Ob zweibeinige Karotten
          oder krumme Gurken – in deine Box kommt jedes Gemüse!
          <br /><br />
          Deine Gemüse-Box Classic enthält die ideale Wochenration an frischem Bio-Gemüse für ein bis zwei Personen für
          den Verzehr Zuhause oder zum Mitnehmen. Ausreichend für deine Gemüsepfannen, für Grill- oder Wokgerichte oder
          für den täglichen To Go Lunch. Mit angepassten Portionsgrößen und Stückmengen, die du für eine Woche wirklich
          brauchst.
          <br /><br />
          Die Gemüse-Box ist ideal für alle Veggie Lovers, Feinschmecker:innen und Gemüse-Fans. Gemüse essen und Gutes
          tun!
          <br /><br />
          Du bist noch unentschlossen, welche Box zu dir passt? Wir sind uns sicher, dass dir unser Boxen Finder dabei
          helfen wird, die für dich passende etepetete Bio-Box zu finden.
        </p>
      </div>
    </div>
    </v-col>
  </v-row>
  <v-row>
    <footer>
      <p>&copy; Impressum und so</p>
    </footer>
  </v-row>


</template>

<script>

</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

header {
  color: #28a745;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vW;
  border-bottom: 1px solid #28a745;
}

header h1 {
  margin: 0;
}

header nav a {
  color: #28a745;
  text-decoration: none;
  margin-left: 1rem;
  font-weight: bold;
}

.search-bars {
  border-color: #000000;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1vH;
  border-radius: 15px;
  width: 75vW;
  border: 1px solid #ccc;
}

.search-bar {
  margin: 0.5rem auto;
  text-align: center;
}

.search-bar input[type="text"] {
  padding: 0.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  border: none;
  width: 20vW;
}

.productlist {
  flex-direction: column;
  display: flex;
  align-items: end;
  width: 40vw;
}

.product {
  flex-direction: column;
  display: flex;
  align-items: start;
  width: 40vw;
}


.v-btn {
  background-color: #28a745;
  color: #ffffff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

.scroll{
  background: white;
  width: 38vw;
  height: 30vh;
  overflow: auto;
}

.job-card-detail {
  position: fixed;
  background: white;
  border: 1px solid #ddd;
  margin-bottom: 1vh;
  border-radius: 8px;
  width: 40vw;
  height: 50vh;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.job-card {
  background: white;
  border: 1px solid #ddd;
  margin-bottom: 1vh;
  border-radius: 8px;
  width: 40vw;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.job-card h3 {
  margin-top: 0;
  color: #28a745;
}

.job-card-detail h3 {
  margin-top: 0;
  color: #28a745;
}

.job-card p {
  margin: 0.5rem 0;
  color: #555;
}

.job-card-detail p {
  margin: 0.5rem 0;
  color: #555;
}

.job-card button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.job-card-detail button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  width: 100vW;
  padding: 1rem 0;
  margin-top: 2rem;
}

.v-row.contentrow {
  margin-top: 20vh;
}

@media (max-width: 1010px) {
  .v-row.contentrow {
    margin-top: 25vh;
  }
}

@media (max-width: 990px) {
  .scroll {
    width: 36vw;
  }
}
</style>
