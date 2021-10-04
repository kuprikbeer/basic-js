import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
    throw new NotImplementedError('Not implemented');
}
//   let arr = []
//   if (Array.isArray(members)) {
//     for (let i = 0; i < members.length; i++) {
//       if (typeof members[i] === 'string') {
//         let word = members[i].split('')
//         for (let j = 0; j < word.length; j++) {
//           if (word[j] ===)      }
//       }
//     }
//     return arr.sort().join('').toLocaleUpperCase()
//   }
//   return false
// }
