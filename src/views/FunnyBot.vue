<template>
  <h3>Funny Bot</h3>
  <p>Communicate with a super computer that is funny.</p>
  <div class="row clearfix">
    <div class="col-lg-12">
      <div class="card chat-app">
        <div class="chat">
          <div class="chat-header clearfix">
            <div class="row">
              <div class="col-lg-6">
                <a
                  href="javascript:void(0);"
                  data-toggle="modal"
                  data-target="#view_info"
                >
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt="avatar"
                  />
                </a>
                <div class="chat-about">
                  <h6 class="m-b-0">Funny Bot</h6>
                  <small>Fragile AI be patient</small>
                </div>
              </div>
            </div>
          </div>
          <div class="chat-history">
            <ul class="m-b-0">
              <li
                class="clearfix"
                v-for="message in messages"
                :key="message.id"
              >
                <div class="message-data text-right">
                  <span class="message-data-time">{{
                    new Date(message.created_at).toLocaleString("en-US")
                  }}</span>
                </div>
                <div
                  :class="[
                    'message',
                    message.created_by_funny_bot
                      ? 'funny-bot-message'
                      : 'my-message float-right',
                  ]"
                >
                  {{ message.body }}
                </div>
              </li>
            </ul>
          </div>
          <form @submit.prevent="processForm">
            <div class="chat-message clearfix">
              <div class="input-group mb-0">
                <div class="input-group-prepend">
                  <SubmitButton
                    fixed-text="Send"
                    :bootstrap-classes="['btn', 'btn-primary']"
                  />
                </div>
                <input
                  v-model="form.message"
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  aria-describedby="message"
                  :placeholder="
                    isLastMessageFromFunnyBot
                      ? 'Send message to Funny Bot'
                      : 'Funny Bot is thinking'
                  "
                  :disabled="!isLastMessageFromFunnyBot"
                />
              </div>
            </div>
            <div class="mb-3"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitButton from "@/components/SubmitButton";
const CHANNEL = "FunnyBotChannel";

export default {
  name: "FunnyBot",
  components: {
    SubmitButton,
  },
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
  computed: {
    messages() {
      return this.$store.state.funnyBot.messages;
    },
    isLastMessageFromFunnyBot() {
      return this.messages[this.messages.length - 1].created_by_funny_bot;
    },
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
      if (this.form.message) {
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
      }
    },
  },
};
</script>

<style scoped>
.card {
  background: #fff;
  transition: 0.5s;
  border: 0;
  margin-bottom: 30px;
  border-radius: 0.55rem;
  position: relative;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
}
.chat-app .people-list {
  width: 280px;
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px;
  z-index: 7;
}

.chat-app .chat {
  margin-left: 0px;
  border-left: 1px solid #eaeaea;
}

.people-list {
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.people-list .chat-list li {
  padding: 10px 15px;
  list-style: none;
  border-radius: 3px;
}

.people-list .chat-list li:hover {
  background: #efefef;
  cursor: pointer;
}

.people-list .chat-list li.active {
  background: #efefef;
}

.people-list .chat-list li .name {
  font-size: 15px;
}

.people-list .chat-list img {
  width: 45px;
  border-radius: 50%;
}

.people-list img {
  float: left;
  border-radius: 50%;
}

.people-list .about {
  float: left;
  padding-left: 8px;
}

.people-list .status {
  color: #999;
  font-size: 13px;
}

.chat .chat-header {
  padding: 15px 20px;
  border-bottom: 2px solid #f4f7f6;
}

.chat .chat-header img {
  float: left;
  border-radius: 40px;
  width: 40px;
}

.chat .chat-header .chat-about {
  float: left;
  padding-left: 10px;
}

.chat .chat-history {
  padding: 20px;
  border-bottom: 2px solid #fff;
}

.chat .chat-history ul {
  padding: 0;
}

.chat .chat-history ul li {
  list-style: none;
  margin-bottom: 30px;
}

.chat .chat-history ul li:last-child {
  margin-bottom: 0px;
}

.chat .chat-history .message-data {
  margin-bottom: 15px;
}

.chat .chat-history .message-data img {
  border-radius: 40px;
  width: 40px;
}

.chat .chat-history .message-data-time {
  color: #434651;
  padding-left: 6px;
}

.chat .chat-history .message {
  color: #444;
  padding: 18px 20px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  display: inline-block;
  position: relative;
}

.chat .chat-history .message:after {
  bottom: 100%;
  left: 7%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #fff;
  border-width: 10px;
  margin-left: -10px;
}

.chat .chat-history .funny-bot-message {
  background: #efefef;
}

.chat .chat-history .funny-bot-message:after {
  bottom: 100%;
  left: 30px;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #efefef;
  border-width: 10px;
  margin-left: -10px;
}

.chat .chat-history .my-message {
  background: #e8f1f3;
  text-align: right;
}

.chat .chat-history .my-message:after {
  border-bottom-color: #e8f1f3;
  left: 93%;
}

.chat .chat-message {
  padding: 20px;
}

.online,
.offline,
.me {
  margin-right: 2px;
  font-size: 8px;
  vertical-align: middle;
}

.online {
  color: #86c541;
}

.offline {
  color: #e47297;
}

.me {
  color: #1d8ecd;
}

.float-right {
  float: right;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

@media only screen and (max-width: 767px) {
  .chat-app .people-list {
    height: 465px;
    width: 100%;
    overflow-x: auto;
    background: #fff;
    left: -400px;
    display: none;
  }
  .chat-app .people-list.open {
    left: 0;
  }
  .chat-app .chat {
    margin: 0;
  }
  .chat-app .chat .chat-header {
    border-radius: 0.55rem 0.55rem 0 0;
  }
  .chat-app .chat-history {
    height: 300px;
    overflow-x: auto;
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  .chat-app .chat-list {
    height: 650px;
    overflow-x: auto;
  }
  .chat-app .chat-history {
    height: 600px;
    overflow-x: auto;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
  .chat-app .chat-list {
    height: 480px;
    overflow-x: auto;
  }
  .chat-app .chat-history {
    height: calc(100vh - 350px);
    overflow-x: auto;
  }
}
</style>
