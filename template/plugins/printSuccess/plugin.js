const { green, blue, yellow, red } = require('kleur');

module.exports = {
  async apply(value, previousValues) {
    return new Promise(resolve => {
      console.log('\n');
      // console.log(
      //   ' React-Native initialized with success ! 🚀\n',
      // );
      console.log(
        `${green(
          " _    _         _                  _   _   _              _        \n" +
          " | |  | |       | |                | | | \ | |            (_)       \n" +
          " | |  | |  __ _ | |  ___   ___   __| | |  \| |  __ _  ___  _  _ __  \n" +
          " | |/\| | / _` || | / _ \ / _ \ / _` | | . ` | / _` |/ __|| || '__| \n" +
          " \  /\  /| (_| || ||  __/|  __/| (_| | | |\  || (_| |\__ \| || |    \n" +
          "  \/  \/  \__,_||_| \___| \___| \__,_| \_| \_/ \__,_||___/|_||_|    \n",
        )}`,
      );


      resolve();
    });
  },
};
