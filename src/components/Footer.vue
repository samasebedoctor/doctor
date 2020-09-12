<template>
    <footer class="footer">
        <div class="container">
            <span v-html="settings.footer" />
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
    </footer>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
}
</style>
