<template>
  <form class="row g-3 mb-3"  @submit="checkOutForm">
    <h5>Billing details</h5>
    <div class="col-md-6">
      <label for="firstName" class="form-label">First Name</label>
      <input v-model="firstName" type="text" class="form-control" id="firstName" placeholder="First Name">
      <span v-if="!errors.isFirstNameValid"> First Name error</span>
    </div>
    <div class="col-md-6">
      <label for="lastName" class="form-label">Last Name</label>
      <input v-model="lastName" type="text" class="form-control" id="lastName" placeholder="Last Name">
      <span v-if="!errors.isLastNameValid"> Last Name error</span>
    </div>
    <div class="col-12">
      <label for="city" class="form-label">City</label>
      <input v-model="city" type="text" class="form-control" id="city" placeholder="City">
      <span v-if="!errors.isCityValid"> City error</span>
    </div>
    <div class="col-12">
      <label for="address" class="form-label">Address</label>
      <input v-model="address" type="text" class="form-control" id="address" placeholder="Address">
      <span v-if="!errors.isAddressValid"> Address error</span>
    </div>
    <div class="col-md-6">
      <label for="email" class="form-label">Email Address</label>
      <input v-model="email" type="email" class="form-control" id="email" placeholder="Email Address">
      <span v-if="!errors.isCityValid"> Email error</span>
    </div>
    <div class="col-md-6">
      <label for="phone" class="form-label">Phone</label>
      <input v-model="phone"  type="text" class="form-control" id="phone" placeholder="+38(099) 999-99-99">
    </div>
    <div class="col-12 d-flex justify-content-end">
      <button v-bind:disabled="formValid" type="submit" class="btn btn-success">
        Place Order
      </button>
    </div>
  </form>
</template>

<script>

export default {
  name: "CartBillingForm",
  data: () => ({
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    email: "",
    phone: "",
    errors:{},
    formValid: false
  }),
  methods: {
    checkOutForm(){
      console.log({
        firstName: this.firstName,
        lastName: this.lastName,
        city: this.city,
        address: this.address,
        email: this.email,
        phone: this.phone,
        products: this.$root.cartProducts,
        totalCount: this.$root.totalCount(),
        totalPrices: this.$root.totalPrices(),
      });
      this.firstName = "";
      this.lastName = "";
      this.city = "";
      this.address = "";
      this.email = "";
      this.phone = "";
      this.$root.cartProducts = [];
    }
  },
  watch: {
    firstName(newValue){
      this.errors.isfirstNameValid = newValue.length > 0 &&  newValue.length <= 10;
    },
    lastName(newValue){
      this.errors.isLastNameValid = newValue.length > 0 && newValue.length <= 10  ;
    },
    city(newValue){
      this.errors.isCityValid = newValue.length > 0 && newValue.length <= 10;
    },
    address(newValue){
      this.errors.isAddresValid = newValue.length > 0 && newValue.length <= 10;
    },
    email(newValue){
      this.errors.isEmailValid = newValue.length > 0 && newValue.length <= 10;
    },
    phone(newValue){
      this.errors.isPhoneValid = newValue.length > 0 && newValue.length <= 11;
    },
    errors(newValue){
      for(let val in newValue){
        if(!newValue[val]){
          this.formValid = false;
        }
      }
      this.formValid = true;
    }
  }
}
</script>

<style scoped>

</style>