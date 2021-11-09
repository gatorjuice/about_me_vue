const textHelper = {
  methods: {
    capitalizeWord(word) {
      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    },
  },
};

export default textHelper;
