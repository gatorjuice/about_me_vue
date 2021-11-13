<template>
  <h3>Funny Bot</h3>
  <p>
    When complete, Funny Bot will be a Web Sockets experiment utilizing Trello
    API
  </p>
  <ul id="messages">
    <li
      v-for="message in this.$store.state.funnyBot.messages"
      :key="message.id"
    >
      {{ message.body }}
    </li>
  </ul>
  <form @submit.prevent="processForm">
    <div class="mb-3">
      <input
        v-model="form.message"
        type="text"
        class="form-control"
        id="inputPassword"
        aria-describedby="message"
        placeholder="Send message to Funny Bot"
      />
    </div>
    <button type="submit" class="btn btn-primary">Send</button>
  </form>
</template>

<script>
const CHANNEL = "FunnyBotChannel";

export default {
  name: "FunnyBot",
  data() {
    return {
      form: {
        message: "",
      },
      connection: null,
    };
  },
  mounted() {
    console.log("Attempting to wake Funny Bot");
    this.connection = new WebSocket(process.env.VUE_APP_ABOUT_ME_API_WS);
    this.connection.onmessage = (event) => {
      const msg = JSON.parse(event.data);

      if (msg.type === "ping") {
        return;
      }

      console.log("FROM RAILS: ", msg);

      if (msg.type === "welcome") {
        this.subscribe();
      } else if (msg.type === "confirm_subscription") {
        this.getMessages();
      } else {
        this.$store.dispatch("setMessages", msg.message.funnyBotMessages);
      }
    };
  },
  methods: {
    subscribe() {
      const msg = {
        command: "subscribe",
        identifier: JSON.stringify({ channel: CHANNEL }),
      };
      this.connection.send(JSON.stringify(msg));
    },
    getMessages() {
      const msg = {
        command: "message",
        identifier: JSON.stringify({ channel: CHANNEL }),
        data: JSON.stringify({ action: "all_messages" }),
      };
      this.connection.send(JSON.stringify(msg));
    },
    processForm() {
      const msg = {
        command: "message",
        identifier: JSON.stringify({ channel: CHANNEL }),
        data: JSON.stringify({
          action: "post_message",
          message: this.form.message,
        }),
      };
      this.connection.send(JSON.stringify(msg));
      this.form.message = "";
    },
  },
};
</script>

<style></style>
