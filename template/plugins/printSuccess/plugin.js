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
          `
          dddddddd                                                                                          
          WWWWWWWW                           WWWWWWWW               lllllll                                                     d::::::d     NNNNNNNN        NNNNNNNN                                    iiii                     
          W::::::W                           W::::::W               l:::::l                                                     d::::::d     N:::::::N       N::::::N                                   i::::i                    
          W::::::W                           W::::::W               l:::::l                                                     d::::::d     N::::::::N      N::::::N                                    iiii                     
          W::::::W                           W::::::W               l:::::l                                                     d:::::d      N:::::::::N     N::::::N                                                             
           W:::::W           WWWWW           W:::::Waaaaaaaaaaaaa    l::::l     eeeeeeeeeeee        eeeeeeeeeeee        ddddddddd:::::d      N::::::::::N    N::::::N  aaaaaaaaaaaaa      ssssssssss   iiiiiiirrrrr   rrrrrrrrr   
            W:::::W         W:::::W         W:::::W a::::::::::::a   l::::l   ee::::::::::::ee    ee::::::::::::ee    dd::::::::::::::d      N:::::::::::N   N::::::N  a::::::::::::a   ss::::::::::s  i:::::ir::::rrr:::::::::r  
             W:::::W       W:::::::W       W:::::W  aaaaaaaaa:::::a  l::::l  e::::::eeeee:::::ee e::::::eeeee:::::ee d::::::::::::::::d      N:::::::N::::N  N::::::N  aaaaaaaaa:::::ass:::::::::::::s  i::::ir:::::::::::::::::r 
              W:::::W     W:::::::::W     W:::::W            a::::a  l::::l e::::::e     e:::::ee::::::e     e:::::ed:::::::ddddd:::::d      N::::::N N::::N N::::::N           a::::as::::::ssss:::::s i::::irr::::::rrrrr::::::r
               W:::::W   W:::::W:::::W   W:::::W      aaaaaaa:::::a  l::::l e:::::::eeeee::::::ee:::::::eeeee::::::ed::::::d    d:::::d      N::::::N  N::::N:::::::N    aaaaaaa:::::a s:::::s  ssssss  i::::i r:::::r     r:::::r
                W:::::W W:::::W W:::::W W:::::W     aa::::::::::::a  l::::l e:::::::::::::::::e e:::::::::::::::::e d:::::d     d:::::d      N::::::N   N:::::::::::N  aa::::::::::::a   s::::::s       i::::i r:::::r     rrrrrrr
                 W:::::W:::::W   W:::::W:::::W     a::::aaaa::::::a  l::::l e::::::eeeeeeeeeee  e::::::eeeeeeeeeee  d:::::d     d:::::d      N::::::N    N::::::::::N a::::aaaa::::::a      s::::::s    i::::i r:::::r            
                  W:::::::::W     W:::::::::W     a::::a    a:::::a  l::::l e:::::::e           e:::::::e           d:::::d     d:::::d      N::::::N     N:::::::::Na::::a    a:::::assssss   s:::::s  i::::i r:::::r            
                   W:::::::W       W:::::::W      a::::a    a:::::a l::::::le::::::::e          e::::::::e          d::::::ddddd::::::dd     N::::::N      N::::::::Na::::a    a:::::as:::::ssss::::::si::::::ir:::::r            
                    W:::::W         W:::::W       a:::::aaaa::::::a l::::::l e::::::::eeeeeeee   e::::::::eeeeeeee   d:::::::::::::::::d     N::::::N       N:::::::Na:::::aaaa::::::as::::::::::::::s i::::::ir:::::r            
                     W:::W           W:::W         a::::::::::aa:::al::::::l  ee:::::::::::::e    ee:::::::::::::e    d:::::::::ddd::::d     N::::::N        N::::::N a::::::::::aa:::as:::::::::::ss  i::::::ir:::::r            
                      WWW             WWW           aaaaaaaaaa  aaaallllllll    eeeeeeeeeeeeee      eeeeeeeeeeeeee     ddddddddd   ddddd     NNNNNNNN         NNNNNNN  aaaaaaaaaa  aaaa sssssssssss    iiiiiiiirrrrrrr            
          `
        )}`,
      );

      resolve();
    });
  },
};
