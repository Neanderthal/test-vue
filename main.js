Vue.component('product',{
    props:{
        premium: {
           type: Boolean,
           required: false,
            default: false,
        }
    },
    template:`
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image"/>
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p>{{premium}}</p>
        <p v-if="inventory < 10">In stock</p>
        <p v-else-if="inventory > 10 && inventory > 70">In stock</p>
        <p v-else>Out of stock</p>
        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>
          <div v-for="variant in variants"
              :key="variant.variantId"
              class="color-box"
              v-bind:style="{ backgroundColor: variant.variantColor }"
              v-on:mouseover="updateProductView(variant.variantImage)">
          </div>


        <button v-on:click="addToCart()"
                v-bind:disabled="!inStock"
                v-bind:class="{disabledButton: !inStock}">Add to Cart</button>
        <div class="cart">
          <p>Cart({{cart}})</p>
        </div>
      </div>
    </div>
    `,
    data() {
        return {
            product: 'Socks',
            expression: "This is the best sock I ever seen",
            image: 'QEHahcpH.jpeg',
            inStock: true,
            details: ['Это просто носок', 'ОН тупо зеленый', 'Возможно чистый'],
            variants: [
                {
                    variantId: 1,
                    variantColor: 'blue',
                    variantImage: "download.jpeg"
                },
                {
                    variantId: 2,
                    variantColor: 'green',
                    variantImage: "QEHahcpH.jpeg"
                },
            ],
            cart: 0,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProductView(image) {
            this.image = image;
        }
    },
});

let app = new Vue({
    el: '#app',
    data: {
        premium: true
    }

});