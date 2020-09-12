<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <Header />
    <slot/>
    <Footer />
  </div>
  <!-- GetButton.io widget -->
<script type="text/javascript">
    (function () {
        var options = {
            whatsapp: "+79620136777", // WhatsApp number
            telegram: "sama_sebe_doctor", // Telegram bot username
            call_to_action: "Уже интересно? Спрашивайте :)", // Call to action
            button_color: "#A8CE50", // Color of button
            position: "right", // Position may be 'right' or 'left'
            order: "whatsapp,telegram", // Order of buttons
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
</script>
<!-- /GetButton.io widget -->
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  --color-base: rgb(255, 255, 255);
  --color-base-1: rgb(243, 243, 243);
  --color-contrast: rgb(0, 0, 0);
  --color-contrast-1: rgb(43, 43, 43);
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding: 0;
  font-size: 16px;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}

body.dark {
  --color-base: rgb(0, 0, 0);
  --color-base-1: rgb(43, 43, 43);
  --color-contrast: rgb(255, 255, 255);
  --color-contrast-1: rgb(243, 243, 243);
}

h1 {
  letter-spacing: -0.01em;
}

.layout {
  padding: 0;
}

.layout.sticky-header {
  padding: 6rem 0 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

a {
  color: inherit;
}

img {
  max-width: 100%;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>
