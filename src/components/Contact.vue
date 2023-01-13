<template>
    <section class="contact">
      <h1 class="title">Contact Me</h1>

      <div class="container">
        <div class="contact-form row">
          <div class="form-field col-lg-6">
            <input id="name" class="input-text" type="text" name="" />
            <label for="name" class="label">Name</label>
          </div>
          <div class="form-field col-lg-6">
            <input id="email" class="input-text" type="text" name="" />
            <label for="email" class="label">email</label>
          </div>
          <div class="form-field col-lg-6">
            <input
              id="Company name"
              class="input-text"
              type="text"
              name=""
            />
            <label for="Company name" class="label"> Company Name</label>
          </div>
          <div class="form-field col-lg-6">
            <input id="phone" class="input-text" type="text" name="" />
            <label for="phone" class="label">contact number</label>
          </div>
          <div class="form-field col-lg-12">
            <input id="message" class="input-text" type="text" name="" />
            <label for="message" class="label">message</label>
          </div>
          <div>
            <div class="form-field col-lg-12">
              <button class="submit-btn"
                type="submit"
                value="submit"
                name="">
              Submit</button>
            </div>
          </div>

              <div id="contact">
        <div class="container">
          <div class="row">
            <div class="contact-left">
              <p><i class="fas fa-paper-plane"></i> zoedaniels094@gmail.com</p>
              <p><i class="fas fa-phone-square-alt"></i> 084 755 3693</p>
              <div class="social icons"></div>
              </div>
              </div>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  
</template>

<script>
export default {
  
}
</script>

<style  scoped>

form input{
display: flex;
flex-direction: row;

}

    .contact{
      max-width: 800px;
      margin: 50px auto;
      position: relative;
      box-shadow: 0 10px 30px 0px rgba(247, 3, 68, 0.1);
      padding: 30px;
      border: solid;
      border-color: black;
    } 
    .contact-form .form-field{
      position: relative;
      margin: 32px 0;
    }

    .contact-form .input-text{
      display: block;
      width: 100%;
      height: 36px;
      border-width: 0 0 2px 0;
      border-color: violet;
      font-size: 18px;
      line-height: 26px;
      font-weight: 400;
      border-radius: 1cm;
      border: solid;

    }
    .contact-form .input-text:focus{
      outline: none;
    }
   
    .contact-form .submit-btn{
      display: inline-block;
      background-image: linear-gradient(125deg, violet,#970645);
      color: rgb(0, 0, 0);
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 16px;
      padding: 8px 16px;
      border: none;
      width: 200px;
      cursor: pointer;
      border: solid;
      border-color: black;
      border-radius: 1cm;
    }
    .contact-left{
        color: black;
    }
</style>
