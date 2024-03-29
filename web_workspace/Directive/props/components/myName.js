// Myname.js => MyNameComponent

let ChildComponent = {
  template: `
    <div>
       <p> 내 이름은 {{ myname }} 입니다 </p>
       <p> 변경될 이름 </p>
       <input type="text" v-model.lazy="updateName" @keyup.enter="updateMyName()">
    </div>
    `,
  props: ["myname"],
  data() {
    return {
      updateName: "",
    };
  },
  methods: {
    updateName() {
      this.$emit("update-name", this.updateName);
    },
  },
};

// Parent
export default {
  template: `
    <div>
        <ChildComponent v-bind:myname="first" v-on:update-name="getName"/>
        <ChildComponent v-bind:myname="second"/>
    </div>
    `,
  data() {
    return {
      first: "Hong",
      second: "Kang",
    };
  },
  components: {
    ChildComponent,
  },
  methods: {
    getName(data, msg) {
        
    },
  },
};
