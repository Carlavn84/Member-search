<template>
  <div class="footer">
    <div class="container">
      <p class="company">dummydata.com</p>

      <div class="info grid">
        <div class="contact">
          <p><a href="tel:+31823456789">+31 (0) 82 - 3456789</a></p>
          <p><a href="mailto:info@dummydata.com">info@dummydata.com</a></p>
        </div>

        <div class="address">
          <p>Dummydata, 2220 NE</p>
          <p>the AWS</p>
        </div>

        <div class="policies">
          <p><a href="https://en.wikipedia.org/wiki/Cookie#/media/File:2ChocolateChipCookies.jpg">Cookie policy</a></p>
          <p><a href="#">Privacy statements</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TheFooter',
};
</script>

<style lang="scss" scoped>
  .footer {
    min-height: 200px;
    background-color: $color-purple;
    font-size: 14pt;
  }

  .company {
    color: $color-white;
    font-weight: bold;
    font-size: 120%;
  }

  .info {
    margin-top: 20px;
  }

  .info p {
    margin-bottom: 8px;
  }

  .contact * {
    color: $color-pink;
    text-decoration: none;
  }

  .address * {
    color: $color-white;
  }

  .policies * {
    font-size: 80%;
    color: $color-white;
  }

  a:hover {
    color: $color-yellow;
  }
</style>
